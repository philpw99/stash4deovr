package manager

import (
	"context"
	"errors"
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/stashapp/stash/internal/desktop"
	"github.com/stashapp/stash/internal/dlna"
	"github.com/stashapp/stash/internal/log"
	"github.com/stashapp/stash/internal/manager/config"
	"github.com/stashapp/stash/pkg/ffmpeg"
	"github.com/stashapp/stash/pkg/fsutil"
	"github.com/stashapp/stash/pkg/gallery"
	"github.com/stashapp/stash/pkg/image"
	"github.com/stashapp/stash/pkg/job"
	"github.com/stashapp/stash/pkg/logger"
	"github.com/stashapp/stash/pkg/models/paths"
	"github.com/stashapp/stash/pkg/pkg"
	"github.com/stashapp/stash/pkg/plugin"
	"github.com/stashapp/stash/pkg/scene"
	"github.com/stashapp/stash/pkg/scraper"
	"github.com/stashapp/stash/pkg/session"
	"github.com/stashapp/stash/pkg/sqlite"
	"github.com/stashapp/stash/pkg/utils"
	"github.com/stashapp/stash/ui"
)

// Called at startup
func Initialize(cfg *config.Config, l *log.Logger) (*Manager, error) {
	ctx := context.TODO()

	db := sqlite.NewDatabase()
	repo := db.Repository()

	// start with empty paths
	mgrPaths := &paths.Paths{}

	scraperRepository := scraper.NewRepository(repo)
	scraperCache := scraper.NewCache(cfg, scraperRepository)

	pluginCache := plugin.NewCache(cfg)

	sceneService := &scene.Service{
		File:             db.File,
		Repository:       db.Scene,
		MarkerRepository: db.SceneMarker,
		PluginCache:      pluginCache,
		Paths:            mgrPaths,
		Config:           cfg,
	}

	imageService := &image.Service{
		File:       db.File,
		Repository: db.Image,
	}

	galleryService := &gallery.Service{
		Repository:   db.Gallery,
		ImageFinder:  db.Image,
		ImageService: imageService,
		File:         db.File,
		Folder:       db.Folder,
	}

	sceneServer := &SceneServer{
		TxnManager:       repo.TxnManager,
		SceneCoverGetter: repo.Scene,
	}

	dlnaRepository := dlna.NewRepository(repo)
	dlnaService := dlna.NewService(dlnaRepository, cfg, sceneServer)

	mgr := &Manager{
		Config: cfg,
		Logger: l,

		Paths: mgrPaths,

		JobManager:      initJobManager(cfg),
		ReadLockManager: fsutil.NewReadLockManager(),

		DownloadStore: NewDownloadStore(),

		PluginCache:  pluginCache,
		ScraperCache: scraperCache,

		DLNAService: dlnaService,

		Database:   db,
		Repository: repo,

		SceneService:   sceneService,
		ImageService:   imageService,
		GalleryService: galleryService,

		scanSubs: &subscriptionManager{},
	}

	mgr.RefreshPluginSourceManager()
	mgr.RefreshScraperSourceManager()

	if !cfg.IsNewSystem() {
		logger.Infof("using config file: %s", cfg.GetConfigFile())

		err := cfg.Validate()
		if err != nil {
			return nil, fmt.Errorf("invalid configuration: %w", err)
		}

		if err := mgr.postInit(ctx); err != nil {
			return nil, err
		}

		mgr.checkSecurityTripwire()
	} else {
		cfgFile := cfg.GetConfigFile()
		if cfgFile != "" {
			cfgFile += " "
		}

		// create temporary session store - this will be re-initialised
		// after config is complete
		mgr.SessionStore = session.NewStore(cfg)

		logger.Warnf("config file %snot found. Assuming new system...", cfgFile)
	}

	instance = mgr
	return mgr, nil
}

func initialisePackageManager(localPath string, srcPathGetter pkg.SourcePathGetter) *pkg.Manager {
	const timeout = 10 * time.Second
	httpClient := &http.Client{
		Transport: &http.Transport{
			Proxy: http.ProxyFromEnvironment,
		},
		Timeout: timeout,
	}

	return &pkg.Manager{
		Local: &pkg.Store{
			BaseDir:      localPath,
			ManifestFile: pkg.ManifestFile,
		},
		PackagePathGetter: srcPathGetter,
		Client:            httpClient,
	}
}

func formatDuration(t time.Duration) string {
	switch {
	case t >= time.Minute: // 1m23s or 2h45m12s
		t = t.Round(time.Second)
	case t >= time.Second: // 45.36s
		t = t.Round(10 * time.Millisecond)
	default: // 51ms
		t = t.Round(time.Millisecond)
	}

	return t.String()
}

func initJobManager(cfg *config.Config) *job.Manager {
	ret := job.NewManager()

	// desktop notifications
	ctx := context.Background()
	c := ret.Subscribe(context.Background())
	go func() {
		for {
			select {
			case j := <-c.RemovedJob:
				if cfg.GetNotificationsEnabled() {
					cleanDesc := strings.TrimRight(j.Description, ".")

					if j.StartTime == nil {
						// Task was never started
						return
					}

					timeElapsed := j.EndTime.Sub(*j.StartTime)
					msg := fmt.Sprintf("Task \"%s\" finished in %s.", cleanDesc, formatDuration(timeElapsed))
					desktop.SendNotification("Task Finished", msg)
				}
			case <-ctx.Done():
				return
			}
		}
	}()

	return ret
}

// postInit initialises the paths, caches and database after the initial
// configuration has been set. Should only be called if the configuration
// is valid.
func (s *Manager) postInit(ctx context.Context) error {
	s.RefreshConfig()

	s.SessionStore = session.NewStore(s.Config)
	s.PluginCache.RegisterSessionStore(s.SessionStore)

	s.RefreshPluginCache()
	s.RefreshScraperCache()
	s.RefreshStreamManager()
	s.RefreshDLNA()

	s.SetBlobStoreOptions()

	s.writeStashIcon()

	// clear the downloads and tmp directories
	// #1021 - only clear these directories if the generated folder is non-empty
	if s.Config.GetGeneratedPath() != "" {
		const deleteTimeout = 1 * time.Second

		utils.Timeout(func() {
			if err := fsutil.EmptyDir(s.Paths.Generated.Downloads); err != nil {
				logger.Warnf("could not empty downloads directory: %v", err)
			}
			if err := fsutil.EnsureDir(s.Paths.Generated.Tmp); err != nil {
				logger.Warnf("could not create temporary directory: %v", err)
			} else {
				if err := fsutil.EmptyDir(s.Paths.Generated.Tmp); err != nil {
					logger.Warnf("could not empty temporary directory: %v", err)
				}
			}
		}, deleteTimeout, func(done chan struct{}) {
			logger.Info("Please wait. Deleting temporary files...") // print
			<-done                                                  // and wait for deletion
			logger.Info("Temporary files deleted.")
		})
	}

	if err := s.Database.Open(s.Config.GetDatabasePath()); err != nil {
		var migrationNeededErr *sqlite.MigrationNeededError
		if errors.As(err, &migrationNeededErr) {
			logger.Warn(err)
		} else {
			return err
		}
	}

	// Set the proxy if defined in config
	if s.Config.GetProxy() != "" {
		os.Setenv("HTTP_PROXY", s.Config.GetProxy())
		os.Setenv("HTTPS_PROXY", s.Config.GetProxy())
		os.Setenv("NO_PROXY", s.Config.GetNoProxy())
		logger.Info("Using HTTP proxy")
	}

	if err := s.initFFmpeg(ctx); err != nil {
		return fmt.Errorf("error initializing FFmpeg subsystem: %v", err)
	}

	return nil
}

func (s *Manager) checkSecurityTripwire() {
	if err := session.CheckExternalAccessTripwire(s.Config); err != nil {
		session.LogExternalAccessError(*err)
	}
}

func (s *Manager) writeStashIcon() {
	iconPath := filepath.Join(s.Config.GetConfigPath(), "icon.png")
	err := os.WriteFile(iconPath, ui.FaviconProvider.GetFaviconPng(), 0644)
	if err != nil {
		logger.Errorf("Couldn't write icon file: %v", err)
	}
}

func (s *Manager) initFFmpeg(ctx context.Context) error {
	// use same directory as config path
	configDirectory := s.Config.GetConfigPath()
	paths := []string{
		configDirectory,
		paths.GetStashHomeDirectory(),
	}
	ffmpegPath, ffprobePath := ffmpeg.GetPaths(paths)

	if ffmpegPath == "" || ffprobePath == "" {
		logger.Infof("couldn't find FFmpeg, attempting to download it")
		if err := ffmpeg.Download(ctx, configDirectory); err != nil {
			path, absErr := filepath.Abs(configDirectory)
			if absErr != nil {
				path = configDirectory
			}
			msg := `Unable to automatically download FFmpeg

Check the readme for download links.
The ffmpeg and ffprobe binaries should be placed in %s.

`
			logger.Errorf(msg, path)
			return err
		} else {
			// After download get new paths for ffmpeg and ffprobe
			ffmpegPath, ffprobePath = ffmpeg.GetPaths(paths)
		}
	}

	s.FFMpeg = ffmpeg.NewEncoder(ffmpegPath)
	s.FFProbe = ffmpeg.FFProbe(ffprobePath)

	s.FFMpeg.InitHWSupport(ctx)
	s.RefreshStreamManager()

	return nil
}
