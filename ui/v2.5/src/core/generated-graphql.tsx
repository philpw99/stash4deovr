import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
// Generated on 2024-01-06T19:22:16-05:00

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
  BoolMap: any;
  Int64: any;
  Map: any;
  /** Log entries */
  Time: any;
  /**
   * Timestamp is a point in time. It is always output as RFC3339-compatible time points.
   * It can be input as a RFC3339 string, or as "<4h" for "4 hours in the past" or ">5m"
   * for "5 minutes in the future"
   */
  Timestamp: any;
  Upload: any;
};

export type AddTempDlnaipInput = {
  address: Scalars['String'];
  /** Duration to enable, in minutes. 0 or null for indefinite. */
  duration?: InputMaybe<Scalars['Int']>;
};

export type AnonymiseDatabaseInput = {
  download?: InputMaybe<Scalars['Boolean']>;
};

export type AssignSceneFileInput = {
  file_id: Scalars['ID'];
  scene_id: Scalars['ID'];
};

export type AutoTagMetadataInput = {
  /** Paths to tag, null for all files */
  paths?: InputMaybe<Array<Scalars['String']>>;
  /** IDs of performers to tag files with, or "*" for all */
  performers?: InputMaybe<Array<Scalars['String']>>;
  /** IDs of studios to tag files with, or "*" for all */
  studios?: InputMaybe<Array<Scalars['String']>>;
  /** IDs of tags to tag files with, or "*" for all */
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type AutoTagMetadataOptions = {
  __typename?: 'AutoTagMetadataOptions';
  /** IDs of performers to tag files with, or "*" for all */
  performers?: Maybe<Array<Scalars['String']>>;
  /** IDs of studios to tag files with, or "*" for all */
  studios?: Maybe<Array<Scalars['String']>>;
  /** IDs of tags to tag files with, or "*" for all */
  tags?: Maybe<Array<Scalars['String']>>;
};

export type BackupDatabaseInput = {
  download?: InputMaybe<Scalars['Boolean']>;
};

export type BaseFile = {
  basename: Scalars['String'];
  created_at: Scalars['Time'];
  fingerprint?: Maybe<Scalars['String']>;
  fingerprints: Array<Fingerprint>;
  id: Scalars['ID'];
  mod_time: Scalars['Time'];
  parent_folder_id: Scalars['ID'];
  path: Scalars['String'];
  size: Scalars['Int64'];
  updated_at: Scalars['Time'];
  zip_file_id?: Maybe<Scalars['ID']>;
};


export type BaseFileFingerprintArgs = {
  type: Scalars['String'];
};

export enum BlobsStorageType {
  /** Database */
  Database = 'DATABASE',
  /** Filesystem */
  Filesystem = 'FILESYSTEM'
}

export type BulkGalleryUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  organized?: InputMaybe<Scalars['Boolean']>;
  performer_ids?: InputMaybe<BulkUpdateIds>;
  photographer?: InputMaybe<Scalars['String']>;
  rating100?: InputMaybe<Scalars['Int']>;
  scene_ids?: InputMaybe<BulkUpdateIds>;
  studio_id?: InputMaybe<Scalars['ID']>;
  tag_ids?: InputMaybe<BulkUpdateIds>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']>;
  urls?: InputMaybe<BulkUpdateStrings>;
};

export type BulkImageUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  gallery_ids?: InputMaybe<BulkUpdateIds>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  organized?: InputMaybe<Scalars['Boolean']>;
  performer_ids?: InputMaybe<BulkUpdateIds>;
  photographer?: InputMaybe<Scalars['String']>;
  rating100?: InputMaybe<Scalars['Int']>;
  studio_id?: InputMaybe<Scalars['ID']>;
  tag_ids?: InputMaybe<BulkUpdateIds>;
  title?: InputMaybe<Scalars['String']>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']>;
  urls?: InputMaybe<BulkUpdateStrings>;
};

export type BulkMovieUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  director?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  rating100?: InputMaybe<Scalars['Int']>;
  studio_id?: InputMaybe<Scalars['ID']>;
};

export type BulkPerformerUpdateInput = {
  alias_list?: InputMaybe<BulkUpdateStrings>;
  birthdate?: InputMaybe<Scalars['String']>;
  career_length?: InputMaybe<Scalars['String']>;
  circumcised?: InputMaybe<CircumisedEnum>;
  clientMutationId?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  death_date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  disambiguation?: InputMaybe<Scalars['String']>;
  ethnicity?: InputMaybe<Scalars['String']>;
  eye_color?: InputMaybe<Scalars['String']>;
  fake_tits?: InputMaybe<Scalars['String']>;
  favorite?: InputMaybe<Scalars['Boolean']>;
  gender?: InputMaybe<GenderEnum>;
  hair_color?: InputMaybe<Scalars['String']>;
  height_cm?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>;
  instagram?: InputMaybe<Scalars['String']>;
  measurements?: InputMaybe<Scalars['String']>;
  penis_length?: InputMaybe<Scalars['Float']>;
  piercings?: InputMaybe<Scalars['String']>;
  rating100?: InputMaybe<Scalars['Int']>;
  tag_ids?: InputMaybe<BulkUpdateIds>;
  tattoos?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Int']>;
};

export type BulkSceneUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  director?: InputMaybe<Scalars['String']>;
  gallery_ids?: InputMaybe<BulkUpdateIds>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  movie_ids?: InputMaybe<BulkUpdateIds>;
  organized?: InputMaybe<Scalars['Boolean']>;
  performer_ids?: InputMaybe<BulkUpdateIds>;
  rating100?: InputMaybe<Scalars['Int']>;
  studio_id?: InputMaybe<Scalars['ID']>;
  tag_ids?: InputMaybe<BulkUpdateIds>;
  title?: InputMaybe<Scalars['String']>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']>;
  urls?: InputMaybe<BulkUpdateStrings>;
};

export enum BulkUpdateIdMode {
  Add = 'ADD',
  Remove = 'REMOVE',
  Set = 'SET'
}

export type BulkUpdateIds = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
  mode: BulkUpdateIdMode;
};

export type BulkUpdateStrings = {
  mode: BulkUpdateIdMode;
  values?: InputMaybe<Array<Scalars['String']>>;
};

export type CircumcisionCriterionInput = {
  modifier: CriterionModifier;
  value?: InputMaybe<Array<CircumisedEnum>>;
};

export enum CircumisedEnum {
  Cut = 'CUT',
  Uncut = 'UNCUT'
}

export type CleanMetadataInput = {
  /** Do a dry run. Don't delete any files */
  dryRun: Scalars['Boolean'];
  paths?: InputMaybe<Array<Scalars['String']>>;
};

export type ConfigDlnaInput = {
  /** True if DLNA service should be enabled by default */
  enabled?: InputMaybe<Scalars['Boolean']>;
  /** List of interfaces to run DLNA on. Empty for all */
  interfaces?: InputMaybe<Array<Scalars['String']>>;
  serverName?: InputMaybe<Scalars['String']>;
  /** Order to sort videos */
  videoSortOrder?: InputMaybe<Scalars['String']>;
  /** List of IPs whitelisted for DLNA service */
  whitelistedIPs?: InputMaybe<Array<Scalars['String']>>;
};

export type ConfigDlnaResult = {
  __typename?: 'ConfigDLNAResult';
  /** True if DLNA service should be enabled by default */
  enabled: Scalars['Boolean'];
  /** List of interfaces to run DLNA on. Empty for all */
  interfaces: Array<Scalars['String']>;
  serverName: Scalars['String'];
  /** Order to sort videos */
  videoSortOrder: Scalars['String'];
  /** List of IPs whitelisted for DLNA service */
  whitelistedIPs: Array<Scalars['String']>;
};

export type ConfigDefaultSettingsInput = {
  autoTag?: InputMaybe<AutoTagMetadataInput>;
  /** If true, delete file checkbox will be checked by default */
  deleteFile?: InputMaybe<Scalars['Boolean']>;
  /** If true, delete generated files checkbox will be checked by default */
  deleteGenerated?: InputMaybe<Scalars['Boolean']>;
  generate?: InputMaybe<GenerateMetadataInput>;
  identify?: InputMaybe<IdentifyMetadataInput>;
  scan?: InputMaybe<ScanMetadataInput>;
};

export type ConfigDefaultSettingsResult = {
  __typename?: 'ConfigDefaultSettingsResult';
  autoTag?: Maybe<AutoTagMetadataOptions>;
  /** If true, delete file checkbox will be checked by default */
  deleteFile?: Maybe<Scalars['Boolean']>;
  /** If true, delete generated supporting files checkbox will be checked by default */
  deleteGenerated?: Maybe<Scalars['Boolean']>;
  generate?: Maybe<GenerateMetadataOptions>;
  identify?: Maybe<IdentifyMetadataTaskOptions>;
  scan?: Maybe<ScanMetadataOptions>;
};

export type ConfigDisableDropdownCreate = {
  __typename?: 'ConfigDisableDropdownCreate';
  movie: Scalars['Boolean'];
  performer: Scalars['Boolean'];
  studio: Scalars['Boolean'];
  tag: Scalars['Boolean'];
};

export type ConfigDisableDropdownCreateInput = {
  movie?: InputMaybe<Scalars['Boolean']>;
  performer?: InputMaybe<Scalars['Boolean']>;
  studio?: InputMaybe<Scalars['Boolean']>;
  tag?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigGeneralInput = {
  /** Path to backup directory */
  backupDirectoryPath?: InputMaybe<Scalars['String']>;
  /** Path to blobs - required for filesystem blob storage */
  blobsPath?: InputMaybe<Scalars['String']>;
  /** Where to store blobs */
  blobsStorage?: InputMaybe<BlobsStorageType>;
  /** Path to cache */
  cachePath?: InputMaybe<Scalars['String']>;
  /** Whether to calculate MD5 checksums for scene video files */
  calculateMD5?: InputMaybe<Scalars['Boolean']>;
  /** True if galleries should be created from folders with images */
  createGalleriesFromFolders?: InputMaybe<Scalars['Boolean']>;
  /** Create Image Clips from Video extensions when Videos are disabled in Library */
  createImageClipsFromVideos?: InputMaybe<Scalars['Boolean']>;
  /** Custom Performer Image Location */
  customPerformerImageLocation?: InputMaybe<Scalars['String']>;
  /** Path to the SQLite database */
  databasePath?: InputMaybe<Scalars['String']>;
  /** whether to include range in generated funscript heatmaps */
  drawFunscriptHeatmapRange?: InputMaybe<Scalars['Boolean']>;
  /** Array of file regexp to exclude from Video Scans */
  excludes?: InputMaybe<Array<Scalars['String']>>;
  /** Regex used to identify images as gallery covers */
  galleryCoverRegex?: InputMaybe<Scalars['String']>;
  /** Array of gallery zip file extensions */
  galleryExtensions?: InputMaybe<Array<Scalars['String']>>;
  /** Path to generated files */
  generatedPath?: InputMaybe<Scalars['String']>;
  /** Array of file regexp to exclude from Image Scans */
  imageExcludes?: InputMaybe<Array<Scalars['String']>>;
  /** Array of image file extensions */
  imageExtensions?: InputMaybe<Array<Scalars['String']>>;
  /**
   * ffmpeg stream input args - injected before input file
   * These are applied when live transcoding
   */
  liveTranscodeInputArgs?: InputMaybe<Array<Scalars['String']>>;
  /**
   * ffmpeg stream output args - injected before output file
   * These are applied when live transcoding
   */
  liveTranscodeOutputArgs?: InputMaybe<Array<Scalars['String']>>;
  /** Whether to log http access */
  logAccess?: InputMaybe<Scalars['Boolean']>;
  /** Name of the log file */
  logFile?: InputMaybe<Scalars['String']>;
  /** Minimum log level */
  logLevel?: InputMaybe<Scalars['String']>;
  /** Whether to also output to stderr */
  logOut?: InputMaybe<Scalars['Boolean']>;
  /** Maximum session cookie age */
  maxSessionAge?: InputMaybe<Scalars['Int']>;
  /** Max streaming transcode size */
  maxStreamingTranscodeSize?: InputMaybe<StreamingResolutionEnum>;
  /** Max generated transcode size */
  maxTranscodeSize?: InputMaybe<StreamingResolutionEnum>;
  /** Path to import/export files */
  metadataPath?: InputMaybe<Scalars['String']>;
  /** Number of parallel tasks to start during scan/generate */
  parallelTasks?: InputMaybe<Scalars['Int']>;
  /** Password */
  password?: InputMaybe<Scalars['String']>;
  /** Source of plugin packages */
  pluginPackageSources?: InputMaybe<Array<PackageSourceInput>>;
  /** Path to plugins */
  pluginsPath?: InputMaybe<Scalars['String']>;
  /** Include audio stream in previews */
  previewAudio?: InputMaybe<Scalars['Boolean']>;
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd?: InputMaybe<Scalars['String']>;
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart?: InputMaybe<Scalars['String']>;
  /** Preset when generating preview */
  previewPreset?: InputMaybe<PreviewPreset>;
  /** Preview segment duration, in seconds */
  previewSegmentDuration?: InputMaybe<Scalars['Float']>;
  /** Number of segments in a preview file */
  previewSegments?: InputMaybe<Scalars['Int']>;
  /** Python path - resolved using path if unset */
  pythonPath?: InputMaybe<Scalars['String']>;
  /** Source of scraper packages */
  scraperPackageSources?: InputMaybe<Array<PackageSourceInput>>;
  /** Path to scrapers */
  scrapersPath?: InputMaybe<Scalars['String']>;
  /** Stash-box instances used for tagging */
  stashBoxes?: InputMaybe<Array<StashBoxInput>>;
  /** Array of file paths to content */
  stashes?: InputMaybe<Array<StashConfigInput>>;
  /** Transcode Hardware Acceleration */
  transcodeHardwareAcceleration?: InputMaybe<Scalars['Boolean']>;
  /**
   * ffmpeg transcode input args - injected before input file
   * These are applied to generated transcodes (previews and transcodes)
   */
  transcodeInputArgs?: InputMaybe<Array<Scalars['String']>>;
  /**
   * ffmpeg transcode output args - injected before output file
   * These are applied to generated transcodes (previews and transcodes)
   */
  transcodeOutputArgs?: InputMaybe<Array<Scalars['String']>>;
  /** Username */
  username?: InputMaybe<Scalars['String']>;
  /** Array of video file extensions */
  videoExtensions?: InputMaybe<Array<Scalars['String']>>;
  /** Hash algorithm to use for generated file naming */
  videoFileNamingAlgorithm?: InputMaybe<HashAlgorithm>;
  /** Write image thumbnails to disk when generating on the fly */
  writeImageThumbnails?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigGeneralResult = {
  __typename?: 'ConfigGeneralResult';
  /** API Key */
  apiKey: Scalars['String'];
  /** Path to backup directory */
  backupDirectoryPath: Scalars['String'];
  /** Path to blobs - required for filesystem blob storage */
  blobsPath: Scalars['String'];
  /** Where to store blobs */
  blobsStorage: BlobsStorageType;
  /** Path to cache */
  cachePath: Scalars['String'];
  /** Whether to calculate MD5 checksums for scene video files */
  calculateMD5: Scalars['Boolean'];
  /** Path to the config file used */
  configFilePath: Scalars['String'];
  /** True if galleries should be created from folders with images */
  createGalleriesFromFolders: Scalars['Boolean'];
  /** Create Image Clips from Video extensions when Videos are disabled in Library */
  createImageClipsFromVideos: Scalars['Boolean'];
  /** Custom Performer Image Location */
  customPerformerImageLocation?: Maybe<Scalars['String']>;
  /** Path to the SQLite database */
  databasePath: Scalars['String'];
  /** whether to include range in generated funscript heatmaps */
  drawFunscriptHeatmapRange: Scalars['Boolean'];
  /** Array of file regexp to exclude from Video Scans */
  excludes: Array<Scalars['String']>;
  /** Regex used to identify images as gallery covers */
  galleryCoverRegex: Scalars['String'];
  /** Array of gallery zip file extensions */
  galleryExtensions: Array<Scalars['String']>;
  /** Path to generated files */
  generatedPath: Scalars['String'];
  /** Array of file regexp to exclude from Image Scans */
  imageExcludes: Array<Scalars['String']>;
  /** Array of image file extensions */
  imageExtensions: Array<Scalars['String']>;
  /**
   * ffmpeg stream input args - injected before input file
   * These are applied when live transcoding
   */
  liveTranscodeInputArgs: Array<Scalars['String']>;
  /**
   * ffmpeg stream output args - injected before output file
   * These are applied when live transcoding
   */
  liveTranscodeOutputArgs: Array<Scalars['String']>;
  /** Whether to log http access */
  logAccess: Scalars['Boolean'];
  /** Name of the log file */
  logFile?: Maybe<Scalars['String']>;
  /** Minimum log level */
  logLevel: Scalars['String'];
  /** Whether to also output to stderr */
  logOut: Scalars['Boolean'];
  /** Maximum session cookie age */
  maxSessionAge: Scalars['Int'];
  /** Max streaming transcode size */
  maxStreamingTranscodeSize?: Maybe<StreamingResolutionEnum>;
  /** Max generated transcode size */
  maxTranscodeSize?: Maybe<StreamingResolutionEnum>;
  /** Path to import/export files */
  metadataPath: Scalars['String'];
  /** Number of parallel tasks to start during scan/generate */
  parallelTasks: Scalars['Int'];
  /** Password */
  password: Scalars['String'];
  /** Source of plugin packages */
  pluginPackageSources: Array<PackageSource>;
  /** Path to plugins */
  pluginsPath: Scalars['String'];
  /** Include audio stream in previews */
  previewAudio: Scalars['Boolean'];
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd: Scalars['String'];
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart: Scalars['String'];
  /** Preset when generating preview */
  previewPreset: PreviewPreset;
  /** Preview segment duration, in seconds */
  previewSegmentDuration: Scalars['Float'];
  /** Number of segments in a preview file */
  previewSegments: Scalars['Int'];
  /** Python path - resolved using path if unset */
  pythonPath: Scalars['String'];
  /** Source of scraper packages */
  scraperPackageSources: Array<PackageSource>;
  /** Path to scrapers */
  scrapersPath: Scalars['String'];
  /** Stash-box instances used for tagging */
  stashBoxes: Array<StashBox>;
  /** Array of file paths to content */
  stashes: Array<StashConfig>;
  /** Transcode Hardware Acceleration */
  transcodeHardwareAcceleration: Scalars['Boolean'];
  /**
   * ffmpeg transcode input args - injected before input file
   * These are applied to generated transcodes (previews and transcodes)
   */
  transcodeInputArgs: Array<Scalars['String']>;
  /**
   * ffmpeg transcode output args - injected before output file
   * These are applied to generated transcodes (previews and transcodes)
   */
  transcodeOutputArgs: Array<Scalars['String']>;
  /** Username */
  username: Scalars['String'];
  /** Array of video file extensions */
  videoExtensions: Array<Scalars['String']>;
  /** Hash algorithm to use for generated file naming */
  videoFileNamingAlgorithm: HashAlgorithm;
  /** Write image thumbnails to disk when generating on the fly */
  writeImageThumbnails: Scalars['Boolean'];
};

export type ConfigImageLightboxInput = {
  displayMode?: InputMaybe<ImageLightboxDisplayMode>;
  resetZoomOnNav?: InputMaybe<Scalars['Boolean']>;
  scaleUp?: InputMaybe<Scalars['Boolean']>;
  scrollAttemptsBeforeChange?: InputMaybe<Scalars['Int']>;
  scrollMode?: InputMaybe<ImageLightboxScrollMode>;
  slideshowDelay?: InputMaybe<Scalars['Int']>;
};

export type ConfigImageLightboxResult = {
  __typename?: 'ConfigImageLightboxResult';
  displayMode?: Maybe<ImageLightboxDisplayMode>;
  resetZoomOnNav?: Maybe<Scalars['Boolean']>;
  scaleUp?: Maybe<Scalars['Boolean']>;
  scrollAttemptsBeforeChange: Scalars['Int'];
  scrollMode?: Maybe<ImageLightboxScrollMode>;
  slideshowDelay?: Maybe<Scalars['Int']>;
};

export type ConfigInterfaceInput = {
  /** If true, video will autostart on load in the scene player */
  autostartVideo?: InputMaybe<Scalars['Boolean']>;
  /** If true, video will autostart when loading from play random or play selected */
  autostartVideoOnPlaySelected?: InputMaybe<Scalars['Boolean']>;
  /** If true, next scene in playlist will be played at video end by default */
  continuePlaylistDefault?: InputMaybe<Scalars['Boolean']>;
  /** Custom CSS */
  css?: InputMaybe<Scalars['String']>;
  cssEnabled?: InputMaybe<Scalars['Boolean']>;
  /** Custom Locales */
  customLocales?: InputMaybe<Scalars['String']>;
  customLocalesEnabled?: InputMaybe<Scalars['Boolean']>;
  /** Set to true to disable creating new objects via the dropdown menus */
  disableDropdownCreate?: InputMaybe<ConfigDisableDropdownCreateInput>;
  /** Funscript Time Offset */
  funscriptOffset?: InputMaybe<Scalars['Int']>;
  /** Handy Connection Key */
  handyKey?: InputMaybe<Scalars['String']>;
  imageLightbox?: InputMaybe<ConfigImageLightboxInput>;
  /** Custom Javascript */
  javascript?: InputMaybe<Scalars['String']>;
  javascriptEnabled?: InputMaybe<Scalars['Boolean']>;
  /** Interface language */
  language?: InputMaybe<Scalars['String']>;
  /** Maximum duration (in seconds) in which a scene video will loop in the scene player */
  maximumLoopDuration?: InputMaybe<Scalars['Int']>;
  /** Ordered list of items that should be shown in the menu */
  menuItems?: InputMaybe<Array<Scalars['String']>>;
  /** True if we should not auto-open a browser window on startup */
  noBrowser?: InputMaybe<Scalars['Boolean']>;
  /** True if we should send notifications to the desktop */
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  /** Show scene scrubber by default */
  showScrubber?: InputMaybe<Scalars['Boolean']>;
  /** If true, studio overlays will be shown as text instead of logo images */
  showStudioAsText?: InputMaybe<Scalars['Boolean']>;
  /** Enable sound on mouseover previews */
  soundOnPreview?: InputMaybe<Scalars['Boolean']>;
  /** Whether to use Stash Hosted Funscript */
  useStashHostedFunscript?: InputMaybe<Scalars['Boolean']>;
  /** Wall playback type */
  wallPlayback?: InputMaybe<Scalars['String']>;
  /** Show title and tags in wall view */
  wallShowTitle?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigInterfaceResult = {
  __typename?: 'ConfigInterfaceResult';
  /** If true, video will autostart on load in the scene player */
  autostartVideo?: Maybe<Scalars['Boolean']>;
  /** If true, video will autostart when loading from play random or play selected */
  autostartVideoOnPlaySelected?: Maybe<Scalars['Boolean']>;
  /** If true, next scene in playlist will be played at video end by default */
  continuePlaylistDefault?: Maybe<Scalars['Boolean']>;
  /** Custom CSS */
  css?: Maybe<Scalars['String']>;
  cssEnabled?: Maybe<Scalars['Boolean']>;
  /** Custom Locales */
  customLocales?: Maybe<Scalars['String']>;
  customLocalesEnabled?: Maybe<Scalars['Boolean']>;
  /** Fields are true if creating via dropdown menus are disabled */
  disableDropdownCreate: ConfigDisableDropdownCreate;
  /** Funscript Time Offset */
  funscriptOffset?: Maybe<Scalars['Int']>;
  /** Handy Connection Key */
  handyKey?: Maybe<Scalars['String']>;
  imageLightbox: ConfigImageLightboxResult;
  /** Custom Javascript */
  javascript?: Maybe<Scalars['String']>;
  javascriptEnabled?: Maybe<Scalars['Boolean']>;
  /** Interface language */
  language?: Maybe<Scalars['String']>;
  /** Maximum duration (in seconds) in which a scene video will loop in the scene player */
  maximumLoopDuration?: Maybe<Scalars['Int']>;
  /** Ordered list of items that should be shown in the menu */
  menuItems?: Maybe<Array<Scalars['String']>>;
  /** True if we should not auto-open a browser window on startup */
  noBrowser?: Maybe<Scalars['Boolean']>;
  /** True if we should send desktop notifications */
  notificationsEnabled?: Maybe<Scalars['Boolean']>;
  /** Show scene scrubber by default */
  showScrubber?: Maybe<Scalars['Boolean']>;
  /** If true, studio overlays will be shown as text instead of logo images */
  showStudioAsText?: Maybe<Scalars['Boolean']>;
  /** Enable sound on mouseover previews */
  soundOnPreview?: Maybe<Scalars['Boolean']>;
  /** Whether to use Stash Hosted Funscript */
  useStashHostedFunscript?: Maybe<Scalars['Boolean']>;
  /** Wall playback type */
  wallPlayback?: Maybe<Scalars['String']>;
  /** Show title and tags in wall view */
  wallShowTitle?: Maybe<Scalars['Boolean']>;
};

/** All configuration settings */
export type ConfigResult = {
  __typename?: 'ConfigResult';
  defaults: ConfigDefaultSettingsResult;
  dlna: ConfigDlnaResult;
  general: ConfigGeneralResult;
  interface: ConfigInterfaceResult;
  plugins: Scalars['Map'];
  scraping: ConfigScrapingResult;
  ui: Scalars['Map'];
};


/** All configuration settings */
export type ConfigResultPluginsArgs = {
  include?: InputMaybe<Array<Scalars['String']>>;
};

export type ConfigScrapingInput = {
  /** Tags blacklist during scraping */
  excludeTagPatterns?: InputMaybe<Array<Scalars['String']>>;
  /** Scraper CDP path. Path to chrome executable or remote address */
  scraperCDPPath?: InputMaybe<Scalars['String']>;
  /** Whether the scraper should check for invalid certificates */
  scraperCertCheck?: InputMaybe<Scalars['Boolean']>;
  /** Scraper user agent string */
  scraperUserAgent?: InputMaybe<Scalars['String']>;
};

export type ConfigScrapingResult = {
  __typename?: 'ConfigScrapingResult';
  /** Tags blacklist during scraping */
  excludeTagPatterns: Array<Scalars['String']>;
  /** Scraper CDP path. Path to chrome executable or remote address */
  scraperCDPPath?: Maybe<Scalars['String']>;
  /** Whether the scraper should check for invalid certificates */
  scraperCertCheck: Scalars['Boolean'];
  /** Scraper user agent string */
  scraperUserAgent?: Maybe<Scalars['String']>;
};

export enum CriterionModifier {
  /** >= AND <= */
  Between = 'BETWEEN',
  /** = */
  Equals = 'EQUALS',
  Excludes = 'EXCLUDES',
  /** > */
  GreaterThan = 'GREATER_THAN',
  Includes = 'INCLUDES',
  /** INCLUDES ALL */
  IncludesAll = 'INCLUDES_ALL',
  /** IS NULL */
  IsNull = 'IS_NULL',
  /** < */
  LessThan = 'LESS_THAN',
  /** MATCHES REGEX */
  MatchesRegex = 'MATCHES_REGEX',
  /** < OR > */
  NotBetween = 'NOT_BETWEEN',
  /** != */
  NotEquals = 'NOT_EQUALS',
  /** NOT MATCHES REGEX */
  NotMatchesRegex = 'NOT_MATCHES_REGEX',
  /** IS NOT NULL */
  NotNull = 'NOT_NULL'
}

export type Dlnaip = {
  __typename?: 'DLNAIP';
  ipAddress: Scalars['String'];
  /** Time until IP will be no longer allowed/disallowed */
  until?: Maybe<Scalars['Time']>;
};

export type DlnaStatus = {
  __typename?: 'DLNAStatus';
  allowedIPAddresses: Array<Dlnaip>;
  recentIPAddresses: Array<Scalars['String']>;
  running: Scalars['Boolean'];
  /** If not currently running, time until it will be started. If running, time until it will be stopped */
  until?: Maybe<Scalars['Time']>;
};

export type DateCriterionInput = {
  modifier: CriterionModifier;
  value: Scalars['String'];
  value2?: InputMaybe<Scalars['String']>;
};

export type DestroyFilterInput = {
  id: Scalars['ID'];
};

/** Directory structure of a path */
export type Directory = {
  __typename?: 'Directory';
  directories: Array<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
  path: Scalars['String'];
};

export type DisableDlnaInput = {
  /** Duration to enable, in minutes. 0 or null for indefinite. */
  duration?: InputMaybe<Scalars['Int']>;
};

export type EnableDlnaInput = {
  /** Duration to enable, in minutes. 0 or null for indefinite. */
  duration?: InputMaybe<Scalars['Int']>;
};

export type ExportObjectTypeInput = {
  all?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Array<Scalars['String']>>;
};

export type ExportObjectsInput = {
  galleries?: InputMaybe<ExportObjectTypeInput>;
  images?: InputMaybe<ExportObjectTypeInput>;
  includeDependencies?: InputMaybe<Scalars['Boolean']>;
  movies?: InputMaybe<ExportObjectTypeInput>;
  performers?: InputMaybe<ExportObjectTypeInput>;
  scenes?: InputMaybe<ExportObjectTypeInput>;
  studios?: InputMaybe<ExportObjectTypeInput>;
  tags?: InputMaybe<ExportObjectTypeInput>;
};

export type FileSetFingerprintsInput = {
  /** only supplied fingerprint types will be modified */
  fingerprints: Array<SetFingerprintsInput>;
  id: Scalars['ID'];
};

export enum FilterMode {
  Galleries = 'GALLERIES',
  Images = 'IMAGES',
  Movies = 'MOVIES',
  Performers = 'PERFORMERS',
  Scenes = 'SCENES',
  SceneMarkers = 'SCENE_MARKERS',
  Studios = 'STUDIOS',
  Tags = 'TAGS'
}

export type FindFilterType = {
  direction?: InputMaybe<SortDirectionEnum>;
  page?: InputMaybe<Scalars['Int']>;
  /** use per_page = -1 to indicate all results. Defaults to 25. */
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type FindGalleriesResultType = {
  __typename?: 'FindGalleriesResultType';
  count: Scalars['Int'];
  galleries: Array<Gallery>;
};

export type FindGalleryChaptersResultType = {
  __typename?: 'FindGalleryChaptersResultType';
  chapters: Array<GalleryChapter>;
  count: Scalars['Int'];
};

export type FindImagesResultType = {
  __typename?: 'FindImagesResultType';
  count: Scalars['Int'];
  /** Total file size in bytes */
  filesize: Scalars['Float'];
  images: Array<Image>;
  /** Total megapixels of the images */
  megapixels: Scalars['Float'];
};

export type FindJobInput = {
  id: Scalars['ID'];
};

export type FindMoviesResultType = {
  __typename?: 'FindMoviesResultType';
  count: Scalars['Int'];
  movies: Array<Movie>;
};

export type FindPerformersResultType = {
  __typename?: 'FindPerformersResultType';
  count: Scalars['Int'];
  performers: Array<Performer>;
};

export type FindSceneMarkersResultType = {
  __typename?: 'FindSceneMarkersResultType';
  count: Scalars['Int'];
  scene_markers: Array<SceneMarker>;
};

export type FindScenesResultType = {
  __typename?: 'FindScenesResultType';
  count: Scalars['Int'];
  /** Total duration in seconds */
  duration: Scalars['Float'];
  /** Total file size in bytes */
  filesize: Scalars['Float'];
  scenes: Array<Scene>;
};

export type FindStudiosResultType = {
  __typename?: 'FindStudiosResultType';
  count: Scalars['Int'];
  studios: Array<Studio>;
};

export type FindTagsResultType = {
  __typename?: 'FindTagsResultType';
  count: Scalars['Int'];
  tags: Array<Tag>;
};

export type Fingerprint = {
  __typename?: 'Fingerprint';
  type: Scalars['String'];
  value: Scalars['String'];
};

export type FloatCriterionInput = {
  modifier: CriterionModifier;
  value: Scalars['Float'];
  value2?: InputMaybe<Scalars['Float']>;
};

export type Folder = {
  __typename?: 'Folder';
  created_at: Scalars['Time'];
  id: Scalars['ID'];
  mod_time: Scalars['Time'];
  parent_folder_id?: Maybe<Scalars['ID']>;
  path: Scalars['String'];
  updated_at: Scalars['Time'];
  zip_file_id?: Maybe<Scalars['ID']>;
};

/** Gallery type */
export type Gallery = {
  __typename?: 'Gallery';
  chapters: Array<GalleryChapter>;
  code?: Maybe<Scalars['String']>;
  cover?: Maybe<Image>;
  created_at: Scalars['Time'];
  date?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  files: Array<GalleryFile>;
  folder?: Maybe<Folder>;
  id: Scalars['ID'];
  image_count: Scalars['Int'];
  organized: Scalars['Boolean'];
  performers: Array<Performer>;
  photographer?: Maybe<Scalars['String']>;
  rating100?: Maybe<Scalars['Int']>;
  scenes: Array<Scene>;
  studio?: Maybe<Studio>;
  tags: Array<Tag>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['Time'];
  /** @deprecated Use urls */
  url?: Maybe<Scalars['String']>;
  urls: Array<Scalars['String']>;
};

export type GalleryAddInput = {
  gallery_id: Scalars['ID'];
  image_ids: Array<Scalars['ID']>;
};

export type GalleryChapter = {
  __typename?: 'GalleryChapter';
  created_at: Scalars['Time'];
  gallery: Gallery;
  id: Scalars['ID'];
  image_index: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['Time'];
};

export type GalleryChapterCreateInput = {
  gallery_id: Scalars['ID'];
  image_index: Scalars['Int'];
  title: Scalars['String'];
};

export type GalleryChapterUpdateInput = {
  gallery_id?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  image_index?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type GalleryCreateInput = {
  code?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  organized?: InputMaybe<Scalars['Boolean']>;
  performer_ids?: InputMaybe<Array<Scalars['ID']>>;
  photographer?: InputMaybe<Scalars['String']>;
  rating100?: InputMaybe<Scalars['Int']>;
  scene_ids?: InputMaybe<Array<Scalars['ID']>>;
  studio_id?: InputMaybe<Scalars['ID']>;
  tag_ids?: InputMaybe<Array<Scalars['ID']>>;
  title: Scalars['String'];
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']>;
  urls?: InputMaybe<Array<Scalars['String']>>;
};

export type GalleryDestroyInput = {
  /**
   * If true, then the zip file will be deleted if the gallery is zip-file-based.
   * If gallery is folder-based, then any files not associated with other
   * galleries will be deleted, along with the folder, if it is not empty.
   */
  delete_file?: InputMaybe<Scalars['Boolean']>;
  delete_generated?: InputMaybe<Scalars['Boolean']>;
  ids: Array<Scalars['ID']>;
};

export type GalleryFile = BaseFile & {
  __typename?: 'GalleryFile';
  basename: Scalars['String'];
  created_at: Scalars['Time'];
  fingerprint?: Maybe<Scalars['String']>;
  fingerprints: Array<Fingerprint>;
  id: Scalars['ID'];
  mod_time: Scalars['Time'];
  parent_folder_id: Scalars['ID'];
  path: Scalars['String'];
  size: Scalars['Int64'];
  updated_at: Scalars['Time'];
  zip_file_id?: Maybe<Scalars['ID']>;
};


export type GalleryFileFingerprintArgs = {
  type: Scalars['String'];
};

export type GalleryFilterType = {
  AND?: InputMaybe<GalleryFilterType>;
  NOT?: InputMaybe<GalleryFilterType>;
  OR?: InputMaybe<GalleryFilterType>;
  /** Filter by average image resolution */
  average_resolution?: InputMaybe<ResolutionCriterionInput>;
  /** Filter by file checksum */
  checksum?: InputMaybe<StringCriterionInput>;
  /** Filter by studio code */
  code?: InputMaybe<StringCriterionInput>;
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by date */
  date?: InputMaybe<DateCriterionInput>;
  details?: InputMaybe<StringCriterionInput>;
  /** Filter by zip-file count */
  file_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include galleries that have chapters. `true` or `false` */
  has_chapters?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<IntCriterionInput>;
  /** Filter by number of images in this gallery */
  image_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include galleries missing this property */
  is_missing?: InputMaybe<Scalars['String']>;
  /** Filter to include/exclude galleries that were created from zip */
  is_zip?: InputMaybe<Scalars['Boolean']>;
  /** Filter by organized */
  organized?: InputMaybe<Scalars['Boolean']>;
  /** Filter by path */
  path?: InputMaybe<StringCriterionInput>;
  /** Filter galleries by performer age at time of gallery */
  performer_age?: InputMaybe<IntCriterionInput>;
  /** Filter by performer count */
  performer_count?: InputMaybe<IntCriterionInput>;
  /** Filter galleries that have performers that have been favorited */
  performer_favorite?: InputMaybe<Scalars['Boolean']>;
  /** Filter to only include galleries with performers with these tags */
  performer_tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter to only include galleries with these performers */
  performers?: InputMaybe<MultiCriterionInput>;
  /** Filter by photographer */
  photographer?: InputMaybe<StringCriterionInput>;
  rating100?: InputMaybe<IntCriterionInput>;
  /** Filter to only include galleries with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include galleries with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  title?: InputMaybe<StringCriterionInput>;
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>;
};

export type GalleryRemoveInput = {
  gallery_id: Scalars['ID'];
  image_ids: Array<Scalars['ID']>;
};

export type GalleryUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  organized?: InputMaybe<Scalars['Boolean']>;
  performer_ids?: InputMaybe<Array<Scalars['ID']>>;
  photographer?: InputMaybe<Scalars['String']>;
  primary_file_id?: InputMaybe<Scalars['ID']>;
  rating100?: InputMaybe<Scalars['Int']>;
  scene_ids?: InputMaybe<Array<Scalars['ID']>>;
  studio_id?: InputMaybe<Scalars['ID']>;
  tag_ids?: InputMaybe<Array<Scalars['ID']>>;
  title?: InputMaybe<Scalars['String']>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']>;
  urls?: InputMaybe<Array<Scalars['String']>>;
};

export type GenderCriterionInput = {
  modifier: CriterionModifier;
  value?: InputMaybe<GenderEnum>;
};

export enum GenderEnum {
  Female = 'FEMALE',
  Intersex = 'INTERSEX',
  Male = 'MALE',
  NonBinary = 'NON_BINARY',
  TransgenderFemale = 'TRANSGENDER_FEMALE',
  TransgenderMale = 'TRANSGENDER_MALE'
}

export type GenerateApiKeyInput = {
  clear?: InputMaybe<Scalars['Boolean']>;
};

export type GenerateMetadataInput = {
  clipPreviews?: InputMaybe<Scalars['Boolean']>;
  covers?: InputMaybe<Scalars['Boolean']>;
  /** Generate transcodes even if not required */
  forceTranscodes?: InputMaybe<Scalars['Boolean']>;
  imagePreviews?: InputMaybe<Scalars['Boolean']>;
  interactiveHeatmapsSpeeds?: InputMaybe<Scalars['Boolean']>;
  /** marker ids to generate for */
  markerIDs?: InputMaybe<Array<Scalars['ID']>>;
  markerImagePreviews?: InputMaybe<Scalars['Boolean']>;
  markerScreenshots?: InputMaybe<Scalars['Boolean']>;
  markers?: InputMaybe<Scalars['Boolean']>;
  /** overwrite existing media */
  overwrite?: InputMaybe<Scalars['Boolean']>;
  phashes?: InputMaybe<Scalars['Boolean']>;
  previewOptions?: InputMaybe<GeneratePreviewOptionsInput>;
  previews?: InputMaybe<Scalars['Boolean']>;
  /** scene ids to generate for */
  sceneIDs?: InputMaybe<Array<Scalars['ID']>>;
  sprites?: InputMaybe<Scalars['Boolean']>;
  transcodes?: InputMaybe<Scalars['Boolean']>;
};

export type GenerateMetadataOptions = {
  __typename?: 'GenerateMetadataOptions';
  clipPreviews?: Maybe<Scalars['Boolean']>;
  covers?: Maybe<Scalars['Boolean']>;
  imagePreviews?: Maybe<Scalars['Boolean']>;
  interactiveHeatmapsSpeeds?: Maybe<Scalars['Boolean']>;
  markerImagePreviews?: Maybe<Scalars['Boolean']>;
  markerScreenshots?: Maybe<Scalars['Boolean']>;
  markers?: Maybe<Scalars['Boolean']>;
  phashes?: Maybe<Scalars['Boolean']>;
  previewOptions?: Maybe<GeneratePreviewOptions>;
  previews?: Maybe<Scalars['Boolean']>;
  sprites?: Maybe<Scalars['Boolean']>;
  transcodes?: Maybe<Scalars['Boolean']>;
};

export type GeneratePreviewOptions = {
  __typename?: 'GeneratePreviewOptions';
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd?: Maybe<Scalars['String']>;
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart?: Maybe<Scalars['String']>;
  /** Preset when generating preview */
  previewPreset?: Maybe<PreviewPreset>;
  /** Preview segment duration, in seconds */
  previewSegmentDuration?: Maybe<Scalars['Float']>;
  /** Number of segments in a preview file */
  previewSegments?: Maybe<Scalars['Int']>;
};

export type GeneratePreviewOptionsInput = {
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd?: InputMaybe<Scalars['String']>;
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart?: InputMaybe<Scalars['String']>;
  /** Preset when generating preview */
  previewPreset?: InputMaybe<PreviewPreset>;
  /** Preview segment duration, in seconds */
  previewSegmentDuration?: InputMaybe<Scalars['Float']>;
  /** Number of segments in a preview file */
  previewSegments?: InputMaybe<Scalars['Int']>;
};

export enum HashAlgorithm {
  Md5 = 'MD5',
  /** oshash */
  Oshash = 'OSHASH'
}

export type HierarchicalMultiCriterionInput = {
  depth?: InputMaybe<Scalars['Int']>;
  excludes?: InputMaybe<Array<Scalars['ID']>>;
  modifier: CriterionModifier;
  value?: InputMaybe<Array<Scalars['ID']>>;
};

export type IdentifyFieldOptions = {
  __typename?: 'IdentifyFieldOptions';
  /** creates missing objects if needed - only applicable for performers, tags and studios */
  createMissing?: Maybe<Scalars['Boolean']>;
  field: Scalars['String'];
  strategy: IdentifyFieldStrategy;
};

export type IdentifyFieldOptionsInput = {
  /** creates missing objects if needed - only applicable for performers, tags and studios */
  createMissing?: InputMaybe<Scalars['Boolean']>;
  field: Scalars['String'];
  strategy: IdentifyFieldStrategy;
};

export enum IdentifyFieldStrategy {
  /** Never sets the field value */
  Ignore = 'IGNORE',
  /**
   * For multi-value fields, merge with existing.
   * For single-value fields, ignore if already set
   */
  Merge = 'MERGE',
  /**
   * Always replaces the value if a value is found.
   * For multi-value fields, any existing values are removed and replaced with the
   * scraped values.
   */
  Overwrite = 'OVERWRITE'
}

export type IdentifyMetadataInput = {
  /** Options defined here override the configured defaults */
  options?: InputMaybe<IdentifyMetadataOptionsInput>;
  /** paths of scenes to identify - ignored if scene ids are set */
  paths?: InputMaybe<Array<Scalars['String']>>;
  /** scene ids to identify */
  sceneIDs?: InputMaybe<Array<Scalars['ID']>>;
  /** An ordered list of sources to identify items with. Only the first source that finds a match is used. */
  sources: Array<IdentifySourceInput>;
};

export type IdentifyMetadataOptions = {
  __typename?: 'IdentifyMetadataOptions';
  /** any fields missing from here are defaulted to MERGE and createMissing false */
  fieldOptions?: Maybe<Array<IdentifyFieldOptions>>;
  /** defaults to true if not provided */
  includeMalePerformers?: Maybe<Scalars['Boolean']>;
  /** defaults to true if not provided */
  setCoverImage?: Maybe<Scalars['Boolean']>;
  setOrganized?: Maybe<Scalars['Boolean']>;
  /** tag to tag skipped multiple matches with */
  skipMultipleMatchTag?: Maybe<Scalars['String']>;
  /** defaults to true if not provided */
  skipMultipleMatches?: Maybe<Scalars['Boolean']>;
  /** tag to tag skipped single name performers with */
  skipSingleNamePerformerTag?: Maybe<Scalars['String']>;
  /** defaults to true if not provided */
  skipSingleNamePerformers?: Maybe<Scalars['Boolean']>;
};

export type IdentifyMetadataOptionsInput = {
  /** any fields missing from here are defaulted to MERGE and createMissing false */
  fieldOptions?: InputMaybe<Array<IdentifyFieldOptionsInput>>;
  /** defaults to true if not provided */
  includeMalePerformers?: InputMaybe<Scalars['Boolean']>;
  /** defaults to true if not provided */
  setCoverImage?: InputMaybe<Scalars['Boolean']>;
  setOrganized?: InputMaybe<Scalars['Boolean']>;
  /** tag to tag skipped multiple matches with */
  skipMultipleMatchTag?: InputMaybe<Scalars['String']>;
  /** defaults to true if not provided */
  skipMultipleMatches?: InputMaybe<Scalars['Boolean']>;
  /** tag to tag skipped single name performers with */
  skipSingleNamePerformerTag?: InputMaybe<Scalars['String']>;
  /** defaults to true if not provided */
  skipSingleNamePerformers?: InputMaybe<Scalars['Boolean']>;
};

export type IdentifyMetadataTaskOptions = {
  __typename?: 'IdentifyMetadataTaskOptions';
  /** Options defined here override the configured defaults */
  options?: Maybe<IdentifyMetadataOptions>;
  /** An ordered list of sources to identify items with. Only the first source that finds a match is used. */
  sources: Array<IdentifySource>;
};

export type IdentifySource = {
  __typename?: 'IdentifySource';
  /** Options defined for a source override the defaults */
  options?: Maybe<IdentifyMetadataOptions>;
  source: ScraperSource;
};

export type IdentifySourceInput = {
  /** Options defined for a source override the defaults */
  options?: InputMaybe<IdentifyMetadataOptionsInput>;
  source: ScraperSourceInput;
};

export type Image = {
  __typename?: 'Image';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['Time'];
  date?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  /** @deprecated Use visual_files */
  files: Array<ImageFile>;
  galleries: Array<Gallery>;
  id: Scalars['ID'];
  o_counter?: Maybe<Scalars['Int']>;
  organized: Scalars['Boolean'];
  paths: ImagePathsType;
  performers: Array<Performer>;
  photographer?: Maybe<Scalars['String']>;
  rating100?: Maybe<Scalars['Int']>;
  studio?: Maybe<Studio>;
  tags: Array<Tag>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['Time'];
  /** @deprecated Use urls */
  url?: Maybe<Scalars['String']>;
  urls: Array<Scalars['String']>;
  visual_files: Array<VisualFile>;
};

export type ImageDestroyInput = {
  delete_file?: InputMaybe<Scalars['Boolean']>;
  delete_generated?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type ImageFile = BaseFile & {
  __typename?: 'ImageFile';
  basename: Scalars['String'];
  created_at: Scalars['Time'];
  fingerprint?: Maybe<Scalars['String']>;
  fingerprints: Array<Fingerprint>;
  height: Scalars['Int'];
  id: Scalars['ID'];
  mod_time: Scalars['Time'];
  parent_folder_id: Scalars['ID'];
  path: Scalars['String'];
  size: Scalars['Int64'];
  updated_at: Scalars['Time'];
  width: Scalars['Int'];
  zip_file_id?: Maybe<Scalars['ID']>;
};


export type ImageFileFingerprintArgs = {
  type: Scalars['String'];
};

export type ImageFileType = {
  __typename?: 'ImageFileType';
  height: Scalars['Int'];
  mod_time: Scalars['Time'];
  size: Scalars['Int'];
  width: Scalars['Int'];
};

export type ImageFilterType = {
  AND?: InputMaybe<ImageFilterType>;
  NOT?: InputMaybe<ImageFilterType>;
  OR?: InputMaybe<ImageFilterType>;
  /** Filter by file checksum */
  checksum?: InputMaybe<StringCriterionInput>;
  /** Filter by studio code */
  code?: InputMaybe<StringCriterionInput>;
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by date */
  date?: InputMaybe<DateCriterionInput>;
  details?: InputMaybe<StringCriterionInput>;
  /** Filter by file count */
  file_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include images with these galleries */
  galleries?: InputMaybe<MultiCriterionInput>;
  /**  Filter by image id */
  id?: InputMaybe<IntCriterionInput>;
  /** Filter to only include images missing this property */
  is_missing?: InputMaybe<Scalars['String']>;
  /** Filter by o-counter */
  o_counter?: InputMaybe<IntCriterionInput>;
  /** Filter by organized */
  organized?: InputMaybe<Scalars['Boolean']>;
  /** Filter by path */
  path?: InputMaybe<StringCriterionInput>;
  /** Filter by performer count */
  performer_count?: InputMaybe<IntCriterionInput>;
  /** Filter images that have performers that have been favorited */
  performer_favorite?: InputMaybe<Scalars['Boolean']>;
  /** Filter to only include images with performers with these tags */
  performer_tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter to only include images with these performers */
  performers?: InputMaybe<MultiCriterionInput>;
  /** Filter by photographer */
  photographer?: InputMaybe<StringCriterionInput>;
  rating100?: InputMaybe<IntCriterionInput>;
  /** Filter by resolution */
  resolution?: InputMaybe<ResolutionCriterionInput>;
  /** Filter to only include images with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include images with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  title?: InputMaybe<StringCriterionInput>;
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>;
};

export enum ImageLightboxDisplayMode {
  FitX = 'FIT_X',
  FitXy = 'FIT_XY',
  Original = 'ORIGINAL'
}

export enum ImageLightboxScrollMode {
  PanY = 'PAN_Y',
  Zoom = 'ZOOM'
}

export type ImagePathsType = {
  __typename?: 'ImagePathsType';
  image?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
};

export type ImageUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  gallery_ids?: InputMaybe<Array<Scalars['ID']>>;
  id: Scalars['ID'];
  organized?: InputMaybe<Scalars['Boolean']>;
  performer_ids?: InputMaybe<Array<Scalars['ID']>>;
  photographer?: InputMaybe<Scalars['String']>;
  primary_file_id?: InputMaybe<Scalars['ID']>;
  rating100?: InputMaybe<Scalars['Int']>;
  studio_id?: InputMaybe<Scalars['ID']>;
  tag_ids?: InputMaybe<Array<Scalars['ID']>>;
  title?: InputMaybe<Scalars['String']>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']>;
  urls?: InputMaybe<Array<Scalars['String']>>;
};

export type ImagesDestroyInput = {
  delete_file?: InputMaybe<Scalars['Boolean']>;
  delete_generated?: InputMaybe<Scalars['Boolean']>;
  ids: Array<Scalars['ID']>;
};

export enum ImportDuplicateEnum {
  Fail = 'FAIL',
  Ignore = 'IGNORE',
  Overwrite = 'OVERWRITE'
}

export enum ImportMissingRefEnum {
  Create = 'CREATE',
  Fail = 'FAIL',
  Ignore = 'IGNORE'
}

export type ImportObjectsInput = {
  duplicateBehaviour: ImportDuplicateEnum;
  file: Scalars['Upload'];
  missingRefBehaviour: ImportMissingRefEnum;
};

export type IntCriterionInput = {
  modifier: CriterionModifier;
  value: Scalars['Int'];
  value2?: InputMaybe<Scalars['Int']>;
};

export type Job = {
  __typename?: 'Job';
  addTime: Scalars['Time'];
  description: Scalars['String'];
  endTime?: Maybe<Scalars['Time']>;
  id: Scalars['ID'];
  progress?: Maybe<Scalars['Float']>;
  startTime?: Maybe<Scalars['Time']>;
  status: JobStatus;
  subTasks?: Maybe<Array<Scalars['String']>>;
};

export enum JobStatus {
  Cancelled = 'CANCELLED',
  Finished = 'FINISHED',
  Ready = 'READY',
  Running = 'RUNNING',
  Stopping = 'STOPPING'
}

export type JobStatusUpdate = {
  __typename?: 'JobStatusUpdate';
  job: Job;
  type: JobStatusUpdateType;
};

export enum JobStatusUpdateType {
  Add = 'ADD',
  Remove = 'REMOVE',
  Update = 'UPDATE'
}

export type LatestVersion = {
  __typename?: 'LatestVersion';
  release_date: Scalars['String'];
  shorthash: Scalars['String'];
  url: Scalars['String'];
  version: Scalars['String'];
};

export type LogEntry = {
  __typename?: 'LogEntry';
  level: LogLevel;
  message: Scalars['String'];
  time: Scalars['Time'];
};

export enum LogLevel {
  Debug = 'Debug',
  Error = 'Error',
  Info = 'Info',
  Progress = 'Progress',
  Trace = 'Trace',
  Warning = 'Warning'
}

export type MarkerStringsResultType = {
  __typename?: 'MarkerStringsResultType';
  count: Scalars['Int'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type MigrateBlobsInput = {
  deleteOld?: InputMaybe<Scalars['Boolean']>;
};

export type MigrateInput = {
  backupPath: Scalars['String'];
};

export type MigrateSceneScreenshotsInput = {
  deleteFiles?: InputMaybe<Scalars['Boolean']>;
  overwriteExisting?: InputMaybe<Scalars['Boolean']>;
};

export type MoveFilesInput = {
  /** valid only for single file id. If empty, existing basename is used */
  destination_basename?: InputMaybe<Scalars['String']>;
  /** valid for single or multiple file ids */
  destination_folder?: InputMaybe<Scalars['String']>;
  /** valid for single or multiple file ids */
  destination_folder_id?: InputMaybe<Scalars['ID']>;
  ids: Array<Scalars['ID']>;
};

export type Movie = {
  __typename?: 'Movie';
  aliases?: Maybe<Scalars['String']>;
  back_image_path?: Maybe<Scalars['String']>;
  created_at: Scalars['Time'];
  date?: Maybe<Scalars['String']>;
  director?: Maybe<Scalars['String']>;
  /** Duration in seconds */
  duration?: Maybe<Scalars['Int']>;
  front_image_path?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  rating100?: Maybe<Scalars['Int']>;
  scene_count: Scalars['Int'];
  scenes: Array<Scene>;
  studio?: Maybe<Studio>;
  synopsis?: Maybe<Scalars['String']>;
  updated_at: Scalars['Time'];
  url?: Maybe<Scalars['String']>;
};

export type MovieCreateInput = {
  aliases?: InputMaybe<Scalars['String']>;
  /** This should be a URL or a base64 encoded data URL */
  back_image?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  director?: InputMaybe<Scalars['String']>;
  /** Duration in seconds */
  duration?: InputMaybe<Scalars['Int']>;
  /** This should be a URL or a base64 encoded data URL */
  front_image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  rating100?: InputMaybe<Scalars['Int']>;
  studio_id?: InputMaybe<Scalars['ID']>;
  synopsis?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type MovieDestroyInput = {
  id: Scalars['ID'];
};

export type MovieFilterType = {
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by date */
  date?: InputMaybe<DateCriterionInput>;
  director?: InputMaybe<StringCriterionInput>;
  /** Filter by duration (in seconds) */
  duration?: InputMaybe<IntCriterionInput>;
  /** Filter to only include movies missing this property */
  is_missing?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<StringCriterionInput>;
  /** Filter to only include movies where performer appears in a scene */
  performers?: InputMaybe<MultiCriterionInput>;
  rating100?: InputMaybe<IntCriterionInput>;
  /** Filter to only include movies with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>;
  synopsis?: InputMaybe<StringCriterionInput>;
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>;
};

export type MovieUpdateInput = {
  aliases?: InputMaybe<Scalars['String']>;
  /** This should be a URL or a base64 encoded data URL */
  back_image?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  director?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  /** This should be a URL or a base64 encoded data URL */
  front_image?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  rating100?: InputMaybe<Scalars['Int']>;
  studio_id?: InputMaybe<Scalars['ID']>;
  synopsis?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type MultiCriterionInput = {
  excludes?: InputMaybe<Array<Scalars['ID']>>;
  modifier: CriterionModifier;
  value?: InputMaybe<Array<Scalars['ID']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addGalleryImages: Scalars['Boolean'];
  /** Enables an IP address for DLNA for an optional duration */
  addTempDLNAIP: Scalars['Boolean'];
  /** Anonymise the database in a separate file. Optionally returns a link to download the database file */
  anonymiseDatabase?: Maybe<Scalars['String']>;
  /** Backup the database. Optionally returns a link to download the database file */
  backupDatabase?: Maybe<Scalars['String']>;
  bulkGalleryUpdate?: Maybe<Array<Gallery>>;
  bulkImageUpdate?: Maybe<Array<Image>>;
  bulkMovieUpdate?: Maybe<Array<Movie>>;
  bulkPerformerUpdate?: Maybe<Array<Performer>>;
  bulkSceneUpdate?: Maybe<Array<Scene>>;
  configureDLNA: ConfigDlnaResult;
  configureDefaults: ConfigDefaultSettingsResult;
  /** Change general configuration options */
  configureGeneral: ConfigGeneralResult;
  configureInterface: ConfigInterfaceResult;
  configurePlugin: Scalars['Map'];
  configureScraping: ConfigScrapingResult;
  configureUI: Scalars['Map'];
  configureUISetting: Scalars['Map'];
  deleteFiles: Scalars['Boolean'];
  destroySavedFilter: Scalars['Boolean'];
  /** Disables DLNA for an optional duration. Has no effect if DLNA is disabled by default */
  disableDLNA: Scalars['Boolean'];
  /** Enables DLNA for an optional duration. Has no effect if DLNA is enabled by default */
  enableDLNA: Scalars['Boolean'];
  /** DANGEROUS: Execute an arbitrary SQL statement without returning any rows. */
  execSQL: SqlExecResult;
  /** Returns a link to download the result */
  exportObjects?: Maybe<Scalars['String']>;
  fileSetFingerprints: Scalars['Boolean'];
  galleriesUpdate?: Maybe<Array<Maybe<Gallery>>>;
  galleryChapterCreate?: Maybe<GalleryChapter>;
  galleryChapterDestroy: Scalars['Boolean'];
  galleryChapterUpdate?: Maybe<GalleryChapter>;
  galleryCreate?: Maybe<Gallery>;
  galleryDestroy: Scalars['Boolean'];
  galleryUpdate?: Maybe<Gallery>;
  /** Generate and set (or clear) API key */
  generateAPIKey: Scalars['String'];
  /** Decrements the o-counter for an image. Returns the new value */
  imageDecrementO: Scalars['Int'];
  imageDestroy: Scalars['Boolean'];
  /** Increments the o-counter for an image. Returns the new value */
  imageIncrementO: Scalars['Int'];
  /** Resets the o-counter for a image to 0. Returns the new value */
  imageResetO: Scalars['Int'];
  imageUpdate?: Maybe<Image>;
  imagesDestroy: Scalars['Boolean'];
  imagesUpdate?: Maybe<Array<Maybe<Image>>>;
  /** Performs an incremental import. Returns the job ID */
  importObjects: Scalars['ID'];
  /**
   * Installs the given packages.
   * If a package is already installed, it will be updated if needed..
   * If an error occurs when installing a package, the job will continue to install the remaining packages.
   * Returns the job ID
   */
  installPackages: Scalars['ID'];
  /** Start auto-tagging. Returns the job ID */
  metadataAutoTag: Scalars['ID'];
  /** Clean metadata. Returns the job ID */
  metadataClean: Scalars['ID'];
  /** Start a full export. Outputs to the metadata directory. Returns the job ID */
  metadataExport: Scalars['ID'];
  /** Start generating content. Returns the job ID */
  metadataGenerate: Scalars['ID'];
  /** Identifies scenes using scrapers. Returns the job ID */
  metadataIdentify: Scalars['ID'];
  /** Start an full import. Completely wipes the database and imports from the metadata directory. Returns the job ID */
  metadataImport: Scalars['ID'];
  /** Start a scan. Returns the job ID */
  metadataScan: Scalars['ID'];
  migrate: Scalars['Boolean'];
  /** Migrates blobs from the old storage system to the current one */
  migrateBlobs: Scalars['ID'];
  /** Migrate generated files for the current hash naming */
  migrateHashNaming: Scalars['ID'];
  /** Migrates legacy scene screenshot files into the blob storage */
  migrateSceneScreenshots: Scalars['ID'];
  /**
   * Moves the given files to the given destination. Returns true if successful.
   * Either the destination_folder or destination_folder_id must be provided.
   * If both are provided, the destination_folder_id takes precedence.
   * Destination folder must be a subfolder of one of the stash library paths.
   * If provided, destination_basename must be a valid filename with an extension that
   * matches one of the media extensions.
   * Creates folder hierarchy if needed.
   */
  moveFiles: Scalars['Boolean'];
  movieCreate?: Maybe<Movie>;
  movieDestroy: Scalars['Boolean'];
  movieUpdate?: Maybe<Movie>;
  moviesDestroy: Scalars['Boolean'];
  /** Optimises the database. Returns the job ID */
  optimiseDatabase: Scalars['ID'];
  performerCreate?: Maybe<Performer>;
  performerDestroy: Scalars['Boolean'];
  performerUpdate?: Maybe<Performer>;
  performersDestroy: Scalars['Boolean'];
  /** DANGEROUS: Execute an arbitrary SQL statement that returns rows. */
  querySQL: SqlQueryResult;
  reloadPlugins: Scalars['Boolean'];
  /** Reload scrapers */
  reloadScrapers: Scalars['Boolean'];
  removeGalleryImages: Scalars['Boolean'];
  /** Removes an IP address from the temporary DLNA whitelist */
  removeTempDLNAIP: Scalars['Boolean'];
  /** Run plugin task. Returns the job ID */
  runPluginTask: Scalars['ID'];
  saveFilter: SavedFilter;
  sceneAssignFile: Scalars['Boolean'];
  sceneCreate?: Maybe<Scene>;
  /** Decrements the o-counter for a scene. Returns the new value */
  sceneDecrementO: Scalars['Int'];
  sceneDestroy: Scalars['Boolean'];
  /** Generates screenshot at specified time in seconds. Leave empty to generate default screenshot */
  sceneGenerateScreenshot: Scalars['String'];
  /** Increments the o-counter for a scene. Returns the new value */
  sceneIncrementO: Scalars['Int'];
  /** Increments the play count for the scene. Returns the new play count value. */
  sceneIncrementPlayCount: Scalars['Int'];
  sceneMarkerCreate?: Maybe<SceneMarker>;
  sceneMarkerDestroy: Scalars['Boolean'];
  sceneMarkerUpdate?: Maybe<SceneMarker>;
  sceneMerge?: Maybe<Scene>;
  /** Resets the o-counter for a scene to 0. Returns the new value */
  sceneResetO: Scalars['Int'];
  /** Sets the resume time point (if provided) and adds the provided duration to the scene's play duration */
  sceneSaveActivity: Scalars['Boolean'];
  sceneUpdate?: Maybe<Scene>;
  scenesDestroy: Scalars['Boolean'];
  scenesUpdate?: Maybe<Array<Maybe<Scene>>>;
  setDefaultFilter: Scalars['Boolean'];
  /**
   * Enable/disable plugins - enabledMap is a map of plugin IDs to enabled booleans.
   * Plugins not in the map are not affected.
   */
  setPluginsEnabled: Scalars['Boolean'];
  setup: Scalars['Boolean'];
  /** Run batch performer tag task. Returns the job ID. */
  stashBoxBatchPerformerTag: Scalars['String'];
  /** Run batch studio tag task. Returns the job ID. */
  stashBoxBatchStudioTag: Scalars['String'];
  stopAllJobs: Scalars['Boolean'];
  stopJob: Scalars['Boolean'];
  studioCreate?: Maybe<Studio>;
  studioDestroy: Scalars['Boolean'];
  studioUpdate?: Maybe<Studio>;
  studiosDestroy: Scalars['Boolean'];
  /** Submit fingerprints to stash-box instance */
  submitStashBoxFingerprints: Scalars['Boolean'];
  /** Submit performer as draft to stash-box instance */
  submitStashBoxPerformerDraft?: Maybe<Scalars['ID']>;
  /** Submit scene as draft to stash-box instance */
  submitStashBoxSceneDraft?: Maybe<Scalars['ID']>;
  tagCreate?: Maybe<Tag>;
  tagDestroy: Scalars['Boolean'];
  tagUpdate?: Maybe<Tag>;
  tagsDestroy: Scalars['Boolean'];
  tagsMerge?: Maybe<Tag>;
  /**
   * Uninstalls the given packages.
   * If an error occurs when uninstalling a package, the job will continue to uninstall the remaining packages.
   * Returns the job ID
   */
  uninstallPackages: Scalars['ID'];
  /**
   * Updates the given packages.
   * If a package is not installed, it will not be installed.
   * If a package does not need to be updated, it will not be updated.
   * If no packages are provided, all packages of the given type will be updated.
   * If an error occurs when updating a package, the job will continue to update the remaining packages.
   * Returns the job ID.
   */
  updatePackages: Scalars['ID'];
};


export type MutationAddGalleryImagesArgs = {
  input: GalleryAddInput;
};


export type MutationAddTempDlnaipArgs = {
  input: AddTempDlnaipInput;
};


export type MutationAnonymiseDatabaseArgs = {
  input: AnonymiseDatabaseInput;
};


export type MutationBackupDatabaseArgs = {
  input: BackupDatabaseInput;
};


export type MutationBulkGalleryUpdateArgs = {
  input: BulkGalleryUpdateInput;
};


export type MutationBulkImageUpdateArgs = {
  input: BulkImageUpdateInput;
};


export type MutationBulkMovieUpdateArgs = {
  input: BulkMovieUpdateInput;
};


export type MutationBulkPerformerUpdateArgs = {
  input: BulkPerformerUpdateInput;
};


export type MutationBulkSceneUpdateArgs = {
  input: BulkSceneUpdateInput;
};


export type MutationConfigureDlnaArgs = {
  input: ConfigDlnaInput;
};


export type MutationConfigureDefaultsArgs = {
  input: ConfigDefaultSettingsInput;
};


export type MutationConfigureGeneralArgs = {
  input: ConfigGeneralInput;
};


export type MutationConfigureInterfaceArgs = {
  input: ConfigInterfaceInput;
};


export type MutationConfigurePluginArgs = {
  input: Scalars['Map'];
  plugin_id: Scalars['ID'];
};


export type MutationConfigureScrapingArgs = {
  input: ConfigScrapingInput;
};


export type MutationConfigureUiArgs = {
  input: Scalars['Map'];
};


export type MutationConfigureUiSettingArgs = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['Any']>;
};


export type MutationDeleteFilesArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationDestroySavedFilterArgs = {
  input: DestroyFilterInput;
};


export type MutationDisableDlnaArgs = {
  input: DisableDlnaInput;
};


export type MutationEnableDlnaArgs = {
  input: EnableDlnaInput;
};


export type MutationExecSqlArgs = {
  args?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  sql: Scalars['String'];
};


export type MutationExportObjectsArgs = {
  input: ExportObjectsInput;
};


export type MutationFileSetFingerprintsArgs = {
  input: FileSetFingerprintsInput;
};


export type MutationGalleriesUpdateArgs = {
  input: Array<GalleryUpdateInput>;
};


export type MutationGalleryChapterCreateArgs = {
  input: GalleryChapterCreateInput;
};


export type MutationGalleryChapterDestroyArgs = {
  id: Scalars['ID'];
};


export type MutationGalleryChapterUpdateArgs = {
  input: GalleryChapterUpdateInput;
};


export type MutationGalleryCreateArgs = {
  input: GalleryCreateInput;
};


export type MutationGalleryDestroyArgs = {
  input: GalleryDestroyInput;
};


export type MutationGalleryUpdateArgs = {
  input: GalleryUpdateInput;
};


export type MutationGenerateApiKeyArgs = {
  input: GenerateApiKeyInput;
};


export type MutationImageDecrementOArgs = {
  id: Scalars['ID'];
};


export type MutationImageDestroyArgs = {
  input: ImageDestroyInput;
};


export type MutationImageIncrementOArgs = {
  id: Scalars['ID'];
};


export type MutationImageResetOArgs = {
  id: Scalars['ID'];
};


export type MutationImageUpdateArgs = {
  input: ImageUpdateInput;
};


export type MutationImagesDestroyArgs = {
  input: ImagesDestroyInput;
};


export type MutationImagesUpdateArgs = {
  input: Array<ImageUpdateInput>;
};


export type MutationImportObjectsArgs = {
  input: ImportObjectsInput;
};


export type MutationInstallPackagesArgs = {
  packages: Array<PackageSpecInput>;
  type: PackageType;
};


export type MutationMetadataAutoTagArgs = {
  input: AutoTagMetadataInput;
};


export type MutationMetadataCleanArgs = {
  input: CleanMetadataInput;
};


export type MutationMetadataGenerateArgs = {
  input: GenerateMetadataInput;
};


export type MutationMetadataIdentifyArgs = {
  input: IdentifyMetadataInput;
};


export type MutationMetadataScanArgs = {
  input: ScanMetadataInput;
};


export type MutationMigrateArgs = {
  input: MigrateInput;
};


export type MutationMigrateBlobsArgs = {
  input: MigrateBlobsInput;
};


export type MutationMigrateSceneScreenshotsArgs = {
  input: MigrateSceneScreenshotsInput;
};


export type MutationMoveFilesArgs = {
  input: MoveFilesInput;
};


export type MutationMovieCreateArgs = {
  input: MovieCreateInput;
};


export type MutationMovieDestroyArgs = {
  input: MovieDestroyInput;
};


export type MutationMovieUpdateArgs = {
  input: MovieUpdateInput;
};


export type MutationMoviesDestroyArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationPerformerCreateArgs = {
  input: PerformerCreateInput;
};


export type MutationPerformerDestroyArgs = {
  input: PerformerDestroyInput;
};


export type MutationPerformerUpdateArgs = {
  input: PerformerUpdateInput;
};


export type MutationPerformersDestroyArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationQuerySqlArgs = {
  args?: InputMaybe<Array<InputMaybe<Scalars['Any']>>>;
  sql: Scalars['String'];
};


export type MutationRemoveGalleryImagesArgs = {
  input: GalleryRemoveInput;
};


export type MutationRemoveTempDlnaipArgs = {
  input: RemoveTempDlnaipInput;
};


export type MutationRunPluginTaskArgs = {
  args?: InputMaybe<Array<PluginArgInput>>;
  plugin_id: Scalars['ID'];
  task_name: Scalars['String'];
};


export type MutationSaveFilterArgs = {
  input: SaveFilterInput;
};


export type MutationSceneAssignFileArgs = {
  input: AssignSceneFileInput;
};


export type MutationSceneCreateArgs = {
  input: SceneCreateInput;
};


export type MutationSceneDecrementOArgs = {
  id: Scalars['ID'];
};


export type MutationSceneDestroyArgs = {
  input: SceneDestroyInput;
};


export type MutationSceneGenerateScreenshotArgs = {
  at?: InputMaybe<Scalars['Float']>;
  id: Scalars['ID'];
};


export type MutationSceneIncrementOArgs = {
  id: Scalars['ID'];
};


export type MutationSceneIncrementPlayCountArgs = {
  id: Scalars['ID'];
};


export type MutationSceneMarkerCreateArgs = {
  input: SceneMarkerCreateInput;
};


export type MutationSceneMarkerDestroyArgs = {
  id: Scalars['ID'];
};


export type MutationSceneMarkerUpdateArgs = {
  input: SceneMarkerUpdateInput;
};


export type MutationSceneMergeArgs = {
  input: SceneMergeInput;
};


export type MutationSceneResetOArgs = {
  id: Scalars['ID'];
};


export type MutationSceneSaveActivityArgs = {
  id: Scalars['ID'];
  playDuration?: InputMaybe<Scalars['Float']>;
  resume_time?: InputMaybe<Scalars['Float']>;
};


export type MutationSceneUpdateArgs = {
  input: SceneUpdateInput;
};


export type MutationScenesDestroyArgs = {
  input: ScenesDestroyInput;
};


export type MutationScenesUpdateArgs = {
  input: Array<SceneUpdateInput>;
};


export type MutationSetDefaultFilterArgs = {
  input: SetDefaultFilterInput;
};


export type MutationSetPluginsEnabledArgs = {
  enabledMap: Scalars['BoolMap'];
};


export type MutationSetupArgs = {
  input: SetupInput;
};


export type MutationStashBoxBatchPerformerTagArgs = {
  input: StashBoxBatchTagInput;
};


export type MutationStashBoxBatchStudioTagArgs = {
  input: StashBoxBatchTagInput;
};


export type MutationStopJobArgs = {
  job_id: Scalars['ID'];
};


export type MutationStudioCreateArgs = {
  input: StudioCreateInput;
};


export type MutationStudioDestroyArgs = {
  input: StudioDestroyInput;
};


export type MutationStudioUpdateArgs = {
  input: StudioUpdateInput;
};


export type MutationStudiosDestroyArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationSubmitStashBoxFingerprintsArgs = {
  input: StashBoxFingerprintSubmissionInput;
};


export type MutationSubmitStashBoxPerformerDraftArgs = {
  input: StashBoxDraftSubmissionInput;
};


export type MutationSubmitStashBoxSceneDraftArgs = {
  input: StashBoxDraftSubmissionInput;
};


export type MutationTagCreateArgs = {
  input: TagCreateInput;
};


export type MutationTagDestroyArgs = {
  input: TagDestroyInput;
};


export type MutationTagUpdateArgs = {
  input: TagUpdateInput;
};


export type MutationTagsDestroyArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationTagsMergeArgs = {
  input: TagsMergeInput;
};


export type MutationUninstallPackagesArgs = {
  packages: Array<PackageSpecInput>;
  type: PackageType;
};


export type MutationUpdatePackagesArgs = {
  packages?: InputMaybe<Array<PackageSpecInput>>;
  type: PackageType;
};

export type PHashDuplicationCriterionInput = {
  /** Currently unimplemented */
  distance?: InputMaybe<Scalars['Int']>;
  duplicated?: InputMaybe<Scalars['Boolean']>;
};

export type Package = {
  __typename?: 'Package';
  date?: Maybe<Scalars['Timestamp']>;
  metadata: Scalars['Map'];
  name: Scalars['String'];
  package_id: Scalars['String'];
  requires: Array<Package>;
  sourceURL: Scalars['String'];
  /** The version of this package currently available from the remote source */
  source_package?: Maybe<Package>;
  version?: Maybe<Scalars['String']>;
};

export type PackageSource = {
  __typename?: 'PackageSource';
  local_path?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type PackageSourceInput = {
  local_path?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

export type PackageSpecInput = {
  id: Scalars['String'];
  sourceURL: Scalars['String'];
};

export enum PackageType {
  Plugin = 'Plugin',
  Scraper = 'Scraper'
}

export type Performer = {
  __typename?: 'Performer';
  alias_list: Array<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
  career_length?: Maybe<Scalars['String']>;
  circumcised?: Maybe<CircumisedEnum>;
  country?: Maybe<Scalars['String']>;
  created_at: Scalars['Time'];
  death_date?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  disambiguation?: Maybe<Scalars['String']>;
  ethnicity?: Maybe<Scalars['String']>;
  eye_color?: Maybe<Scalars['String']>;
  fake_tits?: Maybe<Scalars['String']>;
  favorite: Scalars['Boolean'];
  gallery_count: Scalars['Int'];
  gender?: Maybe<GenderEnum>;
  hair_color?: Maybe<Scalars['String']>;
  height_cm?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  ignore_auto_tag: Scalars['Boolean'];
  image_count: Scalars['Int'];
  image_path?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  measurements?: Maybe<Scalars['String']>;
  movie_count: Scalars['Int'];
  movies: Array<Movie>;
  name: Scalars['String'];
  o_counter?: Maybe<Scalars['Int']>;
  penis_length?: Maybe<Scalars['Float']>;
  performer_count: Scalars['Int'];
  piercings?: Maybe<Scalars['String']>;
  rating100?: Maybe<Scalars['Int']>;
  scene_count: Scalars['Int'];
  scenes: Array<Scene>;
  stash_ids: Array<StashId>;
  tags: Array<Tag>;
  tattoos?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updated_at: Scalars['Time'];
  url?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export type PerformerCreateInput = {
  alias_list?: InputMaybe<Array<Scalars['String']>>;
  birthdate?: InputMaybe<Scalars['String']>;
  career_length?: InputMaybe<Scalars['String']>;
  circumcised?: InputMaybe<CircumisedEnum>;
  country?: InputMaybe<Scalars['String']>;
  death_date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  disambiguation?: InputMaybe<Scalars['String']>;
  ethnicity?: InputMaybe<Scalars['String']>;
  eye_color?: InputMaybe<Scalars['String']>;
  fake_tits?: InputMaybe<Scalars['String']>;
  favorite?: InputMaybe<Scalars['Boolean']>;
  gender?: InputMaybe<GenderEnum>;
  hair_color?: InputMaybe<Scalars['String']>;
  height_cm?: InputMaybe<Scalars['Int']>;
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>;
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']>;
  instagram?: InputMaybe<Scalars['String']>;
  measurements?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  penis_length?: InputMaybe<Scalars['Float']>;
  piercings?: InputMaybe<Scalars['String']>;
  rating100?: InputMaybe<Scalars['Int']>;
  stash_ids?: InputMaybe<Array<StashIdInput>>;
  tag_ids?: InputMaybe<Array<Scalars['ID']>>;
  tattoos?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Int']>;
};

export type PerformerDestroyInput = {
  id: Scalars['ID'];
};

export type PerformerFilterType = {
  AND?: InputMaybe<PerformerFilterType>;
  NOT?: InputMaybe<PerformerFilterType>;
  OR?: InputMaybe<PerformerFilterType>;
  /** Filter by age */
  age?: InputMaybe<IntCriterionInput>;
  /** Filter by aliases */
  aliases?: InputMaybe<StringCriterionInput>;
  /** Filter by birth year */
  birth_year?: InputMaybe<IntCriterionInput>;
  /** Filter by birthdate */
  birthdate?: InputMaybe<DateCriterionInput>;
  /** Filter by career length */
  career_length?: InputMaybe<StringCriterionInput>;
  /** Filter by ciricumcision */
  circumcised?: InputMaybe<CircumcisionCriterionInput>;
  /** Filter by country */
  country?: InputMaybe<StringCriterionInput>;
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by death date */
  death_date?: InputMaybe<DateCriterionInput>;
  /** Filter by death year */
  death_year?: InputMaybe<IntCriterionInput>;
  details?: InputMaybe<StringCriterionInput>;
  disambiguation?: InputMaybe<StringCriterionInput>;
  /** Filter by ethnicity */
  ethnicity?: InputMaybe<StringCriterionInput>;
  /** Filter by eye color */
  eye_color?: InputMaybe<StringCriterionInput>;
  /** Filter by fake tits value */
  fake_tits?: InputMaybe<StringCriterionInput>;
  /** Filter by favorite */
  filter_favorites?: InputMaybe<Scalars['Boolean']>;
  /** Filter by gallery count */
  gallery_count?: InputMaybe<IntCriterionInput>;
  /** Filter by gender */
  gender?: InputMaybe<GenderCriterionInput>;
  /** Filter by hair color */
  hair_color?: InputMaybe<StringCriterionInput>;
  /** Filter by height in cm */
  height_cm?: InputMaybe<IntCriterionInput>;
  /** Filter by autotag ignore value */
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>;
  /** Filter by image count */
  image_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include performers missing this property */
  is_missing?: InputMaybe<Scalars['String']>;
  /** Filter by measurements */
  measurements?: InputMaybe<StringCriterionInput>;
  name?: InputMaybe<StringCriterionInput>;
  /** Filter by o count */
  o_counter?: InputMaybe<IntCriterionInput>;
  /** Filter by penis length value */
  penis_length?: InputMaybe<FloatCriterionInput>;
  /** Filter by performers where performer appears with another performer in scene/image/gallery */
  performers?: InputMaybe<MultiCriterionInput>;
  /** Filter by piercings */
  piercings?: InputMaybe<StringCriterionInput>;
  rating100?: InputMaybe<IntCriterionInput>;
  /** Filter by scene count */
  scene_count?: InputMaybe<IntCriterionInput>;
  /** Filter by StashID */
  stash_id_endpoint?: InputMaybe<StashIdCriterionInput>;
  /** Filter by studios where performer appears in scene/image/gallery */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include performers with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by tattoos */
  tattoos?: InputMaybe<StringCriterionInput>;
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>;
  /** Filter by weight */
  weight?: InputMaybe<IntCriterionInput>;
};

export type PerformerUpdateInput = {
  alias_list?: InputMaybe<Array<Scalars['String']>>;
  birthdate?: InputMaybe<Scalars['String']>;
  career_length?: InputMaybe<Scalars['String']>;
  circumcised?: InputMaybe<CircumisedEnum>;
  country?: InputMaybe<Scalars['String']>;
  death_date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  disambiguation?: InputMaybe<Scalars['String']>;
  ethnicity?: InputMaybe<Scalars['String']>;
  eye_color?: InputMaybe<Scalars['String']>;
  fake_tits?: InputMaybe<Scalars['String']>;
  favorite?: InputMaybe<Scalars['Boolean']>;
  gender?: InputMaybe<GenderEnum>;
  hair_color?: InputMaybe<Scalars['String']>;
  height_cm?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>;
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']>;
  instagram?: InputMaybe<Scalars['String']>;
  measurements?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  penis_length?: InputMaybe<Scalars['Float']>;
  piercings?: InputMaybe<Scalars['String']>;
  rating100?: InputMaybe<Scalars['Int']>;
  stash_ids?: InputMaybe<Array<StashIdInput>>;
  tag_ids?: InputMaybe<Array<Scalars['ID']>>;
  tattoos?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Int']>;
};

export type PhashDistanceCriterionInput = {
  distance?: InputMaybe<Scalars['Int']>;
  modifier: CriterionModifier;
  value: Scalars['String'];
};

export type Plugin = {
  __typename?: 'Plugin';
  description?: Maybe<Scalars['String']>;
  enabled: Scalars['Boolean'];
  hooks?: Maybe<Array<PluginHook>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  paths: PluginPaths;
  /**
   * Plugin IDs of plugins that this plugin depends on.
   * Applies only for UI plugins to indicate css/javascript load order.
   */
  requires?: Maybe<Array<Scalars['ID']>>;
  settings?: Maybe<Array<PluginSetting>>;
  tasks?: Maybe<Array<PluginTask>>;
  url?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type PluginArgInput = {
  key: Scalars['String'];
  value?: InputMaybe<PluginValueInput>;
};

export type PluginHook = {
  __typename?: 'PluginHook';
  description?: Maybe<Scalars['String']>;
  hooks?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  plugin: Plugin;
};

export type PluginPaths = {
  __typename?: 'PluginPaths';
  css?: Maybe<Array<Scalars['String']>>;
  javascript?: Maybe<Array<Scalars['String']>>;
};

export type PluginResult = {
  __typename?: 'PluginResult';
  error?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
};

export type PluginSetting = {
  __typename?: 'PluginSetting';
  description?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type: PluginSettingTypeEnum;
};

export enum PluginSettingTypeEnum {
  Boolean = 'BOOLEAN',
  Number = 'NUMBER',
  String = 'STRING'
}

export type PluginTask = {
  __typename?: 'PluginTask';
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  plugin: Plugin;
};

export type PluginValueInput = {
  a?: InputMaybe<Array<PluginValueInput>>;
  b?: InputMaybe<Scalars['Boolean']>;
  f?: InputMaybe<Scalars['Float']>;
  i?: InputMaybe<Scalars['Int']>;
  o?: InputMaybe<Array<PluginArgInput>>;
  str?: InputMaybe<Scalars['String']>;
};

export enum PreviewPreset {
  /** X264_FAST */
  Fast = 'fast',
  /** X264_MEDIUM */
  Medium = 'medium',
  /** X264_SLOW */
  Slow = 'slow',
  /** X264_SLOWER */
  Slower = 'slower',
  /** X264_ULTRAFAST */
  Ultrafast = 'ultrafast',
  /** X264_VERYFAST */
  Veryfast = 'veryfast',
  /** X264_VERYSLOW */
  Veryslow = 'veryslow'
}

/** The query root for this schema */
export type Query = {
  __typename?: 'Query';
  allGalleries: Array<Gallery>;
  allImages: Array<Image>;
  allMovies: Array<Movie>;
  /** @deprecated Use findPerformers instead */
  allPerformers: Array<Performer>;
  allSceneMarkers: Array<SceneMarker>;
  allScenes: Array<Scene>;
  allStudios: Array<Studio>;
  allTags: Array<Tag>;
  /** List available packages */
  availablePackages: Array<Package>;
  /** Returns the current, complete configuration */
  configuration: ConfigResult;
  /** Returns an array of paths for the given path */
  directory: Directory;
  dlnaStatus: DlnaStatus;
  findDefaultFilter?: Maybe<SavedFilter>;
  /**
   * Returns any groups of scenes that are perceptual duplicates within the queried distance
   * and the difference between their duration is smaller than durationDiff
   */
  findDuplicateScenes: Array<Array<Scene>>;
  findGalleries: FindGalleriesResultType;
  findGallery?: Maybe<Gallery>;
  findImage?: Maybe<Image>;
  /** A function which queries Scene objects */
  findImages: FindImagesResultType;
  findJob?: Maybe<Job>;
  /** Find a movie by ID */
  findMovie?: Maybe<Movie>;
  /** A function which queries Movie objects */
  findMovies: FindMoviesResultType;
  /** Find a performer by ID */
  findPerformer?: Maybe<Performer>;
  /** A function which queries Performer objects */
  findPerformers: FindPerformersResultType;
  findSavedFilter?: Maybe<SavedFilter>;
  findSavedFilters: Array<SavedFilter>;
  /** Find a scene by ID or Checksum */
  findScene?: Maybe<Scene>;
  findSceneByHash?: Maybe<Scene>;
  /** A function which queries SceneMarker objects */
  findSceneMarkers: FindSceneMarkersResultType;
  /** A function which queries Scene objects */
  findScenes: FindScenesResultType;
  findScenesByPathRegex: FindScenesResultType;
  /** Find a studio by ID */
  findStudio?: Maybe<Studio>;
  /** A function which queries Studio objects */
  findStudios: FindStudiosResultType;
  findTag?: Maybe<Tag>;
  findTags: FindTagsResultType;
  /** List installed packages */
  installedPackages: Array<Package>;
  jobQueue?: Maybe<Array<Job>>;
  latestversion: LatestVersion;
  /** List available scrapers */
  listScrapers: Array<Scraper>;
  logs: Array<LogEntry>;
  /** Get marker strings */
  markerStrings: Array<Maybe<MarkerStringsResultType>>;
  /** Retrieve random scene markers for the wall */
  markerWall: Array<SceneMarker>;
  parseSceneFilenames: SceneParserResultType;
  /** List available plugin operations */
  pluginTasks?: Maybe<Array<PluginTask>>;
  /** List loaded plugins */
  plugins?: Maybe<Array<Plugin>>;
  /** Organize scene markers by tag for a given scene ID */
  sceneMarkerTags: Array<SceneMarkerTag>;
  /** Return valid stream paths */
  sceneStreams: Array<SceneStreamEndpoint>;
  /** Retrieve random scenes for the wall */
  sceneWall: Array<Scene>;
  /** Scrapes a complete gallery record based on a URL */
  scrapeGalleryURL?: Maybe<ScrapedGallery>;
  /** Scrapes a complete movie record based on a URL */
  scrapeMovieURL?: Maybe<ScrapedMovie>;
  /** Scrape for multiple performers */
  scrapeMultiPerformers: Array<Array<ScrapedPerformer>>;
  /** Scrape for multiple scenes */
  scrapeMultiScenes: Array<Array<ScrapedScene>>;
  /** Scrapes a complete performer record based on a URL */
  scrapePerformerURL?: Maybe<ScrapedPerformer>;
  /** Scrapes a complete scene record based on a URL */
  scrapeSceneURL?: Maybe<ScrapedScene>;
  /** Scrape for a single gallery */
  scrapeSingleGallery: Array<ScrapedGallery>;
  /** Scrape for a single movie */
  scrapeSingleMovie: Array<ScrapedMovie>;
  /** Scrape for a single performer */
  scrapeSinglePerformer: Array<ScrapedPerformer>;
  /** Scrape for a single scene */
  scrapeSingleScene: Array<ScrapedScene>;
  /** Scrape for a single studio */
  scrapeSingleStudio: Array<ScrapedStudio>;
  /** Scrapes content based on a URL */
  scrapeURL?: Maybe<ScrapedContent>;
  /** Get stats */
  stats: StatsResultType;
  systemStatus: SystemStatus;
  validateStashBoxCredentials: StashBoxValidationResult;
  version: Version;
};


/** The query root for this schema */
export type QueryAvailablePackagesArgs = {
  source: Scalars['String'];
  type: PackageType;
};


/** The query root for this schema */
export type QueryDirectoryArgs = {
  locale?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
};


/** The query root for this schema */
export type QueryFindDefaultFilterArgs = {
  mode: FilterMode;
};


/** The query root for this schema */
export type QueryFindDuplicateScenesArgs = {
  distance?: InputMaybe<Scalars['Int']>;
  duration_diff?: InputMaybe<Scalars['Float']>;
};


/** The query root for this schema */
export type QueryFindGalleriesArgs = {
  filter?: InputMaybe<FindFilterType>;
  gallery_filter?: InputMaybe<GalleryFilterType>;
};


/** The query root for this schema */
export type QueryFindGalleryArgs = {
  id: Scalars['ID'];
};


/** The query root for this schema */
export type QueryFindImageArgs = {
  checksum?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


/** The query root for this schema */
export type QueryFindImagesArgs = {
  filter?: InputMaybe<FindFilterType>;
  image_filter?: InputMaybe<ImageFilterType>;
  image_ids?: InputMaybe<Array<Scalars['Int']>>;
};


/** The query root for this schema */
export type QueryFindJobArgs = {
  input: FindJobInput;
};


/** The query root for this schema */
export type QueryFindMovieArgs = {
  id: Scalars['ID'];
};


/** The query root for this schema */
export type QueryFindMoviesArgs = {
  filter?: InputMaybe<FindFilterType>;
  movie_filter?: InputMaybe<MovieFilterType>;
};


/** The query root for this schema */
export type QueryFindPerformerArgs = {
  id: Scalars['ID'];
};


/** The query root for this schema */
export type QueryFindPerformersArgs = {
  filter?: InputMaybe<FindFilterType>;
  performer_filter?: InputMaybe<PerformerFilterType>;
  performer_ids?: InputMaybe<Array<Scalars['Int']>>;
};


/** The query root for this schema */
export type QueryFindSavedFilterArgs = {
  id: Scalars['ID'];
};


/** The query root for this schema */
export type QueryFindSavedFiltersArgs = {
  mode?: InputMaybe<FilterMode>;
};


/** The query root for this schema */
export type QueryFindSceneArgs = {
  checksum?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


/** The query root for this schema */
export type QueryFindSceneByHashArgs = {
  input: SceneHashInput;
};


/** The query root for this schema */
export type QueryFindSceneMarkersArgs = {
  filter?: InputMaybe<FindFilterType>;
  scene_marker_filter?: InputMaybe<SceneMarkerFilterType>;
};


/** The query root for this schema */
export type QueryFindScenesArgs = {
  filter?: InputMaybe<FindFilterType>;
  scene_filter?: InputMaybe<SceneFilterType>;
  scene_ids?: InputMaybe<Array<Scalars['Int']>>;
};


/** The query root for this schema */
export type QueryFindScenesByPathRegexArgs = {
  filter?: InputMaybe<FindFilterType>;
};


/** The query root for this schema */
export type QueryFindStudioArgs = {
  id: Scalars['ID'];
};


/** The query root for this schema */
export type QueryFindStudiosArgs = {
  filter?: InputMaybe<FindFilterType>;
  studio_filter?: InputMaybe<StudioFilterType>;
};


/** The query root for this schema */
export type QueryFindTagArgs = {
  id: Scalars['ID'];
};


/** The query root for this schema */
export type QueryFindTagsArgs = {
  filter?: InputMaybe<FindFilterType>;
  tag_filter?: InputMaybe<TagFilterType>;
};


/** The query root for this schema */
export type QueryInstalledPackagesArgs = {
  type: PackageType;
};


/** The query root for this schema */
export type QueryListScrapersArgs = {
  types: Array<ScrapeContentType>;
};


/** The query root for this schema */
export type QueryMarkerStringsArgs = {
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


/** The query root for this schema */
export type QueryMarkerWallArgs = {
  q?: InputMaybe<Scalars['String']>;
};


/** The query root for this schema */
export type QueryParseSceneFilenamesArgs = {
  config: SceneParserInput;
  filter?: InputMaybe<FindFilterType>;
};


/** The query root for this schema */
export type QuerySceneMarkerTagsArgs = {
  scene_id: Scalars['ID'];
};


/** The query root for this schema */
export type QuerySceneStreamsArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** The query root for this schema */
export type QuerySceneWallArgs = {
  q?: InputMaybe<Scalars['String']>;
};


/** The query root for this schema */
export type QueryScrapeGalleryUrlArgs = {
  url: Scalars['String'];
};


/** The query root for this schema */
export type QueryScrapeMovieUrlArgs = {
  url: Scalars['String'];
};


/** The query root for this schema */
export type QueryScrapeMultiPerformersArgs = {
  input: ScrapeMultiPerformersInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
export type QueryScrapeMultiScenesArgs = {
  input: ScrapeMultiScenesInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
export type QueryScrapePerformerUrlArgs = {
  url: Scalars['String'];
};


/** The query root for this schema */
export type QueryScrapeSceneUrlArgs = {
  url: Scalars['String'];
};


/** The query root for this schema */
export type QueryScrapeSingleGalleryArgs = {
  input: ScrapeSingleGalleryInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
export type QueryScrapeSingleMovieArgs = {
  input: ScrapeSingleMovieInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
export type QueryScrapeSinglePerformerArgs = {
  input: ScrapeSinglePerformerInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
export type QueryScrapeSingleSceneArgs = {
  input: ScrapeSingleSceneInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
export type QueryScrapeSingleStudioArgs = {
  input: ScrapeSingleStudioInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
export type QueryScrapeUrlArgs = {
  ty: ScrapeContentType;
  url: Scalars['String'];
};


/** The query root for this schema */
export type QueryValidateStashBoxCredentialsArgs = {
  input: StashBoxInput;
};

export type RemoveTempDlnaipInput = {
  address: Scalars['String'];
};

export type ResolutionCriterionInput = {
  modifier: CriterionModifier;
  value: ResolutionEnum;
};

export enum ResolutionEnum {
  /** 8K */
  EightK = 'EIGHT_K',
  /** 5K */
  FiveK = 'FIVE_K',
  /** 4K */
  FourK = 'FOUR_K',
  /** 1080p */
  FullHd = 'FULL_HD',
  /** 8K+ */
  Huge = 'HUGE',
  /** 240p */
  Low = 'LOW',
  /** 1440p */
  QuadHd = 'QUAD_HD',
  /** 360p */
  R360P = 'R360P',
  /** 7K */
  SevenK = 'SEVEN_K',
  /** 6K */
  SixK = 'SIX_K',
  /** 480p */
  Standard = 'STANDARD',
  /** 720p */
  StandardHd = 'STANDARD_HD',
  /** 144p */
  VeryLow = 'VERY_LOW',
  /**
   * 1920p
   * @deprecated Use 4K instead
   */
  VrHd = 'VR_HD',
  /** 540p */
  WebHd = 'WEB_HD'
}

export type SqlExecResult = {
  __typename?: 'SQLExecResult';
  /**
   * The integer generated by the database in response to a command.
   * Typically this will be from an "auto increment" column when inserting a new row.
   * Not all databases support this feature, and the syntax of such statements varies.
   */
  last_insert_id?: Maybe<Scalars['Int64']>;
  /**
   * The number of rows affected by the query, usually an UPDATE, INSERT, or DELETE.
   * Not all queries or databases support this feature.
   */
  rows_affected?: Maybe<Scalars['Int64']>;
};

export type SqlQueryResult = {
  __typename?: 'SQLQueryResult';
  /** The column names, in the order they appear in the result set. */
  columns: Array<Scalars['String']>;
  /** The returned rows. */
  rows: Array<Array<Maybe<Scalars['Any']>>>;
};

export type SaveFilterInput = {
  find_filter?: InputMaybe<FindFilterType>;
  /** provide ID to overwrite existing filter */
  id?: InputMaybe<Scalars['ID']>;
  mode: FilterMode;
  name: Scalars['String'];
  object_filter?: InputMaybe<Scalars['Map']>;
  ui_options?: InputMaybe<Scalars['Map']>;
};

export type SavedFilter = {
  __typename?: 'SavedFilter';
  /**
   * JSON-encoded filter string
   * @deprecated use find_filter and object_filter instead
   */
  filter: Scalars['String'];
  find_filter?: Maybe<SavedFindFilterType>;
  id: Scalars['ID'];
  mode: FilterMode;
  name: Scalars['String'];
  object_filter?: Maybe<Scalars['Map']>;
  ui_options?: Maybe<Scalars['Map']>;
};

export type SavedFindFilterType = {
  __typename?: 'SavedFindFilterType';
  direction?: Maybe<SortDirectionEnum>;
  page?: Maybe<Scalars['Int']>;
  /** use per_page = -1 to indicate all results. Defaults to 25. */
  per_page?: Maybe<Scalars['Int']>;
  q?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
};

/** Filter options for meta data scannning */
export type ScanMetaDataFilterInput = {
  /** If set, files with a modification time before this time point are ignored by the scan */
  minModTime?: InputMaybe<Scalars['Timestamp']>;
};

export type ScanMetadataInput = {
  /** Filter options for the scan */
  filter?: InputMaybe<ScanMetaDataFilterInput>;
  paths?: InputMaybe<Array<Scalars['String']>>;
  /** Generate image clip previews during scan */
  scanGenerateClipPreviews?: InputMaybe<Scalars['Boolean']>;
  /** Generate covers during scan */
  scanGenerateCovers?: InputMaybe<Scalars['Boolean']>;
  /** Generate image previews during scan */
  scanGenerateImagePreviews?: InputMaybe<Scalars['Boolean']>;
  /** Generate phashes during scan */
  scanGeneratePhashes?: InputMaybe<Scalars['Boolean']>;
  /** Generate previews during scan */
  scanGeneratePreviews?: InputMaybe<Scalars['Boolean']>;
  /** Generate sprites during scan */
  scanGenerateSprites?: InputMaybe<Scalars['Boolean']>;
  /** Generate image thumbnails during scan */
  scanGenerateThumbnails?: InputMaybe<Scalars['Boolean']>;
};

export type ScanMetadataOptions = {
  __typename?: 'ScanMetadataOptions';
  /** Generate image clip previews during scan */
  scanGenerateClipPreviews: Scalars['Boolean'];
  /** Generate covers during scan */
  scanGenerateCovers: Scalars['Boolean'];
  /** Generate image previews during scan */
  scanGenerateImagePreviews: Scalars['Boolean'];
  /** Generate phashes during scan */
  scanGeneratePhashes: Scalars['Boolean'];
  /** Generate previews during scan */
  scanGeneratePreviews: Scalars['Boolean'];
  /** Generate sprites during scan */
  scanGenerateSprites: Scalars['Boolean'];
  /** Generate image thumbnails during scan */
  scanGenerateThumbnails: Scalars['Boolean'];
};

export type Scene = {
  __typename?: 'Scene';
  captions?: Maybe<Array<VideoCaption>>;
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['Time'];
  date?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  director?: Maybe<Scalars['String']>;
  files: Array<VideoFile>;
  galleries: Array<Gallery>;
  id: Scalars['ID'];
  interactive: Scalars['Boolean'];
  interactive_speed?: Maybe<Scalars['Int']>;
  /** The last time play count was updated */
  last_played_at?: Maybe<Scalars['Time']>;
  movies: Array<SceneMovie>;
  o_counter?: Maybe<Scalars['Int']>;
  organized: Scalars['Boolean'];
  paths: ScenePathsType;
  performers: Array<Performer>;
  /** The number ot times a scene has been played */
  play_count?: Maybe<Scalars['Int']>;
  /** The total time a scene has spent playing */
  play_duration?: Maybe<Scalars['Float']>;
  rating100?: Maybe<Scalars['Int']>;
  /** The time index a scene was left at */
  resume_time?: Maybe<Scalars['Float']>;
  /** Return valid stream paths */
  sceneStreams: Array<SceneStreamEndpoint>;
  scene_markers: Array<SceneMarker>;
  stash_ids: Array<StashId>;
  studio?: Maybe<Studio>;
  tags: Array<Tag>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['Time'];
  /** @deprecated Use urls */
  url?: Maybe<Scalars['String']>;
  urls: Array<Scalars['String']>;
};

export type SceneCreateInput = {
  code?: InputMaybe<Scalars['String']>;
  /** This should be a URL or a base64 encoded data URL */
  cover_image?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  director?: InputMaybe<Scalars['String']>;
  /**
   * The first id will be assigned as primary.
   * Files will be reassigned from existing scenes if applicable.
   * Files must not already be primary for another scene.
   */
  file_ids?: InputMaybe<Array<Scalars['ID']>>;
  gallery_ids?: InputMaybe<Array<Scalars['ID']>>;
  movies?: InputMaybe<Array<SceneMovieInput>>;
  organized?: InputMaybe<Scalars['Boolean']>;
  performer_ids?: InputMaybe<Array<Scalars['ID']>>;
  rating100?: InputMaybe<Scalars['Int']>;
  stash_ids?: InputMaybe<Array<StashIdInput>>;
  studio_id?: InputMaybe<Scalars['ID']>;
  tag_ids?: InputMaybe<Array<Scalars['ID']>>;
  title?: InputMaybe<Scalars['String']>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']>;
  urls?: InputMaybe<Array<Scalars['String']>>;
};

export type SceneDestroyInput = {
  delete_file?: InputMaybe<Scalars['Boolean']>;
  delete_generated?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type SceneFileType = {
  __typename?: 'SceneFileType';
  audio_codec?: Maybe<Scalars['String']>;
  bitrate?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Float']>;
  framerate?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['String']>;
  video_codec?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type SceneFilterType = {
  AND?: InputMaybe<SceneFilterType>;
  NOT?: InputMaybe<SceneFilterType>;
  OR?: InputMaybe<SceneFilterType>;
  /** Filter by audio codec */
  audio_codec?: InputMaybe<StringCriterionInput>;
  /** Filter by captions */
  captions?: InputMaybe<StringCriterionInput>;
  /** Filter by file checksum */
  checksum?: InputMaybe<StringCriterionInput>;
  code?: InputMaybe<StringCriterionInput>;
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by date */
  date?: InputMaybe<DateCriterionInput>;
  details?: InputMaybe<StringCriterionInput>;
  director?: InputMaybe<StringCriterionInput>;
  /** Filter Scenes that have an exact phash match available */
  duplicated?: InputMaybe<PHashDuplicationCriterionInput>;
  /** Filter by duration (in seconds) */
  duration?: InputMaybe<IntCriterionInput>;
  /** Filter by file count */
  file_count?: InputMaybe<IntCriterionInput>;
  /** Filter by frame rate */
  framerate?: InputMaybe<IntCriterionInput>;
  /** Filter to only include scenes which have markers. `true` or `false` */
  has_markers?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<IntCriterionInput>;
  /** Filter by interactive */
  interactive?: InputMaybe<Scalars['Boolean']>;
  /** Filter by InteractiveSpeed */
  interactive_speed?: InputMaybe<IntCriterionInput>;
  /** Filter to only include scenes missing this property */
  is_missing?: InputMaybe<Scalars['String']>;
  /** Filter to only include scenes with this movie */
  movies?: InputMaybe<MultiCriterionInput>;
  /** Filter by o-counter */
  o_counter?: InputMaybe<IntCriterionInput>;
  /** Filter by organized */
  organized?: InputMaybe<Scalars['Boolean']>;
  /** Filter by file oshash */
  oshash?: InputMaybe<StringCriterionInput>;
  /** Filter by path */
  path?: InputMaybe<StringCriterionInput>;
  /** Filter scenes by performer age at time of scene */
  performer_age?: InputMaybe<IntCriterionInput>;
  /** Filter by performer count */
  performer_count?: InputMaybe<IntCriterionInput>;
  /** Filter scenes that have performers that have been favorited */
  performer_favorite?: InputMaybe<Scalars['Boolean']>;
  /** Filter to only include scenes with performers with these tags */
  performer_tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter to only include scenes with these performers */
  performers?: InputMaybe<MultiCriterionInput>;
  /**
   * Filter by file phash
   * @deprecated Use phash_distance instead
   */
  phash?: InputMaybe<StringCriterionInput>;
  /** Filter by file phash distance */
  phash_distance?: InputMaybe<PhashDistanceCriterionInput>;
  /** Filter by play count */
  play_count?: InputMaybe<IntCriterionInput>;
  /** Filter by play duration (in seconds) */
  play_duration?: InputMaybe<IntCriterionInput>;
  rating100?: InputMaybe<IntCriterionInput>;
  /** Filter by resolution */
  resolution?: InputMaybe<ResolutionCriterionInput>;
  /** Filter by resume time */
  resume_time?: InputMaybe<IntCriterionInput>;
  /** Filter by StashID */
  stash_id_endpoint?: InputMaybe<StashIdCriterionInput>;
  /** Filter to only include scenes with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include scenes with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  title?: InputMaybe<StringCriterionInput>;
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>;
  /** Filter by video codec */
  video_codec?: InputMaybe<StringCriterionInput>;
};

export type SceneHashInput = {
  checksum?: InputMaybe<Scalars['String']>;
  oshash?: InputMaybe<Scalars['String']>;
};

export type SceneMarker = {
  __typename?: 'SceneMarker';
  created_at: Scalars['Time'];
  id: Scalars['ID'];
  /** The path to the preview image for this marker */
  preview: Scalars['String'];
  primary_tag: Tag;
  scene: Scene;
  /** The path to the screenshot image for this marker */
  screenshot: Scalars['String'];
  seconds: Scalars['Float'];
  /** The path to stream this marker */
  stream: Scalars['String'];
  tags: Array<Tag>;
  title: Scalars['String'];
  updated_at: Scalars['Time'];
};

export type SceneMarkerCreateInput = {
  primary_tag_id: Scalars['ID'];
  scene_id: Scalars['ID'];
  seconds: Scalars['Float'];
  tag_ids?: InputMaybe<Array<Scalars['ID']>>;
  title: Scalars['String'];
};

export type SceneMarkerFilterType = {
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter to only include scene markers with these performers */
  performers?: InputMaybe<MultiCriterionInput>;
  /** Filter by cscene reation time */
  scene_created_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by scene date */
  scene_date?: InputMaybe<DateCriterionInput>;
  /** Filter to only include scene markers attached to a scene with these tags */
  scene_tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by lscene ast update time */
  scene_updated_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter to only include scene markers with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>;
};

export type SceneMarkerTag = {
  __typename?: 'SceneMarkerTag';
  scene_markers: Array<SceneMarker>;
  tag: Tag;
};

export type SceneMarkerUpdateInput = {
  id: Scalars['ID'];
  primary_tag_id?: InputMaybe<Scalars['ID']>;
  scene_id?: InputMaybe<Scalars['ID']>;
  seconds?: InputMaybe<Scalars['Float']>;
  tag_ids?: InputMaybe<Array<Scalars['ID']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type SceneMergeInput = {
  destination: Scalars['ID'];
  /**
   * If destination scene has no files, then the primary file of the
   * first source scene will be assigned as primary
   */
  source: Array<Scalars['ID']>;
  values?: InputMaybe<SceneUpdateInput>;
};

export type SceneMovie = {
  __typename?: 'SceneMovie';
  movie: Movie;
  scene_index?: Maybe<Scalars['Int']>;
};

export type SceneMovieId = {
  __typename?: 'SceneMovieID';
  movie_id: Scalars['ID'];
  scene_index?: Maybe<Scalars['String']>;
};

export type SceneMovieInput = {
  movie_id: Scalars['ID'];
  scene_index?: InputMaybe<Scalars['Int']>;
};

export type SceneParserInput = {
  capitalizeTitle?: InputMaybe<Scalars['Boolean']>;
  ignoreOrganized?: InputMaybe<Scalars['Boolean']>;
  ignoreWords?: InputMaybe<Array<Scalars['String']>>;
  whitespaceCharacters?: InputMaybe<Scalars['String']>;
};

export type SceneParserResult = {
  __typename?: 'SceneParserResult';
  code?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  director?: Maybe<Scalars['String']>;
  gallery_ids?: Maybe<Array<Scalars['ID']>>;
  movies?: Maybe<Array<SceneMovieId>>;
  performer_ids?: Maybe<Array<Scalars['ID']>>;
  /** @deprecated Use 1-100 range with rating100 */
  rating?: Maybe<Scalars['Int']>;
  rating100?: Maybe<Scalars['Int']>;
  scene: Scene;
  studio_id?: Maybe<Scalars['ID']>;
  tag_ids?: Maybe<Array<Scalars['ID']>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SceneParserResultType = {
  __typename?: 'SceneParserResultType';
  count: Scalars['Int'];
  results: Array<SceneParserResult>;
};

export type ScenePathsType = {
  __typename?: 'ScenePathsType';
  caption?: Maybe<Scalars['String']>;
  funscript?: Maybe<Scalars['String']>;
  interactive_heatmap?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  screenshot?: Maybe<Scalars['String']>;
  sprite?: Maybe<Scalars['String']>;
  stream?: Maybe<Scalars['String']>;
  vtt?: Maybe<Scalars['String']>;
  webp?: Maybe<Scalars['String']>;
};

export type SceneStreamEndpoint = {
  __typename?: 'SceneStreamEndpoint';
  label?: Maybe<Scalars['String']>;
  mime_type?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type SceneUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  /** This should be a URL or a base64 encoded data URL */
  cover_image?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  director?: InputMaybe<Scalars['String']>;
  gallery_ids?: InputMaybe<Array<Scalars['ID']>>;
  id: Scalars['ID'];
  movies?: InputMaybe<Array<SceneMovieInput>>;
  o_counter?: InputMaybe<Scalars['Int']>;
  organized?: InputMaybe<Scalars['Boolean']>;
  performer_ids?: InputMaybe<Array<Scalars['ID']>>;
  /** The number ot times a scene has been played */
  play_count?: InputMaybe<Scalars['Int']>;
  /** The total time a scene has spent playing */
  play_duration?: InputMaybe<Scalars['Float']>;
  primary_file_id?: InputMaybe<Scalars['ID']>;
  rating100?: InputMaybe<Scalars['Int']>;
  /** The time index a scene was left at */
  resume_time?: InputMaybe<Scalars['Float']>;
  stash_ids?: InputMaybe<Array<StashIdInput>>;
  studio_id?: InputMaybe<Scalars['ID']>;
  tag_ids?: InputMaybe<Array<Scalars['ID']>>;
  title?: InputMaybe<Scalars['String']>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']>;
  urls?: InputMaybe<Array<Scalars['String']>>;
};

export type ScenesDestroyInput = {
  delete_file?: InputMaybe<Scalars['Boolean']>;
  delete_generated?: InputMaybe<Scalars['Boolean']>;
  ids: Array<Scalars['ID']>;
};

/** Type of the content a scraper generates */
export enum ScrapeContentType {
  Gallery = 'GALLERY',
  Movie = 'MOVIE',
  Performer = 'PERFORMER',
  Scene = 'SCENE'
}

export type ScrapeMultiPerformersInput = {
  /** Instructs to query by scene fingerprints */
  performer_ids?: InputMaybe<Array<Scalars['ID']>>;
};

export type ScrapeMultiScenesInput = {
  /** Instructs to query by scene fingerprints */
  scene_ids?: InputMaybe<Array<Scalars['ID']>>;
};

export type ScrapeSingleGalleryInput = {
  /** Instructs to query by gallery id */
  gallery_id?: InputMaybe<Scalars['ID']>;
  /** Instructs to query by gallery fragment */
  gallery_input?: InputMaybe<ScrapedGalleryInput>;
  /** Instructs to query by string */
  query?: InputMaybe<Scalars['String']>;
};

export type ScrapeSingleMovieInput = {
  /** Instructs to query by movie id */
  movie_id?: InputMaybe<Scalars['ID']>;
  /** Instructs to query by gallery fragment */
  movie_input?: InputMaybe<ScrapedMovieInput>;
  /** Instructs to query by string */
  query?: InputMaybe<Scalars['String']>;
};

export type ScrapeSinglePerformerInput = {
  /** Instructs to query by performer id */
  performer_id?: InputMaybe<Scalars['ID']>;
  /** Instructs to query by performer fragment */
  performer_input?: InputMaybe<ScrapedPerformerInput>;
  /** Instructs to query by string */
  query?: InputMaybe<Scalars['String']>;
};

export type ScrapeSingleSceneInput = {
  /** Instructs to query by string */
  query?: InputMaybe<Scalars['String']>;
  /** Instructs to query by scene fingerprints */
  scene_id?: InputMaybe<Scalars['ID']>;
  /** Instructs to query by scene fragment */
  scene_input?: InputMaybe<ScrapedSceneInput>;
};

export type ScrapeSingleStudioInput = {
  /** Query can be either a name or a Stash ID */
  query?: InputMaybe<Scalars['String']>;
};

export enum ScrapeType {
  /** From existing object */
  Fragment = 'FRAGMENT',
  /** From text query */
  Name = 'NAME',
  /** From URL */
  Url = 'URL'
}

/** Scraped Content is the forming union over the different scrapers */
export type ScrapedContent = ScrapedGallery | ScrapedMovie | ScrapedPerformer | ScrapedScene | ScrapedStudio | ScrapedTag;

export type ScrapedGallery = {
  __typename?: 'ScrapedGallery';
  code?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  performers?: Maybe<Array<ScrapedPerformer>>;
  photographer?: Maybe<Scalars['String']>;
  studio?: Maybe<ScrapedStudio>;
  tags?: Maybe<Array<ScrapedTag>>;
  title?: Maybe<Scalars['String']>;
  /** @deprecated use urls */
  url?: Maybe<Scalars['String']>;
  urls?: Maybe<Array<Scalars['String']>>;
};

export type ScrapedGalleryInput = {
  code?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  photographer?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** @deprecated use urls */
  url?: InputMaybe<Scalars['String']>;
  urls?: InputMaybe<Array<Scalars['String']>>;
};

/** A movie from a scraping operation... */
export type ScrapedMovie = {
  __typename?: 'ScrapedMovie';
  aliases?: Maybe<Scalars['String']>;
  /** This should be a base64 encoded data URL */
  back_image?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  director?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['String']>;
  /** This should be a base64 encoded data URL */
  front_image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  stored_id?: Maybe<Scalars['ID']>;
  studio?: Maybe<ScrapedStudio>;
  synopsis?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ScrapedMovieInput = {
  aliases?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  director?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  synopsis?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** A performer from a scraping operation... */
export type ScrapedPerformer = {
  __typename?: 'ScrapedPerformer';
  aliases?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
  career_length?: Maybe<Scalars['String']>;
  circumcised?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  death_date?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  disambiguation?: Maybe<Scalars['String']>;
  ethnicity?: Maybe<Scalars['String']>;
  eye_color?: Maybe<Scalars['String']>;
  fake_tits?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  hair_color?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  /**
   * This should be a base64 encoded data URL
   * @deprecated use images instead
   */
  image?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Scalars['String']>>;
  instagram?: Maybe<Scalars['String']>;
  measurements?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  penis_length?: Maybe<Scalars['String']>;
  piercings?: Maybe<Scalars['String']>;
  remote_site_id?: Maybe<Scalars['String']>;
  /** Set if performer matched */
  stored_id?: Maybe<Scalars['ID']>;
  tags?: Maybe<Array<ScrapedTag>>;
  tattoos?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
};

export type ScrapedPerformerInput = {
  aliases?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['String']>;
  career_length?: InputMaybe<Scalars['String']>;
  circumcised?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  death_date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  disambiguation?: InputMaybe<Scalars['String']>;
  ethnicity?: InputMaybe<Scalars['String']>;
  eye_color?: InputMaybe<Scalars['String']>;
  fake_tits?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  hair_color?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['String']>;
  instagram?: InputMaybe<Scalars['String']>;
  measurements?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  penis_length?: InputMaybe<Scalars['String']>;
  piercings?: InputMaybe<Scalars['String']>;
  remote_site_id?: InputMaybe<Scalars['String']>;
  /** Set if performer matched */
  stored_id?: InputMaybe<Scalars['ID']>;
  tattoos?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['String']>;
};

export type ScrapedScene = {
  __typename?: 'ScrapedScene';
  code?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  director?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  file?: Maybe<SceneFileType>;
  fingerprints?: Maybe<Array<StashBoxFingerprint>>;
  /** This should be a base64 encoded data URL */
  image?: Maybe<Scalars['String']>;
  movies?: Maybe<Array<ScrapedMovie>>;
  performers?: Maybe<Array<ScrapedPerformer>>;
  remote_site_id?: Maybe<Scalars['String']>;
  studio?: Maybe<ScrapedStudio>;
  tags?: Maybe<Array<ScrapedTag>>;
  title?: Maybe<Scalars['String']>;
  /** @deprecated use urls */
  url?: Maybe<Scalars['String']>;
  urls?: Maybe<Array<Scalars['String']>>;
};

export type ScrapedSceneInput = {
  code?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  director?: InputMaybe<Scalars['String']>;
  remote_site_id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** @deprecated use urls */
  url?: InputMaybe<Scalars['String']>;
  urls?: InputMaybe<Array<Scalars['String']>>;
};

export type ScrapedStudio = {
  __typename?: 'ScrapedStudio';
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parent?: Maybe<ScrapedStudio>;
  remote_site_id?: Maybe<Scalars['String']>;
  /** Set if studio matched */
  stored_id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
};

export type ScrapedTag = {
  __typename?: 'ScrapedTag';
  name: Scalars['String'];
  /** Set if tag matched */
  stored_id?: Maybe<Scalars['ID']>;
};

export type Scraper = {
  __typename?: 'Scraper';
  /** Details for gallery scraper */
  gallery?: Maybe<ScraperSpec>;
  id: Scalars['ID'];
  /** Details for movie scraper */
  movie?: Maybe<ScraperSpec>;
  name: Scalars['String'];
  /** Details for performer scraper */
  performer?: Maybe<ScraperSpec>;
  /** Details for scene scraper */
  scene?: Maybe<ScraperSpec>;
};

export type ScraperSource = {
  __typename?: 'ScraperSource';
  /** Scraper ID to scrape with. Should be unset if stash_box_index is set */
  scraper_id?: Maybe<Scalars['ID']>;
  /** Stash-box endpoint */
  stash_box_endpoint?: Maybe<Scalars['String']>;
  /**
   * Index of the configured stash-box instance to use. Should be unset if scraper_id is set
   * @deprecated use stash_box_endpoint
   */
  stash_box_index?: Maybe<Scalars['Int']>;
};

export type ScraperSourceInput = {
  /** Scraper ID to scrape with. Should be unset if stash_box_index is set */
  scraper_id?: InputMaybe<Scalars['ID']>;
  /** Stash-box endpoint */
  stash_box_endpoint?: InputMaybe<Scalars['String']>;
  /**
   * Index of the configured stash-box instance to use. Should be unset if scraper_id is set
   * @deprecated use stash_box_endpoint
   */
  stash_box_index?: InputMaybe<Scalars['Int']>;
};

export type ScraperSpec = {
  __typename?: 'ScraperSpec';
  supported_scrapes: Array<ScrapeType>;
  /** URLs matching these can be scraped with */
  urls?: Maybe<Array<Scalars['String']>>;
};

export type SetDefaultFilterInput = {
  /** null to clear */
  find_filter?: InputMaybe<FindFilterType>;
  mode: FilterMode;
  object_filter?: InputMaybe<Scalars['Map']>;
  ui_options?: InputMaybe<Scalars['Map']>;
};

export type SetFingerprintsInput = {
  type: Scalars['String'];
  /** an null value will remove the fingerprint */
  value?: InputMaybe<Scalars['String']>;
};

export type SetupInput = {
  /** Empty to indicate default - only applicable if storeBlobsInDatabase is false */
  blobsLocation: Scalars['String'];
  /** Empty to indicate default */
  cacheLocation: Scalars['String'];
  /** Empty to indicate $HOME/.stash/config.yml default */
  configLocation: Scalars['String'];
  /** Empty to indicate default */
  databaseFile: Scalars['String'];
  /** Empty to indicate default */
  generatedLocation: Scalars['String'];
  stashes: Array<StashConfigInput>;
  storeBlobsInDatabase: Scalars['Boolean'];
};

export enum SortDirectionEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StashBox = {
  __typename?: 'StashBox';
  api_key: Scalars['String'];
  endpoint: Scalars['String'];
  name: Scalars['String'];
};

/** If neither ids nor names are set, tag all items */
export type StashBoxBatchTagInput = {
  /** If batch adding studios, should their parent studios also be created? */
  createParent: Scalars['Boolean'];
  /** Stash endpoint to use for the tagging */
  endpoint: Scalars['Int'];
  /** Fields to exclude when executing the tagging */
  exclude_fields?: InputMaybe<Array<Scalars['String']>>;
  /** If set, only tag these ids */
  ids?: InputMaybe<Array<Scalars['ID']>>;
  /** If set, only tag these names */
  names?: InputMaybe<Array<Scalars['String']>>;
  /**
   * If set, only tag these performer ids
   * @deprecated use ids
   */
  performer_ids?: InputMaybe<Array<Scalars['ID']>>;
  /**
   * If set, only tag these performer names
   * @deprecated use names
   */
  performer_names?: InputMaybe<Array<Scalars['String']>>;
  /** Refresh items already tagged by StashBox if true. Only tag items with no StashBox tagging if false */
  refresh: Scalars['Boolean'];
};

export type StashBoxDraftSubmissionInput = {
  id: Scalars['String'];
  stash_box_index: Scalars['Int'];
};

export type StashBoxFingerprint = {
  __typename?: 'StashBoxFingerprint';
  algorithm: Scalars['String'];
  duration: Scalars['Int'];
  hash: Scalars['String'];
};

export type StashBoxFingerprintSubmissionInput = {
  scene_ids: Array<Scalars['String']>;
  stash_box_index: Scalars['Int'];
};

export type StashBoxInput = {
  api_key: Scalars['String'];
  endpoint: Scalars['String'];
  name: Scalars['String'];
};

export type StashBoxPerformerQueryInput = {
  /** Instructs query by scene fingerprints */
  performer_ids?: InputMaybe<Array<Scalars['ID']>>;
  /** Query by query string */
  q?: InputMaybe<Scalars['String']>;
  /** Index of the configured stash-box instance to use */
  stash_box_index: Scalars['Int'];
};

export type StashBoxPerformerQueryResult = {
  __typename?: 'StashBoxPerformerQueryResult';
  query: Scalars['String'];
  results: Array<ScrapedPerformer>;
};

export type StashBoxSceneQueryInput = {
  /** Query by query string */
  q?: InputMaybe<Scalars['String']>;
  /** Instructs query by scene fingerprints */
  scene_ids?: InputMaybe<Array<Scalars['ID']>>;
  /** Index of the configured stash-box instance to use */
  stash_box_index: Scalars['Int'];
};

export type StashBoxValidationResult = {
  __typename?: 'StashBoxValidationResult';
  status: Scalars['String'];
  valid: Scalars['Boolean'];
};

export type StashConfig = {
  __typename?: 'StashConfig';
  excludeImage: Scalars['Boolean'];
  excludeVideo: Scalars['Boolean'];
  path: Scalars['String'];
};

/** Stash configuration details */
export type StashConfigInput = {
  excludeImage: Scalars['Boolean'];
  excludeVideo: Scalars['Boolean'];
  path: Scalars['String'];
};

export type StashId = {
  __typename?: 'StashID';
  endpoint: Scalars['String'];
  stash_id: Scalars['String'];
};

export type StashIdCriterionInput = {
  /**
   * If present, this value is treated as a predicate.
   * That is, it will filter based on stash_ids with the matching endpoint
   */
  endpoint?: InputMaybe<Scalars['String']>;
  modifier: CriterionModifier;
  stash_id?: InputMaybe<Scalars['String']>;
};

export type StashIdInput = {
  endpoint: Scalars['String'];
  stash_id: Scalars['String'];
};

export type StatsResultType = {
  __typename?: 'StatsResultType';
  gallery_count: Scalars['Int'];
  image_count: Scalars['Int'];
  images_size: Scalars['Float'];
  movie_count: Scalars['Int'];
  performer_count: Scalars['Int'];
  scene_count: Scalars['Int'];
  scenes_duration: Scalars['Float'];
  scenes_played: Scalars['Int'];
  scenes_size: Scalars['Float'];
  studio_count: Scalars['Int'];
  tag_count: Scalars['Int'];
  total_o_count: Scalars['Int'];
  total_play_count: Scalars['Int'];
  total_play_duration: Scalars['Float'];
};

export enum StreamingResolutionEnum {
  /** 4k */
  FourK = 'FOUR_K',
  /** 1080p */
  FullHd = 'FULL_HD',
  /** 240p */
  Low = 'LOW',
  /** Original */
  Original = 'ORIGINAL',
  /** 480p */
  Standard = 'STANDARD',
  /** 720p */
  StandardHd = 'STANDARD_HD'
}

export type StringCriterionInput = {
  modifier: CriterionModifier;
  value: Scalars['String'];
};

export type Studio = {
  __typename?: 'Studio';
  aliases: Array<Scalars['String']>;
  child_studios: Array<Studio>;
  created_at: Scalars['Time'];
  details?: Maybe<Scalars['String']>;
  gallery_count: Scalars['Int'];
  id: Scalars['ID'];
  ignore_auto_tag: Scalars['Boolean'];
  image_count: Scalars['Int'];
  image_path?: Maybe<Scalars['String']>;
  movie_count: Scalars['Int'];
  movies: Array<Movie>;
  name: Scalars['String'];
  parent_studio?: Maybe<Studio>;
  performer_count: Scalars['Int'];
  rating100?: Maybe<Scalars['Int']>;
  scene_count: Scalars['Int'];
  stash_ids: Array<StashId>;
  updated_at: Scalars['Time'];
  url?: Maybe<Scalars['String']>;
};


export type StudioGallery_CountArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type StudioImage_CountArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type StudioMovie_CountArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type StudioPerformer_CountArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type StudioScene_CountArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};

export type StudioCreateInput = {
  aliases?: InputMaybe<Array<Scalars['String']>>;
  details?: InputMaybe<Scalars['String']>;
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>;
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parent_id?: InputMaybe<Scalars['ID']>;
  rating100?: InputMaybe<Scalars['Int']>;
  stash_ids?: InputMaybe<Array<StashIdInput>>;
  url?: InputMaybe<Scalars['String']>;
};

export type StudioDestroyInput = {
  id: Scalars['ID'];
};

export type StudioFilterType = {
  AND?: InputMaybe<StudioFilterType>;
  NOT?: InputMaybe<StudioFilterType>;
  OR?: InputMaybe<StudioFilterType>;
  /** Filter by studio aliases */
  aliases?: InputMaybe<StringCriterionInput>;
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>;
  details?: InputMaybe<StringCriterionInput>;
  /** Filter by gallery count */
  gallery_count?: InputMaybe<IntCriterionInput>;
  /** Filter by autotag ignore value */
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>;
  /** Filter by image count */
  image_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include studios missing this property */
  is_missing?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<StringCriterionInput>;
  /** Filter to only include studios with this parent studio */
  parents?: InputMaybe<MultiCriterionInput>;
  rating100?: InputMaybe<IntCriterionInput>;
  /** Filter by scene count */
  scene_count?: InputMaybe<IntCriterionInput>;
  /** Filter by StashID */
  stash_id_endpoint?: InputMaybe<StashIdCriterionInput>;
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>;
};

export type StudioUpdateInput = {
  aliases?: InputMaybe<Array<Scalars['String']>>;
  details?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>;
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['ID']>;
  rating100?: InputMaybe<Scalars['Int']>;
  stash_ids?: InputMaybe<Array<StashIdInput>>;
  url?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Update from the metadata manager */
  jobsSubscribe: JobStatusUpdate;
  loggingSubscribe: Array<LogEntry>;
  scanCompleteSubscribe: Scalars['Boolean'];
};

export type SystemStatus = {
  __typename?: 'SystemStatus';
  appSchema: Scalars['Int'];
  configPath?: Maybe<Scalars['String']>;
  databasePath?: Maybe<Scalars['String']>;
  databaseSchema?: Maybe<Scalars['Int']>;
  homeDir: Scalars['String'];
  os: Scalars['String'];
  status: SystemStatusEnum;
  workingDir: Scalars['String'];
};

export enum SystemStatusEnum {
  NeedsMigration = 'NEEDS_MIGRATION',
  Ok = 'OK',
  Setup = 'SETUP'
}

export type Tag = {
  __typename?: 'Tag';
  aliases: Array<Scalars['String']>;
  child_count: Scalars['Int'];
  children: Array<Tag>;
  created_at: Scalars['Time'];
  description?: Maybe<Scalars['String']>;
  gallery_count: Scalars['Int'];
  id: Scalars['ID'];
  ignore_auto_tag: Scalars['Boolean'];
  image_count: Scalars['Int'];
  image_path?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parent_count: Scalars['Int'];
  parents: Array<Tag>;
  performer_count: Scalars['Int'];
  scene_count: Scalars['Int'];
  scene_marker_count: Scalars['Int'];
  updated_at: Scalars['Time'];
};


export type TagGallery_CountArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type TagImage_CountArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type TagPerformer_CountArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type TagScene_CountArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type TagScene_Marker_CountArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};

export type TagCreateInput = {
  aliases?: InputMaybe<Array<Scalars['String']>>;
  child_ids?: InputMaybe<Array<Scalars['ID']>>;
  description?: InputMaybe<Scalars['String']>;
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>;
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parent_ids?: InputMaybe<Array<Scalars['ID']>>;
};

export type TagDestroyInput = {
  id: Scalars['ID'];
};

export type TagFilterType = {
  AND?: InputMaybe<TagFilterType>;
  NOT?: InputMaybe<TagFilterType>;
  OR?: InputMaybe<TagFilterType>;
  /** Filter by tag aliases */
  aliases?: InputMaybe<StringCriterionInput>;
  /** Filter by number f child tags the tag has */
  child_count?: InputMaybe<IntCriterionInput>;
  /** Filter by child tags */
  children?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by tag description */
  description?: InputMaybe<StringCriterionInput>;
  /** Filter by number of galleries with this tag */
  gallery_count?: InputMaybe<IntCriterionInput>;
  /** Filter by autotag ignore value */
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>;
  /** Filter by number of images with this tag */
  image_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include tags missing this property */
  is_missing?: InputMaybe<Scalars['String']>;
  /** Filter by number of markers with this tag */
  marker_count?: InputMaybe<IntCriterionInput>;
  /** Filter by tag name */
  name?: InputMaybe<StringCriterionInput>;
  /** Filter by number of parent tags the tag has */
  parent_count?: InputMaybe<IntCriterionInput>;
  /** Filter by parent tags */
  parents?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by number of performers with this tag */
  performer_count?: InputMaybe<IntCriterionInput>;
  /** Filter by number of scenes with this tag */
  scene_count?: InputMaybe<IntCriterionInput>;
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>;
};

export type TagUpdateInput = {
  aliases?: InputMaybe<Array<Scalars['String']>>;
  child_ids?: InputMaybe<Array<Scalars['ID']>>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>;
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parent_ids?: InputMaybe<Array<Scalars['ID']>>;
};

export type TagsMergeInput = {
  destination: Scalars['ID'];
  source: Array<Scalars['ID']>;
};

export type TimestampCriterionInput = {
  modifier: CriterionModifier;
  value: Scalars['String'];
  value2?: InputMaybe<Scalars['String']>;
};

export type Version = {
  __typename?: 'Version';
  build_time: Scalars['String'];
  hash: Scalars['String'];
  version?: Maybe<Scalars['String']>;
};

export type VideoCaption = {
  __typename?: 'VideoCaption';
  caption_type: Scalars['String'];
  language_code: Scalars['String'];
};

export type VideoFile = BaseFile & {
  __typename?: 'VideoFile';
  audio_codec: Scalars['String'];
  basename: Scalars['String'];
  bit_rate: Scalars['Int'];
  created_at: Scalars['Time'];
  duration: Scalars['Float'];
  fingerprint?: Maybe<Scalars['String']>;
  fingerprints: Array<Fingerprint>;
  format: Scalars['String'];
  frame_rate: Scalars['Float'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  mod_time: Scalars['Time'];
  parent_folder_id: Scalars['ID'];
  path: Scalars['String'];
  size: Scalars['Int64'];
  updated_at: Scalars['Time'];
  video_codec: Scalars['String'];
  width: Scalars['Int'];
  zip_file_id?: Maybe<Scalars['ID']>;
};


export type VideoFileFingerprintArgs = {
  type: Scalars['String'];
};

export type VisualFile = ImageFile | VideoFile;

export type ConfigGeneralDataFragment = { __typename?: 'ConfigGeneralResult', databasePath: string, backupDirectoryPath: string, generatedPath: string, metadataPath: string, scrapersPath: string, pluginsPath: string, cachePath: string, blobsPath: string, blobsStorage: BlobsStorageType, calculateMD5: boolean, videoFileNamingAlgorithm: HashAlgorithm, parallelTasks: number, previewAudio: boolean, previewSegments: number, previewSegmentDuration: number, previewExcludeStart: string, previewExcludeEnd: string, previewPreset: PreviewPreset, transcodeHardwareAcceleration: boolean, maxTranscodeSize?: StreamingResolutionEnum | null, maxStreamingTranscodeSize?: StreamingResolutionEnum | null, writeImageThumbnails: boolean, createImageClipsFromVideos: boolean, apiKey: string, username: string, password: string, maxSessionAge: number, logFile?: string | null, logOut: boolean, logLevel: string, logAccess: boolean, createGalleriesFromFolders: boolean, galleryCoverRegex: string, videoExtensions: Array<string>, imageExtensions: Array<string>, galleryExtensions: Array<string>, excludes: Array<string>, imageExcludes: Array<string>, customPerformerImageLocation?: string | null, pythonPath: string, transcodeInputArgs: Array<string>, transcodeOutputArgs: Array<string>, liveTranscodeInputArgs: Array<string>, liveTranscodeOutputArgs: Array<string>, drawFunscriptHeatmapRange: boolean, stashes: Array<{ __typename?: 'StashConfig', path: string, excludeVideo: boolean, excludeImage: boolean }>, stashBoxes: Array<{ __typename?: 'StashBox', name: string, endpoint: string, api_key: string }>, scraperPackageSources: Array<{ __typename?: 'PackageSource', name?: string | null, url: string, local_path?: string | null }>, pluginPackageSources: Array<{ __typename?: 'PackageSource', name?: string | null, url: string, local_path?: string | null }> };

export type ConfigInterfaceDataFragment = { __typename?: 'ConfigInterfaceResult', menuItems?: Array<string> | null, soundOnPreview?: boolean | null, wallShowTitle?: boolean | null, wallPlayback?: string | null, showScrubber?: boolean | null, maximumLoopDuration?: number | null, noBrowser?: boolean | null, notificationsEnabled?: boolean | null, autostartVideo?: boolean | null, autostartVideoOnPlaySelected?: boolean | null, continuePlaylistDefault?: boolean | null, showStudioAsText?: boolean | null, css?: string | null, cssEnabled?: boolean | null, javascript?: string | null, javascriptEnabled?: boolean | null, customLocales?: string | null, customLocalesEnabled?: boolean | null, language?: string | null, handyKey?: string | null, funscriptOffset?: number | null, useStashHostedFunscript?: boolean | null, imageLightbox: { __typename?: 'ConfigImageLightboxResult', slideshowDelay?: number | null, displayMode?: ImageLightboxDisplayMode | null, scaleUp?: boolean | null, resetZoomOnNav?: boolean | null, scrollMode?: ImageLightboxScrollMode | null, scrollAttemptsBeforeChange: number }, disableDropdownCreate: { __typename?: 'ConfigDisableDropdownCreate', performer: boolean, tag: boolean, studio: boolean, movie: boolean } };

export type ConfigDlnaDataFragment = { __typename?: 'ConfigDLNAResult', serverName: string, enabled: boolean, whitelistedIPs: Array<string>, interfaces: Array<string>, videoSortOrder: string };

export type ConfigScrapingDataFragment = { __typename?: 'ConfigScrapingResult', scraperUserAgent?: string | null, scraperCertCheck: boolean, scraperCDPPath?: string | null, excludeTagPatterns: Array<string> };

export type IdentifyFieldOptionsDataFragment = { __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null };

export type IdentifyMetadataOptionsDataFragment = { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, includeMalePerformers?: boolean | null, skipMultipleMatches?: boolean | null, skipMultipleMatchTag?: string | null, skipSingleNamePerformers?: boolean | null, skipSingleNamePerformerTag?: string | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null };

export type ScraperSourceDataFragment = { __typename?: 'ScraperSource', stash_box_index?: number | null, stash_box_endpoint?: string | null, scraper_id?: string | null };

export type ConfigDefaultSettingsDataFragment = { __typename?: 'ConfigDefaultSettingsResult', deleteFile?: boolean | null, deleteGenerated?: boolean | null, scan?: { __typename?: 'ScanMetadataOptions', scanGenerateCovers: boolean, scanGeneratePreviews: boolean, scanGenerateImagePreviews: boolean, scanGenerateSprites: boolean, scanGeneratePhashes: boolean, scanGenerateThumbnails: boolean, scanGenerateClipPreviews: boolean } | null, identify?: { __typename?: 'IdentifyMetadataTaskOptions', sources: Array<{ __typename?: 'IdentifySource', source: { __typename?: 'ScraperSource', stash_box_index?: number | null, stash_box_endpoint?: string | null, scraper_id?: string | null }, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, includeMalePerformers?: boolean | null, skipMultipleMatches?: boolean | null, skipMultipleMatchTag?: string | null, skipSingleNamePerformers?: boolean | null, skipSingleNamePerformerTag?: string | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null }>, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, includeMalePerformers?: boolean | null, skipMultipleMatches?: boolean | null, skipMultipleMatchTag?: string | null, skipSingleNamePerformers?: boolean | null, skipSingleNamePerformerTag?: string | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null } | null, autoTag?: { __typename?: 'AutoTagMetadataOptions', performers?: Array<string> | null, studios?: Array<string> | null, tags?: Array<string> | null } | null, generate?: { __typename?: 'GenerateMetadataOptions', covers?: boolean | null, sprites?: boolean | null, previews?: boolean | null, imagePreviews?: boolean | null, markers?: boolean | null, markerImagePreviews?: boolean | null, markerScreenshots?: boolean | null, transcodes?: boolean | null, phashes?: boolean | null, interactiveHeatmapsSpeeds?: boolean | null, clipPreviews?: boolean | null, previewOptions?: { __typename?: 'GeneratePreviewOptions', previewSegments?: number | null, previewSegmentDuration?: number | null, previewExcludeStart?: string | null, previewExcludeEnd?: string | null, previewPreset?: PreviewPreset | null } | null } | null };

export type ConfigDataFragment = { __typename?: 'ConfigResult', ui: any, plugins: any, general: { __typename?: 'ConfigGeneralResult', databasePath: string, backupDirectoryPath: string, generatedPath: string, metadataPath: string, scrapersPath: string, pluginsPath: string, cachePath: string, blobsPath: string, blobsStorage: BlobsStorageType, calculateMD5: boolean, videoFileNamingAlgorithm: HashAlgorithm, parallelTasks: number, previewAudio: boolean, previewSegments: number, previewSegmentDuration: number, previewExcludeStart: string, previewExcludeEnd: string, previewPreset: PreviewPreset, transcodeHardwareAcceleration: boolean, maxTranscodeSize?: StreamingResolutionEnum | null, maxStreamingTranscodeSize?: StreamingResolutionEnum | null, writeImageThumbnails: boolean, createImageClipsFromVideos: boolean, apiKey: string, username: string, password: string, maxSessionAge: number, logFile?: string | null, logOut: boolean, logLevel: string, logAccess: boolean, createGalleriesFromFolders: boolean, galleryCoverRegex: string, videoExtensions: Array<string>, imageExtensions: Array<string>, galleryExtensions: Array<string>, excludes: Array<string>, imageExcludes: Array<string>, customPerformerImageLocation?: string | null, pythonPath: string, transcodeInputArgs: Array<string>, transcodeOutputArgs: Array<string>, liveTranscodeInputArgs: Array<string>, liveTranscodeOutputArgs: Array<string>, drawFunscriptHeatmapRange: boolean, stashes: Array<{ __typename?: 'StashConfig', path: string, excludeVideo: boolean, excludeImage: boolean }>, stashBoxes: Array<{ __typename?: 'StashBox', name: string, endpoint: string, api_key: string }>, scraperPackageSources: Array<{ __typename?: 'PackageSource', name?: string | null, url: string, local_path?: string | null }>, pluginPackageSources: Array<{ __typename?: 'PackageSource', name?: string | null, url: string, local_path?: string | null }> }, interface: { __typename?: 'ConfigInterfaceResult', menuItems?: Array<string> | null, soundOnPreview?: boolean | null, wallShowTitle?: boolean | null, wallPlayback?: string | null, showScrubber?: boolean | null, maximumLoopDuration?: number | null, noBrowser?: boolean | null, notificationsEnabled?: boolean | null, autostartVideo?: boolean | null, autostartVideoOnPlaySelected?: boolean | null, continuePlaylistDefault?: boolean | null, showStudioAsText?: boolean | null, css?: string | null, cssEnabled?: boolean | null, javascript?: string | null, javascriptEnabled?: boolean | null, customLocales?: string | null, customLocalesEnabled?: boolean | null, language?: string | null, handyKey?: string | null, funscriptOffset?: number | null, useStashHostedFunscript?: boolean | null, imageLightbox: { __typename?: 'ConfigImageLightboxResult', slideshowDelay?: number | null, displayMode?: ImageLightboxDisplayMode | null, scaleUp?: boolean | null, resetZoomOnNav?: boolean | null, scrollMode?: ImageLightboxScrollMode | null, scrollAttemptsBeforeChange: number }, disableDropdownCreate: { __typename?: 'ConfigDisableDropdownCreate', performer: boolean, tag: boolean, studio: boolean, movie: boolean } }, dlna: { __typename?: 'ConfigDLNAResult', serverName: string, enabled: boolean, whitelistedIPs: Array<string>, interfaces: Array<string>, videoSortOrder: string }, scraping: { __typename?: 'ConfigScrapingResult', scraperUserAgent?: string | null, scraperCertCheck: boolean, scraperCDPPath?: string | null, excludeTagPatterns: Array<string> }, defaults: { __typename?: 'ConfigDefaultSettingsResult', deleteFile?: boolean | null, deleteGenerated?: boolean | null, scan?: { __typename?: 'ScanMetadataOptions', scanGenerateCovers: boolean, scanGeneratePreviews: boolean, scanGenerateImagePreviews: boolean, scanGenerateSprites: boolean, scanGeneratePhashes: boolean, scanGenerateThumbnails: boolean, scanGenerateClipPreviews: boolean } | null, identify?: { __typename?: 'IdentifyMetadataTaskOptions', sources: Array<{ __typename?: 'IdentifySource', source: { __typename?: 'ScraperSource', stash_box_index?: number | null, stash_box_endpoint?: string | null, scraper_id?: string | null }, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, includeMalePerformers?: boolean | null, skipMultipleMatches?: boolean | null, skipMultipleMatchTag?: string | null, skipSingleNamePerformers?: boolean | null, skipSingleNamePerformerTag?: string | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null }>, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, includeMalePerformers?: boolean | null, skipMultipleMatches?: boolean | null, skipMultipleMatchTag?: string | null, skipSingleNamePerformers?: boolean | null, skipSingleNamePerformerTag?: string | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null } | null, autoTag?: { __typename?: 'AutoTagMetadataOptions', performers?: Array<string> | null, studios?: Array<string> | null, tags?: Array<string> | null } | null, generate?: { __typename?: 'GenerateMetadataOptions', covers?: boolean | null, sprites?: boolean | null, previews?: boolean | null, imagePreviews?: boolean | null, markers?: boolean | null, markerImagePreviews?: boolean | null, markerScreenshots?: boolean | null, transcodes?: boolean | null, phashes?: boolean | null, interactiveHeatmapsSpeeds?: boolean | null, clipPreviews?: boolean | null, previewOptions?: { __typename?: 'GeneratePreviewOptions', previewSegments?: number | null, previewSegmentDuration?: number | null, previewExcludeStart?: string | null, previewExcludeEnd?: string | null, previewPreset?: PreviewPreset | null } | null } | null } };

export type FolderDataFragment = { __typename?: 'Folder', id: string, path: string };

export type VideoFileDataFragment = { __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> };

export type ImageFileDataFragment = { __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> };

export type GalleryFileDataFragment = { __typename?: 'GalleryFile', id: string, path: string, size: any, mod_time: any, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> };

type VisualFileData_ImageFile_Fragment = { __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> };

type VisualFileData_VideoFile_Fragment = { __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> };

export type VisualFileDataFragment = VisualFileData_ImageFile_Fragment | VisualFileData_VideoFile_Fragment;

export type SavedFilterDataFragment = { __typename?: 'SavedFilter', id: string, mode: FilterMode, name: string, object_filter?: any | null, ui_options?: any | null, find_filter?: { __typename?: 'SavedFindFilterType', q?: string | null, page?: number | null, per_page?: number | null, sort?: string | null, direction?: SortDirectionEnum | null } | null };

export type GalleryChapterDataFragment = { __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } };

export type SlimGalleryDataFragment = { __typename?: 'Gallery', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: any, mod_time: any, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, path: string } | null, cover?: { __typename?: 'Image', id: string, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null } } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> };

export type GalleryDataFragment = { __typename?: 'Gallery', id: string, created_at: any, updated_at: any, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: any, mod_time: any, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } }>, cover?: { __typename?: 'Image', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, o_counter?: number | null, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> };

export type SlimImageDataFragment = { __typename?: 'Image', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, o_counter?: number | null, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> };

export type ImageDataFragment = { __typename?: 'Image', id: string, title?: string | null, code?: string | null, rating100?: number | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, organized: boolean, o_counter?: number | null, created_at: any, updated_at: any, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, created_at: any, updated_at: any, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: any, mod_time: any, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } }>, cover?: { __typename?: 'Image', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, o_counter?: number | null, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> };

export type JobDataFragment = { __typename?: 'Job', id: string, status: JobStatus, subTasks?: Array<string> | null, description: string, progress?: number | null, startTime?: any | null, endTime?: any | null, addTime: any };

export type LogEntryDataFragment = { __typename?: 'LogEntry', time: any, level: LogLevel, message: string };

export type SlimMovieDataFragment = { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null, rating100?: number | null };

export type MovieDataFragment = { __typename?: 'Movie', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> };

export type PackageDataFragment = { __typename?: 'Package', package_id: string, name: string, version?: string | null, date?: any | null, metadata: any, sourceURL: string };

export type SlimPerformerDataFragment = { __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, url?: string | null, twitter?: string | null, instagram?: string | null, image_path?: string | null, favorite: boolean, ignore_auto_tag: boolean, country?: string | null, birthdate?: string | null, ethnicity?: string | null, hair_color?: string | null, eye_color?: string | null, height_cm?: number | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, rating100?: number | null, death_date?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> };

export type SelectPerformerDataFragment = { __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, alias_list: Array<string>, image_path?: string | null };

export type PerformerDataFragment = { __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> };

export type SceneMarkerDataFragment = { __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> };

export type SlimSceneDataFragment = { __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> };

export type SceneDataFragment = { __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, created_at: any, updated_at: any, resume_time?: number | null, last_played_at?: any | null, play_duration?: number | null, play_count?: number | null, captions?: Array<{ __typename?: 'VideoCaption', language_code: string, caption_type: string }> | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: any, mod_time: any, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, path: string } | null, cover?: { __typename?: 'Image', id: string, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null } } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> };

export type ScrapedStudioDataFragment = { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null } | null };

export type ScrapedPerformerDataFragment = { __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null };

export type ScrapedScenePerformerDataFragment = { __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null };

export type ScrapedMovieStudioDataFragment = { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null };

export type ScrapedMovieDataFragment = { __typename?: 'ScrapedMovie', name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, url?: string | null, synopsis?: string | null, front_image?: string | null, back_image?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null } | null };

export type ScrapedSceneMovieDataFragment = { __typename?: 'ScrapedMovie', stored_id?: string | null, name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, url?: string | null, synopsis?: string | null, front_image?: string | null, back_image?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null } | null };

export type ScrapedSceneStudioDataFragment = { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null } | null };

export type ScrapedSceneTagDataFragment = { __typename?: 'ScrapedTag', stored_id?: string | null, name: string };

export type ScrapedSceneDataFragment = { __typename?: 'ScrapedScene', title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls?: Array<string> | null, date?: string | null, image?: string | null, remote_site_id?: string | null, file?: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null } | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null } | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }> | null, movies?: Array<{ __typename?: 'ScrapedMovie', stored_id?: string | null, name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, url?: string | null, synopsis?: string | null, front_image?: string | null, back_image?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null } | null }> | null, fingerprints?: Array<{ __typename?: 'StashBoxFingerprint', hash: string, algorithm: string, duration: number }> | null };

export type ScrapedGalleryDataFragment = { __typename?: 'ScrapedGallery', title?: string | null, code?: string | null, details?: string | null, urls?: Array<string> | null, photographer?: string | null, date?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null } | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }> | null };

export type ScrapedStashBoxSceneDataFragment = { __typename?: 'ScrapedScene', title?: string | null, code?: string | null, details?: string | null, director?: string | null, url?: string | null, date?: string | null, image?: string | null, remote_site_id?: string | null, duration?: number | null, file?: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null } | null, fingerprints?: Array<{ __typename?: 'StashBoxFingerprint', hash: string, algorithm: string, duration: number }> | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null } | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }> | null, movies?: Array<{ __typename?: 'ScrapedMovie', stored_id?: string | null, name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, url?: string | null, synopsis?: string | null, front_image?: string | null, back_image?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null } | null }> | null };

export type ScrapedStashBoxPerformerDataFragment = { __typename?: 'StashBoxPerformerQueryResult', query: string, results: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }> };

export type SlimStudioDataFragment = { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null };

export type StudioDataFragment = { __typename?: 'Studio', id: string, name: string, url?: string | null, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, performer_count: number, movie_count: number, details?: string | null, rating100?: number | null, aliases: Array<string>, scene_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, movie_count_all: number, parent_studio?: { __typename?: 'Studio', id: string, name: string, url?: string | null, image_path?: string | null } | null, child_studios: Array<{ __typename?: 'Studio', id: string, name: string, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> };

export type SlimTagDataFragment = { __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number };

export type TagDataFragment = { __typename?: 'Tag', id: string, name: string, description?: string | null, aliases: Array<string>, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, scene_marker_count: number, image_count: number, gallery_count: number, performer_count: number, scene_count_all: number, scene_marker_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, parents: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, children: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }> };

export type SetupMutationVariables = Exact<{
  input: SetupInput;
}>;


export type SetupMutation = { __typename?: 'Mutation', setup: boolean };

export type MigrateMutationVariables = Exact<{
  input: MigrateInput;
}>;


export type MigrateMutation = { __typename?: 'Mutation', migrate: boolean };

export type ConfigureGeneralMutationVariables = Exact<{
  input: ConfigGeneralInput;
}>;


export type ConfigureGeneralMutation = { __typename?: 'Mutation', configureGeneral: { __typename?: 'ConfigGeneralResult', databasePath: string, backupDirectoryPath: string, generatedPath: string, metadataPath: string, scrapersPath: string, pluginsPath: string, cachePath: string, blobsPath: string, blobsStorage: BlobsStorageType, calculateMD5: boolean, videoFileNamingAlgorithm: HashAlgorithm, parallelTasks: number, previewAudio: boolean, previewSegments: number, previewSegmentDuration: number, previewExcludeStart: string, previewExcludeEnd: string, previewPreset: PreviewPreset, transcodeHardwareAcceleration: boolean, maxTranscodeSize?: StreamingResolutionEnum | null, maxStreamingTranscodeSize?: StreamingResolutionEnum | null, writeImageThumbnails: boolean, createImageClipsFromVideos: boolean, apiKey: string, username: string, password: string, maxSessionAge: number, logFile?: string | null, logOut: boolean, logLevel: string, logAccess: boolean, createGalleriesFromFolders: boolean, galleryCoverRegex: string, videoExtensions: Array<string>, imageExtensions: Array<string>, galleryExtensions: Array<string>, excludes: Array<string>, imageExcludes: Array<string>, customPerformerImageLocation?: string | null, pythonPath: string, transcodeInputArgs: Array<string>, transcodeOutputArgs: Array<string>, liveTranscodeInputArgs: Array<string>, liveTranscodeOutputArgs: Array<string>, drawFunscriptHeatmapRange: boolean, stashes: Array<{ __typename?: 'StashConfig', path: string, excludeVideo: boolean, excludeImage: boolean }>, stashBoxes: Array<{ __typename?: 'StashBox', name: string, endpoint: string, api_key: string }>, scraperPackageSources: Array<{ __typename?: 'PackageSource', name?: string | null, url: string, local_path?: string | null }>, pluginPackageSources: Array<{ __typename?: 'PackageSource', name?: string | null, url: string, local_path?: string | null }> } };

export type ConfigureInterfaceMutationVariables = Exact<{
  input: ConfigInterfaceInput;
}>;


export type ConfigureInterfaceMutation = { __typename?: 'Mutation', configureInterface: { __typename?: 'ConfigInterfaceResult', menuItems?: Array<string> | null, soundOnPreview?: boolean | null, wallShowTitle?: boolean | null, wallPlayback?: string | null, showScrubber?: boolean | null, maximumLoopDuration?: number | null, noBrowser?: boolean | null, notificationsEnabled?: boolean | null, autostartVideo?: boolean | null, autostartVideoOnPlaySelected?: boolean | null, continuePlaylistDefault?: boolean | null, showStudioAsText?: boolean | null, css?: string | null, cssEnabled?: boolean | null, javascript?: string | null, javascriptEnabled?: boolean | null, customLocales?: string | null, customLocalesEnabled?: boolean | null, language?: string | null, handyKey?: string | null, funscriptOffset?: number | null, useStashHostedFunscript?: boolean | null, imageLightbox: { __typename?: 'ConfigImageLightboxResult', slideshowDelay?: number | null, displayMode?: ImageLightboxDisplayMode | null, scaleUp?: boolean | null, resetZoomOnNav?: boolean | null, scrollMode?: ImageLightboxScrollMode | null, scrollAttemptsBeforeChange: number }, disableDropdownCreate: { __typename?: 'ConfigDisableDropdownCreate', performer: boolean, tag: boolean, studio: boolean, movie: boolean } } };

export type ConfigureDlnaMutationVariables = Exact<{
  input: ConfigDlnaInput;
}>;


export type ConfigureDlnaMutation = { __typename?: 'Mutation', configureDLNA: { __typename?: 'ConfigDLNAResult', serverName: string, enabled: boolean, whitelistedIPs: Array<string>, interfaces: Array<string>, videoSortOrder: string } };

export type ConfigureScrapingMutationVariables = Exact<{
  input: ConfigScrapingInput;
}>;


export type ConfigureScrapingMutation = { __typename?: 'Mutation', configureScraping: { __typename?: 'ConfigScrapingResult', scraperUserAgent?: string | null, scraperCertCheck: boolean, scraperCDPPath?: string | null, excludeTagPatterns: Array<string> } };

export type ConfigureDefaultsMutationVariables = Exact<{
  input: ConfigDefaultSettingsInput;
}>;


export type ConfigureDefaultsMutation = { __typename?: 'Mutation', configureDefaults: { __typename?: 'ConfigDefaultSettingsResult', deleteFile?: boolean | null, deleteGenerated?: boolean | null, scan?: { __typename?: 'ScanMetadataOptions', scanGenerateCovers: boolean, scanGeneratePreviews: boolean, scanGenerateImagePreviews: boolean, scanGenerateSprites: boolean, scanGeneratePhashes: boolean, scanGenerateThumbnails: boolean, scanGenerateClipPreviews: boolean } | null, identify?: { __typename?: 'IdentifyMetadataTaskOptions', sources: Array<{ __typename?: 'IdentifySource', source: { __typename?: 'ScraperSource', stash_box_index?: number | null, stash_box_endpoint?: string | null, scraper_id?: string | null }, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, includeMalePerformers?: boolean | null, skipMultipleMatches?: boolean | null, skipMultipleMatchTag?: string | null, skipSingleNamePerformers?: boolean | null, skipSingleNamePerformerTag?: string | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null }>, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, includeMalePerformers?: boolean | null, skipMultipleMatches?: boolean | null, skipMultipleMatchTag?: string | null, skipSingleNamePerformers?: boolean | null, skipSingleNamePerformerTag?: string | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null } | null, autoTag?: { __typename?: 'AutoTagMetadataOptions', performers?: Array<string> | null, studios?: Array<string> | null, tags?: Array<string> | null } | null, generate?: { __typename?: 'GenerateMetadataOptions', covers?: boolean | null, sprites?: boolean | null, previews?: boolean | null, imagePreviews?: boolean | null, markers?: boolean | null, markerImagePreviews?: boolean | null, markerScreenshots?: boolean | null, transcodes?: boolean | null, phashes?: boolean | null, interactiveHeatmapsSpeeds?: boolean | null, clipPreviews?: boolean | null, previewOptions?: { __typename?: 'GeneratePreviewOptions', previewSegments?: number | null, previewSegmentDuration?: number | null, previewExcludeStart?: string | null, previewExcludeEnd?: string | null, previewPreset?: PreviewPreset | null } | null } | null } };

export type ConfigureUiMutationVariables = Exact<{
  input: Scalars['Map'];
}>;


export type ConfigureUiMutation = { __typename?: 'Mutation', configureUI: any };

export type GenerateApiKeyMutationVariables = Exact<{
  input: GenerateApiKeyInput;
}>;


export type GenerateApiKeyMutation = { __typename?: 'Mutation', generateAPIKey: string };

export type EnableDlnaMutationVariables = Exact<{
  input: EnableDlnaInput;
}>;


export type EnableDlnaMutation = { __typename?: 'Mutation', enableDLNA: boolean };

export type DisableDlnaMutationVariables = Exact<{
  input: DisableDlnaInput;
}>;


export type DisableDlnaMutation = { __typename?: 'Mutation', disableDLNA: boolean };

export type AddTempDlnaipMutationVariables = Exact<{
  input: AddTempDlnaipInput;
}>;


export type AddTempDlnaipMutation = { __typename?: 'Mutation', addTempDLNAIP: boolean };

export type RemoveTempDlnaipMutationVariables = Exact<{
  input: RemoveTempDlnaipInput;
}>;


export type RemoveTempDlnaipMutation = { __typename?: 'Mutation', removeTempDLNAIP: boolean };

export type DeleteFilesMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type DeleteFilesMutation = { __typename?: 'Mutation', deleteFiles: boolean };

export type SaveFilterMutationVariables = Exact<{
  input: SaveFilterInput;
}>;


export type SaveFilterMutation = { __typename?: 'Mutation', saveFilter: { __typename?: 'SavedFilter', id: string, mode: FilterMode, name: string, object_filter?: any | null, ui_options?: any | null, find_filter?: { __typename?: 'SavedFindFilterType', q?: string | null, page?: number | null, per_page?: number | null, sort?: string | null, direction?: SortDirectionEnum | null } | null } };

export type DestroySavedFilterMutationVariables = Exact<{
  input: DestroyFilterInput;
}>;


export type DestroySavedFilterMutation = { __typename?: 'Mutation', destroySavedFilter: boolean };

export type SetDefaultFilterMutationVariables = Exact<{
  input: SetDefaultFilterInput;
}>;


export type SetDefaultFilterMutation = { __typename?: 'Mutation', setDefaultFilter: boolean };

export type GalleryChapterCreateMutationVariables = Exact<{
  title: Scalars['String'];
  image_index: Scalars['Int'];
  gallery_id: Scalars['ID'];
}>;


export type GalleryChapterCreateMutation = { __typename?: 'Mutation', galleryChapterCreate?: { __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } } | null };

export type GalleryChapterUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  title: Scalars['String'];
  image_index: Scalars['Int'];
  gallery_id: Scalars['ID'];
}>;


export type GalleryChapterUpdateMutation = { __typename?: 'Mutation', galleryChapterUpdate?: { __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } } | null };

export type GalleryChapterDestroyMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GalleryChapterDestroyMutation = { __typename?: 'Mutation', galleryChapterDestroy: boolean };

export type GalleryCreateMutationVariables = Exact<{
  input: GalleryCreateInput;
}>;


export type GalleryCreateMutation = { __typename?: 'Mutation', galleryCreate?: { __typename?: 'Gallery', id: string, created_at: any, updated_at: any, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: any, mod_time: any, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } }>, cover?: { __typename?: 'Image', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, o_counter?: number | null, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> } | null };

export type GalleryUpdateMutationVariables = Exact<{
  input: GalleryUpdateInput;
}>;


export type GalleryUpdateMutation = { __typename?: 'Mutation', galleryUpdate?: { __typename?: 'Gallery', id: string, created_at: any, updated_at: any, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: any, mod_time: any, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } }>, cover?: { __typename?: 'Image', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, o_counter?: number | null, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> } | null };

export type BulkGalleryUpdateMutationVariables = Exact<{
  input: BulkGalleryUpdateInput;
}>;


export type BulkGalleryUpdateMutation = { __typename?: 'Mutation', bulkGalleryUpdate?: Array<{ __typename?: 'Gallery', id: string, created_at: any, updated_at: any, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: any, mod_time: any, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } }>, cover?: { __typename?: 'Image', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, o_counter?: number | null, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> }> | null };

export type GalleriesUpdateMutationVariables = Exact<{
  input: Array<GalleryUpdateInput> | GalleryUpdateInput;
}>;


export type GalleriesUpdateMutation = { __typename?: 'Mutation', galleriesUpdate?: Array<{ __typename?: 'Gallery', id: string, created_at: any, updated_at: any, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: any, mod_time: any, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } }>, cover?: { __typename?: 'Image', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, o_counter?: number | null, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> } | null> | null };

export type GalleryDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
  delete_file?: InputMaybe<Scalars['Boolean']>;
  delete_generated?: InputMaybe<Scalars['Boolean']>;
}>;


export type GalleryDestroyMutation = { __typename?: 'Mutation', galleryDestroy: boolean };

export type AddGalleryImagesMutationVariables = Exact<{
  gallery_id: Scalars['ID'];
  image_ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type AddGalleryImagesMutation = { __typename?: 'Mutation', addGalleryImages: boolean };

export type RemoveGalleryImagesMutationVariables = Exact<{
  gallery_id: Scalars['ID'];
  image_ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type RemoveGalleryImagesMutation = { __typename?: 'Mutation', removeGalleryImages: boolean };

export type ImageUpdateMutationVariables = Exact<{
  input: ImageUpdateInput;
}>;


export type ImageUpdateMutation = { __typename?: 'Mutation', imageUpdate?: { __typename?: 'Image', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, o_counter?: number | null, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> } | null };

export type BulkImageUpdateMutationVariables = Exact<{
  input: BulkImageUpdateInput;
}>;


export type BulkImageUpdateMutation = { __typename?: 'Mutation', bulkImageUpdate?: Array<{ __typename?: 'Image', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, o_counter?: number | null, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> }> | null };

export type ImagesUpdateMutationVariables = Exact<{
  input: Array<ImageUpdateInput> | ImageUpdateInput;
}>;


export type ImagesUpdateMutation = { __typename?: 'Mutation', imagesUpdate?: Array<{ __typename?: 'Image', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, o_counter?: number | null, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> } | null> | null };

export type ImageIncrementOMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ImageIncrementOMutation = { __typename?: 'Mutation', imageIncrementO: number };

export type ImageDecrementOMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ImageDecrementOMutation = { __typename?: 'Mutation', imageDecrementO: number };

export type ImageResetOMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ImageResetOMutation = { __typename?: 'Mutation', imageResetO: number };

export type ImageDestroyMutationVariables = Exact<{
  id: Scalars['ID'];
  delete_file?: InputMaybe<Scalars['Boolean']>;
  delete_generated?: InputMaybe<Scalars['Boolean']>;
}>;


export type ImageDestroyMutation = { __typename?: 'Mutation', imageDestroy: boolean };

export type ImagesDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
  delete_file?: InputMaybe<Scalars['Boolean']>;
  delete_generated?: InputMaybe<Scalars['Boolean']>;
}>;


export type ImagesDestroyMutation = { __typename?: 'Mutation', imagesDestroy: boolean };

export type StopJobMutationVariables = Exact<{
  job_id: Scalars['ID'];
}>;


export type StopJobMutation = { __typename?: 'Mutation', stopJob: boolean };

export type StopAllJobsMutationVariables = Exact<{ [key: string]: never; }>;


export type StopAllJobsMutation = { __typename?: 'Mutation', stopAllJobs: boolean };

export type MetadataImportMutationVariables = Exact<{ [key: string]: never; }>;


export type MetadataImportMutation = { __typename?: 'Mutation', metadataImport: string };

export type MetadataExportMutationVariables = Exact<{ [key: string]: never; }>;


export type MetadataExportMutation = { __typename?: 'Mutation', metadataExport: string };

export type ExportObjectsMutationVariables = Exact<{
  input: ExportObjectsInput;
}>;


export type ExportObjectsMutation = { __typename?: 'Mutation', exportObjects?: string | null };

export type ImportObjectsMutationVariables = Exact<{
  input: ImportObjectsInput;
}>;


export type ImportObjectsMutation = { __typename?: 'Mutation', importObjects: string };

export type MetadataScanMutationVariables = Exact<{
  input: ScanMetadataInput;
}>;


export type MetadataScanMutation = { __typename?: 'Mutation', metadataScan: string };

export type MetadataGenerateMutationVariables = Exact<{
  input: GenerateMetadataInput;
}>;


export type MetadataGenerateMutation = { __typename?: 'Mutation', metadataGenerate: string };

export type MetadataAutoTagMutationVariables = Exact<{
  input: AutoTagMetadataInput;
}>;


export type MetadataAutoTagMutation = { __typename?: 'Mutation', metadataAutoTag: string };

export type MetadataIdentifyMutationVariables = Exact<{
  input: IdentifyMetadataInput;
}>;


export type MetadataIdentifyMutation = { __typename?: 'Mutation', metadataIdentify: string };

export type MetadataCleanMutationVariables = Exact<{
  input: CleanMetadataInput;
}>;


export type MetadataCleanMutation = { __typename?: 'Mutation', metadataClean: string };

export type MigrateHashNamingMutationVariables = Exact<{ [key: string]: never; }>;


export type MigrateHashNamingMutation = { __typename?: 'Mutation', migrateHashNaming: string };

export type BackupDatabaseMutationVariables = Exact<{
  input: BackupDatabaseInput;
}>;


export type BackupDatabaseMutation = { __typename?: 'Mutation', backupDatabase?: string | null };

export type AnonymiseDatabaseMutationVariables = Exact<{
  input: AnonymiseDatabaseInput;
}>;


export type AnonymiseDatabaseMutation = { __typename?: 'Mutation', anonymiseDatabase?: string | null };

export type OptimiseDatabaseMutationVariables = Exact<{ [key: string]: never; }>;


export type OptimiseDatabaseMutation = { __typename?: 'Mutation', optimiseDatabase: string };

export type MigrateSceneScreenshotsMutationVariables = Exact<{
  input: MigrateSceneScreenshotsInput;
}>;


export type MigrateSceneScreenshotsMutation = { __typename?: 'Mutation', migrateSceneScreenshots: string };

export type MigrateBlobsMutationVariables = Exact<{
  input: MigrateBlobsInput;
}>;


export type MigrateBlobsMutation = { __typename?: 'Mutation', migrateBlobs: string };

export type MovieCreateMutationVariables = Exact<{
  input: MovieCreateInput;
}>;


export type MovieCreateMutation = { __typename?: 'Mutation', movieCreate?: { __typename?: 'Movie', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } | null };

export type MovieUpdateMutationVariables = Exact<{
  input: MovieUpdateInput;
}>;


export type MovieUpdateMutation = { __typename?: 'Mutation', movieUpdate?: { __typename?: 'Movie', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } | null };

export type BulkMovieUpdateMutationVariables = Exact<{
  input: BulkMovieUpdateInput;
}>;


export type BulkMovieUpdateMutation = { __typename?: 'Mutation', bulkMovieUpdate?: Array<{ __typename?: 'Movie', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> }> | null };

export type MovieDestroyMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MovieDestroyMutation = { __typename?: 'Mutation', movieDestroy: boolean };

export type MoviesDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type MoviesDestroyMutation = { __typename?: 'Mutation', moviesDestroy: boolean };

export type PerformerCreateMutationVariables = Exact<{
  input: PerformerCreateInput;
}>;


export type PerformerCreateMutation = { __typename?: 'Mutation', performerCreate?: { __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> } | null };

export type PerformerUpdateMutationVariables = Exact<{
  input: PerformerUpdateInput;
}>;


export type PerformerUpdateMutation = { __typename?: 'Mutation', performerUpdate?: { __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> } | null };

export type BulkPerformerUpdateMutationVariables = Exact<{
  input: BulkPerformerUpdateInput;
}>;


export type BulkPerformerUpdateMutation = { __typename?: 'Mutation', bulkPerformerUpdate?: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }> | null };

export type PerformerDestroyMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PerformerDestroyMutation = { __typename?: 'Mutation', performerDestroy: boolean };

export type PerformersDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type PerformersDestroyMutation = { __typename?: 'Mutation', performersDestroy: boolean };

export type ReloadPluginsMutationVariables = Exact<{ [key: string]: never; }>;


export type ReloadPluginsMutation = { __typename?: 'Mutation', reloadPlugins: boolean };

export type RunPluginTaskMutationVariables = Exact<{
  plugin_id: Scalars['ID'];
  task_name: Scalars['String'];
  args?: InputMaybe<Array<PluginArgInput> | PluginArgInput>;
}>;


export type RunPluginTaskMutation = { __typename?: 'Mutation', runPluginTask: string };

export type ConfigurePluginMutationVariables = Exact<{
  plugin_id: Scalars['ID'];
  input: Scalars['Map'];
}>;


export type ConfigurePluginMutation = { __typename?: 'Mutation', configurePlugin: any };

export type SetPluginsEnabledMutationVariables = Exact<{
  enabledMap: Scalars['BoolMap'];
}>;


export type SetPluginsEnabledMutation = { __typename?: 'Mutation', setPluginsEnabled: boolean };

export type InstallPluginPackagesMutationVariables = Exact<{
  packages: Array<PackageSpecInput> | PackageSpecInput;
}>;


export type InstallPluginPackagesMutation = { __typename?: 'Mutation', installPackages: string };

export type UpdatePluginPackagesMutationVariables = Exact<{
  packages: Array<PackageSpecInput> | PackageSpecInput;
}>;


export type UpdatePluginPackagesMutation = { __typename?: 'Mutation', updatePackages: string };

export type UninstallPluginPackagesMutationVariables = Exact<{
  packages: Array<PackageSpecInput> | PackageSpecInput;
}>;


export type UninstallPluginPackagesMutation = { __typename?: 'Mutation', uninstallPackages: string };

export type SceneMarkerCreateMutationVariables = Exact<{
  title: Scalars['String'];
  seconds: Scalars['Float'];
  scene_id: Scalars['ID'];
  primary_tag_id: Scalars['ID'];
  tag_ids?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;


export type SceneMarkerCreateMutation = { __typename?: 'Mutation', sceneMarkerCreate?: { __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null };

export type SceneMarkerUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  title: Scalars['String'];
  seconds: Scalars['Float'];
  scene_id: Scalars['ID'];
  primary_tag_id: Scalars['ID'];
  tag_ids?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;


export type SceneMarkerUpdateMutation = { __typename?: 'Mutation', sceneMarkerUpdate?: { __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null };

export type SceneMarkerDestroyMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SceneMarkerDestroyMutation = { __typename?: 'Mutation', sceneMarkerDestroy: boolean };

export type SceneCreateMutationVariables = Exact<{
  input: SceneCreateInput;
}>;


export type SceneCreateMutation = { __typename?: 'Mutation', sceneCreate?: { __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, created_at: any, updated_at: any, resume_time?: number | null, last_played_at?: any | null, play_duration?: number | null, play_count?: number | null, captions?: Array<{ __typename?: 'VideoCaption', language_code: string, caption_type: string }> | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: any, mod_time: any, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, path: string } | null, cover?: { __typename?: 'Image', id: string, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null } } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> } | null };

export type SceneUpdateMutationVariables = Exact<{
  input: SceneUpdateInput;
}>;


export type SceneUpdateMutation = { __typename?: 'Mutation', sceneUpdate?: { __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, created_at: any, updated_at: any, resume_time?: number | null, last_played_at?: any | null, play_duration?: number | null, play_count?: number | null, captions?: Array<{ __typename?: 'VideoCaption', language_code: string, caption_type: string }> | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: any, mod_time: any, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, path: string } | null, cover?: { __typename?: 'Image', id: string, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null } } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> } | null };

export type BulkSceneUpdateMutationVariables = Exact<{
  input: BulkSceneUpdateInput;
}>;


export type BulkSceneUpdateMutation = { __typename?: 'Mutation', bulkSceneUpdate?: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, created_at: any, updated_at: any, resume_time?: number | null, last_played_at?: any | null, play_duration?: number | null, play_count?: number | null, captions?: Array<{ __typename?: 'VideoCaption', language_code: string, caption_type: string }> | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: any, mod_time: any, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, path: string } | null, cover?: { __typename?: 'Image', id: string, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null } } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> }> | null };

export type ScenesUpdateMutationVariables = Exact<{
  input: Array<SceneUpdateInput> | SceneUpdateInput;
}>;


export type ScenesUpdateMutation = { __typename?: 'Mutation', scenesUpdate?: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, created_at: any, updated_at: any, resume_time?: number | null, last_played_at?: any | null, play_duration?: number | null, play_count?: number | null, captions?: Array<{ __typename?: 'VideoCaption', language_code: string, caption_type: string }> | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: any, mod_time: any, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, path: string } | null, cover?: { __typename?: 'Image', id: string, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null } } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> } | null> | null };

export type SceneSaveActivityMutationVariables = Exact<{
  id: Scalars['ID'];
  resume_time?: InputMaybe<Scalars['Float']>;
  playDuration?: InputMaybe<Scalars['Float']>;
}>;


export type SceneSaveActivityMutation = { __typename?: 'Mutation', sceneSaveActivity: boolean };

export type SceneIncrementPlayCountMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SceneIncrementPlayCountMutation = { __typename?: 'Mutation', sceneIncrementPlayCount: number };

export type SceneIncrementOMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SceneIncrementOMutation = { __typename?: 'Mutation', sceneIncrementO: number };

export type SceneDecrementOMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SceneDecrementOMutation = { __typename?: 'Mutation', sceneDecrementO: number };

export type SceneResetOMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SceneResetOMutation = { __typename?: 'Mutation', sceneResetO: number };

export type SceneDestroyMutationVariables = Exact<{
  id: Scalars['ID'];
  delete_file?: InputMaybe<Scalars['Boolean']>;
  delete_generated?: InputMaybe<Scalars['Boolean']>;
}>;


export type SceneDestroyMutation = { __typename?: 'Mutation', sceneDestroy: boolean };

export type ScenesDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
  delete_file?: InputMaybe<Scalars['Boolean']>;
  delete_generated?: InputMaybe<Scalars['Boolean']>;
}>;


export type ScenesDestroyMutation = { __typename?: 'Mutation', scenesDestroy: boolean };

export type SceneGenerateScreenshotMutationVariables = Exact<{
  id: Scalars['ID'];
  at?: InputMaybe<Scalars['Float']>;
}>;


export type SceneGenerateScreenshotMutation = { __typename?: 'Mutation', sceneGenerateScreenshot: string };

export type SceneAssignFileMutationVariables = Exact<{
  input: AssignSceneFileInput;
}>;


export type SceneAssignFileMutation = { __typename?: 'Mutation', sceneAssignFile: boolean };

export type SceneMergeMutationVariables = Exact<{
  input: SceneMergeInput;
}>;


export type SceneMergeMutation = { __typename?: 'Mutation', sceneMerge?: { __typename?: 'Scene', id: string } | null };

export type ReloadScrapersMutationVariables = Exact<{ [key: string]: never; }>;


export type ReloadScrapersMutation = { __typename?: 'Mutation', reloadScrapers: boolean };

export type InstallScraperPackagesMutationVariables = Exact<{
  packages: Array<PackageSpecInput> | PackageSpecInput;
}>;


export type InstallScraperPackagesMutation = { __typename?: 'Mutation', installPackages: string };

export type UpdateScraperPackagesMutationVariables = Exact<{
  packages: Array<PackageSpecInput> | PackageSpecInput;
}>;


export type UpdateScraperPackagesMutation = { __typename?: 'Mutation', updatePackages: string };

export type UninstallScraperPackagesMutationVariables = Exact<{
  packages: Array<PackageSpecInput> | PackageSpecInput;
}>;


export type UninstallScraperPackagesMutation = { __typename?: 'Mutation', uninstallPackages: string };

export type SubmitStashBoxFingerprintsMutationVariables = Exact<{
  input: StashBoxFingerprintSubmissionInput;
}>;


export type SubmitStashBoxFingerprintsMutation = { __typename?: 'Mutation', submitStashBoxFingerprints: boolean };

export type StashBoxBatchPerformerTagMutationVariables = Exact<{
  input: StashBoxBatchTagInput;
}>;


export type StashBoxBatchPerformerTagMutation = { __typename?: 'Mutation', stashBoxBatchPerformerTag: string };

export type StashBoxBatchStudioTagMutationVariables = Exact<{
  input: StashBoxBatchTagInput;
}>;


export type StashBoxBatchStudioTagMutation = { __typename?: 'Mutation', stashBoxBatchStudioTag: string };

export type SubmitStashBoxSceneDraftMutationVariables = Exact<{
  input: StashBoxDraftSubmissionInput;
}>;


export type SubmitStashBoxSceneDraftMutation = { __typename?: 'Mutation', submitStashBoxSceneDraft?: string | null };

export type SubmitStashBoxPerformerDraftMutationVariables = Exact<{
  input: StashBoxDraftSubmissionInput;
}>;


export type SubmitStashBoxPerformerDraftMutation = { __typename?: 'Mutation', submitStashBoxPerformerDraft?: string | null };

export type StudioCreateMutationVariables = Exact<{
  input: StudioCreateInput;
}>;


export type StudioCreateMutation = { __typename?: 'Mutation', studioCreate?: { __typename?: 'Studio', id: string, name: string, url?: string | null, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, performer_count: number, movie_count: number, details?: string | null, rating100?: number | null, aliases: Array<string>, scene_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, movie_count_all: number, parent_studio?: { __typename?: 'Studio', id: string, name: string, url?: string | null, image_path?: string | null } | null, child_studios: Array<{ __typename?: 'Studio', id: string, name: string, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> } | null };

export type StudioUpdateMutationVariables = Exact<{
  input: StudioUpdateInput;
}>;


export type StudioUpdateMutation = { __typename?: 'Mutation', studioUpdate?: { __typename?: 'Studio', id: string, name: string, url?: string | null, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, performer_count: number, movie_count: number, details?: string | null, rating100?: number | null, aliases: Array<string>, scene_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, movie_count_all: number, parent_studio?: { __typename?: 'Studio', id: string, name: string, url?: string | null, image_path?: string | null } | null, child_studios: Array<{ __typename?: 'Studio', id: string, name: string, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> } | null };

export type StudioDestroyMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type StudioDestroyMutation = { __typename?: 'Mutation', studioDestroy: boolean };

export type StudiosDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type StudiosDestroyMutation = { __typename?: 'Mutation', studiosDestroy: boolean };

export type TagCreateMutationVariables = Exact<{
  input: TagCreateInput;
}>;


export type TagCreateMutation = { __typename?: 'Mutation', tagCreate?: { __typename?: 'Tag', id: string, name: string, description?: string | null, aliases: Array<string>, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, scene_marker_count: number, image_count: number, gallery_count: number, performer_count: number, scene_count_all: number, scene_marker_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, parents: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, children: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }> } | null };

export type TagDestroyMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TagDestroyMutation = { __typename?: 'Mutation', tagDestroy: boolean };

export type TagsDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type TagsDestroyMutation = { __typename?: 'Mutation', tagsDestroy: boolean };

export type TagUpdateMutationVariables = Exact<{
  input: TagUpdateInput;
}>;


export type TagUpdateMutation = { __typename?: 'Mutation', tagUpdate?: { __typename?: 'Tag', id: string, name: string, description?: string | null, aliases: Array<string>, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, scene_marker_count: number, image_count: number, gallery_count: number, performer_count: number, scene_count_all: number, scene_marker_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, parents: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, children: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }> } | null };

export type TagsMergeMutationVariables = Exact<{
  source: Array<Scalars['ID']> | Scalars['ID'];
  destination: Scalars['ID'];
}>;


export type TagsMergeMutation = { __typename?: 'Mutation', tagsMerge?: { __typename?: 'Tag', id: string, name: string, description?: string | null, aliases: Array<string>, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, scene_marker_count: number, image_count: number, gallery_count: number, performer_count: number, scene_count_all: number, scene_marker_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, parents: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, children: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }> } | null };

export type DlnaStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type DlnaStatusQuery = { __typename?: 'Query', dlnaStatus: { __typename?: 'DLNAStatus', running: boolean, until?: any | null, recentIPAddresses: Array<string>, allowedIPAddresses: Array<{ __typename?: 'DLNAIP', ipAddress: string, until?: any | null }> } };

export type FindSavedFilterQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindSavedFilterQuery = { __typename?: 'Query', findSavedFilter?: { __typename?: 'SavedFilter', id: string, mode: FilterMode, name: string, object_filter?: any | null, ui_options?: any | null, find_filter?: { __typename?: 'SavedFindFilterType', q?: string | null, page?: number | null, per_page?: number | null, sort?: string | null, direction?: SortDirectionEnum | null } | null } | null };

export type FindSavedFiltersQueryVariables = Exact<{
  mode?: InputMaybe<FilterMode>;
}>;


export type FindSavedFiltersQuery = { __typename?: 'Query', findSavedFilters: Array<{ __typename?: 'SavedFilter', id: string, mode: FilterMode, name: string, object_filter?: any | null, ui_options?: any | null, find_filter?: { __typename?: 'SavedFindFilterType', q?: string | null, page?: number | null, per_page?: number | null, sort?: string | null, direction?: SortDirectionEnum | null } | null }> };

export type FindDefaultFilterQueryVariables = Exact<{
  mode: FilterMode;
}>;


export type FindDefaultFilterQuery = { __typename?: 'Query', findDefaultFilter?: { __typename?: 'SavedFilter', id: string, mode: FilterMode, name: string, object_filter?: any | null, ui_options?: any | null, find_filter?: { __typename?: 'SavedFindFilterType', q?: string | null, page?: number | null, per_page?: number | null, sort?: string | null, direction?: SortDirectionEnum | null } | null } | null };

export type FindGalleriesQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  gallery_filter?: InputMaybe<GalleryFilterType>;
}>;


export type FindGalleriesQuery = { __typename?: 'Query', findGalleries: { __typename?: 'FindGalleriesResultType', count: number, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: any, mod_time: any, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, path: string } | null, cover?: { __typename?: 'Image', id: string, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null } } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> }> } };

export type FindGalleryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindGalleryQuery = { __typename?: 'Query', findGallery?: { __typename?: 'Gallery', id: string, created_at: any, updated_at: any, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: any, mod_time: any, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } }>, cover?: { __typename?: 'Image', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, o_counter?: number | null, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> } | null };

export type FindImagesQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  image_filter?: InputMaybe<ImageFilterType>;
  image_ids?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type FindImagesQuery = { __typename?: 'Query', findImages: { __typename?: 'FindImagesResultType', count: number, megapixels: number, filesize: number, images: Array<{ __typename?: 'Image', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, o_counter?: number | null, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> }> } };

export type FindImageQueryVariables = Exact<{
  id: Scalars['ID'];
  checksum?: InputMaybe<Scalars['String']>;
}>;


export type FindImageQuery = { __typename?: 'Query', findImage?: { __typename?: 'Image', id: string, title?: string | null, code?: string | null, rating100?: number | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, organized: boolean, o_counter?: number | null, created_at: any, updated_at: any, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, created_at: any, updated_at: any, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: any, mod_time: any, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } }>, cover?: { __typename?: 'Image', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, o_counter?: number | null, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> } | null };

export type JobQueueQueryVariables = Exact<{ [key: string]: never; }>;


export type JobQueueQuery = { __typename?: 'Query', jobQueue?: Array<{ __typename?: 'Job', id: string, status: JobStatus, subTasks?: Array<string> | null, description: string, progress?: number | null, startTime?: any | null, endTime?: any | null, addTime: any }> | null };

export type FindJobQueryVariables = Exact<{
  input: FindJobInput;
}>;


export type FindJobQuery = { __typename?: 'Query', findJob?: { __typename?: 'Job', id: string, status: JobStatus, subTasks?: Array<string> | null, description: string, progress?: number | null, startTime?: any | null, endTime?: any | null, addTime: any } | null };

export type SceneWallQueryVariables = Exact<{
  q?: InputMaybe<Scalars['String']>;
}>;


export type SceneWallQuery = { __typename?: 'Query', sceneWall: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, created_at: any, updated_at: any, resume_time?: number | null, last_played_at?: any | null, play_duration?: number | null, play_count?: number | null, captions?: Array<{ __typename?: 'VideoCaption', language_code: string, caption_type: string }> | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: any, mod_time: any, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, path: string } | null, cover?: { __typename?: 'Image', id: string, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null } } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> }> };

export type MarkerWallQueryVariables = Exact<{
  q?: InputMaybe<Scalars['String']>;
}>;


export type MarkerWallQuery = { __typename?: 'Query', markerWall: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }> };

export type MarkerStringsQueryVariables = Exact<{
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
}>;


export type MarkerStringsQuery = { __typename?: 'Query', markerStrings: Array<{ __typename?: 'MarkerStringsResultType', id: string, count: number, title: string } | null> };

export type AllStudiosForFilterQueryVariables = Exact<{ [key: string]: never; }>;


export type AllStudiosForFilterQuery = { __typename?: 'Query', allStudios: Array<{ __typename?: 'Studio', id: string, name: string, aliases: Array<string> }> };

export type AllMoviesForFilterQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMoviesForFilterQuery = { __typename?: 'Query', allMovies: Array<{ __typename?: 'Movie', id: string, name: string }> };

export type AllTagsForFilterQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTagsForFilterQuery = { __typename?: 'Query', allTags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string> }> };

export type StatsQueryVariables = Exact<{ [key: string]: never; }>;


export type StatsQuery = { __typename?: 'Query', stats: { __typename?: 'StatsResultType', scene_count: number, scenes_size: number, scenes_duration: number, image_count: number, images_size: number, gallery_count: number, performer_count: number, studio_count: number, movie_count: number, tag_count: number, total_o_count: number, total_play_duration: number, total_play_count: number, scenes_played: number } };

export type LogsQueryVariables = Exact<{ [key: string]: never; }>;


export type LogsQuery = { __typename?: 'Query', logs: Array<{ __typename?: 'LogEntry', time: any, level: LogLevel, message: string }> };

export type VersionQueryVariables = Exact<{ [key: string]: never; }>;


export type VersionQuery = { __typename?: 'Query', version: { __typename?: 'Version', version?: string | null, hash: string, build_time: string } };

export type LatestVersionQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestVersionQuery = { __typename?: 'Query', latestversion: { __typename?: 'LatestVersion', version: string, shorthash: string, release_date: string, url: string } };

export type FindMoviesQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  movie_filter?: InputMaybe<MovieFilterType>;
}>;


export type FindMoviesQuery = { __typename?: 'Query', findMovies: { __typename?: 'FindMoviesResultType', count: number, movies: Array<{ __typename?: 'Movie', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> }> } };

export type FindMovieQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindMovieQuery = { __typename?: 'Query', findMovie?: { __typename?: 'Movie', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } | null };

export type FindPerformersQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  performer_filter?: InputMaybe<PerformerFilterType>;
  performer_ids?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type FindPerformersQuery = { __typename?: 'Query', findPerformers: { __typename?: 'FindPerformersResultType', count: number, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }> } };

export type FindPerformerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindPerformerQuery = { __typename?: 'Query', findPerformer?: { __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> } | null };

export type FindPerformersForSelectQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  performer_filter?: InputMaybe<PerformerFilterType>;
  performer_ids?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type FindPerformersForSelectQuery = { __typename?: 'Query', findPerformers: { __typename?: 'FindPerformersResultType', count: number, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, alias_list: Array<string>, image_path?: string | null }> } };

export type PluginsQueryVariables = Exact<{ [key: string]: never; }>;


export type PluginsQuery = { __typename?: 'Query', plugins?: Array<{ __typename?: 'Plugin', id: string, name: string, enabled: boolean, description?: string | null, url?: string | null, version?: string | null, requires?: Array<string> | null, tasks?: Array<{ __typename?: 'PluginTask', name: string, description?: string | null }> | null, hooks?: Array<{ __typename?: 'PluginHook', name: string, description?: string | null, hooks?: Array<string> | null }> | null, settings?: Array<{ __typename?: 'PluginSetting', name: string, display_name?: string | null, description?: string | null, type: PluginSettingTypeEnum }> | null, paths: { __typename?: 'PluginPaths', css?: Array<string> | null, javascript?: Array<string> | null } }> | null };

export type PluginTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type PluginTasksQuery = { __typename?: 'Query', pluginTasks?: Array<{ __typename?: 'PluginTask', name: string, description?: string | null, plugin: { __typename?: 'Plugin', id: string, name: string, enabled: boolean } }> | null };

export type InstalledPluginPackagesQueryVariables = Exact<{ [key: string]: never; }>;


export type InstalledPluginPackagesQuery = { __typename?: 'Query', installedPackages: Array<{ __typename?: 'Package', package_id: string, name: string, version?: string | null, date?: any | null, metadata: any, sourceURL: string }> };

export type InstalledPluginPackagesStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type InstalledPluginPackagesStatusQuery = { __typename?: 'Query', installedPackages: Array<{ __typename?: 'Package', package_id: string, name: string, version?: string | null, date?: any | null, metadata: any, sourceURL: string, source_package?: { __typename?: 'Package', package_id: string, name: string, version?: string | null, date?: any | null, metadata: any, sourceURL: string } | null }> };

export type AvailablePluginPackagesQueryVariables = Exact<{
  source: Scalars['String'];
}>;


export type AvailablePluginPackagesQuery = { __typename?: 'Query', availablePackages: Array<{ __typename?: 'Package', package_id: string, name: string, version?: string | null, date?: any | null, metadata: any, sourceURL: string, requires: Array<{ __typename?: 'Package', package_id: string }> }> };

export type FindSceneMarkersQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  scene_marker_filter?: InputMaybe<SceneMarkerFilterType>;
}>;


export type FindSceneMarkersQuery = { __typename?: 'Query', findSceneMarkers: { __typename?: 'FindSceneMarkersResultType', count: number, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }> } };

export type FindScenesQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  scene_filter?: InputMaybe<SceneFilterType>;
  scene_ids?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type FindScenesQuery = { __typename?: 'Query', findScenes: { __typename?: 'FindScenesResultType', count: number, filesize: number, duration: number, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> } };

export type FindScenesByPathRegexQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
}>;


export type FindScenesByPathRegexQuery = { __typename?: 'Query', findScenesByPathRegex: { __typename?: 'FindScenesResultType', count: number, filesize: number, duration: number, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> } };

export type FindDuplicateScenesQueryVariables = Exact<{
  distance?: InputMaybe<Scalars['Int']>;
  duration_diff?: InputMaybe<Scalars['Float']>;
}>;


export type FindDuplicateScenesQuery = { __typename?: 'Query', findDuplicateScenes: Array<Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }>> };

export type FindSceneQueryVariables = Exact<{
  id: Scalars['ID'];
  checksum?: InputMaybe<Scalars['String']>;
}>;


export type FindSceneQuery = { __typename?: 'Query', findScene?: { __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, created_at: any, updated_at: any, resume_time?: number | null, last_played_at?: any | null, play_duration?: number | null, play_count?: number | null, captions?: Array<{ __typename?: 'VideoCaption', language_code: string, caption_type: string }> | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: any, mod_time: any, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, path: string } | null, cover?: { __typename?: 'Image', id: string, files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: any, mod_time: any, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null } } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumisedEnum | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, movie_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> } | null };

export type FindSceneMarkerTagsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindSceneMarkerTagsQuery = { __typename?: 'Query', sceneMarkerTags: Array<{ __typename?: 'SceneMarkerTag', tag: { __typename?: 'Tag', id: string, name: string }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }> }> };

export type ParseSceneFilenamesQueryVariables = Exact<{
  filter: FindFilterType;
  config: SceneParserInput;
}>;


export type ParseSceneFilenamesQuery = { __typename?: 'Query', parseSceneFilenames: { __typename?: 'SceneParserResultType', count: number, results: Array<{ __typename?: 'SceneParserResult', title?: string | null, code?: string | null, details?: string | null, director?: string | null, url?: string | null, date?: string | null, rating?: number | null, studio_id?: string | null, gallery_ids?: Array<string> | null, performer_ids?: Array<string> | null, tag_ids?: Array<string> | null, scene: { __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: any, mod_time: any, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }, movies?: Array<{ __typename?: 'SceneMovieID', movie_id: string }> | null }> } };

export type SceneStreamsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SceneStreamsQuery = { __typename?: 'Query', findScene?: { __typename?: 'Scene', sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> } | null };

export type ListPerformerScrapersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPerformerScrapersQuery = { __typename?: 'Query', listScrapers: Array<{ __typename?: 'Scraper', id: string, name: string, performer?: { __typename?: 'ScraperSpec', urls?: Array<string> | null, supported_scrapes: Array<ScrapeType> } | null }> };

export type ListSceneScrapersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListSceneScrapersQuery = { __typename?: 'Query', listScrapers: Array<{ __typename?: 'Scraper', id: string, name: string, scene?: { __typename?: 'ScraperSpec', urls?: Array<string> | null, supported_scrapes: Array<ScrapeType> } | null }> };

export type ListGalleryScrapersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListGalleryScrapersQuery = { __typename?: 'Query', listScrapers: Array<{ __typename?: 'Scraper', id: string, name: string, gallery?: { __typename?: 'ScraperSpec', urls?: Array<string> | null, supported_scrapes: Array<ScrapeType> } | null }> };

export type ListMovieScrapersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListMovieScrapersQuery = { __typename?: 'Query', listScrapers: Array<{ __typename?: 'Scraper', id: string, name: string, movie?: { __typename?: 'ScraperSpec', urls?: Array<string> | null, supported_scrapes: Array<ScrapeType> } | null }> };

export type ScrapeSingleStudioQueryVariables = Exact<{
  source: ScraperSourceInput;
  input: ScrapeSingleStudioInput;
}>;


export type ScrapeSingleStudioQuery = { __typename?: 'Query', scrapeSingleStudio: Array<{ __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null } | null }> };

export type ScrapeSinglePerformerQueryVariables = Exact<{
  source: ScraperSourceInput;
  input: ScrapeSinglePerformerInput;
}>;


export type ScrapeSinglePerformerQuery = { __typename?: 'Query', scrapeSinglePerformer: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }> };

export type ScrapeMultiPerformersQueryVariables = Exact<{
  source: ScraperSourceInput;
  input: ScrapeMultiPerformersInput;
}>;


export type ScrapeMultiPerformersQuery = { __typename?: 'Query', scrapeMultiPerformers: Array<Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }>> };

export type ScrapePerformerUrlQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type ScrapePerformerUrlQuery = { __typename?: 'Query', scrapePerformerURL?: { __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null } | null };

export type ScrapeSingleSceneQueryVariables = Exact<{
  source: ScraperSourceInput;
  input: ScrapeSingleSceneInput;
}>;


export type ScrapeSingleSceneQuery = { __typename?: 'Query', scrapeSingleScene: Array<{ __typename?: 'ScrapedScene', title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls?: Array<string> | null, date?: string | null, image?: string | null, remote_site_id?: string | null, file?: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null } | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null } | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }> | null, movies?: Array<{ __typename?: 'ScrapedMovie', stored_id?: string | null, name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, url?: string | null, synopsis?: string | null, front_image?: string | null, back_image?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null } | null }> | null, fingerprints?: Array<{ __typename?: 'StashBoxFingerprint', hash: string, algorithm: string, duration: number }> | null }> };

export type ScrapeMultiScenesQueryVariables = Exact<{
  source: ScraperSourceInput;
  input: ScrapeMultiScenesInput;
}>;


export type ScrapeMultiScenesQuery = { __typename?: 'Query', scrapeMultiScenes: Array<Array<{ __typename?: 'ScrapedScene', title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls?: Array<string> | null, date?: string | null, image?: string | null, remote_site_id?: string | null, file?: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null } | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null } | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }> | null, movies?: Array<{ __typename?: 'ScrapedMovie', stored_id?: string | null, name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, url?: string | null, synopsis?: string | null, front_image?: string | null, back_image?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null } | null }> | null, fingerprints?: Array<{ __typename?: 'StashBoxFingerprint', hash: string, algorithm: string, duration: number }> | null }>> };

export type ScrapeSceneUrlQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type ScrapeSceneUrlQuery = { __typename?: 'Query', scrapeSceneURL?: { __typename?: 'ScrapedScene', title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls?: Array<string> | null, date?: string | null, image?: string | null, remote_site_id?: string | null, file?: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null } | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null } | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }> | null, movies?: Array<{ __typename?: 'ScrapedMovie', stored_id?: string | null, name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, url?: string | null, synopsis?: string | null, front_image?: string | null, back_image?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null } | null }> | null, fingerprints?: Array<{ __typename?: 'StashBoxFingerprint', hash: string, algorithm: string, duration: number }> | null } | null };

export type ScrapeSingleGalleryQueryVariables = Exact<{
  source: ScraperSourceInput;
  input: ScrapeSingleGalleryInput;
}>;


export type ScrapeSingleGalleryQuery = { __typename?: 'Query', scrapeSingleGallery: Array<{ __typename?: 'ScrapedGallery', title?: string | null, code?: string | null, details?: string | null, urls?: Array<string> | null, photographer?: string | null, date?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null } | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }> | null }> };

export type ScrapeGalleryUrlQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type ScrapeGalleryUrlQuery = { __typename?: 'Query', scrapeGalleryURL?: { __typename?: 'ScrapedGallery', title?: string | null, code?: string | null, details?: string | null, urls?: Array<string> | null, photographer?: string | null, date?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, image?: string | null, remote_site_id?: string | null } | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }> | null } | null };

export type ScrapeMovieUrlQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type ScrapeMovieUrlQuery = { __typename?: 'Query', scrapeMovieURL?: { __typename?: 'ScrapedMovie', name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, url?: string | null, synopsis?: string | null, front_image?: string | null, back_image?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null } | null } | null };

export type InstalledScraperPackagesQueryVariables = Exact<{ [key: string]: never; }>;


export type InstalledScraperPackagesQuery = { __typename?: 'Query', installedPackages: Array<{ __typename?: 'Package', package_id: string, name: string, version?: string | null, date?: any | null, metadata: any, sourceURL: string }> };

export type InstalledScraperPackagesStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type InstalledScraperPackagesStatusQuery = { __typename?: 'Query', installedPackages: Array<{ __typename?: 'Package', package_id: string, name: string, version?: string | null, date?: any | null, metadata: any, sourceURL: string, source_package?: { __typename?: 'Package', package_id: string, name: string, version?: string | null, date?: any | null, metadata: any, sourceURL: string } | null }> };

export type AvailableScraperPackagesQueryVariables = Exact<{
  source: Scalars['String'];
}>;


export type AvailableScraperPackagesQuery = { __typename?: 'Query', availablePackages: Array<{ __typename?: 'Package', package_id: string, name: string, version?: string | null, date?: any | null, metadata: any, sourceURL: string, requires: Array<{ __typename?: 'Package', package_id: string }> }> };

export type ConfigurationQueryVariables = Exact<{ [key: string]: never; }>;


export type ConfigurationQuery = { __typename?: 'Query', configuration: { __typename?: 'ConfigResult', ui: any, plugins: any, general: { __typename?: 'ConfigGeneralResult', databasePath: string, backupDirectoryPath: string, generatedPath: string, metadataPath: string, scrapersPath: string, pluginsPath: string, cachePath: string, blobsPath: string, blobsStorage: BlobsStorageType, calculateMD5: boolean, videoFileNamingAlgorithm: HashAlgorithm, parallelTasks: number, previewAudio: boolean, previewSegments: number, previewSegmentDuration: number, previewExcludeStart: string, previewExcludeEnd: string, previewPreset: PreviewPreset, transcodeHardwareAcceleration: boolean, maxTranscodeSize?: StreamingResolutionEnum | null, maxStreamingTranscodeSize?: StreamingResolutionEnum | null, writeImageThumbnails: boolean, createImageClipsFromVideos: boolean, apiKey: string, username: string, password: string, maxSessionAge: number, logFile?: string | null, logOut: boolean, logLevel: string, logAccess: boolean, createGalleriesFromFolders: boolean, galleryCoverRegex: string, videoExtensions: Array<string>, imageExtensions: Array<string>, galleryExtensions: Array<string>, excludes: Array<string>, imageExcludes: Array<string>, customPerformerImageLocation?: string | null, pythonPath: string, transcodeInputArgs: Array<string>, transcodeOutputArgs: Array<string>, liveTranscodeInputArgs: Array<string>, liveTranscodeOutputArgs: Array<string>, drawFunscriptHeatmapRange: boolean, stashes: Array<{ __typename?: 'StashConfig', path: string, excludeVideo: boolean, excludeImage: boolean }>, stashBoxes: Array<{ __typename?: 'StashBox', name: string, endpoint: string, api_key: string }>, scraperPackageSources: Array<{ __typename?: 'PackageSource', name?: string | null, url: string, local_path?: string | null }>, pluginPackageSources: Array<{ __typename?: 'PackageSource', name?: string | null, url: string, local_path?: string | null }> }, interface: { __typename?: 'ConfigInterfaceResult', menuItems?: Array<string> | null, soundOnPreview?: boolean | null, wallShowTitle?: boolean | null, wallPlayback?: string | null, showScrubber?: boolean | null, maximumLoopDuration?: number | null, noBrowser?: boolean | null, notificationsEnabled?: boolean | null, autostartVideo?: boolean | null, autostartVideoOnPlaySelected?: boolean | null, continuePlaylistDefault?: boolean | null, showStudioAsText?: boolean | null, css?: string | null, cssEnabled?: boolean | null, javascript?: string | null, javascriptEnabled?: boolean | null, customLocales?: string | null, customLocalesEnabled?: boolean | null, language?: string | null, handyKey?: string | null, funscriptOffset?: number | null, useStashHostedFunscript?: boolean | null, imageLightbox: { __typename?: 'ConfigImageLightboxResult', slideshowDelay?: number | null, displayMode?: ImageLightboxDisplayMode | null, scaleUp?: boolean | null, resetZoomOnNav?: boolean | null, scrollMode?: ImageLightboxScrollMode | null, scrollAttemptsBeforeChange: number }, disableDropdownCreate: { __typename?: 'ConfigDisableDropdownCreate', performer: boolean, tag: boolean, studio: boolean, movie: boolean } }, dlna: { __typename?: 'ConfigDLNAResult', serverName: string, enabled: boolean, whitelistedIPs: Array<string>, interfaces: Array<string>, videoSortOrder: string }, scraping: { __typename?: 'ConfigScrapingResult', scraperUserAgent?: string | null, scraperCertCheck: boolean, scraperCDPPath?: string | null, excludeTagPatterns: Array<string> }, defaults: { __typename?: 'ConfigDefaultSettingsResult', deleteFile?: boolean | null, deleteGenerated?: boolean | null, scan?: { __typename?: 'ScanMetadataOptions', scanGenerateCovers: boolean, scanGeneratePreviews: boolean, scanGenerateImagePreviews: boolean, scanGenerateSprites: boolean, scanGeneratePhashes: boolean, scanGenerateThumbnails: boolean, scanGenerateClipPreviews: boolean } | null, identify?: { __typename?: 'IdentifyMetadataTaskOptions', sources: Array<{ __typename?: 'IdentifySource', source: { __typename?: 'ScraperSource', stash_box_index?: number | null, stash_box_endpoint?: string | null, scraper_id?: string | null }, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, includeMalePerformers?: boolean | null, skipMultipleMatches?: boolean | null, skipMultipleMatchTag?: string | null, skipSingleNamePerformers?: boolean | null, skipSingleNamePerformerTag?: string | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null }>, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, includeMalePerformers?: boolean | null, skipMultipleMatches?: boolean | null, skipMultipleMatchTag?: string | null, skipSingleNamePerformers?: boolean | null, skipSingleNamePerformerTag?: string | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null } | null, autoTag?: { __typename?: 'AutoTagMetadataOptions', performers?: Array<string> | null, studios?: Array<string> | null, tags?: Array<string> | null } | null, generate?: { __typename?: 'GenerateMetadataOptions', covers?: boolean | null, sprites?: boolean | null, previews?: boolean | null, imagePreviews?: boolean | null, markers?: boolean | null, markerImagePreviews?: boolean | null, markerScreenshots?: boolean | null, transcodes?: boolean | null, phashes?: boolean | null, interactiveHeatmapsSpeeds?: boolean | null, clipPreviews?: boolean | null, previewOptions?: { __typename?: 'GeneratePreviewOptions', previewSegments?: number | null, previewSegmentDuration?: number | null, previewExcludeStart?: string | null, previewExcludeEnd?: string | null, previewPreset?: PreviewPreset | null } | null } | null } } };

export type DirectoryQueryVariables = Exact<{
  path?: InputMaybe<Scalars['String']>;
}>;


export type DirectoryQuery = { __typename?: 'Query', directory: { __typename?: 'Directory', path: string, parent?: string | null, directories: Array<string> } };

export type ValidateStashBoxQueryVariables = Exact<{
  input: StashBoxInput;
}>;


export type ValidateStashBoxQuery = { __typename?: 'Query', validateStashBoxCredentials: { __typename?: 'StashBoxValidationResult', valid: boolean, status: string } };

export type SystemStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type SystemStatusQuery = { __typename?: 'Query', systemStatus: { __typename?: 'SystemStatus', databaseSchema?: number | null, databasePath?: string | null, appSchema: number, status: SystemStatusEnum, configPath?: string | null, os: string, workingDir: string, homeDir: string } };

export type FindStudiosQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  studio_filter?: InputMaybe<StudioFilterType>;
}>;


export type FindStudiosQuery = { __typename?: 'Query', findStudios: { __typename?: 'FindStudiosResultType', count: number, studios: Array<{ __typename?: 'Studio', id: string, name: string, url?: string | null, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, performer_count: number, movie_count: number, details?: string | null, rating100?: number | null, aliases: Array<string>, scene_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, movie_count_all: number, parent_studio?: { __typename?: 'Studio', id: string, name: string, url?: string | null, image_path?: string | null } | null, child_studios: Array<{ __typename?: 'Studio', id: string, name: string, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }> } };

export type FindStudioQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindStudioQuery = { __typename?: 'Query', findStudio?: { __typename?: 'Studio', id: string, name: string, url?: string | null, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, performer_count: number, movie_count: number, details?: string | null, rating100?: number | null, aliases: Array<string>, scene_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, movie_count_all: number, parent_studio?: { __typename?: 'Studio', id: string, name: string, url?: string | null, image_path?: string | null } | null, child_studios: Array<{ __typename?: 'Studio', id: string, name: string, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> } | null };

export type FindTagsQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  tag_filter?: InputMaybe<TagFilterType>;
}>;


export type FindTagsQuery = { __typename?: 'Query', findTags: { __typename?: 'FindTagsResultType', count: number, tags: Array<{ __typename?: 'Tag', id: string, name: string, description?: string | null, aliases: Array<string>, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, scene_marker_count: number, image_count: number, gallery_count: number, performer_count: number, scene_count_all: number, scene_marker_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, parents: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, children: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }> }> } };

export type FindTagQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindTagQuery = { __typename?: 'Query', findTag?: { __typename?: 'Tag', id: string, name: string, description?: string | null, aliases: Array<string>, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, scene_marker_count: number, image_count: number, gallery_count: number, performer_count: number, scene_count_all: number, scene_marker_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, parents: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }>, children: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number }> } | null };

export type JobsSubscribeSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type JobsSubscribeSubscription = { __typename?: 'Subscription', jobsSubscribe: { __typename?: 'JobStatusUpdate', type: JobStatusUpdateType, job: { __typename?: 'Job', id: string, status: JobStatus, subTasks?: Array<string> | null, description: string, progress?: number | null } } };

export type LoggingSubscribeSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type LoggingSubscribeSubscription = { __typename?: 'Subscription', loggingSubscribe: Array<{ __typename?: 'LogEntry', time: any, level: LogLevel, message: string }> };

export type ScanCompleteSubscribeSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ScanCompleteSubscribeSubscription = { __typename?: 'Subscription', scanCompleteSubscribe: boolean };

export const ConfigGeneralDataFragmentDoc = gql`
    fragment ConfigGeneralData on ConfigGeneralResult {
  stashes {
    path
    excludeVideo
    excludeImage
  }
  databasePath
  backupDirectoryPath
  generatedPath
  metadataPath
  scrapersPath
  pluginsPath
  cachePath
  blobsPath
  blobsStorage
  calculateMD5
  videoFileNamingAlgorithm
  parallelTasks
  previewAudio
  previewSegments
  previewSegmentDuration
  previewExcludeStart
  previewExcludeEnd
  previewPreset
  transcodeHardwareAcceleration
  maxTranscodeSize
  maxStreamingTranscodeSize
  writeImageThumbnails
  createImageClipsFromVideos
  apiKey
  username
  password
  maxSessionAge
  logFile
  logOut
  logLevel
  logAccess
  createGalleriesFromFolders
  galleryCoverRegex
  videoExtensions
  imageExtensions
  galleryExtensions
  excludes
  imageExcludes
  customPerformerImageLocation
  stashBoxes {
    name
    endpoint
    api_key
  }
  pythonPath
  transcodeInputArgs
  transcodeOutputArgs
  liveTranscodeInputArgs
  liveTranscodeOutputArgs
  drawFunscriptHeatmapRange
  scraperPackageSources {
    name
    url
    local_path
  }
  pluginPackageSources {
    name
    url
    local_path
  }
}
    `;
export const ConfigInterfaceDataFragmentDoc = gql`
    fragment ConfigInterfaceData on ConfigInterfaceResult {
  menuItems
  soundOnPreview
  wallShowTitle
  wallPlayback
  showScrubber
  maximumLoopDuration
  noBrowser
  notificationsEnabled
  autostartVideo
  autostartVideoOnPlaySelected
  continuePlaylistDefault
  showStudioAsText
  css
  cssEnabled
  javascript
  javascriptEnabled
  customLocales
  customLocalesEnabled
  language
  imageLightbox {
    slideshowDelay
    displayMode
    scaleUp
    resetZoomOnNav
    scrollMode
    scrollAttemptsBeforeChange
  }
  disableDropdownCreate {
    performer
    tag
    studio
    movie
  }
  handyKey
  funscriptOffset
  useStashHostedFunscript
}
    `;
export const ConfigDlnaDataFragmentDoc = gql`
    fragment ConfigDLNAData on ConfigDLNAResult {
  serverName
  enabled
  whitelistedIPs
  interfaces
  videoSortOrder
}
    `;
export const ConfigScrapingDataFragmentDoc = gql`
    fragment ConfigScrapingData on ConfigScrapingResult {
  scraperUserAgent
  scraperCertCheck
  scraperCDPPath
  excludeTagPatterns
}
    `;
export const ScraperSourceDataFragmentDoc = gql`
    fragment ScraperSourceData on ScraperSource {
  stash_box_index
  stash_box_endpoint
  scraper_id
}
    `;
export const IdentifyFieldOptionsDataFragmentDoc = gql`
    fragment IdentifyFieldOptionsData on IdentifyFieldOptions {
  field
  strategy
  createMissing
}
    `;
export const IdentifyMetadataOptionsDataFragmentDoc = gql`
    fragment IdentifyMetadataOptionsData on IdentifyMetadataOptions {
  fieldOptions {
    ...IdentifyFieldOptionsData
  }
  setCoverImage
  setOrganized
  includeMalePerformers
  skipMultipleMatches
  skipMultipleMatchTag
  skipSingleNamePerformers
  skipSingleNamePerformerTag
}
    ${IdentifyFieldOptionsDataFragmentDoc}`;
export const ConfigDefaultSettingsDataFragmentDoc = gql`
    fragment ConfigDefaultSettingsData on ConfigDefaultSettingsResult {
  scan {
    scanGenerateCovers
    scanGeneratePreviews
    scanGenerateImagePreviews
    scanGenerateSprites
    scanGeneratePhashes
    scanGenerateThumbnails
    scanGenerateClipPreviews
  }
  identify {
    sources {
      source {
        ...ScraperSourceData
      }
      options {
        ...IdentifyMetadataOptionsData
      }
    }
    options {
      ...IdentifyMetadataOptionsData
    }
  }
  autoTag {
    performers
    studios
    tags
  }
  generate {
    covers
    sprites
    previews
    imagePreviews
    previewOptions {
      previewSegments
      previewSegmentDuration
      previewExcludeStart
      previewExcludeEnd
      previewPreset
    }
    markers
    markerImagePreviews
    markerScreenshots
    transcodes
    phashes
    interactiveHeatmapsSpeeds
    clipPreviews
  }
  deleteFile
  deleteGenerated
}
    ${ScraperSourceDataFragmentDoc}
${IdentifyMetadataOptionsDataFragmentDoc}`;
export const ConfigDataFragmentDoc = gql`
    fragment ConfigData on ConfigResult {
  general {
    ...ConfigGeneralData
  }
  interface {
    ...ConfigInterfaceData
  }
  dlna {
    ...ConfigDLNAData
  }
  scraping {
    ...ConfigScrapingData
  }
  defaults {
    ...ConfigDefaultSettingsData
  }
  ui
  plugins
}
    ${ConfigGeneralDataFragmentDoc}
${ConfigInterfaceDataFragmentDoc}
${ConfigDlnaDataFragmentDoc}
${ConfigScrapingDataFragmentDoc}
${ConfigDefaultSettingsDataFragmentDoc}`;
export const SavedFilterDataFragmentDoc = gql`
    fragment SavedFilterData on SavedFilter {
  id
  mode
  name
  find_filter {
    q
    page
    per_page
    sort
    direction
  }
  object_filter
  ui_options
}
    `;
export const ImageFileDataFragmentDoc = gql`
    fragment ImageFileData on ImageFile {
  id
  path
  size
  mod_time
  width
  height
  fingerprints {
    type
    value
  }
}
    `;
export const GalleryFileDataFragmentDoc = gql`
    fragment GalleryFileData on GalleryFile {
  id
  path
  size
  mod_time
  fingerprints {
    type
    value
  }
}
    `;
export const FolderDataFragmentDoc = gql`
    fragment FolderData on Folder {
  id
  path
}
    `;
export const GalleryChapterDataFragmentDoc = gql`
    fragment GalleryChapterData on GalleryChapter {
  id
  title
  image_index
  gallery {
    id
  }
}
    `;
export const VisualFileDataFragmentDoc = gql`
    fragment VisualFileData on VisualFile {
  ... on BaseFile {
    id
    path
    size
    mod_time
    fingerprints {
      type
      value
    }
  }
  ... on ImageFile {
    id
    path
    size
    mod_time
    width
    height
    fingerprints {
      type
      value
    }
  }
  ... on VideoFile {
    id
    path
    size
    mod_time
    duration
    video_codec
    audio_codec
    width
    height
    frame_rate
    bit_rate
    fingerprints {
      type
      value
    }
  }
}
    `;
export const SlimImageDataFragmentDoc = gql`
    fragment SlimImageData on Image {
  id
  title
  code
  date
  urls
  details
  photographer
  rating100
  organized
  o_counter
  files {
    ...ImageFileData
  }
  paths {
    thumbnail
    preview
    image
  }
  galleries {
    id
    title
    files {
      path
    }
    folder {
      path
    }
  }
  studio {
    id
    name
    image_path
  }
  tags {
    id
    name
  }
  performers {
    id
    name
    gender
    favorite
    image_path
  }
  visual_files {
    ...VisualFileData
  }
}
    ${ImageFileDataFragmentDoc}
${VisualFileDataFragmentDoc}`;
export const SlimStudioDataFragmentDoc = gql`
    fragment SlimStudioData on Studio {
  id
  name
  image_path
  stash_ids {
    endpoint
    stash_id
  }
  parent_studio {
    id
  }
  details
  rating100
  aliases
}
    `;
export const SlimTagDataFragmentDoc = gql`
    fragment SlimTagData on Tag {
  id
  name
  aliases
  image_path
  parent_count
  child_count
}
    `;
export const PerformerDataFragmentDoc = gql`
    fragment PerformerData on Performer {
  id
  name
  disambiguation
  url
  gender
  twitter
  instagram
  birthdate
  ethnicity
  country
  eye_color
  height_cm
  measurements
  fake_tits
  penis_length
  circumcised
  career_length
  tattoos
  piercings
  alias_list
  favorite
  ignore_auto_tag
  image_path
  scene_count
  image_count
  gallery_count
  movie_count
  performer_count
  o_counter
  tags {
    ...SlimTagData
  }
  stash_ids {
    stash_id
    endpoint
  }
  rating100
  details
  death_date
  hair_color
  weight
}
    ${SlimTagDataFragmentDoc}`;
export const VideoFileDataFragmentDoc = gql`
    fragment VideoFileData on VideoFile {
  id
  path
  size
  mod_time
  duration
  video_codec
  audio_codec
  width
  height
  frame_rate
  bit_rate
  fingerprints {
    type
    value
  }
}
    `;
export const SlimSceneDataFragmentDoc = gql`
    fragment SlimSceneData on Scene {
  id
  title
  code
  details
  director
  urls
  date
  rating100
  o_counter
  organized
  interactive
  interactive_speed
  resume_time
  play_duration
  play_count
  files {
    ...VideoFileData
  }
  paths {
    screenshot
    preview
    stream
    webp
    vtt
    sprite
    funscript
    interactive_heatmap
    caption
  }
  scene_markers {
    id
    title
    seconds
    primary_tag {
      id
      name
    }
  }
  galleries {
    id
    files {
      path
    }
    folder {
      path
    }
    title
  }
  studio {
    id
    name
    image_path
  }
  movies {
    movie {
      id
      name
      front_image_path
    }
    scene_index
  }
  tags {
    id
    name
  }
  performers {
    id
    name
    gender
    favorite
    image_path
  }
  stash_ids {
    endpoint
    stash_id
  }
}
    ${VideoFileDataFragmentDoc}`;
export const GalleryDataFragmentDoc = gql`
    fragment GalleryData on Gallery {
  id
  created_at
  updated_at
  title
  code
  date
  urls
  details
  photographer
  rating100
  organized
  files {
    ...GalleryFileData
  }
  folder {
    ...FolderData
  }
  chapters {
    ...GalleryChapterData
  }
  cover {
    ...SlimImageData
  }
  studio {
    ...SlimStudioData
  }
  tags {
    ...SlimTagData
  }
  performers {
    ...PerformerData
  }
  scenes {
    ...SlimSceneData
  }
}
    ${GalleryFileDataFragmentDoc}
${FolderDataFragmentDoc}
${GalleryChapterDataFragmentDoc}
${SlimImageDataFragmentDoc}
${SlimStudioDataFragmentDoc}
${SlimTagDataFragmentDoc}
${PerformerDataFragmentDoc}
${SlimSceneDataFragmentDoc}`;
export const ImageDataFragmentDoc = gql`
    fragment ImageData on Image {
  id
  title
  code
  rating100
  date
  urls
  details
  photographer
  organized
  o_counter
  created_at
  updated_at
  files {
    ...ImageFileData
  }
  paths {
    thumbnail
    preview
    image
  }
  galleries {
    ...GalleryData
  }
  studio {
    ...SlimStudioData
  }
  tags {
    ...SlimTagData
  }
  performers {
    ...PerformerData
  }
  visual_files {
    ...VisualFileData
  }
}
    ${ImageFileDataFragmentDoc}
${GalleryDataFragmentDoc}
${SlimStudioDataFragmentDoc}
${SlimTagDataFragmentDoc}
${PerformerDataFragmentDoc}
${VisualFileDataFragmentDoc}`;
export const JobDataFragmentDoc = gql`
    fragment JobData on Job {
  id
  status
  subTasks
  description
  progress
  startTime
  endTime
  addTime
}
    `;
export const LogEntryDataFragmentDoc = gql`
    fragment LogEntryData on LogEntry {
  time
  level
  message
}
    `;
export const SlimMovieDataFragmentDoc = gql`
    fragment SlimMovieData on Movie {
  id
  name
  front_image_path
  rating100
}
    `;
export const PackageDataFragmentDoc = gql`
    fragment PackageData on Package {
  package_id
  name
  version
  date
  metadata
  sourceURL
}
    `;
export const SlimPerformerDataFragmentDoc = gql`
    fragment SlimPerformerData on Performer {
  id
  name
  disambiguation
  gender
  url
  twitter
  instagram
  image_path
  favorite
  ignore_auto_tag
  country
  birthdate
  ethnicity
  hair_color
  eye_color
  height_cm
  fake_tits
  penis_length
  circumcised
  career_length
  tattoos
  piercings
  alias_list
  tags {
    id
    name
  }
  stash_ids {
    endpoint
    stash_id
  }
  rating100
  death_date
  weight
}
    `;
export const SelectPerformerDataFragmentDoc = gql`
    fragment SelectPerformerData on Performer {
  id
  name
  disambiguation
  alias_list
  image_path
}
    `;
export const SceneMarkerDataFragmentDoc = gql`
    fragment SceneMarkerData on SceneMarker {
  id
  title
  seconds
  stream
  preview
  screenshot
  scene {
    id
  }
  primary_tag {
    id
    name
  }
  tags {
    id
    name
  }
}
    `;
export const SlimGalleryDataFragmentDoc = gql`
    fragment SlimGalleryData on Gallery {
  id
  title
  code
  date
  urls
  details
  photographer
  rating100
  organized
  files {
    ...GalleryFileData
  }
  folder {
    ...FolderData
  }
  image_count
  cover {
    id
    files {
      ...ImageFileData
    }
    paths {
      thumbnail
    }
  }
  chapters {
    id
    title
    image_index
  }
  studio {
    id
    name
    image_path
  }
  tags {
    id
    name
  }
  performers {
    id
    name
    gender
    favorite
    image_path
  }
  scenes {
    ...SlimSceneData
  }
}
    ${GalleryFileDataFragmentDoc}
${FolderDataFragmentDoc}
${ImageFileDataFragmentDoc}
${SlimSceneDataFragmentDoc}`;
export const MovieDataFragmentDoc = gql`
    fragment MovieData on Movie {
  id
  name
  aliases
  duration
  date
  rating100
  director
  studio {
    ...SlimStudioData
  }
  synopsis
  url
  front_image_path
  back_image_path
  scene_count
  scenes {
    id
    title
  }
}
    ${SlimStudioDataFragmentDoc}`;
export const SceneDataFragmentDoc = gql`
    fragment SceneData on Scene {
  id
  title
  code
  details
  director
  urls
  date
  rating100
  o_counter
  organized
  interactive
  interactive_speed
  captions {
    language_code
    caption_type
  }
  created_at
  updated_at
  resume_time
  last_played_at
  play_duration
  play_count
  files {
    ...VideoFileData
  }
  paths {
    screenshot
    preview
    stream
    webp
    vtt
    sprite
    funscript
    interactive_heatmap
    caption
  }
  scene_markers {
    ...SceneMarkerData
  }
  galleries {
    ...SlimGalleryData
  }
  studio {
    ...SlimStudioData
  }
  movies {
    movie {
      ...MovieData
    }
    scene_index
  }
  tags {
    ...SlimTagData
  }
  performers {
    ...PerformerData
  }
  stash_ids {
    endpoint
    stash_id
  }
  sceneStreams {
    url
    mime_type
    label
  }
}
    ${VideoFileDataFragmentDoc}
${SceneMarkerDataFragmentDoc}
${SlimGalleryDataFragmentDoc}
${SlimStudioDataFragmentDoc}
${MovieDataFragmentDoc}
${SlimTagDataFragmentDoc}
${PerformerDataFragmentDoc}`;
export const ScrapedStudioDataFragmentDoc = gql`
    fragment ScrapedStudioData on ScrapedStudio {
  stored_id
  name
  url
  parent {
    stored_id
    name
    url
    image
    remote_site_id
  }
  image
  remote_site_id
}
    `;
export const ScrapedSceneTagDataFragmentDoc = gql`
    fragment ScrapedSceneTagData on ScrapedTag {
  stored_id
  name
}
    `;
export const ScrapedPerformerDataFragmentDoc = gql`
    fragment ScrapedPerformerData on ScrapedPerformer {
  stored_id
  name
  disambiguation
  gender
  url
  twitter
  instagram
  birthdate
  ethnicity
  country
  eye_color
  height
  measurements
  fake_tits
  penis_length
  circumcised
  career_length
  tattoos
  piercings
  aliases
  tags {
    ...ScrapedSceneTagData
  }
  images
  details
  death_date
  hair_color
  weight
  remote_site_id
}
    ${ScrapedSceneTagDataFragmentDoc}`;
export const ScrapedMovieStudioDataFragmentDoc = gql`
    fragment ScrapedMovieStudioData on ScrapedStudio {
  stored_id
  name
  url
}
    `;
export const ScrapedMovieDataFragmentDoc = gql`
    fragment ScrapedMovieData on ScrapedMovie {
  name
  aliases
  duration
  date
  rating
  director
  url
  synopsis
  front_image
  back_image
  studio {
    ...ScrapedMovieStudioData
  }
}
    ${ScrapedMovieStudioDataFragmentDoc}`;
export const ScrapedSceneStudioDataFragmentDoc = gql`
    fragment ScrapedSceneStudioData on ScrapedStudio {
  stored_id
  name
  url
  parent {
    stored_id
    name
    url
    image
    remote_site_id
  }
  image
  remote_site_id
}
    `;
export const ScrapedScenePerformerDataFragmentDoc = gql`
    fragment ScrapedScenePerformerData on ScrapedPerformer {
  stored_id
  name
  disambiguation
  gender
  url
  twitter
  instagram
  birthdate
  ethnicity
  country
  eye_color
  height
  measurements
  fake_tits
  penis_length
  circumcised
  career_length
  tattoos
  piercings
  aliases
  tags {
    ...ScrapedSceneTagData
  }
  remote_site_id
  images
  details
  death_date
  hair_color
  weight
}
    ${ScrapedSceneTagDataFragmentDoc}`;
export const ScrapedSceneMovieDataFragmentDoc = gql`
    fragment ScrapedSceneMovieData on ScrapedMovie {
  stored_id
  name
  aliases
  duration
  date
  rating
  director
  url
  synopsis
  front_image
  back_image
  studio {
    ...ScrapedMovieStudioData
  }
}
    ${ScrapedMovieStudioDataFragmentDoc}`;
export const ScrapedSceneDataFragmentDoc = gql`
    fragment ScrapedSceneData on ScrapedScene {
  title
  code
  details
  director
  urls
  date
  image
  remote_site_id
  file {
    size
    duration
    video_codec
    audio_codec
    width
    height
    framerate
    bitrate
  }
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
  movies {
    ...ScrapedSceneMovieData
  }
  fingerprints {
    hash
    algorithm
    duration
  }
}
    ${ScrapedSceneStudioDataFragmentDoc}
${ScrapedSceneTagDataFragmentDoc}
${ScrapedScenePerformerDataFragmentDoc}
${ScrapedSceneMovieDataFragmentDoc}`;
export const ScrapedGalleryDataFragmentDoc = gql`
    fragment ScrapedGalleryData on ScrapedGallery {
  title
  code
  details
  urls
  photographer
  date
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
}
    ${ScrapedSceneStudioDataFragmentDoc}
${ScrapedSceneTagDataFragmentDoc}
${ScrapedScenePerformerDataFragmentDoc}`;
export const ScrapedStashBoxSceneDataFragmentDoc = gql`
    fragment ScrapedStashBoxSceneData on ScrapedScene {
  title
  code
  details
  director
  url
  date
  image
  remote_site_id
  duration
  file {
    size
    duration
    video_codec
    audio_codec
    width
    height
    framerate
    bitrate
  }
  fingerprints {
    hash
    algorithm
    duration
  }
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
  movies {
    ...ScrapedSceneMovieData
  }
}
    ${ScrapedSceneStudioDataFragmentDoc}
${ScrapedSceneTagDataFragmentDoc}
${ScrapedScenePerformerDataFragmentDoc}
${ScrapedSceneMovieDataFragmentDoc}`;
export const ScrapedStashBoxPerformerDataFragmentDoc = gql`
    fragment ScrapedStashBoxPerformerData on StashBoxPerformerQueryResult {
  query
  results {
    ...ScrapedScenePerformerData
  }
}
    ${ScrapedScenePerformerDataFragmentDoc}`;
export const StudioDataFragmentDoc = gql`
    fragment StudioData on Studio {
  id
  name
  url
  parent_studio {
    id
    name
    url
    image_path
  }
  child_studios {
    id
    name
    image_path
  }
  ignore_auto_tag
  image_path
  scene_count
  scene_count_all: scene_count(depth: -1)
  image_count
  image_count_all: image_count(depth: -1)
  gallery_count
  gallery_count_all: gallery_count(depth: -1)
  performer_count
  performer_count_all: performer_count(depth: -1)
  movie_count
  movie_count_all: movie_count(depth: -1)
  stash_ids {
    stash_id
    endpoint
  }
  details
  rating100
  aliases
}
    `;
export const TagDataFragmentDoc = gql`
    fragment TagData on Tag {
  id
  name
  description
  aliases
  ignore_auto_tag
  image_path
  scene_count
  scene_count_all: scene_count(depth: -1)
  scene_marker_count
  scene_marker_count_all: scene_marker_count(depth: -1)
  image_count
  image_count_all: image_count(depth: -1)
  gallery_count
  gallery_count_all: gallery_count(depth: -1)
  performer_count
  performer_count_all: performer_count(depth: -1)
  parents {
    ...SlimTagData
  }
  children {
    ...SlimTagData
  }
}
    ${SlimTagDataFragmentDoc}`;
export const SetupDocument = gql`
    mutation Setup($input: SetupInput!) {
  setup(input: $input)
}
    `;
export type SetupMutationFn = Apollo.MutationFunction<SetupMutation, SetupMutationVariables>;

/**
 * __useSetupMutation__
 *
 * To run a mutation, you first call `useSetupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setupMutation, { data, loading, error }] = useSetupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetupMutation(baseOptions?: Apollo.MutationHookOptions<SetupMutation, SetupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetupMutation, SetupMutationVariables>(SetupDocument, options);
      }
export type SetupMutationHookResult = ReturnType<typeof useSetupMutation>;
export type SetupMutationResult = Apollo.MutationResult<SetupMutation>;
export type SetupMutationOptions = Apollo.BaseMutationOptions<SetupMutation, SetupMutationVariables>;
export const MigrateDocument = gql`
    mutation Migrate($input: MigrateInput!) {
  migrate(input: $input)
}
    `;
export type MigrateMutationFn = Apollo.MutationFunction<MigrateMutation, MigrateMutationVariables>;

/**
 * __useMigrateMutation__
 *
 * To run a mutation, you first call `useMigrateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMigrateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [migrateMutation, { data, loading, error }] = useMigrateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMigrateMutation(baseOptions?: Apollo.MutationHookOptions<MigrateMutation, MigrateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MigrateMutation, MigrateMutationVariables>(MigrateDocument, options);
      }
export type MigrateMutationHookResult = ReturnType<typeof useMigrateMutation>;
export type MigrateMutationResult = Apollo.MutationResult<MigrateMutation>;
export type MigrateMutationOptions = Apollo.BaseMutationOptions<MigrateMutation, MigrateMutationVariables>;
export const ConfigureGeneralDocument = gql`
    mutation ConfigureGeneral($input: ConfigGeneralInput!) {
  configureGeneral(input: $input) {
    ...ConfigGeneralData
  }
}
    ${ConfigGeneralDataFragmentDoc}`;
export type ConfigureGeneralMutationFn = Apollo.MutationFunction<ConfigureGeneralMutation, ConfigureGeneralMutationVariables>;

/**
 * __useConfigureGeneralMutation__
 *
 * To run a mutation, you first call `useConfigureGeneralMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfigureGeneralMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [configureGeneralMutation, { data, loading, error }] = useConfigureGeneralMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConfigureGeneralMutation(baseOptions?: Apollo.MutationHookOptions<ConfigureGeneralMutation, ConfigureGeneralMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfigureGeneralMutation, ConfigureGeneralMutationVariables>(ConfigureGeneralDocument, options);
      }
export type ConfigureGeneralMutationHookResult = ReturnType<typeof useConfigureGeneralMutation>;
export type ConfigureGeneralMutationResult = Apollo.MutationResult<ConfigureGeneralMutation>;
export type ConfigureGeneralMutationOptions = Apollo.BaseMutationOptions<ConfigureGeneralMutation, ConfigureGeneralMutationVariables>;
export const ConfigureInterfaceDocument = gql`
    mutation ConfigureInterface($input: ConfigInterfaceInput!) {
  configureInterface(input: $input) {
    ...ConfigInterfaceData
  }
}
    ${ConfigInterfaceDataFragmentDoc}`;
export type ConfigureInterfaceMutationFn = Apollo.MutationFunction<ConfigureInterfaceMutation, ConfigureInterfaceMutationVariables>;

/**
 * __useConfigureInterfaceMutation__
 *
 * To run a mutation, you first call `useConfigureInterfaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfigureInterfaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [configureInterfaceMutation, { data, loading, error }] = useConfigureInterfaceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConfigureInterfaceMutation(baseOptions?: Apollo.MutationHookOptions<ConfigureInterfaceMutation, ConfigureInterfaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfigureInterfaceMutation, ConfigureInterfaceMutationVariables>(ConfigureInterfaceDocument, options);
      }
export type ConfigureInterfaceMutationHookResult = ReturnType<typeof useConfigureInterfaceMutation>;
export type ConfigureInterfaceMutationResult = Apollo.MutationResult<ConfigureInterfaceMutation>;
export type ConfigureInterfaceMutationOptions = Apollo.BaseMutationOptions<ConfigureInterfaceMutation, ConfigureInterfaceMutationVariables>;
export const ConfigureDlnaDocument = gql`
    mutation ConfigureDLNA($input: ConfigDLNAInput!) {
  configureDLNA(input: $input) {
    ...ConfigDLNAData
  }
}
    ${ConfigDlnaDataFragmentDoc}`;
export type ConfigureDlnaMutationFn = Apollo.MutationFunction<ConfigureDlnaMutation, ConfigureDlnaMutationVariables>;

/**
 * __useConfigureDlnaMutation__
 *
 * To run a mutation, you first call `useConfigureDlnaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfigureDlnaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [configureDlnaMutation, { data, loading, error }] = useConfigureDlnaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConfigureDlnaMutation(baseOptions?: Apollo.MutationHookOptions<ConfigureDlnaMutation, ConfigureDlnaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfigureDlnaMutation, ConfigureDlnaMutationVariables>(ConfigureDlnaDocument, options);
      }
export type ConfigureDlnaMutationHookResult = ReturnType<typeof useConfigureDlnaMutation>;
export type ConfigureDlnaMutationResult = Apollo.MutationResult<ConfigureDlnaMutation>;
export type ConfigureDlnaMutationOptions = Apollo.BaseMutationOptions<ConfigureDlnaMutation, ConfigureDlnaMutationVariables>;
export const ConfigureScrapingDocument = gql`
    mutation ConfigureScraping($input: ConfigScrapingInput!) {
  configureScraping(input: $input) {
    ...ConfigScrapingData
  }
}
    ${ConfigScrapingDataFragmentDoc}`;
export type ConfigureScrapingMutationFn = Apollo.MutationFunction<ConfigureScrapingMutation, ConfigureScrapingMutationVariables>;

/**
 * __useConfigureScrapingMutation__
 *
 * To run a mutation, you first call `useConfigureScrapingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfigureScrapingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [configureScrapingMutation, { data, loading, error }] = useConfigureScrapingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConfigureScrapingMutation(baseOptions?: Apollo.MutationHookOptions<ConfigureScrapingMutation, ConfigureScrapingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfigureScrapingMutation, ConfigureScrapingMutationVariables>(ConfigureScrapingDocument, options);
      }
export type ConfigureScrapingMutationHookResult = ReturnType<typeof useConfigureScrapingMutation>;
export type ConfigureScrapingMutationResult = Apollo.MutationResult<ConfigureScrapingMutation>;
export type ConfigureScrapingMutationOptions = Apollo.BaseMutationOptions<ConfigureScrapingMutation, ConfigureScrapingMutationVariables>;
export const ConfigureDefaultsDocument = gql`
    mutation ConfigureDefaults($input: ConfigDefaultSettingsInput!) {
  configureDefaults(input: $input) {
    ...ConfigDefaultSettingsData
  }
}
    ${ConfigDefaultSettingsDataFragmentDoc}`;
export type ConfigureDefaultsMutationFn = Apollo.MutationFunction<ConfigureDefaultsMutation, ConfigureDefaultsMutationVariables>;

/**
 * __useConfigureDefaultsMutation__
 *
 * To run a mutation, you first call `useConfigureDefaultsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfigureDefaultsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [configureDefaultsMutation, { data, loading, error }] = useConfigureDefaultsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConfigureDefaultsMutation(baseOptions?: Apollo.MutationHookOptions<ConfigureDefaultsMutation, ConfigureDefaultsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfigureDefaultsMutation, ConfigureDefaultsMutationVariables>(ConfigureDefaultsDocument, options);
      }
export type ConfigureDefaultsMutationHookResult = ReturnType<typeof useConfigureDefaultsMutation>;
export type ConfigureDefaultsMutationResult = Apollo.MutationResult<ConfigureDefaultsMutation>;
export type ConfigureDefaultsMutationOptions = Apollo.BaseMutationOptions<ConfigureDefaultsMutation, ConfigureDefaultsMutationVariables>;
export const ConfigureUiDocument = gql`
    mutation ConfigureUI($input: Map!) {
  configureUI(input: $input)
}
    `;
export type ConfigureUiMutationFn = Apollo.MutationFunction<ConfigureUiMutation, ConfigureUiMutationVariables>;

/**
 * __useConfigureUiMutation__
 *
 * To run a mutation, you first call `useConfigureUiMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfigureUiMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [configureUiMutation, { data, loading, error }] = useConfigureUiMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConfigureUiMutation(baseOptions?: Apollo.MutationHookOptions<ConfigureUiMutation, ConfigureUiMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfigureUiMutation, ConfigureUiMutationVariables>(ConfigureUiDocument, options);
      }
export type ConfigureUiMutationHookResult = ReturnType<typeof useConfigureUiMutation>;
export type ConfigureUiMutationResult = Apollo.MutationResult<ConfigureUiMutation>;
export type ConfigureUiMutationOptions = Apollo.BaseMutationOptions<ConfigureUiMutation, ConfigureUiMutationVariables>;
export const GenerateApiKeyDocument = gql`
    mutation GenerateAPIKey($input: GenerateAPIKeyInput!) {
  generateAPIKey(input: $input)
}
    `;
export type GenerateApiKeyMutationFn = Apollo.MutationFunction<GenerateApiKeyMutation, GenerateApiKeyMutationVariables>;

/**
 * __useGenerateApiKeyMutation__
 *
 * To run a mutation, you first call `useGenerateApiKeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateApiKeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateApiKeyMutation, { data, loading, error }] = useGenerateApiKeyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenerateApiKeyMutation(baseOptions?: Apollo.MutationHookOptions<GenerateApiKeyMutation, GenerateApiKeyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateApiKeyMutation, GenerateApiKeyMutationVariables>(GenerateApiKeyDocument, options);
      }
export type GenerateApiKeyMutationHookResult = ReturnType<typeof useGenerateApiKeyMutation>;
export type GenerateApiKeyMutationResult = Apollo.MutationResult<GenerateApiKeyMutation>;
export type GenerateApiKeyMutationOptions = Apollo.BaseMutationOptions<GenerateApiKeyMutation, GenerateApiKeyMutationVariables>;
export const EnableDlnaDocument = gql`
    mutation EnableDLNA($input: EnableDLNAInput!) {
  enableDLNA(input: $input)
}
    `;
export type EnableDlnaMutationFn = Apollo.MutationFunction<EnableDlnaMutation, EnableDlnaMutationVariables>;

/**
 * __useEnableDlnaMutation__
 *
 * To run a mutation, you first call `useEnableDlnaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableDlnaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableDlnaMutation, { data, loading, error }] = useEnableDlnaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEnableDlnaMutation(baseOptions?: Apollo.MutationHookOptions<EnableDlnaMutation, EnableDlnaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EnableDlnaMutation, EnableDlnaMutationVariables>(EnableDlnaDocument, options);
      }
export type EnableDlnaMutationHookResult = ReturnType<typeof useEnableDlnaMutation>;
export type EnableDlnaMutationResult = Apollo.MutationResult<EnableDlnaMutation>;
export type EnableDlnaMutationOptions = Apollo.BaseMutationOptions<EnableDlnaMutation, EnableDlnaMutationVariables>;
export const DisableDlnaDocument = gql`
    mutation DisableDLNA($input: DisableDLNAInput!) {
  disableDLNA(input: $input)
}
    `;
export type DisableDlnaMutationFn = Apollo.MutationFunction<DisableDlnaMutation, DisableDlnaMutationVariables>;

/**
 * __useDisableDlnaMutation__
 *
 * To run a mutation, you first call `useDisableDlnaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDisableDlnaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [disableDlnaMutation, { data, loading, error }] = useDisableDlnaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDisableDlnaMutation(baseOptions?: Apollo.MutationHookOptions<DisableDlnaMutation, DisableDlnaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DisableDlnaMutation, DisableDlnaMutationVariables>(DisableDlnaDocument, options);
      }
export type DisableDlnaMutationHookResult = ReturnType<typeof useDisableDlnaMutation>;
export type DisableDlnaMutationResult = Apollo.MutationResult<DisableDlnaMutation>;
export type DisableDlnaMutationOptions = Apollo.BaseMutationOptions<DisableDlnaMutation, DisableDlnaMutationVariables>;
export const AddTempDlnaipDocument = gql`
    mutation AddTempDLNAIP($input: AddTempDLNAIPInput!) {
  addTempDLNAIP(input: $input)
}
    `;
export type AddTempDlnaipMutationFn = Apollo.MutationFunction<AddTempDlnaipMutation, AddTempDlnaipMutationVariables>;

/**
 * __useAddTempDlnaipMutation__
 *
 * To run a mutation, you first call `useAddTempDlnaipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTempDlnaipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTempDlnaipMutation, { data, loading, error }] = useAddTempDlnaipMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddTempDlnaipMutation(baseOptions?: Apollo.MutationHookOptions<AddTempDlnaipMutation, AddTempDlnaipMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTempDlnaipMutation, AddTempDlnaipMutationVariables>(AddTempDlnaipDocument, options);
      }
export type AddTempDlnaipMutationHookResult = ReturnType<typeof useAddTempDlnaipMutation>;
export type AddTempDlnaipMutationResult = Apollo.MutationResult<AddTempDlnaipMutation>;
export type AddTempDlnaipMutationOptions = Apollo.BaseMutationOptions<AddTempDlnaipMutation, AddTempDlnaipMutationVariables>;
export const RemoveTempDlnaipDocument = gql`
    mutation RemoveTempDLNAIP($input: RemoveTempDLNAIPInput!) {
  removeTempDLNAIP(input: $input)
}
    `;
export type RemoveTempDlnaipMutationFn = Apollo.MutationFunction<RemoveTempDlnaipMutation, RemoveTempDlnaipMutationVariables>;

/**
 * __useRemoveTempDlnaipMutation__
 *
 * To run a mutation, you first call `useRemoveTempDlnaipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTempDlnaipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTempDlnaipMutation, { data, loading, error }] = useRemoveTempDlnaipMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveTempDlnaipMutation(baseOptions?: Apollo.MutationHookOptions<RemoveTempDlnaipMutation, RemoveTempDlnaipMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveTempDlnaipMutation, RemoveTempDlnaipMutationVariables>(RemoveTempDlnaipDocument, options);
      }
export type RemoveTempDlnaipMutationHookResult = ReturnType<typeof useRemoveTempDlnaipMutation>;
export type RemoveTempDlnaipMutationResult = Apollo.MutationResult<RemoveTempDlnaipMutation>;
export type RemoveTempDlnaipMutationOptions = Apollo.BaseMutationOptions<RemoveTempDlnaipMutation, RemoveTempDlnaipMutationVariables>;
export const DeleteFilesDocument = gql`
    mutation DeleteFiles($ids: [ID!]!) {
  deleteFiles(ids: $ids)
}
    `;
export type DeleteFilesMutationFn = Apollo.MutationFunction<DeleteFilesMutation, DeleteFilesMutationVariables>;

/**
 * __useDeleteFilesMutation__
 *
 * To run a mutation, you first call `useDeleteFilesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFilesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFilesMutation, { data, loading, error }] = useDeleteFilesMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useDeleteFilesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFilesMutation, DeleteFilesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFilesMutation, DeleteFilesMutationVariables>(DeleteFilesDocument, options);
      }
export type DeleteFilesMutationHookResult = ReturnType<typeof useDeleteFilesMutation>;
export type DeleteFilesMutationResult = Apollo.MutationResult<DeleteFilesMutation>;
export type DeleteFilesMutationOptions = Apollo.BaseMutationOptions<DeleteFilesMutation, DeleteFilesMutationVariables>;
export const SaveFilterDocument = gql`
    mutation SaveFilter($input: SaveFilterInput!) {
  saveFilter(input: $input) {
    ...SavedFilterData
  }
}
    ${SavedFilterDataFragmentDoc}`;
export type SaveFilterMutationFn = Apollo.MutationFunction<SaveFilterMutation, SaveFilterMutationVariables>;

/**
 * __useSaveFilterMutation__
 *
 * To run a mutation, you first call `useSaveFilterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveFilterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveFilterMutation, { data, loading, error }] = useSaveFilterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSaveFilterMutation(baseOptions?: Apollo.MutationHookOptions<SaveFilterMutation, SaveFilterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveFilterMutation, SaveFilterMutationVariables>(SaveFilterDocument, options);
      }
export type SaveFilterMutationHookResult = ReturnType<typeof useSaveFilterMutation>;
export type SaveFilterMutationResult = Apollo.MutationResult<SaveFilterMutation>;
export type SaveFilterMutationOptions = Apollo.BaseMutationOptions<SaveFilterMutation, SaveFilterMutationVariables>;
export const DestroySavedFilterDocument = gql`
    mutation DestroySavedFilter($input: DestroyFilterInput!) {
  destroySavedFilter(input: $input)
}
    `;
export type DestroySavedFilterMutationFn = Apollo.MutationFunction<DestroySavedFilterMutation, DestroySavedFilterMutationVariables>;

/**
 * __useDestroySavedFilterMutation__
 *
 * To run a mutation, you first call `useDestroySavedFilterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDestroySavedFilterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [destroySavedFilterMutation, { data, loading, error }] = useDestroySavedFilterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDestroySavedFilterMutation(baseOptions?: Apollo.MutationHookOptions<DestroySavedFilterMutation, DestroySavedFilterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DestroySavedFilterMutation, DestroySavedFilterMutationVariables>(DestroySavedFilterDocument, options);
      }
export type DestroySavedFilterMutationHookResult = ReturnType<typeof useDestroySavedFilterMutation>;
export type DestroySavedFilterMutationResult = Apollo.MutationResult<DestroySavedFilterMutation>;
export type DestroySavedFilterMutationOptions = Apollo.BaseMutationOptions<DestroySavedFilterMutation, DestroySavedFilterMutationVariables>;
export const SetDefaultFilterDocument = gql`
    mutation SetDefaultFilter($input: SetDefaultFilterInput!) {
  setDefaultFilter(input: $input)
}
    `;
export type SetDefaultFilterMutationFn = Apollo.MutationFunction<SetDefaultFilterMutation, SetDefaultFilterMutationVariables>;

/**
 * __useSetDefaultFilterMutation__
 *
 * To run a mutation, you first call `useSetDefaultFilterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetDefaultFilterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setDefaultFilterMutation, { data, loading, error }] = useSetDefaultFilterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSetDefaultFilterMutation(baseOptions?: Apollo.MutationHookOptions<SetDefaultFilterMutation, SetDefaultFilterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetDefaultFilterMutation, SetDefaultFilterMutationVariables>(SetDefaultFilterDocument, options);
      }
export type SetDefaultFilterMutationHookResult = ReturnType<typeof useSetDefaultFilterMutation>;
export type SetDefaultFilterMutationResult = Apollo.MutationResult<SetDefaultFilterMutation>;
export type SetDefaultFilterMutationOptions = Apollo.BaseMutationOptions<SetDefaultFilterMutation, SetDefaultFilterMutationVariables>;
export const GalleryChapterCreateDocument = gql`
    mutation GalleryChapterCreate($title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterCreate(
    input: {title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${GalleryChapterDataFragmentDoc}`;
export type GalleryChapterCreateMutationFn = Apollo.MutationFunction<GalleryChapterCreateMutation, GalleryChapterCreateMutationVariables>;

/**
 * __useGalleryChapterCreateMutation__
 *
 * To run a mutation, you first call `useGalleryChapterCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGalleryChapterCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [galleryChapterCreateMutation, { data, loading, error }] = useGalleryChapterCreateMutation({
 *   variables: {
 *      title: // value for 'title'
 *      image_index: // value for 'image_index'
 *      gallery_id: // value for 'gallery_id'
 *   },
 * });
 */
export function useGalleryChapterCreateMutation(baseOptions?: Apollo.MutationHookOptions<GalleryChapterCreateMutation, GalleryChapterCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GalleryChapterCreateMutation, GalleryChapterCreateMutationVariables>(GalleryChapterCreateDocument, options);
      }
export type GalleryChapterCreateMutationHookResult = ReturnType<typeof useGalleryChapterCreateMutation>;
export type GalleryChapterCreateMutationResult = Apollo.MutationResult<GalleryChapterCreateMutation>;
export type GalleryChapterCreateMutationOptions = Apollo.BaseMutationOptions<GalleryChapterCreateMutation, GalleryChapterCreateMutationVariables>;
export const GalleryChapterUpdateDocument = gql`
    mutation GalleryChapterUpdate($id: ID!, $title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterUpdate(
    input: {id: $id, title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${GalleryChapterDataFragmentDoc}`;
export type GalleryChapterUpdateMutationFn = Apollo.MutationFunction<GalleryChapterUpdateMutation, GalleryChapterUpdateMutationVariables>;

/**
 * __useGalleryChapterUpdateMutation__
 *
 * To run a mutation, you first call `useGalleryChapterUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGalleryChapterUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [galleryChapterUpdateMutation, { data, loading, error }] = useGalleryChapterUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      image_index: // value for 'image_index'
 *      gallery_id: // value for 'gallery_id'
 *   },
 * });
 */
export function useGalleryChapterUpdateMutation(baseOptions?: Apollo.MutationHookOptions<GalleryChapterUpdateMutation, GalleryChapterUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GalleryChapterUpdateMutation, GalleryChapterUpdateMutationVariables>(GalleryChapterUpdateDocument, options);
      }
export type GalleryChapterUpdateMutationHookResult = ReturnType<typeof useGalleryChapterUpdateMutation>;
export type GalleryChapterUpdateMutationResult = Apollo.MutationResult<GalleryChapterUpdateMutation>;
export type GalleryChapterUpdateMutationOptions = Apollo.BaseMutationOptions<GalleryChapterUpdateMutation, GalleryChapterUpdateMutationVariables>;
export const GalleryChapterDestroyDocument = gql`
    mutation GalleryChapterDestroy($id: ID!) {
  galleryChapterDestroy(id: $id)
}
    `;
export type GalleryChapterDestroyMutationFn = Apollo.MutationFunction<GalleryChapterDestroyMutation, GalleryChapterDestroyMutationVariables>;

/**
 * __useGalleryChapterDestroyMutation__
 *
 * To run a mutation, you first call `useGalleryChapterDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGalleryChapterDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [galleryChapterDestroyMutation, { data, loading, error }] = useGalleryChapterDestroyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGalleryChapterDestroyMutation(baseOptions?: Apollo.MutationHookOptions<GalleryChapterDestroyMutation, GalleryChapterDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GalleryChapterDestroyMutation, GalleryChapterDestroyMutationVariables>(GalleryChapterDestroyDocument, options);
      }
export type GalleryChapterDestroyMutationHookResult = ReturnType<typeof useGalleryChapterDestroyMutation>;
export type GalleryChapterDestroyMutationResult = Apollo.MutationResult<GalleryChapterDestroyMutation>;
export type GalleryChapterDestroyMutationOptions = Apollo.BaseMutationOptions<GalleryChapterDestroyMutation, GalleryChapterDestroyMutationVariables>;
export const GalleryCreateDocument = gql`
    mutation GalleryCreate($input: GalleryCreateInput!) {
  galleryCreate(input: $input) {
    ...GalleryData
  }
}
    ${GalleryDataFragmentDoc}`;
export type GalleryCreateMutationFn = Apollo.MutationFunction<GalleryCreateMutation, GalleryCreateMutationVariables>;

/**
 * __useGalleryCreateMutation__
 *
 * To run a mutation, you first call `useGalleryCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGalleryCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [galleryCreateMutation, { data, loading, error }] = useGalleryCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGalleryCreateMutation(baseOptions?: Apollo.MutationHookOptions<GalleryCreateMutation, GalleryCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GalleryCreateMutation, GalleryCreateMutationVariables>(GalleryCreateDocument, options);
      }
export type GalleryCreateMutationHookResult = ReturnType<typeof useGalleryCreateMutation>;
export type GalleryCreateMutationResult = Apollo.MutationResult<GalleryCreateMutation>;
export type GalleryCreateMutationOptions = Apollo.BaseMutationOptions<GalleryCreateMutation, GalleryCreateMutationVariables>;
export const GalleryUpdateDocument = gql`
    mutation GalleryUpdate($input: GalleryUpdateInput!) {
  galleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${GalleryDataFragmentDoc}`;
export type GalleryUpdateMutationFn = Apollo.MutationFunction<GalleryUpdateMutation, GalleryUpdateMutationVariables>;

/**
 * __useGalleryUpdateMutation__
 *
 * To run a mutation, you first call `useGalleryUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGalleryUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [galleryUpdateMutation, { data, loading, error }] = useGalleryUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGalleryUpdateMutation(baseOptions?: Apollo.MutationHookOptions<GalleryUpdateMutation, GalleryUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GalleryUpdateMutation, GalleryUpdateMutationVariables>(GalleryUpdateDocument, options);
      }
export type GalleryUpdateMutationHookResult = ReturnType<typeof useGalleryUpdateMutation>;
export type GalleryUpdateMutationResult = Apollo.MutationResult<GalleryUpdateMutation>;
export type GalleryUpdateMutationOptions = Apollo.BaseMutationOptions<GalleryUpdateMutation, GalleryUpdateMutationVariables>;
export const BulkGalleryUpdateDocument = gql`
    mutation BulkGalleryUpdate($input: BulkGalleryUpdateInput!) {
  bulkGalleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${GalleryDataFragmentDoc}`;
export type BulkGalleryUpdateMutationFn = Apollo.MutationFunction<BulkGalleryUpdateMutation, BulkGalleryUpdateMutationVariables>;

/**
 * __useBulkGalleryUpdateMutation__
 *
 * To run a mutation, you first call `useBulkGalleryUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkGalleryUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkGalleryUpdateMutation, { data, loading, error }] = useBulkGalleryUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBulkGalleryUpdateMutation(baseOptions?: Apollo.MutationHookOptions<BulkGalleryUpdateMutation, BulkGalleryUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BulkGalleryUpdateMutation, BulkGalleryUpdateMutationVariables>(BulkGalleryUpdateDocument, options);
      }
export type BulkGalleryUpdateMutationHookResult = ReturnType<typeof useBulkGalleryUpdateMutation>;
export type BulkGalleryUpdateMutationResult = Apollo.MutationResult<BulkGalleryUpdateMutation>;
export type BulkGalleryUpdateMutationOptions = Apollo.BaseMutationOptions<BulkGalleryUpdateMutation, BulkGalleryUpdateMutationVariables>;
export const GalleriesUpdateDocument = gql`
    mutation GalleriesUpdate($input: [GalleryUpdateInput!]!) {
  galleriesUpdate(input: $input) {
    ...GalleryData
  }
}
    ${GalleryDataFragmentDoc}`;
export type GalleriesUpdateMutationFn = Apollo.MutationFunction<GalleriesUpdateMutation, GalleriesUpdateMutationVariables>;

/**
 * __useGalleriesUpdateMutation__
 *
 * To run a mutation, you first call `useGalleriesUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGalleriesUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [galleriesUpdateMutation, { data, loading, error }] = useGalleriesUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGalleriesUpdateMutation(baseOptions?: Apollo.MutationHookOptions<GalleriesUpdateMutation, GalleriesUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GalleriesUpdateMutation, GalleriesUpdateMutationVariables>(GalleriesUpdateDocument, options);
      }
export type GalleriesUpdateMutationHookResult = ReturnType<typeof useGalleriesUpdateMutation>;
export type GalleriesUpdateMutationResult = Apollo.MutationResult<GalleriesUpdateMutation>;
export type GalleriesUpdateMutationOptions = Apollo.BaseMutationOptions<GalleriesUpdateMutation, GalleriesUpdateMutationVariables>;
export const GalleryDestroyDocument = gql`
    mutation GalleryDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  galleryDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;
export type GalleryDestroyMutationFn = Apollo.MutationFunction<GalleryDestroyMutation, GalleryDestroyMutationVariables>;

/**
 * __useGalleryDestroyMutation__
 *
 * To run a mutation, you first call `useGalleryDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGalleryDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [galleryDestroyMutation, { data, loading, error }] = useGalleryDestroyMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *      delete_file: // value for 'delete_file'
 *      delete_generated: // value for 'delete_generated'
 *   },
 * });
 */
export function useGalleryDestroyMutation(baseOptions?: Apollo.MutationHookOptions<GalleryDestroyMutation, GalleryDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GalleryDestroyMutation, GalleryDestroyMutationVariables>(GalleryDestroyDocument, options);
      }
export type GalleryDestroyMutationHookResult = ReturnType<typeof useGalleryDestroyMutation>;
export type GalleryDestroyMutationResult = Apollo.MutationResult<GalleryDestroyMutation>;
export type GalleryDestroyMutationOptions = Apollo.BaseMutationOptions<GalleryDestroyMutation, GalleryDestroyMutationVariables>;
export const AddGalleryImagesDocument = gql`
    mutation AddGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  addGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `;
export type AddGalleryImagesMutationFn = Apollo.MutationFunction<AddGalleryImagesMutation, AddGalleryImagesMutationVariables>;

/**
 * __useAddGalleryImagesMutation__
 *
 * To run a mutation, you first call `useAddGalleryImagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddGalleryImagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addGalleryImagesMutation, { data, loading, error }] = useAddGalleryImagesMutation({
 *   variables: {
 *      gallery_id: // value for 'gallery_id'
 *      image_ids: // value for 'image_ids'
 *   },
 * });
 */
export function useAddGalleryImagesMutation(baseOptions?: Apollo.MutationHookOptions<AddGalleryImagesMutation, AddGalleryImagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddGalleryImagesMutation, AddGalleryImagesMutationVariables>(AddGalleryImagesDocument, options);
      }
export type AddGalleryImagesMutationHookResult = ReturnType<typeof useAddGalleryImagesMutation>;
export type AddGalleryImagesMutationResult = Apollo.MutationResult<AddGalleryImagesMutation>;
export type AddGalleryImagesMutationOptions = Apollo.BaseMutationOptions<AddGalleryImagesMutation, AddGalleryImagesMutationVariables>;
export const RemoveGalleryImagesDocument = gql`
    mutation RemoveGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  removeGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `;
export type RemoveGalleryImagesMutationFn = Apollo.MutationFunction<RemoveGalleryImagesMutation, RemoveGalleryImagesMutationVariables>;

/**
 * __useRemoveGalleryImagesMutation__
 *
 * To run a mutation, you first call `useRemoveGalleryImagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveGalleryImagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeGalleryImagesMutation, { data, loading, error }] = useRemoveGalleryImagesMutation({
 *   variables: {
 *      gallery_id: // value for 'gallery_id'
 *      image_ids: // value for 'image_ids'
 *   },
 * });
 */
export function useRemoveGalleryImagesMutation(baseOptions?: Apollo.MutationHookOptions<RemoveGalleryImagesMutation, RemoveGalleryImagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveGalleryImagesMutation, RemoveGalleryImagesMutationVariables>(RemoveGalleryImagesDocument, options);
      }
export type RemoveGalleryImagesMutationHookResult = ReturnType<typeof useRemoveGalleryImagesMutation>;
export type RemoveGalleryImagesMutationResult = Apollo.MutationResult<RemoveGalleryImagesMutation>;
export type RemoveGalleryImagesMutationOptions = Apollo.BaseMutationOptions<RemoveGalleryImagesMutation, RemoveGalleryImagesMutationVariables>;
export const ImageUpdateDocument = gql`
    mutation ImageUpdate($input: ImageUpdateInput!) {
  imageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${SlimImageDataFragmentDoc}`;
export type ImageUpdateMutationFn = Apollo.MutationFunction<ImageUpdateMutation, ImageUpdateMutationVariables>;

/**
 * __useImageUpdateMutation__
 *
 * To run a mutation, you first call `useImageUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImageUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [imageUpdateMutation, { data, loading, error }] = useImageUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useImageUpdateMutation(baseOptions?: Apollo.MutationHookOptions<ImageUpdateMutation, ImageUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImageUpdateMutation, ImageUpdateMutationVariables>(ImageUpdateDocument, options);
      }
export type ImageUpdateMutationHookResult = ReturnType<typeof useImageUpdateMutation>;
export type ImageUpdateMutationResult = Apollo.MutationResult<ImageUpdateMutation>;
export type ImageUpdateMutationOptions = Apollo.BaseMutationOptions<ImageUpdateMutation, ImageUpdateMutationVariables>;
export const BulkImageUpdateDocument = gql`
    mutation BulkImageUpdate($input: BulkImageUpdateInput!) {
  bulkImageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${SlimImageDataFragmentDoc}`;
export type BulkImageUpdateMutationFn = Apollo.MutationFunction<BulkImageUpdateMutation, BulkImageUpdateMutationVariables>;

/**
 * __useBulkImageUpdateMutation__
 *
 * To run a mutation, you first call `useBulkImageUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkImageUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkImageUpdateMutation, { data, loading, error }] = useBulkImageUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBulkImageUpdateMutation(baseOptions?: Apollo.MutationHookOptions<BulkImageUpdateMutation, BulkImageUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BulkImageUpdateMutation, BulkImageUpdateMutationVariables>(BulkImageUpdateDocument, options);
      }
export type BulkImageUpdateMutationHookResult = ReturnType<typeof useBulkImageUpdateMutation>;
export type BulkImageUpdateMutationResult = Apollo.MutationResult<BulkImageUpdateMutation>;
export type BulkImageUpdateMutationOptions = Apollo.BaseMutationOptions<BulkImageUpdateMutation, BulkImageUpdateMutationVariables>;
export const ImagesUpdateDocument = gql`
    mutation ImagesUpdate($input: [ImageUpdateInput!]!) {
  imagesUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${SlimImageDataFragmentDoc}`;
export type ImagesUpdateMutationFn = Apollo.MutationFunction<ImagesUpdateMutation, ImagesUpdateMutationVariables>;

/**
 * __useImagesUpdateMutation__
 *
 * To run a mutation, you first call `useImagesUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImagesUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [imagesUpdateMutation, { data, loading, error }] = useImagesUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useImagesUpdateMutation(baseOptions?: Apollo.MutationHookOptions<ImagesUpdateMutation, ImagesUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImagesUpdateMutation, ImagesUpdateMutationVariables>(ImagesUpdateDocument, options);
      }
export type ImagesUpdateMutationHookResult = ReturnType<typeof useImagesUpdateMutation>;
export type ImagesUpdateMutationResult = Apollo.MutationResult<ImagesUpdateMutation>;
export type ImagesUpdateMutationOptions = Apollo.BaseMutationOptions<ImagesUpdateMutation, ImagesUpdateMutationVariables>;
export const ImageIncrementODocument = gql`
    mutation ImageIncrementO($id: ID!) {
  imageIncrementO(id: $id)
}
    `;
export type ImageIncrementOMutationFn = Apollo.MutationFunction<ImageIncrementOMutation, ImageIncrementOMutationVariables>;

/**
 * __useImageIncrementOMutation__
 *
 * To run a mutation, you first call `useImageIncrementOMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImageIncrementOMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [imageIncrementOMutation, { data, loading, error }] = useImageIncrementOMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useImageIncrementOMutation(baseOptions?: Apollo.MutationHookOptions<ImageIncrementOMutation, ImageIncrementOMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImageIncrementOMutation, ImageIncrementOMutationVariables>(ImageIncrementODocument, options);
      }
export type ImageIncrementOMutationHookResult = ReturnType<typeof useImageIncrementOMutation>;
export type ImageIncrementOMutationResult = Apollo.MutationResult<ImageIncrementOMutation>;
export type ImageIncrementOMutationOptions = Apollo.BaseMutationOptions<ImageIncrementOMutation, ImageIncrementOMutationVariables>;
export const ImageDecrementODocument = gql`
    mutation ImageDecrementO($id: ID!) {
  imageDecrementO(id: $id)
}
    `;
export type ImageDecrementOMutationFn = Apollo.MutationFunction<ImageDecrementOMutation, ImageDecrementOMutationVariables>;

/**
 * __useImageDecrementOMutation__
 *
 * To run a mutation, you first call `useImageDecrementOMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImageDecrementOMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [imageDecrementOMutation, { data, loading, error }] = useImageDecrementOMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useImageDecrementOMutation(baseOptions?: Apollo.MutationHookOptions<ImageDecrementOMutation, ImageDecrementOMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImageDecrementOMutation, ImageDecrementOMutationVariables>(ImageDecrementODocument, options);
      }
export type ImageDecrementOMutationHookResult = ReturnType<typeof useImageDecrementOMutation>;
export type ImageDecrementOMutationResult = Apollo.MutationResult<ImageDecrementOMutation>;
export type ImageDecrementOMutationOptions = Apollo.BaseMutationOptions<ImageDecrementOMutation, ImageDecrementOMutationVariables>;
export const ImageResetODocument = gql`
    mutation ImageResetO($id: ID!) {
  imageResetO(id: $id)
}
    `;
export type ImageResetOMutationFn = Apollo.MutationFunction<ImageResetOMutation, ImageResetOMutationVariables>;

/**
 * __useImageResetOMutation__
 *
 * To run a mutation, you first call `useImageResetOMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImageResetOMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [imageResetOMutation, { data, loading, error }] = useImageResetOMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useImageResetOMutation(baseOptions?: Apollo.MutationHookOptions<ImageResetOMutation, ImageResetOMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImageResetOMutation, ImageResetOMutationVariables>(ImageResetODocument, options);
      }
export type ImageResetOMutationHookResult = ReturnType<typeof useImageResetOMutation>;
export type ImageResetOMutationResult = Apollo.MutationResult<ImageResetOMutation>;
export type ImageResetOMutationOptions = Apollo.BaseMutationOptions<ImageResetOMutation, ImageResetOMutationVariables>;
export const ImageDestroyDocument = gql`
    mutation ImageDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  imageDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;
export type ImageDestroyMutationFn = Apollo.MutationFunction<ImageDestroyMutation, ImageDestroyMutationVariables>;

/**
 * __useImageDestroyMutation__
 *
 * To run a mutation, you first call `useImageDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImageDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [imageDestroyMutation, { data, loading, error }] = useImageDestroyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      delete_file: // value for 'delete_file'
 *      delete_generated: // value for 'delete_generated'
 *   },
 * });
 */
export function useImageDestroyMutation(baseOptions?: Apollo.MutationHookOptions<ImageDestroyMutation, ImageDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImageDestroyMutation, ImageDestroyMutationVariables>(ImageDestroyDocument, options);
      }
export type ImageDestroyMutationHookResult = ReturnType<typeof useImageDestroyMutation>;
export type ImageDestroyMutationResult = Apollo.MutationResult<ImageDestroyMutation>;
export type ImageDestroyMutationOptions = Apollo.BaseMutationOptions<ImageDestroyMutation, ImageDestroyMutationVariables>;
export const ImagesDestroyDocument = gql`
    mutation ImagesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  imagesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;
export type ImagesDestroyMutationFn = Apollo.MutationFunction<ImagesDestroyMutation, ImagesDestroyMutationVariables>;

/**
 * __useImagesDestroyMutation__
 *
 * To run a mutation, you first call `useImagesDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImagesDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [imagesDestroyMutation, { data, loading, error }] = useImagesDestroyMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *      delete_file: // value for 'delete_file'
 *      delete_generated: // value for 'delete_generated'
 *   },
 * });
 */
export function useImagesDestroyMutation(baseOptions?: Apollo.MutationHookOptions<ImagesDestroyMutation, ImagesDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImagesDestroyMutation, ImagesDestroyMutationVariables>(ImagesDestroyDocument, options);
      }
export type ImagesDestroyMutationHookResult = ReturnType<typeof useImagesDestroyMutation>;
export type ImagesDestroyMutationResult = Apollo.MutationResult<ImagesDestroyMutation>;
export type ImagesDestroyMutationOptions = Apollo.BaseMutationOptions<ImagesDestroyMutation, ImagesDestroyMutationVariables>;
export const StopJobDocument = gql`
    mutation StopJob($job_id: ID!) {
  stopJob(job_id: $job_id)
}
    `;
export type StopJobMutationFn = Apollo.MutationFunction<StopJobMutation, StopJobMutationVariables>;

/**
 * __useStopJobMutation__
 *
 * To run a mutation, you first call `useStopJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStopJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stopJobMutation, { data, loading, error }] = useStopJobMutation({
 *   variables: {
 *      job_id: // value for 'job_id'
 *   },
 * });
 */
export function useStopJobMutation(baseOptions?: Apollo.MutationHookOptions<StopJobMutation, StopJobMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StopJobMutation, StopJobMutationVariables>(StopJobDocument, options);
      }
export type StopJobMutationHookResult = ReturnType<typeof useStopJobMutation>;
export type StopJobMutationResult = Apollo.MutationResult<StopJobMutation>;
export type StopJobMutationOptions = Apollo.BaseMutationOptions<StopJobMutation, StopJobMutationVariables>;
export const StopAllJobsDocument = gql`
    mutation StopAllJobs {
  stopAllJobs
}
    `;
export type StopAllJobsMutationFn = Apollo.MutationFunction<StopAllJobsMutation, StopAllJobsMutationVariables>;

/**
 * __useStopAllJobsMutation__
 *
 * To run a mutation, you first call `useStopAllJobsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStopAllJobsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stopAllJobsMutation, { data, loading, error }] = useStopAllJobsMutation({
 *   variables: {
 *   },
 * });
 */
export function useStopAllJobsMutation(baseOptions?: Apollo.MutationHookOptions<StopAllJobsMutation, StopAllJobsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StopAllJobsMutation, StopAllJobsMutationVariables>(StopAllJobsDocument, options);
      }
export type StopAllJobsMutationHookResult = ReturnType<typeof useStopAllJobsMutation>;
export type StopAllJobsMutationResult = Apollo.MutationResult<StopAllJobsMutation>;
export type StopAllJobsMutationOptions = Apollo.BaseMutationOptions<StopAllJobsMutation, StopAllJobsMutationVariables>;
export const MetadataImportDocument = gql`
    mutation MetadataImport {
  metadataImport
}
    `;
export type MetadataImportMutationFn = Apollo.MutationFunction<MetadataImportMutation, MetadataImportMutationVariables>;

/**
 * __useMetadataImportMutation__
 *
 * To run a mutation, you first call `useMetadataImportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMetadataImportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [metadataImportMutation, { data, loading, error }] = useMetadataImportMutation({
 *   variables: {
 *   },
 * });
 */
export function useMetadataImportMutation(baseOptions?: Apollo.MutationHookOptions<MetadataImportMutation, MetadataImportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MetadataImportMutation, MetadataImportMutationVariables>(MetadataImportDocument, options);
      }
export type MetadataImportMutationHookResult = ReturnType<typeof useMetadataImportMutation>;
export type MetadataImportMutationResult = Apollo.MutationResult<MetadataImportMutation>;
export type MetadataImportMutationOptions = Apollo.BaseMutationOptions<MetadataImportMutation, MetadataImportMutationVariables>;
export const MetadataExportDocument = gql`
    mutation MetadataExport {
  metadataExport
}
    `;
export type MetadataExportMutationFn = Apollo.MutationFunction<MetadataExportMutation, MetadataExportMutationVariables>;

/**
 * __useMetadataExportMutation__
 *
 * To run a mutation, you first call `useMetadataExportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMetadataExportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [metadataExportMutation, { data, loading, error }] = useMetadataExportMutation({
 *   variables: {
 *   },
 * });
 */
export function useMetadataExportMutation(baseOptions?: Apollo.MutationHookOptions<MetadataExportMutation, MetadataExportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MetadataExportMutation, MetadataExportMutationVariables>(MetadataExportDocument, options);
      }
export type MetadataExportMutationHookResult = ReturnType<typeof useMetadataExportMutation>;
export type MetadataExportMutationResult = Apollo.MutationResult<MetadataExportMutation>;
export type MetadataExportMutationOptions = Apollo.BaseMutationOptions<MetadataExportMutation, MetadataExportMutationVariables>;
export const ExportObjectsDocument = gql`
    mutation ExportObjects($input: ExportObjectsInput!) {
  exportObjects(input: $input)
}
    `;
export type ExportObjectsMutationFn = Apollo.MutationFunction<ExportObjectsMutation, ExportObjectsMutationVariables>;

/**
 * __useExportObjectsMutation__
 *
 * To run a mutation, you first call `useExportObjectsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExportObjectsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exportObjectsMutation, { data, loading, error }] = useExportObjectsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExportObjectsMutation(baseOptions?: Apollo.MutationHookOptions<ExportObjectsMutation, ExportObjectsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ExportObjectsMutation, ExportObjectsMutationVariables>(ExportObjectsDocument, options);
      }
export type ExportObjectsMutationHookResult = ReturnType<typeof useExportObjectsMutation>;
export type ExportObjectsMutationResult = Apollo.MutationResult<ExportObjectsMutation>;
export type ExportObjectsMutationOptions = Apollo.BaseMutationOptions<ExportObjectsMutation, ExportObjectsMutationVariables>;
export const ImportObjectsDocument = gql`
    mutation ImportObjects($input: ImportObjectsInput!) {
  importObjects(input: $input)
}
    `;
export type ImportObjectsMutationFn = Apollo.MutationFunction<ImportObjectsMutation, ImportObjectsMutationVariables>;

/**
 * __useImportObjectsMutation__
 *
 * To run a mutation, you first call `useImportObjectsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImportObjectsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [importObjectsMutation, { data, loading, error }] = useImportObjectsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useImportObjectsMutation(baseOptions?: Apollo.MutationHookOptions<ImportObjectsMutation, ImportObjectsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImportObjectsMutation, ImportObjectsMutationVariables>(ImportObjectsDocument, options);
      }
export type ImportObjectsMutationHookResult = ReturnType<typeof useImportObjectsMutation>;
export type ImportObjectsMutationResult = Apollo.MutationResult<ImportObjectsMutation>;
export type ImportObjectsMutationOptions = Apollo.BaseMutationOptions<ImportObjectsMutation, ImportObjectsMutationVariables>;
export const MetadataScanDocument = gql`
    mutation MetadataScan($input: ScanMetadataInput!) {
  metadataScan(input: $input)
}
    `;
export type MetadataScanMutationFn = Apollo.MutationFunction<MetadataScanMutation, MetadataScanMutationVariables>;

/**
 * __useMetadataScanMutation__
 *
 * To run a mutation, you first call `useMetadataScanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMetadataScanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [metadataScanMutation, { data, loading, error }] = useMetadataScanMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMetadataScanMutation(baseOptions?: Apollo.MutationHookOptions<MetadataScanMutation, MetadataScanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MetadataScanMutation, MetadataScanMutationVariables>(MetadataScanDocument, options);
      }
export type MetadataScanMutationHookResult = ReturnType<typeof useMetadataScanMutation>;
export type MetadataScanMutationResult = Apollo.MutationResult<MetadataScanMutation>;
export type MetadataScanMutationOptions = Apollo.BaseMutationOptions<MetadataScanMutation, MetadataScanMutationVariables>;
export const MetadataGenerateDocument = gql`
    mutation MetadataGenerate($input: GenerateMetadataInput!) {
  metadataGenerate(input: $input)
}
    `;
export type MetadataGenerateMutationFn = Apollo.MutationFunction<MetadataGenerateMutation, MetadataGenerateMutationVariables>;

/**
 * __useMetadataGenerateMutation__
 *
 * To run a mutation, you first call `useMetadataGenerateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMetadataGenerateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [metadataGenerateMutation, { data, loading, error }] = useMetadataGenerateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMetadataGenerateMutation(baseOptions?: Apollo.MutationHookOptions<MetadataGenerateMutation, MetadataGenerateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MetadataGenerateMutation, MetadataGenerateMutationVariables>(MetadataGenerateDocument, options);
      }
export type MetadataGenerateMutationHookResult = ReturnType<typeof useMetadataGenerateMutation>;
export type MetadataGenerateMutationResult = Apollo.MutationResult<MetadataGenerateMutation>;
export type MetadataGenerateMutationOptions = Apollo.BaseMutationOptions<MetadataGenerateMutation, MetadataGenerateMutationVariables>;
export const MetadataAutoTagDocument = gql`
    mutation MetadataAutoTag($input: AutoTagMetadataInput!) {
  metadataAutoTag(input: $input)
}
    `;
export type MetadataAutoTagMutationFn = Apollo.MutationFunction<MetadataAutoTagMutation, MetadataAutoTagMutationVariables>;

/**
 * __useMetadataAutoTagMutation__
 *
 * To run a mutation, you first call `useMetadataAutoTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMetadataAutoTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [metadataAutoTagMutation, { data, loading, error }] = useMetadataAutoTagMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMetadataAutoTagMutation(baseOptions?: Apollo.MutationHookOptions<MetadataAutoTagMutation, MetadataAutoTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MetadataAutoTagMutation, MetadataAutoTagMutationVariables>(MetadataAutoTagDocument, options);
      }
export type MetadataAutoTagMutationHookResult = ReturnType<typeof useMetadataAutoTagMutation>;
export type MetadataAutoTagMutationResult = Apollo.MutationResult<MetadataAutoTagMutation>;
export type MetadataAutoTagMutationOptions = Apollo.BaseMutationOptions<MetadataAutoTagMutation, MetadataAutoTagMutationVariables>;
export const MetadataIdentifyDocument = gql`
    mutation MetadataIdentify($input: IdentifyMetadataInput!) {
  metadataIdentify(input: $input)
}
    `;
export type MetadataIdentifyMutationFn = Apollo.MutationFunction<MetadataIdentifyMutation, MetadataIdentifyMutationVariables>;

/**
 * __useMetadataIdentifyMutation__
 *
 * To run a mutation, you first call `useMetadataIdentifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMetadataIdentifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [metadataIdentifyMutation, { data, loading, error }] = useMetadataIdentifyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMetadataIdentifyMutation(baseOptions?: Apollo.MutationHookOptions<MetadataIdentifyMutation, MetadataIdentifyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MetadataIdentifyMutation, MetadataIdentifyMutationVariables>(MetadataIdentifyDocument, options);
      }
export type MetadataIdentifyMutationHookResult = ReturnType<typeof useMetadataIdentifyMutation>;
export type MetadataIdentifyMutationResult = Apollo.MutationResult<MetadataIdentifyMutation>;
export type MetadataIdentifyMutationOptions = Apollo.BaseMutationOptions<MetadataIdentifyMutation, MetadataIdentifyMutationVariables>;
export const MetadataCleanDocument = gql`
    mutation MetadataClean($input: CleanMetadataInput!) {
  metadataClean(input: $input)
}
    `;
export type MetadataCleanMutationFn = Apollo.MutationFunction<MetadataCleanMutation, MetadataCleanMutationVariables>;

/**
 * __useMetadataCleanMutation__
 *
 * To run a mutation, you first call `useMetadataCleanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMetadataCleanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [metadataCleanMutation, { data, loading, error }] = useMetadataCleanMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMetadataCleanMutation(baseOptions?: Apollo.MutationHookOptions<MetadataCleanMutation, MetadataCleanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MetadataCleanMutation, MetadataCleanMutationVariables>(MetadataCleanDocument, options);
      }
export type MetadataCleanMutationHookResult = ReturnType<typeof useMetadataCleanMutation>;
export type MetadataCleanMutationResult = Apollo.MutationResult<MetadataCleanMutation>;
export type MetadataCleanMutationOptions = Apollo.BaseMutationOptions<MetadataCleanMutation, MetadataCleanMutationVariables>;
export const MigrateHashNamingDocument = gql`
    mutation MigrateHashNaming {
  migrateHashNaming
}
    `;
export type MigrateHashNamingMutationFn = Apollo.MutationFunction<MigrateHashNamingMutation, MigrateHashNamingMutationVariables>;

/**
 * __useMigrateHashNamingMutation__
 *
 * To run a mutation, you first call `useMigrateHashNamingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMigrateHashNamingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [migrateHashNamingMutation, { data, loading, error }] = useMigrateHashNamingMutation({
 *   variables: {
 *   },
 * });
 */
export function useMigrateHashNamingMutation(baseOptions?: Apollo.MutationHookOptions<MigrateHashNamingMutation, MigrateHashNamingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MigrateHashNamingMutation, MigrateHashNamingMutationVariables>(MigrateHashNamingDocument, options);
      }
export type MigrateHashNamingMutationHookResult = ReturnType<typeof useMigrateHashNamingMutation>;
export type MigrateHashNamingMutationResult = Apollo.MutationResult<MigrateHashNamingMutation>;
export type MigrateHashNamingMutationOptions = Apollo.BaseMutationOptions<MigrateHashNamingMutation, MigrateHashNamingMutationVariables>;
export const BackupDatabaseDocument = gql`
    mutation BackupDatabase($input: BackupDatabaseInput!) {
  backupDatabase(input: $input)
}
    `;
export type BackupDatabaseMutationFn = Apollo.MutationFunction<BackupDatabaseMutation, BackupDatabaseMutationVariables>;

/**
 * __useBackupDatabaseMutation__
 *
 * To run a mutation, you first call `useBackupDatabaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBackupDatabaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [backupDatabaseMutation, { data, loading, error }] = useBackupDatabaseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBackupDatabaseMutation(baseOptions?: Apollo.MutationHookOptions<BackupDatabaseMutation, BackupDatabaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BackupDatabaseMutation, BackupDatabaseMutationVariables>(BackupDatabaseDocument, options);
      }
export type BackupDatabaseMutationHookResult = ReturnType<typeof useBackupDatabaseMutation>;
export type BackupDatabaseMutationResult = Apollo.MutationResult<BackupDatabaseMutation>;
export type BackupDatabaseMutationOptions = Apollo.BaseMutationOptions<BackupDatabaseMutation, BackupDatabaseMutationVariables>;
export const AnonymiseDatabaseDocument = gql`
    mutation AnonymiseDatabase($input: AnonymiseDatabaseInput!) {
  anonymiseDatabase(input: $input)
}
    `;
export type AnonymiseDatabaseMutationFn = Apollo.MutationFunction<AnonymiseDatabaseMutation, AnonymiseDatabaseMutationVariables>;

/**
 * __useAnonymiseDatabaseMutation__
 *
 * To run a mutation, you first call `useAnonymiseDatabaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnonymiseDatabaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [anonymiseDatabaseMutation, { data, loading, error }] = useAnonymiseDatabaseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAnonymiseDatabaseMutation(baseOptions?: Apollo.MutationHookOptions<AnonymiseDatabaseMutation, AnonymiseDatabaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AnonymiseDatabaseMutation, AnonymiseDatabaseMutationVariables>(AnonymiseDatabaseDocument, options);
      }
export type AnonymiseDatabaseMutationHookResult = ReturnType<typeof useAnonymiseDatabaseMutation>;
export type AnonymiseDatabaseMutationResult = Apollo.MutationResult<AnonymiseDatabaseMutation>;
export type AnonymiseDatabaseMutationOptions = Apollo.BaseMutationOptions<AnonymiseDatabaseMutation, AnonymiseDatabaseMutationVariables>;
export const OptimiseDatabaseDocument = gql`
    mutation OptimiseDatabase {
  optimiseDatabase
}
    `;
export type OptimiseDatabaseMutationFn = Apollo.MutationFunction<OptimiseDatabaseMutation, OptimiseDatabaseMutationVariables>;

/**
 * __useOptimiseDatabaseMutation__
 *
 * To run a mutation, you first call `useOptimiseDatabaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOptimiseDatabaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [optimiseDatabaseMutation, { data, loading, error }] = useOptimiseDatabaseMutation({
 *   variables: {
 *   },
 * });
 */
export function useOptimiseDatabaseMutation(baseOptions?: Apollo.MutationHookOptions<OptimiseDatabaseMutation, OptimiseDatabaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OptimiseDatabaseMutation, OptimiseDatabaseMutationVariables>(OptimiseDatabaseDocument, options);
      }
export type OptimiseDatabaseMutationHookResult = ReturnType<typeof useOptimiseDatabaseMutation>;
export type OptimiseDatabaseMutationResult = Apollo.MutationResult<OptimiseDatabaseMutation>;
export type OptimiseDatabaseMutationOptions = Apollo.BaseMutationOptions<OptimiseDatabaseMutation, OptimiseDatabaseMutationVariables>;
export const MigrateSceneScreenshotsDocument = gql`
    mutation MigrateSceneScreenshots($input: MigrateSceneScreenshotsInput!) {
  migrateSceneScreenshots(input: $input)
}
    `;
export type MigrateSceneScreenshotsMutationFn = Apollo.MutationFunction<MigrateSceneScreenshotsMutation, MigrateSceneScreenshotsMutationVariables>;

/**
 * __useMigrateSceneScreenshotsMutation__
 *
 * To run a mutation, you first call `useMigrateSceneScreenshotsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMigrateSceneScreenshotsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [migrateSceneScreenshotsMutation, { data, loading, error }] = useMigrateSceneScreenshotsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMigrateSceneScreenshotsMutation(baseOptions?: Apollo.MutationHookOptions<MigrateSceneScreenshotsMutation, MigrateSceneScreenshotsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MigrateSceneScreenshotsMutation, MigrateSceneScreenshotsMutationVariables>(MigrateSceneScreenshotsDocument, options);
      }
export type MigrateSceneScreenshotsMutationHookResult = ReturnType<typeof useMigrateSceneScreenshotsMutation>;
export type MigrateSceneScreenshotsMutationResult = Apollo.MutationResult<MigrateSceneScreenshotsMutation>;
export type MigrateSceneScreenshotsMutationOptions = Apollo.BaseMutationOptions<MigrateSceneScreenshotsMutation, MigrateSceneScreenshotsMutationVariables>;
export const MigrateBlobsDocument = gql`
    mutation MigrateBlobs($input: MigrateBlobsInput!) {
  migrateBlobs(input: $input)
}
    `;
export type MigrateBlobsMutationFn = Apollo.MutationFunction<MigrateBlobsMutation, MigrateBlobsMutationVariables>;

/**
 * __useMigrateBlobsMutation__
 *
 * To run a mutation, you first call `useMigrateBlobsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMigrateBlobsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [migrateBlobsMutation, { data, loading, error }] = useMigrateBlobsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMigrateBlobsMutation(baseOptions?: Apollo.MutationHookOptions<MigrateBlobsMutation, MigrateBlobsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MigrateBlobsMutation, MigrateBlobsMutationVariables>(MigrateBlobsDocument, options);
      }
export type MigrateBlobsMutationHookResult = ReturnType<typeof useMigrateBlobsMutation>;
export type MigrateBlobsMutationResult = Apollo.MutationResult<MigrateBlobsMutation>;
export type MigrateBlobsMutationOptions = Apollo.BaseMutationOptions<MigrateBlobsMutation, MigrateBlobsMutationVariables>;
export const MovieCreateDocument = gql`
    mutation MovieCreate($input: MovieCreateInput!) {
  movieCreate(input: $input) {
    ...MovieData
  }
}
    ${MovieDataFragmentDoc}`;
export type MovieCreateMutationFn = Apollo.MutationFunction<MovieCreateMutation, MovieCreateMutationVariables>;

/**
 * __useMovieCreateMutation__
 *
 * To run a mutation, you first call `useMovieCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMovieCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [movieCreateMutation, { data, loading, error }] = useMovieCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMovieCreateMutation(baseOptions?: Apollo.MutationHookOptions<MovieCreateMutation, MovieCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MovieCreateMutation, MovieCreateMutationVariables>(MovieCreateDocument, options);
      }
export type MovieCreateMutationHookResult = ReturnType<typeof useMovieCreateMutation>;
export type MovieCreateMutationResult = Apollo.MutationResult<MovieCreateMutation>;
export type MovieCreateMutationOptions = Apollo.BaseMutationOptions<MovieCreateMutation, MovieCreateMutationVariables>;
export const MovieUpdateDocument = gql`
    mutation MovieUpdate($input: MovieUpdateInput!) {
  movieUpdate(input: $input) {
    ...MovieData
  }
}
    ${MovieDataFragmentDoc}`;
export type MovieUpdateMutationFn = Apollo.MutationFunction<MovieUpdateMutation, MovieUpdateMutationVariables>;

/**
 * __useMovieUpdateMutation__
 *
 * To run a mutation, you first call `useMovieUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMovieUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [movieUpdateMutation, { data, loading, error }] = useMovieUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMovieUpdateMutation(baseOptions?: Apollo.MutationHookOptions<MovieUpdateMutation, MovieUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MovieUpdateMutation, MovieUpdateMutationVariables>(MovieUpdateDocument, options);
      }
export type MovieUpdateMutationHookResult = ReturnType<typeof useMovieUpdateMutation>;
export type MovieUpdateMutationResult = Apollo.MutationResult<MovieUpdateMutation>;
export type MovieUpdateMutationOptions = Apollo.BaseMutationOptions<MovieUpdateMutation, MovieUpdateMutationVariables>;
export const BulkMovieUpdateDocument = gql`
    mutation BulkMovieUpdate($input: BulkMovieUpdateInput!) {
  bulkMovieUpdate(input: $input) {
    ...MovieData
  }
}
    ${MovieDataFragmentDoc}`;
export type BulkMovieUpdateMutationFn = Apollo.MutationFunction<BulkMovieUpdateMutation, BulkMovieUpdateMutationVariables>;

/**
 * __useBulkMovieUpdateMutation__
 *
 * To run a mutation, you first call `useBulkMovieUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkMovieUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkMovieUpdateMutation, { data, loading, error }] = useBulkMovieUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBulkMovieUpdateMutation(baseOptions?: Apollo.MutationHookOptions<BulkMovieUpdateMutation, BulkMovieUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BulkMovieUpdateMutation, BulkMovieUpdateMutationVariables>(BulkMovieUpdateDocument, options);
      }
export type BulkMovieUpdateMutationHookResult = ReturnType<typeof useBulkMovieUpdateMutation>;
export type BulkMovieUpdateMutationResult = Apollo.MutationResult<BulkMovieUpdateMutation>;
export type BulkMovieUpdateMutationOptions = Apollo.BaseMutationOptions<BulkMovieUpdateMutation, BulkMovieUpdateMutationVariables>;
export const MovieDestroyDocument = gql`
    mutation MovieDestroy($id: ID!) {
  movieDestroy(input: {id: $id})
}
    `;
export type MovieDestroyMutationFn = Apollo.MutationFunction<MovieDestroyMutation, MovieDestroyMutationVariables>;

/**
 * __useMovieDestroyMutation__
 *
 * To run a mutation, you first call `useMovieDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMovieDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [movieDestroyMutation, { data, loading, error }] = useMovieDestroyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMovieDestroyMutation(baseOptions?: Apollo.MutationHookOptions<MovieDestroyMutation, MovieDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MovieDestroyMutation, MovieDestroyMutationVariables>(MovieDestroyDocument, options);
      }
export type MovieDestroyMutationHookResult = ReturnType<typeof useMovieDestroyMutation>;
export type MovieDestroyMutationResult = Apollo.MutationResult<MovieDestroyMutation>;
export type MovieDestroyMutationOptions = Apollo.BaseMutationOptions<MovieDestroyMutation, MovieDestroyMutationVariables>;
export const MoviesDestroyDocument = gql`
    mutation MoviesDestroy($ids: [ID!]!) {
  moviesDestroy(ids: $ids)
}
    `;
export type MoviesDestroyMutationFn = Apollo.MutationFunction<MoviesDestroyMutation, MoviesDestroyMutationVariables>;

/**
 * __useMoviesDestroyMutation__
 *
 * To run a mutation, you first call `useMoviesDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoviesDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moviesDestroyMutation, { data, loading, error }] = useMoviesDestroyMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useMoviesDestroyMutation(baseOptions?: Apollo.MutationHookOptions<MoviesDestroyMutation, MoviesDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MoviesDestroyMutation, MoviesDestroyMutationVariables>(MoviesDestroyDocument, options);
      }
export type MoviesDestroyMutationHookResult = ReturnType<typeof useMoviesDestroyMutation>;
export type MoviesDestroyMutationResult = Apollo.MutationResult<MoviesDestroyMutation>;
export type MoviesDestroyMutationOptions = Apollo.BaseMutationOptions<MoviesDestroyMutation, MoviesDestroyMutationVariables>;
export const PerformerCreateDocument = gql`
    mutation PerformerCreate($input: PerformerCreateInput!) {
  performerCreate(input: $input) {
    ...PerformerData
  }
}
    ${PerformerDataFragmentDoc}`;
export type PerformerCreateMutationFn = Apollo.MutationFunction<PerformerCreateMutation, PerformerCreateMutationVariables>;

/**
 * __usePerformerCreateMutation__
 *
 * To run a mutation, you first call `usePerformerCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePerformerCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [performerCreateMutation, { data, loading, error }] = usePerformerCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePerformerCreateMutation(baseOptions?: Apollo.MutationHookOptions<PerformerCreateMutation, PerformerCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PerformerCreateMutation, PerformerCreateMutationVariables>(PerformerCreateDocument, options);
      }
export type PerformerCreateMutationHookResult = ReturnType<typeof usePerformerCreateMutation>;
export type PerformerCreateMutationResult = Apollo.MutationResult<PerformerCreateMutation>;
export type PerformerCreateMutationOptions = Apollo.BaseMutationOptions<PerformerCreateMutation, PerformerCreateMutationVariables>;
export const PerformerUpdateDocument = gql`
    mutation PerformerUpdate($input: PerformerUpdateInput!) {
  performerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${PerformerDataFragmentDoc}`;
export type PerformerUpdateMutationFn = Apollo.MutationFunction<PerformerUpdateMutation, PerformerUpdateMutationVariables>;

/**
 * __usePerformerUpdateMutation__
 *
 * To run a mutation, you first call `usePerformerUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePerformerUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [performerUpdateMutation, { data, loading, error }] = usePerformerUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePerformerUpdateMutation(baseOptions?: Apollo.MutationHookOptions<PerformerUpdateMutation, PerformerUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PerformerUpdateMutation, PerformerUpdateMutationVariables>(PerformerUpdateDocument, options);
      }
export type PerformerUpdateMutationHookResult = ReturnType<typeof usePerformerUpdateMutation>;
export type PerformerUpdateMutationResult = Apollo.MutationResult<PerformerUpdateMutation>;
export type PerformerUpdateMutationOptions = Apollo.BaseMutationOptions<PerformerUpdateMutation, PerformerUpdateMutationVariables>;
export const BulkPerformerUpdateDocument = gql`
    mutation BulkPerformerUpdate($input: BulkPerformerUpdateInput!) {
  bulkPerformerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${PerformerDataFragmentDoc}`;
export type BulkPerformerUpdateMutationFn = Apollo.MutationFunction<BulkPerformerUpdateMutation, BulkPerformerUpdateMutationVariables>;

/**
 * __useBulkPerformerUpdateMutation__
 *
 * To run a mutation, you first call `useBulkPerformerUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkPerformerUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkPerformerUpdateMutation, { data, loading, error }] = useBulkPerformerUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBulkPerformerUpdateMutation(baseOptions?: Apollo.MutationHookOptions<BulkPerformerUpdateMutation, BulkPerformerUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BulkPerformerUpdateMutation, BulkPerformerUpdateMutationVariables>(BulkPerformerUpdateDocument, options);
      }
export type BulkPerformerUpdateMutationHookResult = ReturnType<typeof useBulkPerformerUpdateMutation>;
export type BulkPerformerUpdateMutationResult = Apollo.MutationResult<BulkPerformerUpdateMutation>;
export type BulkPerformerUpdateMutationOptions = Apollo.BaseMutationOptions<BulkPerformerUpdateMutation, BulkPerformerUpdateMutationVariables>;
export const PerformerDestroyDocument = gql`
    mutation PerformerDestroy($id: ID!) {
  performerDestroy(input: {id: $id})
}
    `;
export type PerformerDestroyMutationFn = Apollo.MutationFunction<PerformerDestroyMutation, PerformerDestroyMutationVariables>;

/**
 * __usePerformerDestroyMutation__
 *
 * To run a mutation, you first call `usePerformerDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePerformerDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [performerDestroyMutation, { data, loading, error }] = usePerformerDestroyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePerformerDestroyMutation(baseOptions?: Apollo.MutationHookOptions<PerformerDestroyMutation, PerformerDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PerformerDestroyMutation, PerformerDestroyMutationVariables>(PerformerDestroyDocument, options);
      }
export type PerformerDestroyMutationHookResult = ReturnType<typeof usePerformerDestroyMutation>;
export type PerformerDestroyMutationResult = Apollo.MutationResult<PerformerDestroyMutation>;
export type PerformerDestroyMutationOptions = Apollo.BaseMutationOptions<PerformerDestroyMutation, PerformerDestroyMutationVariables>;
export const PerformersDestroyDocument = gql`
    mutation PerformersDestroy($ids: [ID!]!) {
  performersDestroy(ids: $ids)
}
    `;
export type PerformersDestroyMutationFn = Apollo.MutationFunction<PerformersDestroyMutation, PerformersDestroyMutationVariables>;

/**
 * __usePerformersDestroyMutation__
 *
 * To run a mutation, you first call `usePerformersDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePerformersDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [performersDestroyMutation, { data, loading, error }] = usePerformersDestroyMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function usePerformersDestroyMutation(baseOptions?: Apollo.MutationHookOptions<PerformersDestroyMutation, PerformersDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PerformersDestroyMutation, PerformersDestroyMutationVariables>(PerformersDestroyDocument, options);
      }
export type PerformersDestroyMutationHookResult = ReturnType<typeof usePerformersDestroyMutation>;
export type PerformersDestroyMutationResult = Apollo.MutationResult<PerformersDestroyMutation>;
export type PerformersDestroyMutationOptions = Apollo.BaseMutationOptions<PerformersDestroyMutation, PerformersDestroyMutationVariables>;
export const ReloadPluginsDocument = gql`
    mutation ReloadPlugins {
  reloadPlugins
}
    `;
export type ReloadPluginsMutationFn = Apollo.MutationFunction<ReloadPluginsMutation, ReloadPluginsMutationVariables>;

/**
 * __useReloadPluginsMutation__
 *
 * To run a mutation, you first call `useReloadPluginsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReloadPluginsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reloadPluginsMutation, { data, loading, error }] = useReloadPluginsMutation({
 *   variables: {
 *   },
 * });
 */
export function useReloadPluginsMutation(baseOptions?: Apollo.MutationHookOptions<ReloadPluginsMutation, ReloadPluginsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReloadPluginsMutation, ReloadPluginsMutationVariables>(ReloadPluginsDocument, options);
      }
export type ReloadPluginsMutationHookResult = ReturnType<typeof useReloadPluginsMutation>;
export type ReloadPluginsMutationResult = Apollo.MutationResult<ReloadPluginsMutation>;
export type ReloadPluginsMutationOptions = Apollo.BaseMutationOptions<ReloadPluginsMutation, ReloadPluginsMutationVariables>;
export const RunPluginTaskDocument = gql`
    mutation RunPluginTask($plugin_id: ID!, $task_name: String!, $args: [PluginArgInput!]) {
  runPluginTask(plugin_id: $plugin_id, task_name: $task_name, args: $args)
}
    `;
export type RunPluginTaskMutationFn = Apollo.MutationFunction<RunPluginTaskMutation, RunPluginTaskMutationVariables>;

/**
 * __useRunPluginTaskMutation__
 *
 * To run a mutation, you first call `useRunPluginTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRunPluginTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [runPluginTaskMutation, { data, loading, error }] = useRunPluginTaskMutation({
 *   variables: {
 *      plugin_id: // value for 'plugin_id'
 *      task_name: // value for 'task_name'
 *      args: // value for 'args'
 *   },
 * });
 */
export function useRunPluginTaskMutation(baseOptions?: Apollo.MutationHookOptions<RunPluginTaskMutation, RunPluginTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RunPluginTaskMutation, RunPluginTaskMutationVariables>(RunPluginTaskDocument, options);
      }
export type RunPluginTaskMutationHookResult = ReturnType<typeof useRunPluginTaskMutation>;
export type RunPluginTaskMutationResult = Apollo.MutationResult<RunPluginTaskMutation>;
export type RunPluginTaskMutationOptions = Apollo.BaseMutationOptions<RunPluginTaskMutation, RunPluginTaskMutationVariables>;
export const ConfigurePluginDocument = gql`
    mutation ConfigurePlugin($plugin_id: ID!, $input: Map!) {
  configurePlugin(plugin_id: $plugin_id, input: $input)
}
    `;
export type ConfigurePluginMutationFn = Apollo.MutationFunction<ConfigurePluginMutation, ConfigurePluginMutationVariables>;

/**
 * __useConfigurePluginMutation__
 *
 * To run a mutation, you first call `useConfigurePluginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfigurePluginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [configurePluginMutation, { data, loading, error }] = useConfigurePluginMutation({
 *   variables: {
 *      plugin_id: // value for 'plugin_id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConfigurePluginMutation(baseOptions?: Apollo.MutationHookOptions<ConfigurePluginMutation, ConfigurePluginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfigurePluginMutation, ConfigurePluginMutationVariables>(ConfigurePluginDocument, options);
      }
export type ConfigurePluginMutationHookResult = ReturnType<typeof useConfigurePluginMutation>;
export type ConfigurePluginMutationResult = Apollo.MutationResult<ConfigurePluginMutation>;
export type ConfigurePluginMutationOptions = Apollo.BaseMutationOptions<ConfigurePluginMutation, ConfigurePluginMutationVariables>;
export const SetPluginsEnabledDocument = gql`
    mutation SetPluginsEnabled($enabledMap: BoolMap!) {
  setPluginsEnabled(enabledMap: $enabledMap)
}
    `;
export type SetPluginsEnabledMutationFn = Apollo.MutationFunction<SetPluginsEnabledMutation, SetPluginsEnabledMutationVariables>;

/**
 * __useSetPluginsEnabledMutation__
 *
 * To run a mutation, you first call `useSetPluginsEnabledMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetPluginsEnabledMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setPluginsEnabledMutation, { data, loading, error }] = useSetPluginsEnabledMutation({
 *   variables: {
 *      enabledMap: // value for 'enabledMap'
 *   },
 * });
 */
export function useSetPluginsEnabledMutation(baseOptions?: Apollo.MutationHookOptions<SetPluginsEnabledMutation, SetPluginsEnabledMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetPluginsEnabledMutation, SetPluginsEnabledMutationVariables>(SetPluginsEnabledDocument, options);
      }
export type SetPluginsEnabledMutationHookResult = ReturnType<typeof useSetPluginsEnabledMutation>;
export type SetPluginsEnabledMutationResult = Apollo.MutationResult<SetPluginsEnabledMutation>;
export type SetPluginsEnabledMutationOptions = Apollo.BaseMutationOptions<SetPluginsEnabledMutation, SetPluginsEnabledMutationVariables>;
export const InstallPluginPackagesDocument = gql`
    mutation InstallPluginPackages($packages: [PackageSpecInput!]!) {
  installPackages(type: Plugin, packages: $packages)
}
    `;
export type InstallPluginPackagesMutationFn = Apollo.MutationFunction<InstallPluginPackagesMutation, InstallPluginPackagesMutationVariables>;

/**
 * __useInstallPluginPackagesMutation__
 *
 * To run a mutation, you first call `useInstallPluginPackagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInstallPluginPackagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [installPluginPackagesMutation, { data, loading, error }] = useInstallPluginPackagesMutation({
 *   variables: {
 *      packages: // value for 'packages'
 *   },
 * });
 */
export function useInstallPluginPackagesMutation(baseOptions?: Apollo.MutationHookOptions<InstallPluginPackagesMutation, InstallPluginPackagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InstallPluginPackagesMutation, InstallPluginPackagesMutationVariables>(InstallPluginPackagesDocument, options);
      }
export type InstallPluginPackagesMutationHookResult = ReturnType<typeof useInstallPluginPackagesMutation>;
export type InstallPluginPackagesMutationResult = Apollo.MutationResult<InstallPluginPackagesMutation>;
export type InstallPluginPackagesMutationOptions = Apollo.BaseMutationOptions<InstallPluginPackagesMutation, InstallPluginPackagesMutationVariables>;
export const UpdatePluginPackagesDocument = gql`
    mutation UpdatePluginPackages($packages: [PackageSpecInput!]!) {
  updatePackages(type: Plugin, packages: $packages)
}
    `;
export type UpdatePluginPackagesMutationFn = Apollo.MutationFunction<UpdatePluginPackagesMutation, UpdatePluginPackagesMutationVariables>;

/**
 * __useUpdatePluginPackagesMutation__
 *
 * To run a mutation, you first call `useUpdatePluginPackagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePluginPackagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePluginPackagesMutation, { data, loading, error }] = useUpdatePluginPackagesMutation({
 *   variables: {
 *      packages: // value for 'packages'
 *   },
 * });
 */
export function useUpdatePluginPackagesMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePluginPackagesMutation, UpdatePluginPackagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePluginPackagesMutation, UpdatePluginPackagesMutationVariables>(UpdatePluginPackagesDocument, options);
      }
export type UpdatePluginPackagesMutationHookResult = ReturnType<typeof useUpdatePluginPackagesMutation>;
export type UpdatePluginPackagesMutationResult = Apollo.MutationResult<UpdatePluginPackagesMutation>;
export type UpdatePluginPackagesMutationOptions = Apollo.BaseMutationOptions<UpdatePluginPackagesMutation, UpdatePluginPackagesMutationVariables>;
export const UninstallPluginPackagesDocument = gql`
    mutation UninstallPluginPackages($packages: [PackageSpecInput!]!) {
  uninstallPackages(type: Plugin, packages: $packages)
}
    `;
export type UninstallPluginPackagesMutationFn = Apollo.MutationFunction<UninstallPluginPackagesMutation, UninstallPluginPackagesMutationVariables>;

/**
 * __useUninstallPluginPackagesMutation__
 *
 * To run a mutation, you first call `useUninstallPluginPackagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUninstallPluginPackagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uninstallPluginPackagesMutation, { data, loading, error }] = useUninstallPluginPackagesMutation({
 *   variables: {
 *      packages: // value for 'packages'
 *   },
 * });
 */
export function useUninstallPluginPackagesMutation(baseOptions?: Apollo.MutationHookOptions<UninstallPluginPackagesMutation, UninstallPluginPackagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UninstallPluginPackagesMutation, UninstallPluginPackagesMutationVariables>(UninstallPluginPackagesDocument, options);
      }
export type UninstallPluginPackagesMutationHookResult = ReturnType<typeof useUninstallPluginPackagesMutation>;
export type UninstallPluginPackagesMutationResult = Apollo.MutationResult<UninstallPluginPackagesMutation>;
export type UninstallPluginPackagesMutationOptions = Apollo.BaseMutationOptions<UninstallPluginPackagesMutation, UninstallPluginPackagesMutationVariables>;
export const SceneMarkerCreateDocument = gql`
    mutation SceneMarkerCreate($title: String!, $seconds: Float!, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerCreate(
    input: {title: $title, seconds: $seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${SceneMarkerDataFragmentDoc}`;
export type SceneMarkerCreateMutationFn = Apollo.MutationFunction<SceneMarkerCreateMutation, SceneMarkerCreateMutationVariables>;

/**
 * __useSceneMarkerCreateMutation__
 *
 * To run a mutation, you first call `useSceneMarkerCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneMarkerCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneMarkerCreateMutation, { data, loading, error }] = useSceneMarkerCreateMutation({
 *   variables: {
 *      title: // value for 'title'
 *      seconds: // value for 'seconds'
 *      scene_id: // value for 'scene_id'
 *      primary_tag_id: // value for 'primary_tag_id'
 *      tag_ids: // value for 'tag_ids'
 *   },
 * });
 */
export function useSceneMarkerCreateMutation(baseOptions?: Apollo.MutationHookOptions<SceneMarkerCreateMutation, SceneMarkerCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneMarkerCreateMutation, SceneMarkerCreateMutationVariables>(SceneMarkerCreateDocument, options);
      }
export type SceneMarkerCreateMutationHookResult = ReturnType<typeof useSceneMarkerCreateMutation>;
export type SceneMarkerCreateMutationResult = Apollo.MutationResult<SceneMarkerCreateMutation>;
export type SceneMarkerCreateMutationOptions = Apollo.BaseMutationOptions<SceneMarkerCreateMutation, SceneMarkerCreateMutationVariables>;
export const SceneMarkerUpdateDocument = gql`
    mutation SceneMarkerUpdate($id: ID!, $title: String!, $seconds: Float!, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerUpdate(
    input: {id: $id, title: $title, seconds: $seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${SceneMarkerDataFragmentDoc}`;
export type SceneMarkerUpdateMutationFn = Apollo.MutationFunction<SceneMarkerUpdateMutation, SceneMarkerUpdateMutationVariables>;

/**
 * __useSceneMarkerUpdateMutation__
 *
 * To run a mutation, you first call `useSceneMarkerUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneMarkerUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneMarkerUpdateMutation, { data, loading, error }] = useSceneMarkerUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      seconds: // value for 'seconds'
 *      scene_id: // value for 'scene_id'
 *      primary_tag_id: // value for 'primary_tag_id'
 *      tag_ids: // value for 'tag_ids'
 *   },
 * });
 */
export function useSceneMarkerUpdateMutation(baseOptions?: Apollo.MutationHookOptions<SceneMarkerUpdateMutation, SceneMarkerUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneMarkerUpdateMutation, SceneMarkerUpdateMutationVariables>(SceneMarkerUpdateDocument, options);
      }
export type SceneMarkerUpdateMutationHookResult = ReturnType<typeof useSceneMarkerUpdateMutation>;
export type SceneMarkerUpdateMutationResult = Apollo.MutationResult<SceneMarkerUpdateMutation>;
export type SceneMarkerUpdateMutationOptions = Apollo.BaseMutationOptions<SceneMarkerUpdateMutation, SceneMarkerUpdateMutationVariables>;
export const SceneMarkerDestroyDocument = gql`
    mutation SceneMarkerDestroy($id: ID!) {
  sceneMarkerDestroy(id: $id)
}
    `;
export type SceneMarkerDestroyMutationFn = Apollo.MutationFunction<SceneMarkerDestroyMutation, SceneMarkerDestroyMutationVariables>;

/**
 * __useSceneMarkerDestroyMutation__
 *
 * To run a mutation, you first call `useSceneMarkerDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneMarkerDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneMarkerDestroyMutation, { data, loading, error }] = useSceneMarkerDestroyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSceneMarkerDestroyMutation(baseOptions?: Apollo.MutationHookOptions<SceneMarkerDestroyMutation, SceneMarkerDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneMarkerDestroyMutation, SceneMarkerDestroyMutationVariables>(SceneMarkerDestroyDocument, options);
      }
export type SceneMarkerDestroyMutationHookResult = ReturnType<typeof useSceneMarkerDestroyMutation>;
export type SceneMarkerDestroyMutationResult = Apollo.MutationResult<SceneMarkerDestroyMutation>;
export type SceneMarkerDestroyMutationOptions = Apollo.BaseMutationOptions<SceneMarkerDestroyMutation, SceneMarkerDestroyMutationVariables>;
export const SceneCreateDocument = gql`
    mutation SceneCreate($input: SceneCreateInput!) {
  sceneCreate(input: $input) {
    ...SceneData
  }
}
    ${SceneDataFragmentDoc}`;
export type SceneCreateMutationFn = Apollo.MutationFunction<SceneCreateMutation, SceneCreateMutationVariables>;

/**
 * __useSceneCreateMutation__
 *
 * To run a mutation, you first call `useSceneCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneCreateMutation, { data, loading, error }] = useSceneCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSceneCreateMutation(baseOptions?: Apollo.MutationHookOptions<SceneCreateMutation, SceneCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneCreateMutation, SceneCreateMutationVariables>(SceneCreateDocument, options);
      }
export type SceneCreateMutationHookResult = ReturnType<typeof useSceneCreateMutation>;
export type SceneCreateMutationResult = Apollo.MutationResult<SceneCreateMutation>;
export type SceneCreateMutationOptions = Apollo.BaseMutationOptions<SceneCreateMutation, SceneCreateMutationVariables>;
export const SceneUpdateDocument = gql`
    mutation SceneUpdate($input: SceneUpdateInput!) {
  sceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${SceneDataFragmentDoc}`;
export type SceneUpdateMutationFn = Apollo.MutationFunction<SceneUpdateMutation, SceneUpdateMutationVariables>;

/**
 * __useSceneUpdateMutation__
 *
 * To run a mutation, you first call `useSceneUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneUpdateMutation, { data, loading, error }] = useSceneUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSceneUpdateMutation(baseOptions?: Apollo.MutationHookOptions<SceneUpdateMutation, SceneUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneUpdateMutation, SceneUpdateMutationVariables>(SceneUpdateDocument, options);
      }
export type SceneUpdateMutationHookResult = ReturnType<typeof useSceneUpdateMutation>;
export type SceneUpdateMutationResult = Apollo.MutationResult<SceneUpdateMutation>;
export type SceneUpdateMutationOptions = Apollo.BaseMutationOptions<SceneUpdateMutation, SceneUpdateMutationVariables>;
export const BulkSceneUpdateDocument = gql`
    mutation BulkSceneUpdate($input: BulkSceneUpdateInput!) {
  bulkSceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${SceneDataFragmentDoc}`;
export type BulkSceneUpdateMutationFn = Apollo.MutationFunction<BulkSceneUpdateMutation, BulkSceneUpdateMutationVariables>;

/**
 * __useBulkSceneUpdateMutation__
 *
 * To run a mutation, you first call `useBulkSceneUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkSceneUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkSceneUpdateMutation, { data, loading, error }] = useBulkSceneUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBulkSceneUpdateMutation(baseOptions?: Apollo.MutationHookOptions<BulkSceneUpdateMutation, BulkSceneUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BulkSceneUpdateMutation, BulkSceneUpdateMutationVariables>(BulkSceneUpdateDocument, options);
      }
export type BulkSceneUpdateMutationHookResult = ReturnType<typeof useBulkSceneUpdateMutation>;
export type BulkSceneUpdateMutationResult = Apollo.MutationResult<BulkSceneUpdateMutation>;
export type BulkSceneUpdateMutationOptions = Apollo.BaseMutationOptions<BulkSceneUpdateMutation, BulkSceneUpdateMutationVariables>;
export const ScenesUpdateDocument = gql`
    mutation ScenesUpdate($input: [SceneUpdateInput!]!) {
  scenesUpdate(input: $input) {
    ...SceneData
  }
}
    ${SceneDataFragmentDoc}`;
export type ScenesUpdateMutationFn = Apollo.MutationFunction<ScenesUpdateMutation, ScenesUpdateMutationVariables>;

/**
 * __useScenesUpdateMutation__
 *
 * To run a mutation, you first call `useScenesUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useScenesUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [scenesUpdateMutation, { data, loading, error }] = useScenesUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useScenesUpdateMutation(baseOptions?: Apollo.MutationHookOptions<ScenesUpdateMutation, ScenesUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ScenesUpdateMutation, ScenesUpdateMutationVariables>(ScenesUpdateDocument, options);
      }
export type ScenesUpdateMutationHookResult = ReturnType<typeof useScenesUpdateMutation>;
export type ScenesUpdateMutationResult = Apollo.MutationResult<ScenesUpdateMutation>;
export type ScenesUpdateMutationOptions = Apollo.BaseMutationOptions<ScenesUpdateMutation, ScenesUpdateMutationVariables>;
export const SceneSaveActivityDocument = gql`
    mutation SceneSaveActivity($id: ID!, $resume_time: Float, $playDuration: Float) {
  sceneSaveActivity(
    id: $id
    resume_time: $resume_time
    playDuration: $playDuration
  )
}
    `;
export type SceneSaveActivityMutationFn = Apollo.MutationFunction<SceneSaveActivityMutation, SceneSaveActivityMutationVariables>;

/**
 * __useSceneSaveActivityMutation__
 *
 * To run a mutation, you first call `useSceneSaveActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneSaveActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneSaveActivityMutation, { data, loading, error }] = useSceneSaveActivityMutation({
 *   variables: {
 *      id: // value for 'id'
 *      resume_time: // value for 'resume_time'
 *      playDuration: // value for 'playDuration'
 *   },
 * });
 */
export function useSceneSaveActivityMutation(baseOptions?: Apollo.MutationHookOptions<SceneSaveActivityMutation, SceneSaveActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneSaveActivityMutation, SceneSaveActivityMutationVariables>(SceneSaveActivityDocument, options);
      }
export type SceneSaveActivityMutationHookResult = ReturnType<typeof useSceneSaveActivityMutation>;
export type SceneSaveActivityMutationResult = Apollo.MutationResult<SceneSaveActivityMutation>;
export type SceneSaveActivityMutationOptions = Apollo.BaseMutationOptions<SceneSaveActivityMutation, SceneSaveActivityMutationVariables>;
export const SceneIncrementPlayCountDocument = gql`
    mutation SceneIncrementPlayCount($id: ID!) {
  sceneIncrementPlayCount(id: $id)
}
    `;
export type SceneIncrementPlayCountMutationFn = Apollo.MutationFunction<SceneIncrementPlayCountMutation, SceneIncrementPlayCountMutationVariables>;

/**
 * __useSceneIncrementPlayCountMutation__
 *
 * To run a mutation, you first call `useSceneIncrementPlayCountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneIncrementPlayCountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneIncrementPlayCountMutation, { data, loading, error }] = useSceneIncrementPlayCountMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSceneIncrementPlayCountMutation(baseOptions?: Apollo.MutationHookOptions<SceneIncrementPlayCountMutation, SceneIncrementPlayCountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneIncrementPlayCountMutation, SceneIncrementPlayCountMutationVariables>(SceneIncrementPlayCountDocument, options);
      }
export type SceneIncrementPlayCountMutationHookResult = ReturnType<typeof useSceneIncrementPlayCountMutation>;
export type SceneIncrementPlayCountMutationResult = Apollo.MutationResult<SceneIncrementPlayCountMutation>;
export type SceneIncrementPlayCountMutationOptions = Apollo.BaseMutationOptions<SceneIncrementPlayCountMutation, SceneIncrementPlayCountMutationVariables>;
export const SceneIncrementODocument = gql`
    mutation SceneIncrementO($id: ID!) {
  sceneIncrementO(id: $id)
}
    `;
export type SceneIncrementOMutationFn = Apollo.MutationFunction<SceneIncrementOMutation, SceneIncrementOMutationVariables>;

/**
 * __useSceneIncrementOMutation__
 *
 * To run a mutation, you first call `useSceneIncrementOMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneIncrementOMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneIncrementOMutation, { data, loading, error }] = useSceneIncrementOMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSceneIncrementOMutation(baseOptions?: Apollo.MutationHookOptions<SceneIncrementOMutation, SceneIncrementOMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneIncrementOMutation, SceneIncrementOMutationVariables>(SceneIncrementODocument, options);
      }
export type SceneIncrementOMutationHookResult = ReturnType<typeof useSceneIncrementOMutation>;
export type SceneIncrementOMutationResult = Apollo.MutationResult<SceneIncrementOMutation>;
export type SceneIncrementOMutationOptions = Apollo.BaseMutationOptions<SceneIncrementOMutation, SceneIncrementOMutationVariables>;
export const SceneDecrementODocument = gql`
    mutation SceneDecrementO($id: ID!) {
  sceneDecrementO(id: $id)
}
    `;
export type SceneDecrementOMutationFn = Apollo.MutationFunction<SceneDecrementOMutation, SceneDecrementOMutationVariables>;

/**
 * __useSceneDecrementOMutation__
 *
 * To run a mutation, you first call `useSceneDecrementOMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneDecrementOMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneDecrementOMutation, { data, loading, error }] = useSceneDecrementOMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSceneDecrementOMutation(baseOptions?: Apollo.MutationHookOptions<SceneDecrementOMutation, SceneDecrementOMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneDecrementOMutation, SceneDecrementOMutationVariables>(SceneDecrementODocument, options);
      }
export type SceneDecrementOMutationHookResult = ReturnType<typeof useSceneDecrementOMutation>;
export type SceneDecrementOMutationResult = Apollo.MutationResult<SceneDecrementOMutation>;
export type SceneDecrementOMutationOptions = Apollo.BaseMutationOptions<SceneDecrementOMutation, SceneDecrementOMutationVariables>;
export const SceneResetODocument = gql`
    mutation SceneResetO($id: ID!) {
  sceneResetO(id: $id)
}
    `;
export type SceneResetOMutationFn = Apollo.MutationFunction<SceneResetOMutation, SceneResetOMutationVariables>;

/**
 * __useSceneResetOMutation__
 *
 * To run a mutation, you first call `useSceneResetOMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneResetOMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneResetOMutation, { data, loading, error }] = useSceneResetOMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSceneResetOMutation(baseOptions?: Apollo.MutationHookOptions<SceneResetOMutation, SceneResetOMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneResetOMutation, SceneResetOMutationVariables>(SceneResetODocument, options);
      }
export type SceneResetOMutationHookResult = ReturnType<typeof useSceneResetOMutation>;
export type SceneResetOMutationResult = Apollo.MutationResult<SceneResetOMutation>;
export type SceneResetOMutationOptions = Apollo.BaseMutationOptions<SceneResetOMutation, SceneResetOMutationVariables>;
export const SceneDestroyDocument = gql`
    mutation SceneDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  sceneDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;
export type SceneDestroyMutationFn = Apollo.MutationFunction<SceneDestroyMutation, SceneDestroyMutationVariables>;

/**
 * __useSceneDestroyMutation__
 *
 * To run a mutation, you first call `useSceneDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneDestroyMutation, { data, loading, error }] = useSceneDestroyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      delete_file: // value for 'delete_file'
 *      delete_generated: // value for 'delete_generated'
 *   },
 * });
 */
export function useSceneDestroyMutation(baseOptions?: Apollo.MutationHookOptions<SceneDestroyMutation, SceneDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneDestroyMutation, SceneDestroyMutationVariables>(SceneDestroyDocument, options);
      }
export type SceneDestroyMutationHookResult = ReturnType<typeof useSceneDestroyMutation>;
export type SceneDestroyMutationResult = Apollo.MutationResult<SceneDestroyMutation>;
export type SceneDestroyMutationOptions = Apollo.BaseMutationOptions<SceneDestroyMutation, SceneDestroyMutationVariables>;
export const ScenesDestroyDocument = gql`
    mutation ScenesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  scenesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;
export type ScenesDestroyMutationFn = Apollo.MutationFunction<ScenesDestroyMutation, ScenesDestroyMutationVariables>;

/**
 * __useScenesDestroyMutation__
 *
 * To run a mutation, you first call `useScenesDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useScenesDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [scenesDestroyMutation, { data, loading, error }] = useScenesDestroyMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *      delete_file: // value for 'delete_file'
 *      delete_generated: // value for 'delete_generated'
 *   },
 * });
 */
export function useScenesDestroyMutation(baseOptions?: Apollo.MutationHookOptions<ScenesDestroyMutation, ScenesDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ScenesDestroyMutation, ScenesDestroyMutationVariables>(ScenesDestroyDocument, options);
      }
export type ScenesDestroyMutationHookResult = ReturnType<typeof useScenesDestroyMutation>;
export type ScenesDestroyMutationResult = Apollo.MutationResult<ScenesDestroyMutation>;
export type ScenesDestroyMutationOptions = Apollo.BaseMutationOptions<ScenesDestroyMutation, ScenesDestroyMutationVariables>;
export const SceneGenerateScreenshotDocument = gql`
    mutation SceneGenerateScreenshot($id: ID!, $at: Float) {
  sceneGenerateScreenshot(id: $id, at: $at)
}
    `;
export type SceneGenerateScreenshotMutationFn = Apollo.MutationFunction<SceneGenerateScreenshotMutation, SceneGenerateScreenshotMutationVariables>;

/**
 * __useSceneGenerateScreenshotMutation__
 *
 * To run a mutation, you first call `useSceneGenerateScreenshotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneGenerateScreenshotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneGenerateScreenshotMutation, { data, loading, error }] = useSceneGenerateScreenshotMutation({
 *   variables: {
 *      id: // value for 'id'
 *      at: // value for 'at'
 *   },
 * });
 */
export function useSceneGenerateScreenshotMutation(baseOptions?: Apollo.MutationHookOptions<SceneGenerateScreenshotMutation, SceneGenerateScreenshotMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneGenerateScreenshotMutation, SceneGenerateScreenshotMutationVariables>(SceneGenerateScreenshotDocument, options);
      }
export type SceneGenerateScreenshotMutationHookResult = ReturnType<typeof useSceneGenerateScreenshotMutation>;
export type SceneGenerateScreenshotMutationResult = Apollo.MutationResult<SceneGenerateScreenshotMutation>;
export type SceneGenerateScreenshotMutationOptions = Apollo.BaseMutationOptions<SceneGenerateScreenshotMutation, SceneGenerateScreenshotMutationVariables>;
export const SceneAssignFileDocument = gql`
    mutation SceneAssignFile($input: AssignSceneFileInput!) {
  sceneAssignFile(input: $input)
}
    `;
export type SceneAssignFileMutationFn = Apollo.MutationFunction<SceneAssignFileMutation, SceneAssignFileMutationVariables>;

/**
 * __useSceneAssignFileMutation__
 *
 * To run a mutation, you first call `useSceneAssignFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneAssignFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneAssignFileMutation, { data, loading, error }] = useSceneAssignFileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSceneAssignFileMutation(baseOptions?: Apollo.MutationHookOptions<SceneAssignFileMutation, SceneAssignFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneAssignFileMutation, SceneAssignFileMutationVariables>(SceneAssignFileDocument, options);
      }
export type SceneAssignFileMutationHookResult = ReturnType<typeof useSceneAssignFileMutation>;
export type SceneAssignFileMutationResult = Apollo.MutationResult<SceneAssignFileMutation>;
export type SceneAssignFileMutationOptions = Apollo.BaseMutationOptions<SceneAssignFileMutation, SceneAssignFileMutationVariables>;
export const SceneMergeDocument = gql`
    mutation SceneMerge($input: SceneMergeInput!) {
  sceneMerge(input: $input) {
    id
  }
}
    `;
export type SceneMergeMutationFn = Apollo.MutationFunction<SceneMergeMutation, SceneMergeMutationVariables>;

/**
 * __useSceneMergeMutation__
 *
 * To run a mutation, you first call `useSceneMergeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneMergeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneMergeMutation, { data, loading, error }] = useSceneMergeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSceneMergeMutation(baseOptions?: Apollo.MutationHookOptions<SceneMergeMutation, SceneMergeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneMergeMutation, SceneMergeMutationVariables>(SceneMergeDocument, options);
      }
export type SceneMergeMutationHookResult = ReturnType<typeof useSceneMergeMutation>;
export type SceneMergeMutationResult = Apollo.MutationResult<SceneMergeMutation>;
export type SceneMergeMutationOptions = Apollo.BaseMutationOptions<SceneMergeMutation, SceneMergeMutationVariables>;
export const ReloadScrapersDocument = gql`
    mutation ReloadScrapers {
  reloadScrapers
}
    `;
export type ReloadScrapersMutationFn = Apollo.MutationFunction<ReloadScrapersMutation, ReloadScrapersMutationVariables>;

/**
 * __useReloadScrapersMutation__
 *
 * To run a mutation, you first call `useReloadScrapersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReloadScrapersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reloadScrapersMutation, { data, loading, error }] = useReloadScrapersMutation({
 *   variables: {
 *   },
 * });
 */
export function useReloadScrapersMutation(baseOptions?: Apollo.MutationHookOptions<ReloadScrapersMutation, ReloadScrapersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReloadScrapersMutation, ReloadScrapersMutationVariables>(ReloadScrapersDocument, options);
      }
export type ReloadScrapersMutationHookResult = ReturnType<typeof useReloadScrapersMutation>;
export type ReloadScrapersMutationResult = Apollo.MutationResult<ReloadScrapersMutation>;
export type ReloadScrapersMutationOptions = Apollo.BaseMutationOptions<ReloadScrapersMutation, ReloadScrapersMutationVariables>;
export const InstallScraperPackagesDocument = gql`
    mutation InstallScraperPackages($packages: [PackageSpecInput!]!) {
  installPackages(type: Scraper, packages: $packages)
}
    `;
export type InstallScraperPackagesMutationFn = Apollo.MutationFunction<InstallScraperPackagesMutation, InstallScraperPackagesMutationVariables>;

/**
 * __useInstallScraperPackagesMutation__
 *
 * To run a mutation, you first call `useInstallScraperPackagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInstallScraperPackagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [installScraperPackagesMutation, { data, loading, error }] = useInstallScraperPackagesMutation({
 *   variables: {
 *      packages: // value for 'packages'
 *   },
 * });
 */
export function useInstallScraperPackagesMutation(baseOptions?: Apollo.MutationHookOptions<InstallScraperPackagesMutation, InstallScraperPackagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InstallScraperPackagesMutation, InstallScraperPackagesMutationVariables>(InstallScraperPackagesDocument, options);
      }
export type InstallScraperPackagesMutationHookResult = ReturnType<typeof useInstallScraperPackagesMutation>;
export type InstallScraperPackagesMutationResult = Apollo.MutationResult<InstallScraperPackagesMutation>;
export type InstallScraperPackagesMutationOptions = Apollo.BaseMutationOptions<InstallScraperPackagesMutation, InstallScraperPackagesMutationVariables>;
export const UpdateScraperPackagesDocument = gql`
    mutation UpdateScraperPackages($packages: [PackageSpecInput!]!) {
  updatePackages(type: Scraper, packages: $packages)
}
    `;
export type UpdateScraperPackagesMutationFn = Apollo.MutationFunction<UpdateScraperPackagesMutation, UpdateScraperPackagesMutationVariables>;

/**
 * __useUpdateScraperPackagesMutation__
 *
 * To run a mutation, you first call `useUpdateScraperPackagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateScraperPackagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateScraperPackagesMutation, { data, loading, error }] = useUpdateScraperPackagesMutation({
 *   variables: {
 *      packages: // value for 'packages'
 *   },
 * });
 */
export function useUpdateScraperPackagesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateScraperPackagesMutation, UpdateScraperPackagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateScraperPackagesMutation, UpdateScraperPackagesMutationVariables>(UpdateScraperPackagesDocument, options);
      }
export type UpdateScraperPackagesMutationHookResult = ReturnType<typeof useUpdateScraperPackagesMutation>;
export type UpdateScraperPackagesMutationResult = Apollo.MutationResult<UpdateScraperPackagesMutation>;
export type UpdateScraperPackagesMutationOptions = Apollo.BaseMutationOptions<UpdateScraperPackagesMutation, UpdateScraperPackagesMutationVariables>;
export const UninstallScraperPackagesDocument = gql`
    mutation UninstallScraperPackages($packages: [PackageSpecInput!]!) {
  uninstallPackages(type: Scraper, packages: $packages)
}
    `;
export type UninstallScraperPackagesMutationFn = Apollo.MutationFunction<UninstallScraperPackagesMutation, UninstallScraperPackagesMutationVariables>;

/**
 * __useUninstallScraperPackagesMutation__
 *
 * To run a mutation, you first call `useUninstallScraperPackagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUninstallScraperPackagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uninstallScraperPackagesMutation, { data, loading, error }] = useUninstallScraperPackagesMutation({
 *   variables: {
 *      packages: // value for 'packages'
 *   },
 * });
 */
export function useUninstallScraperPackagesMutation(baseOptions?: Apollo.MutationHookOptions<UninstallScraperPackagesMutation, UninstallScraperPackagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UninstallScraperPackagesMutation, UninstallScraperPackagesMutationVariables>(UninstallScraperPackagesDocument, options);
      }
export type UninstallScraperPackagesMutationHookResult = ReturnType<typeof useUninstallScraperPackagesMutation>;
export type UninstallScraperPackagesMutationResult = Apollo.MutationResult<UninstallScraperPackagesMutation>;
export type UninstallScraperPackagesMutationOptions = Apollo.BaseMutationOptions<UninstallScraperPackagesMutation, UninstallScraperPackagesMutationVariables>;
export const SubmitStashBoxFingerprintsDocument = gql`
    mutation SubmitStashBoxFingerprints($input: StashBoxFingerprintSubmissionInput!) {
  submitStashBoxFingerprints(input: $input)
}
    `;
export type SubmitStashBoxFingerprintsMutationFn = Apollo.MutationFunction<SubmitStashBoxFingerprintsMutation, SubmitStashBoxFingerprintsMutationVariables>;

/**
 * __useSubmitStashBoxFingerprintsMutation__
 *
 * To run a mutation, you first call `useSubmitStashBoxFingerprintsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitStashBoxFingerprintsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitStashBoxFingerprintsMutation, { data, loading, error }] = useSubmitStashBoxFingerprintsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitStashBoxFingerprintsMutation(baseOptions?: Apollo.MutationHookOptions<SubmitStashBoxFingerprintsMutation, SubmitStashBoxFingerprintsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitStashBoxFingerprintsMutation, SubmitStashBoxFingerprintsMutationVariables>(SubmitStashBoxFingerprintsDocument, options);
      }
export type SubmitStashBoxFingerprintsMutationHookResult = ReturnType<typeof useSubmitStashBoxFingerprintsMutation>;
export type SubmitStashBoxFingerprintsMutationResult = Apollo.MutationResult<SubmitStashBoxFingerprintsMutation>;
export type SubmitStashBoxFingerprintsMutationOptions = Apollo.BaseMutationOptions<SubmitStashBoxFingerprintsMutation, SubmitStashBoxFingerprintsMutationVariables>;
export const StashBoxBatchPerformerTagDocument = gql`
    mutation StashBoxBatchPerformerTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchPerformerTag(input: $input)
}
    `;
export type StashBoxBatchPerformerTagMutationFn = Apollo.MutationFunction<StashBoxBatchPerformerTagMutation, StashBoxBatchPerformerTagMutationVariables>;

/**
 * __useStashBoxBatchPerformerTagMutation__
 *
 * To run a mutation, you first call `useStashBoxBatchPerformerTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStashBoxBatchPerformerTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stashBoxBatchPerformerTagMutation, { data, loading, error }] = useStashBoxBatchPerformerTagMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useStashBoxBatchPerformerTagMutation(baseOptions?: Apollo.MutationHookOptions<StashBoxBatchPerformerTagMutation, StashBoxBatchPerformerTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StashBoxBatchPerformerTagMutation, StashBoxBatchPerformerTagMutationVariables>(StashBoxBatchPerformerTagDocument, options);
      }
export type StashBoxBatchPerformerTagMutationHookResult = ReturnType<typeof useStashBoxBatchPerformerTagMutation>;
export type StashBoxBatchPerformerTagMutationResult = Apollo.MutationResult<StashBoxBatchPerformerTagMutation>;
export type StashBoxBatchPerformerTagMutationOptions = Apollo.BaseMutationOptions<StashBoxBatchPerformerTagMutation, StashBoxBatchPerformerTagMutationVariables>;
export const StashBoxBatchStudioTagDocument = gql`
    mutation StashBoxBatchStudioTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchStudioTag(input: $input)
}
    `;
export type StashBoxBatchStudioTagMutationFn = Apollo.MutationFunction<StashBoxBatchStudioTagMutation, StashBoxBatchStudioTagMutationVariables>;

/**
 * __useStashBoxBatchStudioTagMutation__
 *
 * To run a mutation, you first call `useStashBoxBatchStudioTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStashBoxBatchStudioTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stashBoxBatchStudioTagMutation, { data, loading, error }] = useStashBoxBatchStudioTagMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useStashBoxBatchStudioTagMutation(baseOptions?: Apollo.MutationHookOptions<StashBoxBatchStudioTagMutation, StashBoxBatchStudioTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StashBoxBatchStudioTagMutation, StashBoxBatchStudioTagMutationVariables>(StashBoxBatchStudioTagDocument, options);
      }
export type StashBoxBatchStudioTagMutationHookResult = ReturnType<typeof useStashBoxBatchStudioTagMutation>;
export type StashBoxBatchStudioTagMutationResult = Apollo.MutationResult<StashBoxBatchStudioTagMutation>;
export type StashBoxBatchStudioTagMutationOptions = Apollo.BaseMutationOptions<StashBoxBatchStudioTagMutation, StashBoxBatchStudioTagMutationVariables>;
export const SubmitStashBoxSceneDraftDocument = gql`
    mutation SubmitStashBoxSceneDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxSceneDraft(input: $input)
}
    `;
export type SubmitStashBoxSceneDraftMutationFn = Apollo.MutationFunction<SubmitStashBoxSceneDraftMutation, SubmitStashBoxSceneDraftMutationVariables>;

/**
 * __useSubmitStashBoxSceneDraftMutation__
 *
 * To run a mutation, you first call `useSubmitStashBoxSceneDraftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitStashBoxSceneDraftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitStashBoxSceneDraftMutation, { data, loading, error }] = useSubmitStashBoxSceneDraftMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitStashBoxSceneDraftMutation(baseOptions?: Apollo.MutationHookOptions<SubmitStashBoxSceneDraftMutation, SubmitStashBoxSceneDraftMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitStashBoxSceneDraftMutation, SubmitStashBoxSceneDraftMutationVariables>(SubmitStashBoxSceneDraftDocument, options);
      }
export type SubmitStashBoxSceneDraftMutationHookResult = ReturnType<typeof useSubmitStashBoxSceneDraftMutation>;
export type SubmitStashBoxSceneDraftMutationResult = Apollo.MutationResult<SubmitStashBoxSceneDraftMutation>;
export type SubmitStashBoxSceneDraftMutationOptions = Apollo.BaseMutationOptions<SubmitStashBoxSceneDraftMutation, SubmitStashBoxSceneDraftMutationVariables>;
export const SubmitStashBoxPerformerDraftDocument = gql`
    mutation SubmitStashBoxPerformerDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxPerformerDraft(input: $input)
}
    `;
export type SubmitStashBoxPerformerDraftMutationFn = Apollo.MutationFunction<SubmitStashBoxPerformerDraftMutation, SubmitStashBoxPerformerDraftMutationVariables>;

/**
 * __useSubmitStashBoxPerformerDraftMutation__
 *
 * To run a mutation, you first call `useSubmitStashBoxPerformerDraftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitStashBoxPerformerDraftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitStashBoxPerformerDraftMutation, { data, loading, error }] = useSubmitStashBoxPerformerDraftMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitStashBoxPerformerDraftMutation(baseOptions?: Apollo.MutationHookOptions<SubmitStashBoxPerformerDraftMutation, SubmitStashBoxPerformerDraftMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitStashBoxPerformerDraftMutation, SubmitStashBoxPerformerDraftMutationVariables>(SubmitStashBoxPerformerDraftDocument, options);
      }
export type SubmitStashBoxPerformerDraftMutationHookResult = ReturnType<typeof useSubmitStashBoxPerformerDraftMutation>;
export type SubmitStashBoxPerformerDraftMutationResult = Apollo.MutationResult<SubmitStashBoxPerformerDraftMutation>;
export type SubmitStashBoxPerformerDraftMutationOptions = Apollo.BaseMutationOptions<SubmitStashBoxPerformerDraftMutation, SubmitStashBoxPerformerDraftMutationVariables>;
export const StudioCreateDocument = gql`
    mutation StudioCreate($input: StudioCreateInput!) {
  studioCreate(input: $input) {
    ...StudioData
  }
}
    ${StudioDataFragmentDoc}`;
export type StudioCreateMutationFn = Apollo.MutationFunction<StudioCreateMutation, StudioCreateMutationVariables>;

/**
 * __useStudioCreateMutation__
 *
 * To run a mutation, you first call `useStudioCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudioCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studioCreateMutation, { data, loading, error }] = useStudioCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useStudioCreateMutation(baseOptions?: Apollo.MutationHookOptions<StudioCreateMutation, StudioCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StudioCreateMutation, StudioCreateMutationVariables>(StudioCreateDocument, options);
      }
export type StudioCreateMutationHookResult = ReturnType<typeof useStudioCreateMutation>;
export type StudioCreateMutationResult = Apollo.MutationResult<StudioCreateMutation>;
export type StudioCreateMutationOptions = Apollo.BaseMutationOptions<StudioCreateMutation, StudioCreateMutationVariables>;
export const StudioUpdateDocument = gql`
    mutation StudioUpdate($input: StudioUpdateInput!) {
  studioUpdate(input: $input) {
    ...StudioData
  }
}
    ${StudioDataFragmentDoc}`;
export type StudioUpdateMutationFn = Apollo.MutationFunction<StudioUpdateMutation, StudioUpdateMutationVariables>;

/**
 * __useStudioUpdateMutation__
 *
 * To run a mutation, you first call `useStudioUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudioUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studioUpdateMutation, { data, loading, error }] = useStudioUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useStudioUpdateMutation(baseOptions?: Apollo.MutationHookOptions<StudioUpdateMutation, StudioUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StudioUpdateMutation, StudioUpdateMutationVariables>(StudioUpdateDocument, options);
      }
export type StudioUpdateMutationHookResult = ReturnType<typeof useStudioUpdateMutation>;
export type StudioUpdateMutationResult = Apollo.MutationResult<StudioUpdateMutation>;
export type StudioUpdateMutationOptions = Apollo.BaseMutationOptions<StudioUpdateMutation, StudioUpdateMutationVariables>;
export const StudioDestroyDocument = gql`
    mutation StudioDestroy($id: ID!) {
  studioDestroy(input: {id: $id})
}
    `;
export type StudioDestroyMutationFn = Apollo.MutationFunction<StudioDestroyMutation, StudioDestroyMutationVariables>;

/**
 * __useStudioDestroyMutation__
 *
 * To run a mutation, you first call `useStudioDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudioDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studioDestroyMutation, { data, loading, error }] = useStudioDestroyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useStudioDestroyMutation(baseOptions?: Apollo.MutationHookOptions<StudioDestroyMutation, StudioDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StudioDestroyMutation, StudioDestroyMutationVariables>(StudioDestroyDocument, options);
      }
export type StudioDestroyMutationHookResult = ReturnType<typeof useStudioDestroyMutation>;
export type StudioDestroyMutationResult = Apollo.MutationResult<StudioDestroyMutation>;
export type StudioDestroyMutationOptions = Apollo.BaseMutationOptions<StudioDestroyMutation, StudioDestroyMutationVariables>;
export const StudiosDestroyDocument = gql`
    mutation StudiosDestroy($ids: [ID!]!) {
  studiosDestroy(ids: $ids)
}
    `;
export type StudiosDestroyMutationFn = Apollo.MutationFunction<StudiosDestroyMutation, StudiosDestroyMutationVariables>;

/**
 * __useStudiosDestroyMutation__
 *
 * To run a mutation, you first call `useStudiosDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudiosDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studiosDestroyMutation, { data, loading, error }] = useStudiosDestroyMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useStudiosDestroyMutation(baseOptions?: Apollo.MutationHookOptions<StudiosDestroyMutation, StudiosDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StudiosDestroyMutation, StudiosDestroyMutationVariables>(StudiosDestroyDocument, options);
      }
export type StudiosDestroyMutationHookResult = ReturnType<typeof useStudiosDestroyMutation>;
export type StudiosDestroyMutationResult = Apollo.MutationResult<StudiosDestroyMutation>;
export type StudiosDestroyMutationOptions = Apollo.BaseMutationOptions<StudiosDestroyMutation, StudiosDestroyMutationVariables>;
export const TagCreateDocument = gql`
    mutation TagCreate($input: TagCreateInput!) {
  tagCreate(input: $input) {
    ...TagData
  }
}
    ${TagDataFragmentDoc}`;
export type TagCreateMutationFn = Apollo.MutationFunction<TagCreateMutation, TagCreateMutationVariables>;

/**
 * __useTagCreateMutation__
 *
 * To run a mutation, you first call `useTagCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTagCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tagCreateMutation, { data, loading, error }] = useTagCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTagCreateMutation(baseOptions?: Apollo.MutationHookOptions<TagCreateMutation, TagCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TagCreateMutation, TagCreateMutationVariables>(TagCreateDocument, options);
      }
export type TagCreateMutationHookResult = ReturnType<typeof useTagCreateMutation>;
export type TagCreateMutationResult = Apollo.MutationResult<TagCreateMutation>;
export type TagCreateMutationOptions = Apollo.BaseMutationOptions<TagCreateMutation, TagCreateMutationVariables>;
export const TagDestroyDocument = gql`
    mutation TagDestroy($id: ID!) {
  tagDestroy(input: {id: $id})
}
    `;
export type TagDestroyMutationFn = Apollo.MutationFunction<TagDestroyMutation, TagDestroyMutationVariables>;

/**
 * __useTagDestroyMutation__
 *
 * To run a mutation, you first call `useTagDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTagDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tagDestroyMutation, { data, loading, error }] = useTagDestroyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTagDestroyMutation(baseOptions?: Apollo.MutationHookOptions<TagDestroyMutation, TagDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TagDestroyMutation, TagDestroyMutationVariables>(TagDestroyDocument, options);
      }
export type TagDestroyMutationHookResult = ReturnType<typeof useTagDestroyMutation>;
export type TagDestroyMutationResult = Apollo.MutationResult<TagDestroyMutation>;
export type TagDestroyMutationOptions = Apollo.BaseMutationOptions<TagDestroyMutation, TagDestroyMutationVariables>;
export const TagsDestroyDocument = gql`
    mutation TagsDestroy($ids: [ID!]!) {
  tagsDestroy(ids: $ids)
}
    `;
export type TagsDestroyMutationFn = Apollo.MutationFunction<TagsDestroyMutation, TagsDestroyMutationVariables>;

/**
 * __useTagsDestroyMutation__
 *
 * To run a mutation, you first call `useTagsDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTagsDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tagsDestroyMutation, { data, loading, error }] = useTagsDestroyMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
export function useTagsDestroyMutation(baseOptions?: Apollo.MutationHookOptions<TagsDestroyMutation, TagsDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TagsDestroyMutation, TagsDestroyMutationVariables>(TagsDestroyDocument, options);
      }
export type TagsDestroyMutationHookResult = ReturnType<typeof useTagsDestroyMutation>;
export type TagsDestroyMutationResult = Apollo.MutationResult<TagsDestroyMutation>;
export type TagsDestroyMutationOptions = Apollo.BaseMutationOptions<TagsDestroyMutation, TagsDestroyMutationVariables>;
export const TagUpdateDocument = gql`
    mutation TagUpdate($input: TagUpdateInput!) {
  tagUpdate(input: $input) {
    ...TagData
  }
}
    ${TagDataFragmentDoc}`;
export type TagUpdateMutationFn = Apollo.MutationFunction<TagUpdateMutation, TagUpdateMutationVariables>;

/**
 * __useTagUpdateMutation__
 *
 * To run a mutation, you first call `useTagUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTagUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tagUpdateMutation, { data, loading, error }] = useTagUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTagUpdateMutation(baseOptions?: Apollo.MutationHookOptions<TagUpdateMutation, TagUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TagUpdateMutation, TagUpdateMutationVariables>(TagUpdateDocument, options);
      }
export type TagUpdateMutationHookResult = ReturnType<typeof useTagUpdateMutation>;
export type TagUpdateMutationResult = Apollo.MutationResult<TagUpdateMutation>;
export type TagUpdateMutationOptions = Apollo.BaseMutationOptions<TagUpdateMutation, TagUpdateMutationVariables>;
export const TagsMergeDocument = gql`
    mutation TagsMerge($source: [ID!]!, $destination: ID!) {
  tagsMerge(input: {source: $source, destination: $destination}) {
    ...TagData
  }
}
    ${TagDataFragmentDoc}`;
export type TagsMergeMutationFn = Apollo.MutationFunction<TagsMergeMutation, TagsMergeMutationVariables>;

/**
 * __useTagsMergeMutation__
 *
 * To run a mutation, you first call `useTagsMergeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTagsMergeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tagsMergeMutation, { data, loading, error }] = useTagsMergeMutation({
 *   variables: {
 *      source: // value for 'source'
 *      destination: // value for 'destination'
 *   },
 * });
 */
export function useTagsMergeMutation(baseOptions?: Apollo.MutationHookOptions<TagsMergeMutation, TagsMergeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TagsMergeMutation, TagsMergeMutationVariables>(TagsMergeDocument, options);
      }
export type TagsMergeMutationHookResult = ReturnType<typeof useTagsMergeMutation>;
export type TagsMergeMutationResult = Apollo.MutationResult<TagsMergeMutation>;
export type TagsMergeMutationOptions = Apollo.BaseMutationOptions<TagsMergeMutation, TagsMergeMutationVariables>;
export const DlnaStatusDocument = gql`
    query DLNAStatus {
  dlnaStatus {
    running
    until
    recentIPAddresses
    allowedIPAddresses {
      ipAddress
      until
    }
  }
}
    `;

/**
 * __useDlnaStatusQuery__
 *
 * To run a query within a React component, call `useDlnaStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useDlnaStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDlnaStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useDlnaStatusQuery(baseOptions?: Apollo.QueryHookOptions<DlnaStatusQuery, DlnaStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DlnaStatusQuery, DlnaStatusQueryVariables>(DlnaStatusDocument, options);
      }
export function useDlnaStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DlnaStatusQuery, DlnaStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DlnaStatusQuery, DlnaStatusQueryVariables>(DlnaStatusDocument, options);
        }
export type DlnaStatusQueryHookResult = ReturnType<typeof useDlnaStatusQuery>;
export type DlnaStatusLazyQueryHookResult = ReturnType<typeof useDlnaStatusLazyQuery>;
export type DlnaStatusQueryResult = Apollo.QueryResult<DlnaStatusQuery, DlnaStatusQueryVariables>;
export function refetchDlnaStatusQuery(variables?: DlnaStatusQueryVariables) {
      return { query: DlnaStatusDocument, variables: variables }
    }
export const FindSavedFilterDocument = gql`
    query FindSavedFilter($id: ID!) {
  findSavedFilter(id: $id) {
    ...SavedFilterData
  }
}
    ${SavedFilterDataFragmentDoc}`;

/**
 * __useFindSavedFilterQuery__
 *
 * To run a query within a React component, call `useFindSavedFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSavedFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSavedFilterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindSavedFilterQuery(baseOptions: Apollo.QueryHookOptions<FindSavedFilterQuery, FindSavedFilterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSavedFilterQuery, FindSavedFilterQueryVariables>(FindSavedFilterDocument, options);
      }
export function useFindSavedFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSavedFilterQuery, FindSavedFilterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSavedFilterQuery, FindSavedFilterQueryVariables>(FindSavedFilterDocument, options);
        }
export type FindSavedFilterQueryHookResult = ReturnType<typeof useFindSavedFilterQuery>;
export type FindSavedFilterLazyQueryHookResult = ReturnType<typeof useFindSavedFilterLazyQuery>;
export type FindSavedFilterQueryResult = Apollo.QueryResult<FindSavedFilterQuery, FindSavedFilterQueryVariables>;
export function refetchFindSavedFilterQuery(variables: FindSavedFilterQueryVariables) {
      return { query: FindSavedFilterDocument, variables: variables }
    }
export const FindSavedFiltersDocument = gql`
    query FindSavedFilters($mode: FilterMode) {
  findSavedFilters(mode: $mode) {
    ...SavedFilterData
  }
}
    ${SavedFilterDataFragmentDoc}`;

/**
 * __useFindSavedFiltersQuery__
 *
 * To run a query within a React component, call `useFindSavedFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSavedFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSavedFiltersQuery({
 *   variables: {
 *      mode: // value for 'mode'
 *   },
 * });
 */
export function useFindSavedFiltersQuery(baseOptions?: Apollo.QueryHookOptions<FindSavedFiltersQuery, FindSavedFiltersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSavedFiltersQuery, FindSavedFiltersQueryVariables>(FindSavedFiltersDocument, options);
      }
export function useFindSavedFiltersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSavedFiltersQuery, FindSavedFiltersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSavedFiltersQuery, FindSavedFiltersQueryVariables>(FindSavedFiltersDocument, options);
        }
export type FindSavedFiltersQueryHookResult = ReturnType<typeof useFindSavedFiltersQuery>;
export type FindSavedFiltersLazyQueryHookResult = ReturnType<typeof useFindSavedFiltersLazyQuery>;
export type FindSavedFiltersQueryResult = Apollo.QueryResult<FindSavedFiltersQuery, FindSavedFiltersQueryVariables>;
export function refetchFindSavedFiltersQuery(variables?: FindSavedFiltersQueryVariables) {
      return { query: FindSavedFiltersDocument, variables: variables }
    }
export const FindDefaultFilterDocument = gql`
    query FindDefaultFilter($mode: FilterMode!) {
  findDefaultFilter(mode: $mode) {
    ...SavedFilterData
  }
}
    ${SavedFilterDataFragmentDoc}`;

/**
 * __useFindDefaultFilterQuery__
 *
 * To run a query within a React component, call `useFindDefaultFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindDefaultFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindDefaultFilterQuery({
 *   variables: {
 *      mode: // value for 'mode'
 *   },
 * });
 */
export function useFindDefaultFilterQuery(baseOptions: Apollo.QueryHookOptions<FindDefaultFilterQuery, FindDefaultFilterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindDefaultFilterQuery, FindDefaultFilterQueryVariables>(FindDefaultFilterDocument, options);
      }
export function useFindDefaultFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindDefaultFilterQuery, FindDefaultFilterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindDefaultFilterQuery, FindDefaultFilterQueryVariables>(FindDefaultFilterDocument, options);
        }
export type FindDefaultFilterQueryHookResult = ReturnType<typeof useFindDefaultFilterQuery>;
export type FindDefaultFilterLazyQueryHookResult = ReturnType<typeof useFindDefaultFilterLazyQuery>;
export type FindDefaultFilterQueryResult = Apollo.QueryResult<FindDefaultFilterQuery, FindDefaultFilterQueryVariables>;
export function refetchFindDefaultFilterQuery(variables: FindDefaultFilterQueryVariables) {
      return { query: FindDefaultFilterDocument, variables: variables }
    }
export const FindGalleriesDocument = gql`
    query FindGalleries($filter: FindFilterType, $gallery_filter: GalleryFilterType) {
  findGalleries(gallery_filter: $gallery_filter, filter: $filter) {
    count
    galleries {
      ...SlimGalleryData
    }
  }
}
    ${SlimGalleryDataFragmentDoc}`;

/**
 * __useFindGalleriesQuery__
 *
 * To run a query within a React component, call `useFindGalleriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindGalleriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindGalleriesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      gallery_filter: // value for 'gallery_filter'
 *   },
 * });
 */
export function useFindGalleriesQuery(baseOptions?: Apollo.QueryHookOptions<FindGalleriesQuery, FindGalleriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindGalleriesQuery, FindGalleriesQueryVariables>(FindGalleriesDocument, options);
      }
export function useFindGalleriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindGalleriesQuery, FindGalleriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindGalleriesQuery, FindGalleriesQueryVariables>(FindGalleriesDocument, options);
        }
export type FindGalleriesQueryHookResult = ReturnType<typeof useFindGalleriesQuery>;
export type FindGalleriesLazyQueryHookResult = ReturnType<typeof useFindGalleriesLazyQuery>;
export type FindGalleriesQueryResult = Apollo.QueryResult<FindGalleriesQuery, FindGalleriesQueryVariables>;
export function refetchFindGalleriesQuery(variables?: FindGalleriesQueryVariables) {
      return { query: FindGalleriesDocument, variables: variables }
    }
export const FindGalleryDocument = gql`
    query FindGallery($id: ID!) {
  findGallery(id: $id) {
    ...GalleryData
  }
}
    ${GalleryDataFragmentDoc}`;

/**
 * __useFindGalleryQuery__
 *
 * To run a query within a React component, call `useFindGalleryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindGalleryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindGalleryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindGalleryQuery(baseOptions: Apollo.QueryHookOptions<FindGalleryQuery, FindGalleryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindGalleryQuery, FindGalleryQueryVariables>(FindGalleryDocument, options);
      }
export function useFindGalleryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindGalleryQuery, FindGalleryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindGalleryQuery, FindGalleryQueryVariables>(FindGalleryDocument, options);
        }
export type FindGalleryQueryHookResult = ReturnType<typeof useFindGalleryQuery>;
export type FindGalleryLazyQueryHookResult = ReturnType<typeof useFindGalleryLazyQuery>;
export type FindGalleryQueryResult = Apollo.QueryResult<FindGalleryQuery, FindGalleryQueryVariables>;
export function refetchFindGalleryQuery(variables: FindGalleryQueryVariables) {
      return { query: FindGalleryDocument, variables: variables }
    }
export const FindImagesDocument = gql`
    query FindImages($filter: FindFilterType, $image_filter: ImageFilterType, $image_ids: [Int!]) {
  findImages(filter: $filter, image_filter: $image_filter, image_ids: $image_ids) {
    count
    megapixels
    filesize
    images {
      ...SlimImageData
    }
  }
}
    ${SlimImageDataFragmentDoc}`;

/**
 * __useFindImagesQuery__
 *
 * To run a query within a React component, call `useFindImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindImagesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      image_filter: // value for 'image_filter'
 *      image_ids: // value for 'image_ids'
 *   },
 * });
 */
export function useFindImagesQuery(baseOptions?: Apollo.QueryHookOptions<FindImagesQuery, FindImagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindImagesQuery, FindImagesQueryVariables>(FindImagesDocument, options);
      }
export function useFindImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindImagesQuery, FindImagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindImagesQuery, FindImagesQueryVariables>(FindImagesDocument, options);
        }
export type FindImagesQueryHookResult = ReturnType<typeof useFindImagesQuery>;
export type FindImagesLazyQueryHookResult = ReturnType<typeof useFindImagesLazyQuery>;
export type FindImagesQueryResult = Apollo.QueryResult<FindImagesQuery, FindImagesQueryVariables>;
export function refetchFindImagesQuery(variables?: FindImagesQueryVariables) {
      return { query: FindImagesDocument, variables: variables }
    }
export const FindImageDocument = gql`
    query FindImage($id: ID!, $checksum: String) {
  findImage(id: $id, checksum: $checksum) {
    ...ImageData
  }
}
    ${ImageDataFragmentDoc}`;

/**
 * __useFindImageQuery__
 *
 * To run a query within a React component, call `useFindImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindImageQuery({
 *   variables: {
 *      id: // value for 'id'
 *      checksum: // value for 'checksum'
 *   },
 * });
 */
export function useFindImageQuery(baseOptions: Apollo.QueryHookOptions<FindImageQuery, FindImageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindImageQuery, FindImageQueryVariables>(FindImageDocument, options);
      }
export function useFindImageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindImageQuery, FindImageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindImageQuery, FindImageQueryVariables>(FindImageDocument, options);
        }
export type FindImageQueryHookResult = ReturnType<typeof useFindImageQuery>;
export type FindImageLazyQueryHookResult = ReturnType<typeof useFindImageLazyQuery>;
export type FindImageQueryResult = Apollo.QueryResult<FindImageQuery, FindImageQueryVariables>;
export function refetchFindImageQuery(variables: FindImageQueryVariables) {
      return { query: FindImageDocument, variables: variables }
    }
export const JobQueueDocument = gql`
    query JobQueue {
  jobQueue {
    ...JobData
  }
}
    ${JobDataFragmentDoc}`;

/**
 * __useJobQueueQuery__
 *
 * To run a query within a React component, call `useJobQueueQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobQueueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobQueueQuery({
 *   variables: {
 *   },
 * });
 */
export function useJobQueueQuery(baseOptions?: Apollo.QueryHookOptions<JobQueueQuery, JobQueueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<JobQueueQuery, JobQueueQueryVariables>(JobQueueDocument, options);
      }
export function useJobQueueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JobQueueQuery, JobQueueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<JobQueueQuery, JobQueueQueryVariables>(JobQueueDocument, options);
        }
export type JobQueueQueryHookResult = ReturnType<typeof useJobQueueQuery>;
export type JobQueueLazyQueryHookResult = ReturnType<typeof useJobQueueLazyQuery>;
export type JobQueueQueryResult = Apollo.QueryResult<JobQueueQuery, JobQueueQueryVariables>;
export function refetchJobQueueQuery(variables?: JobQueueQueryVariables) {
      return { query: JobQueueDocument, variables: variables }
    }
export const FindJobDocument = gql`
    query FindJob($input: FindJobInput!) {
  findJob(input: $input) {
    ...JobData
  }
}
    ${JobDataFragmentDoc}`;

/**
 * __useFindJobQuery__
 *
 * To run a query within a React component, call `useFindJobQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindJobQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindJobQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindJobQuery(baseOptions: Apollo.QueryHookOptions<FindJobQuery, FindJobQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindJobQuery, FindJobQueryVariables>(FindJobDocument, options);
      }
export function useFindJobLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindJobQuery, FindJobQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindJobQuery, FindJobQueryVariables>(FindJobDocument, options);
        }
export type FindJobQueryHookResult = ReturnType<typeof useFindJobQuery>;
export type FindJobLazyQueryHookResult = ReturnType<typeof useFindJobLazyQuery>;
export type FindJobQueryResult = Apollo.QueryResult<FindJobQuery, FindJobQueryVariables>;
export function refetchFindJobQuery(variables: FindJobQueryVariables) {
      return { query: FindJobDocument, variables: variables }
    }
export const SceneWallDocument = gql`
    query SceneWall($q: String) {
  sceneWall(q: $q) {
    ...SceneData
  }
}
    ${SceneDataFragmentDoc}`;

/**
 * __useSceneWallQuery__
 *
 * To run a query within a React component, call `useSceneWallQuery` and pass it any options that fit your needs.
 * When your component renders, `useSceneWallQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSceneWallQuery({
 *   variables: {
 *      q: // value for 'q'
 *   },
 * });
 */
export function useSceneWallQuery(baseOptions?: Apollo.QueryHookOptions<SceneWallQuery, SceneWallQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SceneWallQuery, SceneWallQueryVariables>(SceneWallDocument, options);
      }
export function useSceneWallLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SceneWallQuery, SceneWallQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SceneWallQuery, SceneWallQueryVariables>(SceneWallDocument, options);
        }
export type SceneWallQueryHookResult = ReturnType<typeof useSceneWallQuery>;
export type SceneWallLazyQueryHookResult = ReturnType<typeof useSceneWallLazyQuery>;
export type SceneWallQueryResult = Apollo.QueryResult<SceneWallQuery, SceneWallQueryVariables>;
export function refetchSceneWallQuery(variables?: SceneWallQueryVariables) {
      return { query: SceneWallDocument, variables: variables }
    }
export const MarkerWallDocument = gql`
    query MarkerWall($q: String) {
  markerWall(q: $q) {
    ...SceneMarkerData
  }
}
    ${SceneMarkerDataFragmentDoc}`;

/**
 * __useMarkerWallQuery__
 *
 * To run a query within a React component, call `useMarkerWallQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarkerWallQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarkerWallQuery({
 *   variables: {
 *      q: // value for 'q'
 *   },
 * });
 */
export function useMarkerWallQuery(baseOptions?: Apollo.QueryHookOptions<MarkerWallQuery, MarkerWallQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MarkerWallQuery, MarkerWallQueryVariables>(MarkerWallDocument, options);
      }
export function useMarkerWallLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MarkerWallQuery, MarkerWallQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MarkerWallQuery, MarkerWallQueryVariables>(MarkerWallDocument, options);
        }
export type MarkerWallQueryHookResult = ReturnType<typeof useMarkerWallQuery>;
export type MarkerWallLazyQueryHookResult = ReturnType<typeof useMarkerWallLazyQuery>;
export type MarkerWallQueryResult = Apollo.QueryResult<MarkerWallQuery, MarkerWallQueryVariables>;
export function refetchMarkerWallQuery(variables?: MarkerWallQueryVariables) {
      return { query: MarkerWallDocument, variables: variables }
    }
export const MarkerStringsDocument = gql`
    query MarkerStrings($q: String, $sort: String) {
  markerStrings(q: $q, sort: $sort) {
    id
    count
    title
  }
}
    `;

/**
 * __useMarkerStringsQuery__
 *
 * To run a query within a React component, call `useMarkerStringsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarkerStringsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarkerStringsQuery({
 *   variables: {
 *      q: // value for 'q'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useMarkerStringsQuery(baseOptions?: Apollo.QueryHookOptions<MarkerStringsQuery, MarkerStringsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MarkerStringsQuery, MarkerStringsQueryVariables>(MarkerStringsDocument, options);
      }
export function useMarkerStringsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MarkerStringsQuery, MarkerStringsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MarkerStringsQuery, MarkerStringsQueryVariables>(MarkerStringsDocument, options);
        }
export type MarkerStringsQueryHookResult = ReturnType<typeof useMarkerStringsQuery>;
export type MarkerStringsLazyQueryHookResult = ReturnType<typeof useMarkerStringsLazyQuery>;
export type MarkerStringsQueryResult = Apollo.QueryResult<MarkerStringsQuery, MarkerStringsQueryVariables>;
export function refetchMarkerStringsQuery(variables?: MarkerStringsQueryVariables) {
      return { query: MarkerStringsDocument, variables: variables }
    }
export const AllStudiosForFilterDocument = gql`
    query AllStudiosForFilter {
  allStudios {
    id
    name
    aliases
  }
}
    `;

/**
 * __useAllStudiosForFilterQuery__
 *
 * To run a query within a React component, call `useAllStudiosForFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllStudiosForFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllStudiosForFilterQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllStudiosForFilterQuery(baseOptions?: Apollo.QueryHookOptions<AllStudiosForFilterQuery, AllStudiosForFilterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllStudiosForFilterQuery, AllStudiosForFilterQueryVariables>(AllStudiosForFilterDocument, options);
      }
export function useAllStudiosForFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllStudiosForFilterQuery, AllStudiosForFilterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllStudiosForFilterQuery, AllStudiosForFilterQueryVariables>(AllStudiosForFilterDocument, options);
        }
export type AllStudiosForFilterQueryHookResult = ReturnType<typeof useAllStudiosForFilterQuery>;
export type AllStudiosForFilterLazyQueryHookResult = ReturnType<typeof useAllStudiosForFilterLazyQuery>;
export type AllStudiosForFilterQueryResult = Apollo.QueryResult<AllStudiosForFilterQuery, AllStudiosForFilterQueryVariables>;
export function refetchAllStudiosForFilterQuery(variables?: AllStudiosForFilterQueryVariables) {
      return { query: AllStudiosForFilterDocument, variables: variables }
    }
export const AllMoviesForFilterDocument = gql`
    query AllMoviesForFilter {
  allMovies {
    id
    name
  }
}
    `;

/**
 * __useAllMoviesForFilterQuery__
 *
 * To run a query within a React component, call `useAllMoviesForFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllMoviesForFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllMoviesForFilterQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllMoviesForFilterQuery(baseOptions?: Apollo.QueryHookOptions<AllMoviesForFilterQuery, AllMoviesForFilterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllMoviesForFilterQuery, AllMoviesForFilterQueryVariables>(AllMoviesForFilterDocument, options);
      }
export function useAllMoviesForFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllMoviesForFilterQuery, AllMoviesForFilterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllMoviesForFilterQuery, AllMoviesForFilterQueryVariables>(AllMoviesForFilterDocument, options);
        }
export type AllMoviesForFilterQueryHookResult = ReturnType<typeof useAllMoviesForFilterQuery>;
export type AllMoviesForFilterLazyQueryHookResult = ReturnType<typeof useAllMoviesForFilterLazyQuery>;
export type AllMoviesForFilterQueryResult = Apollo.QueryResult<AllMoviesForFilterQuery, AllMoviesForFilterQueryVariables>;
export function refetchAllMoviesForFilterQuery(variables?: AllMoviesForFilterQueryVariables) {
      return { query: AllMoviesForFilterDocument, variables: variables }
    }
export const AllTagsForFilterDocument = gql`
    query AllTagsForFilter {
  allTags {
    id
    name
    aliases
  }
}
    `;

/**
 * __useAllTagsForFilterQuery__
 *
 * To run a query within a React component, call `useAllTagsForFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTagsForFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTagsForFilterQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTagsForFilterQuery(baseOptions?: Apollo.QueryHookOptions<AllTagsForFilterQuery, AllTagsForFilterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTagsForFilterQuery, AllTagsForFilterQueryVariables>(AllTagsForFilterDocument, options);
      }
export function useAllTagsForFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTagsForFilterQuery, AllTagsForFilterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTagsForFilterQuery, AllTagsForFilterQueryVariables>(AllTagsForFilterDocument, options);
        }
export type AllTagsForFilterQueryHookResult = ReturnType<typeof useAllTagsForFilterQuery>;
export type AllTagsForFilterLazyQueryHookResult = ReturnType<typeof useAllTagsForFilterLazyQuery>;
export type AllTagsForFilterQueryResult = Apollo.QueryResult<AllTagsForFilterQuery, AllTagsForFilterQueryVariables>;
export function refetchAllTagsForFilterQuery(variables?: AllTagsForFilterQueryVariables) {
      return { query: AllTagsForFilterDocument, variables: variables }
    }
export const StatsDocument = gql`
    query Stats {
  stats {
    scene_count
    scenes_size
    scenes_duration
    image_count
    images_size
    gallery_count
    performer_count
    studio_count
    movie_count
    tag_count
    total_o_count
    total_play_duration
    total_play_count
    scenes_played
  }
}
    `;

/**
 * __useStatsQuery__
 *
 * To run a query within a React component, call `useStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useStatsQuery(baseOptions?: Apollo.QueryHookOptions<StatsQuery, StatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StatsQuery, StatsQueryVariables>(StatsDocument, options);
      }
export function useStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StatsQuery, StatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StatsQuery, StatsQueryVariables>(StatsDocument, options);
        }
export type StatsQueryHookResult = ReturnType<typeof useStatsQuery>;
export type StatsLazyQueryHookResult = ReturnType<typeof useStatsLazyQuery>;
export type StatsQueryResult = Apollo.QueryResult<StatsQuery, StatsQueryVariables>;
export function refetchStatsQuery(variables?: StatsQueryVariables) {
      return { query: StatsDocument, variables: variables }
    }
export const LogsDocument = gql`
    query Logs {
  logs {
    ...LogEntryData
  }
}
    ${LogEntryDataFragmentDoc}`;

/**
 * __useLogsQuery__
 *
 * To run a query within a React component, call `useLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLogsQuery(baseOptions?: Apollo.QueryHookOptions<LogsQuery, LogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LogsQuery, LogsQueryVariables>(LogsDocument, options);
      }
export function useLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LogsQuery, LogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LogsQuery, LogsQueryVariables>(LogsDocument, options);
        }
export type LogsQueryHookResult = ReturnType<typeof useLogsQuery>;
export type LogsLazyQueryHookResult = ReturnType<typeof useLogsLazyQuery>;
export type LogsQueryResult = Apollo.QueryResult<LogsQuery, LogsQueryVariables>;
export function refetchLogsQuery(variables?: LogsQueryVariables) {
      return { query: LogsDocument, variables: variables }
    }
export const VersionDocument = gql`
    query Version {
  version {
    version
    hash
    build_time
  }
}
    `;

/**
 * __useVersionQuery__
 *
 * To run a query within a React component, call `useVersionQuery` and pass it any options that fit your needs.
 * When your component renders, `useVersionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVersionQuery({
 *   variables: {
 *   },
 * });
 */
export function useVersionQuery(baseOptions?: Apollo.QueryHookOptions<VersionQuery, VersionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VersionQuery, VersionQueryVariables>(VersionDocument, options);
      }
export function useVersionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VersionQuery, VersionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VersionQuery, VersionQueryVariables>(VersionDocument, options);
        }
export type VersionQueryHookResult = ReturnType<typeof useVersionQuery>;
export type VersionLazyQueryHookResult = ReturnType<typeof useVersionLazyQuery>;
export type VersionQueryResult = Apollo.QueryResult<VersionQuery, VersionQueryVariables>;
export function refetchVersionQuery(variables?: VersionQueryVariables) {
      return { query: VersionDocument, variables: variables }
    }
export const LatestVersionDocument = gql`
    query LatestVersion {
  latestversion {
    version
    shorthash
    release_date
    url
  }
}
    `;

/**
 * __useLatestVersionQuery__
 *
 * To run a query within a React component, call `useLatestVersionQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestVersionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestVersionQuery({
 *   variables: {
 *   },
 * });
 */
export function useLatestVersionQuery(baseOptions?: Apollo.QueryHookOptions<LatestVersionQuery, LatestVersionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LatestVersionQuery, LatestVersionQueryVariables>(LatestVersionDocument, options);
      }
export function useLatestVersionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestVersionQuery, LatestVersionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LatestVersionQuery, LatestVersionQueryVariables>(LatestVersionDocument, options);
        }
export type LatestVersionQueryHookResult = ReturnType<typeof useLatestVersionQuery>;
export type LatestVersionLazyQueryHookResult = ReturnType<typeof useLatestVersionLazyQuery>;
export type LatestVersionQueryResult = Apollo.QueryResult<LatestVersionQuery, LatestVersionQueryVariables>;
export function refetchLatestVersionQuery(variables?: LatestVersionQueryVariables) {
      return { query: LatestVersionDocument, variables: variables }
    }
export const FindMoviesDocument = gql`
    query FindMovies($filter: FindFilterType, $movie_filter: MovieFilterType) {
  findMovies(filter: $filter, movie_filter: $movie_filter) {
    count
    movies {
      ...MovieData
    }
  }
}
    ${MovieDataFragmentDoc}`;

/**
 * __useFindMoviesQuery__
 *
 * To run a query within a React component, call `useFindMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMoviesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      movie_filter: // value for 'movie_filter'
 *   },
 * });
 */
export function useFindMoviesQuery(baseOptions?: Apollo.QueryHookOptions<FindMoviesQuery, FindMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMoviesQuery, FindMoviesQueryVariables>(FindMoviesDocument, options);
      }
export function useFindMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMoviesQuery, FindMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMoviesQuery, FindMoviesQueryVariables>(FindMoviesDocument, options);
        }
export type FindMoviesQueryHookResult = ReturnType<typeof useFindMoviesQuery>;
export type FindMoviesLazyQueryHookResult = ReturnType<typeof useFindMoviesLazyQuery>;
export type FindMoviesQueryResult = Apollo.QueryResult<FindMoviesQuery, FindMoviesQueryVariables>;
export function refetchFindMoviesQuery(variables?: FindMoviesQueryVariables) {
      return { query: FindMoviesDocument, variables: variables }
    }
export const FindMovieDocument = gql`
    query FindMovie($id: ID!) {
  findMovie(id: $id) {
    ...MovieData
  }
}
    ${MovieDataFragmentDoc}`;

/**
 * __useFindMovieQuery__
 *
 * To run a query within a React component, call `useFindMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMovieQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindMovieQuery(baseOptions: Apollo.QueryHookOptions<FindMovieQuery, FindMovieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMovieQuery, FindMovieQueryVariables>(FindMovieDocument, options);
      }
export function useFindMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMovieQuery, FindMovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMovieQuery, FindMovieQueryVariables>(FindMovieDocument, options);
        }
export type FindMovieQueryHookResult = ReturnType<typeof useFindMovieQuery>;
export type FindMovieLazyQueryHookResult = ReturnType<typeof useFindMovieLazyQuery>;
export type FindMovieQueryResult = Apollo.QueryResult<FindMovieQuery, FindMovieQueryVariables>;
export function refetchFindMovieQuery(variables: FindMovieQueryVariables) {
      return { query: FindMovieDocument, variables: variables }
    }
export const FindPerformersDocument = gql`
    query FindPerformers($filter: FindFilterType, $performer_filter: PerformerFilterType, $performer_ids: [Int!]) {
  findPerformers(
    filter: $filter
    performer_filter: $performer_filter
    performer_ids: $performer_ids
  ) {
    count
    performers {
      ...PerformerData
    }
  }
}
    ${PerformerDataFragmentDoc}`;

/**
 * __useFindPerformersQuery__
 *
 * To run a query within a React component, call `useFindPerformersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPerformersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPerformersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      performer_filter: // value for 'performer_filter'
 *      performer_ids: // value for 'performer_ids'
 *   },
 * });
 */
export function useFindPerformersQuery(baseOptions?: Apollo.QueryHookOptions<FindPerformersQuery, FindPerformersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindPerformersQuery, FindPerformersQueryVariables>(FindPerformersDocument, options);
      }
export function useFindPerformersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPerformersQuery, FindPerformersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindPerformersQuery, FindPerformersQueryVariables>(FindPerformersDocument, options);
        }
export type FindPerformersQueryHookResult = ReturnType<typeof useFindPerformersQuery>;
export type FindPerformersLazyQueryHookResult = ReturnType<typeof useFindPerformersLazyQuery>;
export type FindPerformersQueryResult = Apollo.QueryResult<FindPerformersQuery, FindPerformersQueryVariables>;
export function refetchFindPerformersQuery(variables?: FindPerformersQueryVariables) {
      return { query: FindPerformersDocument, variables: variables }
    }
export const FindPerformerDocument = gql`
    query FindPerformer($id: ID!) {
  findPerformer(id: $id) {
    ...PerformerData
  }
}
    ${PerformerDataFragmentDoc}`;

/**
 * __useFindPerformerQuery__
 *
 * To run a query within a React component, call `useFindPerformerQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPerformerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPerformerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindPerformerQuery(baseOptions: Apollo.QueryHookOptions<FindPerformerQuery, FindPerformerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindPerformerQuery, FindPerformerQueryVariables>(FindPerformerDocument, options);
      }
export function useFindPerformerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPerformerQuery, FindPerformerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindPerformerQuery, FindPerformerQueryVariables>(FindPerformerDocument, options);
        }
export type FindPerformerQueryHookResult = ReturnType<typeof useFindPerformerQuery>;
export type FindPerformerLazyQueryHookResult = ReturnType<typeof useFindPerformerLazyQuery>;
export type FindPerformerQueryResult = Apollo.QueryResult<FindPerformerQuery, FindPerformerQueryVariables>;
export function refetchFindPerformerQuery(variables: FindPerformerQueryVariables) {
      return { query: FindPerformerDocument, variables: variables }
    }
export const FindPerformersForSelectDocument = gql`
    query FindPerformersForSelect($filter: FindFilterType, $performer_filter: PerformerFilterType, $performer_ids: [Int!]) {
  findPerformers(
    filter: $filter
    performer_filter: $performer_filter
    performer_ids: $performer_ids
  ) {
    count
    performers {
      ...SelectPerformerData
    }
  }
}
    ${SelectPerformerDataFragmentDoc}`;

/**
 * __useFindPerformersForSelectQuery__
 *
 * To run a query within a React component, call `useFindPerformersForSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPerformersForSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPerformersForSelectQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      performer_filter: // value for 'performer_filter'
 *      performer_ids: // value for 'performer_ids'
 *   },
 * });
 */
export function useFindPerformersForSelectQuery(baseOptions?: Apollo.QueryHookOptions<FindPerformersForSelectQuery, FindPerformersForSelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindPerformersForSelectQuery, FindPerformersForSelectQueryVariables>(FindPerformersForSelectDocument, options);
      }
export function useFindPerformersForSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPerformersForSelectQuery, FindPerformersForSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindPerformersForSelectQuery, FindPerformersForSelectQueryVariables>(FindPerformersForSelectDocument, options);
        }
export type FindPerformersForSelectQueryHookResult = ReturnType<typeof useFindPerformersForSelectQuery>;
export type FindPerformersForSelectLazyQueryHookResult = ReturnType<typeof useFindPerformersForSelectLazyQuery>;
export type FindPerformersForSelectQueryResult = Apollo.QueryResult<FindPerformersForSelectQuery, FindPerformersForSelectQueryVariables>;
export function refetchFindPerformersForSelectQuery(variables?: FindPerformersForSelectQueryVariables) {
      return { query: FindPerformersForSelectDocument, variables: variables }
    }
export const PluginsDocument = gql`
    query Plugins {
  plugins {
    id
    name
    enabled
    description
    url
    version
    tasks {
      name
      description
    }
    hooks {
      name
      description
      hooks
    }
    settings {
      name
      display_name
      description
      type
    }
    requires
    paths {
      css
      javascript
    }
  }
}
    `;

/**
 * __usePluginsQuery__
 *
 * To run a query within a React component, call `usePluginsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePluginsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePluginsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePluginsQuery(baseOptions?: Apollo.QueryHookOptions<PluginsQuery, PluginsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PluginsQuery, PluginsQueryVariables>(PluginsDocument, options);
      }
export function usePluginsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PluginsQuery, PluginsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PluginsQuery, PluginsQueryVariables>(PluginsDocument, options);
        }
export type PluginsQueryHookResult = ReturnType<typeof usePluginsQuery>;
export type PluginsLazyQueryHookResult = ReturnType<typeof usePluginsLazyQuery>;
export type PluginsQueryResult = Apollo.QueryResult<PluginsQuery, PluginsQueryVariables>;
export function refetchPluginsQuery(variables?: PluginsQueryVariables) {
      return { query: PluginsDocument, variables: variables }
    }
export const PluginTasksDocument = gql`
    query PluginTasks {
  pluginTasks {
    name
    description
    plugin {
      id
      name
      enabled
    }
  }
}
    `;

/**
 * __usePluginTasksQuery__
 *
 * To run a query within a React component, call `usePluginTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `usePluginTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePluginTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function usePluginTasksQuery(baseOptions?: Apollo.QueryHookOptions<PluginTasksQuery, PluginTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PluginTasksQuery, PluginTasksQueryVariables>(PluginTasksDocument, options);
      }
export function usePluginTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PluginTasksQuery, PluginTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PluginTasksQuery, PluginTasksQueryVariables>(PluginTasksDocument, options);
        }
export type PluginTasksQueryHookResult = ReturnType<typeof usePluginTasksQuery>;
export type PluginTasksLazyQueryHookResult = ReturnType<typeof usePluginTasksLazyQuery>;
export type PluginTasksQueryResult = Apollo.QueryResult<PluginTasksQuery, PluginTasksQueryVariables>;
export function refetchPluginTasksQuery(variables?: PluginTasksQueryVariables) {
      return { query: PluginTasksDocument, variables: variables }
    }
export const InstalledPluginPackagesDocument = gql`
    query InstalledPluginPackages {
  installedPackages(type: Plugin) {
    ...PackageData
  }
}
    ${PackageDataFragmentDoc}`;

/**
 * __useInstalledPluginPackagesQuery__
 *
 * To run a query within a React component, call `useInstalledPluginPackagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstalledPluginPackagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstalledPluginPackagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useInstalledPluginPackagesQuery(baseOptions?: Apollo.QueryHookOptions<InstalledPluginPackagesQuery, InstalledPluginPackagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InstalledPluginPackagesQuery, InstalledPluginPackagesQueryVariables>(InstalledPluginPackagesDocument, options);
      }
export function useInstalledPluginPackagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InstalledPluginPackagesQuery, InstalledPluginPackagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InstalledPluginPackagesQuery, InstalledPluginPackagesQueryVariables>(InstalledPluginPackagesDocument, options);
        }
export type InstalledPluginPackagesQueryHookResult = ReturnType<typeof useInstalledPluginPackagesQuery>;
export type InstalledPluginPackagesLazyQueryHookResult = ReturnType<typeof useInstalledPluginPackagesLazyQuery>;
export type InstalledPluginPackagesQueryResult = Apollo.QueryResult<InstalledPluginPackagesQuery, InstalledPluginPackagesQueryVariables>;
export function refetchInstalledPluginPackagesQuery(variables?: InstalledPluginPackagesQueryVariables) {
      return { query: InstalledPluginPackagesDocument, variables: variables }
    }
export const InstalledPluginPackagesStatusDocument = gql`
    query InstalledPluginPackagesStatus {
  installedPackages(type: Plugin) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${PackageDataFragmentDoc}`;

/**
 * __useInstalledPluginPackagesStatusQuery__
 *
 * To run a query within a React component, call `useInstalledPluginPackagesStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstalledPluginPackagesStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstalledPluginPackagesStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useInstalledPluginPackagesStatusQuery(baseOptions?: Apollo.QueryHookOptions<InstalledPluginPackagesStatusQuery, InstalledPluginPackagesStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InstalledPluginPackagesStatusQuery, InstalledPluginPackagesStatusQueryVariables>(InstalledPluginPackagesStatusDocument, options);
      }
export function useInstalledPluginPackagesStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InstalledPluginPackagesStatusQuery, InstalledPluginPackagesStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InstalledPluginPackagesStatusQuery, InstalledPluginPackagesStatusQueryVariables>(InstalledPluginPackagesStatusDocument, options);
        }
export type InstalledPluginPackagesStatusQueryHookResult = ReturnType<typeof useInstalledPluginPackagesStatusQuery>;
export type InstalledPluginPackagesStatusLazyQueryHookResult = ReturnType<typeof useInstalledPluginPackagesStatusLazyQuery>;
export type InstalledPluginPackagesStatusQueryResult = Apollo.QueryResult<InstalledPluginPackagesStatusQuery, InstalledPluginPackagesStatusQueryVariables>;
export function refetchInstalledPluginPackagesStatusQuery(variables?: InstalledPluginPackagesStatusQueryVariables) {
      return { query: InstalledPluginPackagesStatusDocument, variables: variables }
    }
export const AvailablePluginPackagesDocument = gql`
    query AvailablePluginPackages($source: String!) {
  availablePackages(source: $source, type: Plugin) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${PackageDataFragmentDoc}`;

/**
 * __useAvailablePluginPackagesQuery__
 *
 * To run a query within a React component, call `useAvailablePluginPackagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAvailablePluginPackagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAvailablePluginPackagesQuery({
 *   variables: {
 *      source: // value for 'source'
 *   },
 * });
 */
export function useAvailablePluginPackagesQuery(baseOptions: Apollo.QueryHookOptions<AvailablePluginPackagesQuery, AvailablePluginPackagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AvailablePluginPackagesQuery, AvailablePluginPackagesQueryVariables>(AvailablePluginPackagesDocument, options);
      }
export function useAvailablePluginPackagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AvailablePluginPackagesQuery, AvailablePluginPackagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AvailablePluginPackagesQuery, AvailablePluginPackagesQueryVariables>(AvailablePluginPackagesDocument, options);
        }
export type AvailablePluginPackagesQueryHookResult = ReturnType<typeof useAvailablePluginPackagesQuery>;
export type AvailablePluginPackagesLazyQueryHookResult = ReturnType<typeof useAvailablePluginPackagesLazyQuery>;
export type AvailablePluginPackagesQueryResult = Apollo.QueryResult<AvailablePluginPackagesQuery, AvailablePluginPackagesQueryVariables>;
export function refetchAvailablePluginPackagesQuery(variables: AvailablePluginPackagesQueryVariables) {
      return { query: AvailablePluginPackagesDocument, variables: variables }
    }
export const FindSceneMarkersDocument = gql`
    query FindSceneMarkers($filter: FindFilterType, $scene_marker_filter: SceneMarkerFilterType) {
  findSceneMarkers(filter: $filter, scene_marker_filter: $scene_marker_filter) {
    count
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${SceneMarkerDataFragmentDoc}`;

/**
 * __useFindSceneMarkersQuery__
 *
 * To run a query within a React component, call `useFindSceneMarkersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSceneMarkersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSceneMarkersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      scene_marker_filter: // value for 'scene_marker_filter'
 *   },
 * });
 */
export function useFindSceneMarkersQuery(baseOptions?: Apollo.QueryHookOptions<FindSceneMarkersQuery, FindSceneMarkersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSceneMarkersQuery, FindSceneMarkersQueryVariables>(FindSceneMarkersDocument, options);
      }
export function useFindSceneMarkersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSceneMarkersQuery, FindSceneMarkersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSceneMarkersQuery, FindSceneMarkersQueryVariables>(FindSceneMarkersDocument, options);
        }
export type FindSceneMarkersQueryHookResult = ReturnType<typeof useFindSceneMarkersQuery>;
export type FindSceneMarkersLazyQueryHookResult = ReturnType<typeof useFindSceneMarkersLazyQuery>;
export type FindSceneMarkersQueryResult = Apollo.QueryResult<FindSceneMarkersQuery, FindSceneMarkersQueryVariables>;
export function refetchFindSceneMarkersQuery(variables?: FindSceneMarkersQueryVariables) {
      return { query: FindSceneMarkersDocument, variables: variables }
    }
export const FindScenesDocument = gql`
    query FindScenes($filter: FindFilterType, $scene_filter: SceneFilterType, $scene_ids: [Int!]) {
  findScenes(filter: $filter, scene_filter: $scene_filter, scene_ids: $scene_ids) {
    count
    filesize
    duration
    scenes {
      ...SlimSceneData
    }
  }
}
    ${SlimSceneDataFragmentDoc}`;

/**
 * __useFindScenesQuery__
 *
 * To run a query within a React component, call `useFindScenesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindScenesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindScenesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      scene_filter: // value for 'scene_filter'
 *      scene_ids: // value for 'scene_ids'
 *   },
 * });
 */
export function useFindScenesQuery(baseOptions?: Apollo.QueryHookOptions<FindScenesQuery, FindScenesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindScenesQuery, FindScenesQueryVariables>(FindScenesDocument, options);
      }
export function useFindScenesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindScenesQuery, FindScenesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindScenesQuery, FindScenesQueryVariables>(FindScenesDocument, options);
        }
export type FindScenesQueryHookResult = ReturnType<typeof useFindScenesQuery>;
export type FindScenesLazyQueryHookResult = ReturnType<typeof useFindScenesLazyQuery>;
export type FindScenesQueryResult = Apollo.QueryResult<FindScenesQuery, FindScenesQueryVariables>;
export function refetchFindScenesQuery(variables?: FindScenesQueryVariables) {
      return { query: FindScenesDocument, variables: variables }
    }
export const FindScenesByPathRegexDocument = gql`
    query FindScenesByPathRegex($filter: FindFilterType) {
  findScenesByPathRegex(filter: $filter) {
    count
    filesize
    duration
    scenes {
      ...SlimSceneData
    }
  }
}
    ${SlimSceneDataFragmentDoc}`;

/**
 * __useFindScenesByPathRegexQuery__
 *
 * To run a query within a React component, call `useFindScenesByPathRegexQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindScenesByPathRegexQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindScenesByPathRegexQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useFindScenesByPathRegexQuery(baseOptions?: Apollo.QueryHookOptions<FindScenesByPathRegexQuery, FindScenesByPathRegexQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindScenesByPathRegexQuery, FindScenesByPathRegexQueryVariables>(FindScenesByPathRegexDocument, options);
      }
export function useFindScenesByPathRegexLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindScenesByPathRegexQuery, FindScenesByPathRegexQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindScenesByPathRegexQuery, FindScenesByPathRegexQueryVariables>(FindScenesByPathRegexDocument, options);
        }
export type FindScenesByPathRegexQueryHookResult = ReturnType<typeof useFindScenesByPathRegexQuery>;
export type FindScenesByPathRegexLazyQueryHookResult = ReturnType<typeof useFindScenesByPathRegexLazyQuery>;
export type FindScenesByPathRegexQueryResult = Apollo.QueryResult<FindScenesByPathRegexQuery, FindScenesByPathRegexQueryVariables>;
export function refetchFindScenesByPathRegexQuery(variables?: FindScenesByPathRegexQueryVariables) {
      return { query: FindScenesByPathRegexDocument, variables: variables }
    }
export const FindDuplicateScenesDocument = gql`
    query FindDuplicateScenes($distance: Int, $duration_diff: Float) {
  findDuplicateScenes(distance: $distance, duration_diff: $duration_diff) {
    ...SlimSceneData
  }
}
    ${SlimSceneDataFragmentDoc}`;

/**
 * __useFindDuplicateScenesQuery__
 *
 * To run a query within a React component, call `useFindDuplicateScenesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindDuplicateScenesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindDuplicateScenesQuery({
 *   variables: {
 *      distance: // value for 'distance'
 *      duration_diff: // value for 'duration_diff'
 *   },
 * });
 */
export function useFindDuplicateScenesQuery(baseOptions?: Apollo.QueryHookOptions<FindDuplicateScenesQuery, FindDuplicateScenesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindDuplicateScenesQuery, FindDuplicateScenesQueryVariables>(FindDuplicateScenesDocument, options);
      }
export function useFindDuplicateScenesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindDuplicateScenesQuery, FindDuplicateScenesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindDuplicateScenesQuery, FindDuplicateScenesQueryVariables>(FindDuplicateScenesDocument, options);
        }
export type FindDuplicateScenesQueryHookResult = ReturnType<typeof useFindDuplicateScenesQuery>;
export type FindDuplicateScenesLazyQueryHookResult = ReturnType<typeof useFindDuplicateScenesLazyQuery>;
export type FindDuplicateScenesQueryResult = Apollo.QueryResult<FindDuplicateScenesQuery, FindDuplicateScenesQueryVariables>;
export function refetchFindDuplicateScenesQuery(variables?: FindDuplicateScenesQueryVariables) {
      return { query: FindDuplicateScenesDocument, variables: variables }
    }
export const FindSceneDocument = gql`
    query FindScene($id: ID!, $checksum: String) {
  findScene(id: $id, checksum: $checksum) {
    ...SceneData
  }
}
    ${SceneDataFragmentDoc}`;

/**
 * __useFindSceneQuery__
 *
 * To run a query within a React component, call `useFindSceneQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSceneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSceneQuery({
 *   variables: {
 *      id: // value for 'id'
 *      checksum: // value for 'checksum'
 *   },
 * });
 */
export function useFindSceneQuery(baseOptions: Apollo.QueryHookOptions<FindSceneQuery, FindSceneQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSceneQuery, FindSceneQueryVariables>(FindSceneDocument, options);
      }
export function useFindSceneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSceneQuery, FindSceneQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSceneQuery, FindSceneQueryVariables>(FindSceneDocument, options);
        }
export type FindSceneQueryHookResult = ReturnType<typeof useFindSceneQuery>;
export type FindSceneLazyQueryHookResult = ReturnType<typeof useFindSceneLazyQuery>;
export type FindSceneQueryResult = Apollo.QueryResult<FindSceneQuery, FindSceneQueryVariables>;
export function refetchFindSceneQuery(variables: FindSceneQueryVariables) {
      return { query: FindSceneDocument, variables: variables }
    }
export const FindSceneMarkerTagsDocument = gql`
    query FindSceneMarkerTags($id: ID!) {
  sceneMarkerTags(scene_id: $id) {
    tag {
      id
      name
    }
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${SceneMarkerDataFragmentDoc}`;

/**
 * __useFindSceneMarkerTagsQuery__
 *
 * To run a query within a React component, call `useFindSceneMarkerTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSceneMarkerTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSceneMarkerTagsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindSceneMarkerTagsQuery(baseOptions: Apollo.QueryHookOptions<FindSceneMarkerTagsQuery, FindSceneMarkerTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSceneMarkerTagsQuery, FindSceneMarkerTagsQueryVariables>(FindSceneMarkerTagsDocument, options);
      }
export function useFindSceneMarkerTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSceneMarkerTagsQuery, FindSceneMarkerTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSceneMarkerTagsQuery, FindSceneMarkerTagsQueryVariables>(FindSceneMarkerTagsDocument, options);
        }
export type FindSceneMarkerTagsQueryHookResult = ReturnType<typeof useFindSceneMarkerTagsQuery>;
export type FindSceneMarkerTagsLazyQueryHookResult = ReturnType<typeof useFindSceneMarkerTagsLazyQuery>;
export type FindSceneMarkerTagsQueryResult = Apollo.QueryResult<FindSceneMarkerTagsQuery, FindSceneMarkerTagsQueryVariables>;
export function refetchFindSceneMarkerTagsQuery(variables: FindSceneMarkerTagsQueryVariables) {
      return { query: FindSceneMarkerTagsDocument, variables: variables }
    }
export const ParseSceneFilenamesDocument = gql`
    query ParseSceneFilenames($filter: FindFilterType!, $config: SceneParserInput!) {
  parseSceneFilenames(filter: $filter, config: $config) {
    count
    results {
      scene {
        ...SlimSceneData
      }
      title
      code
      details
      director
      url
      date
      rating
      studio_id
      gallery_ids
      movies {
        movie_id
      }
      performer_ids
      tag_ids
    }
  }
}
    ${SlimSceneDataFragmentDoc}`;

/**
 * __useParseSceneFilenamesQuery__
 *
 * To run a query within a React component, call `useParseSceneFilenamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useParseSceneFilenamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParseSceneFilenamesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      config: // value for 'config'
 *   },
 * });
 */
export function useParseSceneFilenamesQuery(baseOptions: Apollo.QueryHookOptions<ParseSceneFilenamesQuery, ParseSceneFilenamesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ParseSceneFilenamesQuery, ParseSceneFilenamesQueryVariables>(ParseSceneFilenamesDocument, options);
      }
export function useParseSceneFilenamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ParseSceneFilenamesQuery, ParseSceneFilenamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ParseSceneFilenamesQuery, ParseSceneFilenamesQueryVariables>(ParseSceneFilenamesDocument, options);
        }
export type ParseSceneFilenamesQueryHookResult = ReturnType<typeof useParseSceneFilenamesQuery>;
export type ParseSceneFilenamesLazyQueryHookResult = ReturnType<typeof useParseSceneFilenamesLazyQuery>;
export type ParseSceneFilenamesQueryResult = Apollo.QueryResult<ParseSceneFilenamesQuery, ParseSceneFilenamesQueryVariables>;
export function refetchParseSceneFilenamesQuery(variables: ParseSceneFilenamesQueryVariables) {
      return { query: ParseSceneFilenamesDocument, variables: variables }
    }
export const SceneStreamsDocument = gql`
    query SceneStreams($id: ID!) {
  findScene(id: $id) {
    sceneStreams {
      url
      mime_type
      label
    }
  }
}
    `;

/**
 * __useSceneStreamsQuery__
 *
 * To run a query within a React component, call `useSceneStreamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSceneStreamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSceneStreamsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSceneStreamsQuery(baseOptions: Apollo.QueryHookOptions<SceneStreamsQuery, SceneStreamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SceneStreamsQuery, SceneStreamsQueryVariables>(SceneStreamsDocument, options);
      }
export function useSceneStreamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SceneStreamsQuery, SceneStreamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SceneStreamsQuery, SceneStreamsQueryVariables>(SceneStreamsDocument, options);
        }
export type SceneStreamsQueryHookResult = ReturnType<typeof useSceneStreamsQuery>;
export type SceneStreamsLazyQueryHookResult = ReturnType<typeof useSceneStreamsLazyQuery>;
export type SceneStreamsQueryResult = Apollo.QueryResult<SceneStreamsQuery, SceneStreamsQueryVariables>;
export function refetchSceneStreamsQuery(variables: SceneStreamsQueryVariables) {
      return { query: SceneStreamsDocument, variables: variables }
    }
export const ListPerformerScrapersDocument = gql`
    query ListPerformerScrapers {
  listScrapers(types: [PERFORMER]) {
    id
    name
    performer {
      urls
      supported_scrapes
    }
  }
}
    `;

/**
 * __useListPerformerScrapersQuery__
 *
 * To run a query within a React component, call `useListPerformerScrapersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPerformerScrapersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPerformerScrapersQuery({
 *   variables: {
 *   },
 * });
 */
export function useListPerformerScrapersQuery(baseOptions?: Apollo.QueryHookOptions<ListPerformerScrapersQuery, ListPerformerScrapersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListPerformerScrapersQuery, ListPerformerScrapersQueryVariables>(ListPerformerScrapersDocument, options);
      }
export function useListPerformerScrapersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPerformerScrapersQuery, ListPerformerScrapersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListPerformerScrapersQuery, ListPerformerScrapersQueryVariables>(ListPerformerScrapersDocument, options);
        }
export type ListPerformerScrapersQueryHookResult = ReturnType<typeof useListPerformerScrapersQuery>;
export type ListPerformerScrapersLazyQueryHookResult = ReturnType<typeof useListPerformerScrapersLazyQuery>;
export type ListPerformerScrapersQueryResult = Apollo.QueryResult<ListPerformerScrapersQuery, ListPerformerScrapersQueryVariables>;
export function refetchListPerformerScrapersQuery(variables?: ListPerformerScrapersQueryVariables) {
      return { query: ListPerformerScrapersDocument, variables: variables }
    }
export const ListSceneScrapersDocument = gql`
    query ListSceneScrapers {
  listScrapers(types: [SCENE]) {
    id
    name
    scene {
      urls
      supported_scrapes
    }
  }
}
    `;

/**
 * __useListSceneScrapersQuery__
 *
 * To run a query within a React component, call `useListSceneScrapersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSceneScrapersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSceneScrapersQuery({
 *   variables: {
 *   },
 * });
 */
export function useListSceneScrapersQuery(baseOptions?: Apollo.QueryHookOptions<ListSceneScrapersQuery, ListSceneScrapersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListSceneScrapersQuery, ListSceneScrapersQueryVariables>(ListSceneScrapersDocument, options);
      }
export function useListSceneScrapersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListSceneScrapersQuery, ListSceneScrapersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListSceneScrapersQuery, ListSceneScrapersQueryVariables>(ListSceneScrapersDocument, options);
        }
export type ListSceneScrapersQueryHookResult = ReturnType<typeof useListSceneScrapersQuery>;
export type ListSceneScrapersLazyQueryHookResult = ReturnType<typeof useListSceneScrapersLazyQuery>;
export type ListSceneScrapersQueryResult = Apollo.QueryResult<ListSceneScrapersQuery, ListSceneScrapersQueryVariables>;
export function refetchListSceneScrapersQuery(variables?: ListSceneScrapersQueryVariables) {
      return { query: ListSceneScrapersDocument, variables: variables }
    }
export const ListGalleryScrapersDocument = gql`
    query ListGalleryScrapers {
  listScrapers(types: [GALLERY]) {
    id
    name
    gallery {
      urls
      supported_scrapes
    }
  }
}
    `;

/**
 * __useListGalleryScrapersQuery__
 *
 * To run a query within a React component, call `useListGalleryScrapersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListGalleryScrapersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListGalleryScrapersQuery({
 *   variables: {
 *   },
 * });
 */
export function useListGalleryScrapersQuery(baseOptions?: Apollo.QueryHookOptions<ListGalleryScrapersQuery, ListGalleryScrapersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListGalleryScrapersQuery, ListGalleryScrapersQueryVariables>(ListGalleryScrapersDocument, options);
      }
export function useListGalleryScrapersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListGalleryScrapersQuery, ListGalleryScrapersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListGalleryScrapersQuery, ListGalleryScrapersQueryVariables>(ListGalleryScrapersDocument, options);
        }
export type ListGalleryScrapersQueryHookResult = ReturnType<typeof useListGalleryScrapersQuery>;
export type ListGalleryScrapersLazyQueryHookResult = ReturnType<typeof useListGalleryScrapersLazyQuery>;
export type ListGalleryScrapersQueryResult = Apollo.QueryResult<ListGalleryScrapersQuery, ListGalleryScrapersQueryVariables>;
export function refetchListGalleryScrapersQuery(variables?: ListGalleryScrapersQueryVariables) {
      return { query: ListGalleryScrapersDocument, variables: variables }
    }
export const ListMovieScrapersDocument = gql`
    query ListMovieScrapers {
  listScrapers(types: [MOVIE]) {
    id
    name
    movie {
      urls
      supported_scrapes
    }
  }
}
    `;

/**
 * __useListMovieScrapersQuery__
 *
 * To run a query within a React component, call `useListMovieScrapersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListMovieScrapersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListMovieScrapersQuery({
 *   variables: {
 *   },
 * });
 */
export function useListMovieScrapersQuery(baseOptions?: Apollo.QueryHookOptions<ListMovieScrapersQuery, ListMovieScrapersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListMovieScrapersQuery, ListMovieScrapersQueryVariables>(ListMovieScrapersDocument, options);
      }
export function useListMovieScrapersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListMovieScrapersQuery, ListMovieScrapersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListMovieScrapersQuery, ListMovieScrapersQueryVariables>(ListMovieScrapersDocument, options);
        }
export type ListMovieScrapersQueryHookResult = ReturnType<typeof useListMovieScrapersQuery>;
export type ListMovieScrapersLazyQueryHookResult = ReturnType<typeof useListMovieScrapersLazyQuery>;
export type ListMovieScrapersQueryResult = Apollo.QueryResult<ListMovieScrapersQuery, ListMovieScrapersQueryVariables>;
export function refetchListMovieScrapersQuery(variables?: ListMovieScrapersQueryVariables) {
      return { query: ListMovieScrapersDocument, variables: variables }
    }
export const ScrapeSingleStudioDocument = gql`
    query ScrapeSingleStudio($source: ScraperSourceInput!, $input: ScrapeSingleStudioInput!) {
  scrapeSingleStudio(source: $source, input: $input) {
    ...ScrapedStudioData
  }
}
    ${ScrapedStudioDataFragmentDoc}`;

/**
 * __useScrapeSingleStudioQuery__
 *
 * To run a query within a React component, call `useScrapeSingleStudioQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeSingleStudioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeSingleStudioQuery({
 *   variables: {
 *      source: // value for 'source'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useScrapeSingleStudioQuery(baseOptions: Apollo.QueryHookOptions<ScrapeSingleStudioQuery, ScrapeSingleStudioQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeSingleStudioQuery, ScrapeSingleStudioQueryVariables>(ScrapeSingleStudioDocument, options);
      }
export function useScrapeSingleStudioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeSingleStudioQuery, ScrapeSingleStudioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeSingleStudioQuery, ScrapeSingleStudioQueryVariables>(ScrapeSingleStudioDocument, options);
        }
export type ScrapeSingleStudioQueryHookResult = ReturnType<typeof useScrapeSingleStudioQuery>;
export type ScrapeSingleStudioLazyQueryHookResult = ReturnType<typeof useScrapeSingleStudioLazyQuery>;
export type ScrapeSingleStudioQueryResult = Apollo.QueryResult<ScrapeSingleStudioQuery, ScrapeSingleStudioQueryVariables>;
export function refetchScrapeSingleStudioQuery(variables: ScrapeSingleStudioQueryVariables) {
      return { query: ScrapeSingleStudioDocument, variables: variables }
    }
export const ScrapeSinglePerformerDocument = gql`
    query ScrapeSinglePerformer($source: ScraperSourceInput!, $input: ScrapeSinglePerformerInput!) {
  scrapeSinglePerformer(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${ScrapedPerformerDataFragmentDoc}`;

/**
 * __useScrapeSinglePerformerQuery__
 *
 * To run a query within a React component, call `useScrapeSinglePerformerQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeSinglePerformerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeSinglePerformerQuery({
 *   variables: {
 *      source: // value for 'source'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useScrapeSinglePerformerQuery(baseOptions: Apollo.QueryHookOptions<ScrapeSinglePerformerQuery, ScrapeSinglePerformerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeSinglePerformerQuery, ScrapeSinglePerformerQueryVariables>(ScrapeSinglePerformerDocument, options);
      }
export function useScrapeSinglePerformerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeSinglePerformerQuery, ScrapeSinglePerformerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeSinglePerformerQuery, ScrapeSinglePerformerQueryVariables>(ScrapeSinglePerformerDocument, options);
        }
export type ScrapeSinglePerformerQueryHookResult = ReturnType<typeof useScrapeSinglePerformerQuery>;
export type ScrapeSinglePerformerLazyQueryHookResult = ReturnType<typeof useScrapeSinglePerformerLazyQuery>;
export type ScrapeSinglePerformerQueryResult = Apollo.QueryResult<ScrapeSinglePerformerQuery, ScrapeSinglePerformerQueryVariables>;
export function refetchScrapeSinglePerformerQuery(variables: ScrapeSinglePerformerQueryVariables) {
      return { query: ScrapeSinglePerformerDocument, variables: variables }
    }
export const ScrapeMultiPerformersDocument = gql`
    query ScrapeMultiPerformers($source: ScraperSourceInput!, $input: ScrapeMultiPerformersInput!) {
  scrapeMultiPerformers(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${ScrapedPerformerDataFragmentDoc}`;

/**
 * __useScrapeMultiPerformersQuery__
 *
 * To run a query within a React component, call `useScrapeMultiPerformersQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeMultiPerformersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeMultiPerformersQuery({
 *   variables: {
 *      source: // value for 'source'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useScrapeMultiPerformersQuery(baseOptions: Apollo.QueryHookOptions<ScrapeMultiPerformersQuery, ScrapeMultiPerformersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeMultiPerformersQuery, ScrapeMultiPerformersQueryVariables>(ScrapeMultiPerformersDocument, options);
      }
export function useScrapeMultiPerformersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeMultiPerformersQuery, ScrapeMultiPerformersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeMultiPerformersQuery, ScrapeMultiPerformersQueryVariables>(ScrapeMultiPerformersDocument, options);
        }
export type ScrapeMultiPerformersQueryHookResult = ReturnType<typeof useScrapeMultiPerformersQuery>;
export type ScrapeMultiPerformersLazyQueryHookResult = ReturnType<typeof useScrapeMultiPerformersLazyQuery>;
export type ScrapeMultiPerformersQueryResult = Apollo.QueryResult<ScrapeMultiPerformersQuery, ScrapeMultiPerformersQueryVariables>;
export function refetchScrapeMultiPerformersQuery(variables: ScrapeMultiPerformersQueryVariables) {
      return { query: ScrapeMultiPerformersDocument, variables: variables }
    }
export const ScrapePerformerUrlDocument = gql`
    query ScrapePerformerURL($url: String!) {
  scrapePerformerURL(url: $url) {
    ...ScrapedPerformerData
  }
}
    ${ScrapedPerformerDataFragmentDoc}`;

/**
 * __useScrapePerformerUrlQuery__
 *
 * To run a query within a React component, call `useScrapePerformerUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapePerformerUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapePerformerUrlQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useScrapePerformerUrlQuery(baseOptions: Apollo.QueryHookOptions<ScrapePerformerUrlQuery, ScrapePerformerUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapePerformerUrlQuery, ScrapePerformerUrlQueryVariables>(ScrapePerformerUrlDocument, options);
      }
export function useScrapePerformerUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapePerformerUrlQuery, ScrapePerformerUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapePerformerUrlQuery, ScrapePerformerUrlQueryVariables>(ScrapePerformerUrlDocument, options);
        }
export type ScrapePerformerUrlQueryHookResult = ReturnType<typeof useScrapePerformerUrlQuery>;
export type ScrapePerformerUrlLazyQueryHookResult = ReturnType<typeof useScrapePerformerUrlLazyQuery>;
export type ScrapePerformerUrlQueryResult = Apollo.QueryResult<ScrapePerformerUrlQuery, ScrapePerformerUrlQueryVariables>;
export function refetchScrapePerformerUrlQuery(variables: ScrapePerformerUrlQueryVariables) {
      return { query: ScrapePerformerUrlDocument, variables: variables }
    }
export const ScrapeSingleSceneDocument = gql`
    query ScrapeSingleScene($source: ScraperSourceInput!, $input: ScrapeSingleSceneInput!) {
  scrapeSingleScene(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${ScrapedSceneDataFragmentDoc}`;

/**
 * __useScrapeSingleSceneQuery__
 *
 * To run a query within a React component, call `useScrapeSingleSceneQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeSingleSceneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeSingleSceneQuery({
 *   variables: {
 *      source: // value for 'source'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useScrapeSingleSceneQuery(baseOptions: Apollo.QueryHookOptions<ScrapeSingleSceneQuery, ScrapeSingleSceneQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeSingleSceneQuery, ScrapeSingleSceneQueryVariables>(ScrapeSingleSceneDocument, options);
      }
export function useScrapeSingleSceneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeSingleSceneQuery, ScrapeSingleSceneQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeSingleSceneQuery, ScrapeSingleSceneQueryVariables>(ScrapeSingleSceneDocument, options);
        }
export type ScrapeSingleSceneQueryHookResult = ReturnType<typeof useScrapeSingleSceneQuery>;
export type ScrapeSingleSceneLazyQueryHookResult = ReturnType<typeof useScrapeSingleSceneLazyQuery>;
export type ScrapeSingleSceneQueryResult = Apollo.QueryResult<ScrapeSingleSceneQuery, ScrapeSingleSceneQueryVariables>;
export function refetchScrapeSingleSceneQuery(variables: ScrapeSingleSceneQueryVariables) {
      return { query: ScrapeSingleSceneDocument, variables: variables }
    }
export const ScrapeMultiScenesDocument = gql`
    query ScrapeMultiScenes($source: ScraperSourceInput!, $input: ScrapeMultiScenesInput!) {
  scrapeMultiScenes(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${ScrapedSceneDataFragmentDoc}`;

/**
 * __useScrapeMultiScenesQuery__
 *
 * To run a query within a React component, call `useScrapeMultiScenesQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeMultiScenesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeMultiScenesQuery({
 *   variables: {
 *      source: // value for 'source'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useScrapeMultiScenesQuery(baseOptions: Apollo.QueryHookOptions<ScrapeMultiScenesQuery, ScrapeMultiScenesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeMultiScenesQuery, ScrapeMultiScenesQueryVariables>(ScrapeMultiScenesDocument, options);
      }
export function useScrapeMultiScenesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeMultiScenesQuery, ScrapeMultiScenesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeMultiScenesQuery, ScrapeMultiScenesQueryVariables>(ScrapeMultiScenesDocument, options);
        }
export type ScrapeMultiScenesQueryHookResult = ReturnType<typeof useScrapeMultiScenesQuery>;
export type ScrapeMultiScenesLazyQueryHookResult = ReturnType<typeof useScrapeMultiScenesLazyQuery>;
export type ScrapeMultiScenesQueryResult = Apollo.QueryResult<ScrapeMultiScenesQuery, ScrapeMultiScenesQueryVariables>;
export function refetchScrapeMultiScenesQuery(variables: ScrapeMultiScenesQueryVariables) {
      return { query: ScrapeMultiScenesDocument, variables: variables }
    }
export const ScrapeSceneUrlDocument = gql`
    query ScrapeSceneURL($url: String!) {
  scrapeSceneURL(url: $url) {
    ...ScrapedSceneData
  }
}
    ${ScrapedSceneDataFragmentDoc}`;

/**
 * __useScrapeSceneUrlQuery__
 *
 * To run a query within a React component, call `useScrapeSceneUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeSceneUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeSceneUrlQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useScrapeSceneUrlQuery(baseOptions: Apollo.QueryHookOptions<ScrapeSceneUrlQuery, ScrapeSceneUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeSceneUrlQuery, ScrapeSceneUrlQueryVariables>(ScrapeSceneUrlDocument, options);
      }
export function useScrapeSceneUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeSceneUrlQuery, ScrapeSceneUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeSceneUrlQuery, ScrapeSceneUrlQueryVariables>(ScrapeSceneUrlDocument, options);
        }
export type ScrapeSceneUrlQueryHookResult = ReturnType<typeof useScrapeSceneUrlQuery>;
export type ScrapeSceneUrlLazyQueryHookResult = ReturnType<typeof useScrapeSceneUrlLazyQuery>;
export type ScrapeSceneUrlQueryResult = Apollo.QueryResult<ScrapeSceneUrlQuery, ScrapeSceneUrlQueryVariables>;
export function refetchScrapeSceneUrlQuery(variables: ScrapeSceneUrlQueryVariables) {
      return { query: ScrapeSceneUrlDocument, variables: variables }
    }
export const ScrapeSingleGalleryDocument = gql`
    query ScrapeSingleGallery($source: ScraperSourceInput!, $input: ScrapeSingleGalleryInput!) {
  scrapeSingleGallery(source: $source, input: $input) {
    ...ScrapedGalleryData
  }
}
    ${ScrapedGalleryDataFragmentDoc}`;

/**
 * __useScrapeSingleGalleryQuery__
 *
 * To run a query within a React component, call `useScrapeSingleGalleryQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeSingleGalleryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeSingleGalleryQuery({
 *   variables: {
 *      source: // value for 'source'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useScrapeSingleGalleryQuery(baseOptions: Apollo.QueryHookOptions<ScrapeSingleGalleryQuery, ScrapeSingleGalleryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeSingleGalleryQuery, ScrapeSingleGalleryQueryVariables>(ScrapeSingleGalleryDocument, options);
      }
export function useScrapeSingleGalleryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeSingleGalleryQuery, ScrapeSingleGalleryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeSingleGalleryQuery, ScrapeSingleGalleryQueryVariables>(ScrapeSingleGalleryDocument, options);
        }
export type ScrapeSingleGalleryQueryHookResult = ReturnType<typeof useScrapeSingleGalleryQuery>;
export type ScrapeSingleGalleryLazyQueryHookResult = ReturnType<typeof useScrapeSingleGalleryLazyQuery>;
export type ScrapeSingleGalleryQueryResult = Apollo.QueryResult<ScrapeSingleGalleryQuery, ScrapeSingleGalleryQueryVariables>;
export function refetchScrapeSingleGalleryQuery(variables: ScrapeSingleGalleryQueryVariables) {
      return { query: ScrapeSingleGalleryDocument, variables: variables }
    }
export const ScrapeGalleryUrlDocument = gql`
    query ScrapeGalleryURL($url: String!) {
  scrapeGalleryURL(url: $url) {
    ...ScrapedGalleryData
  }
}
    ${ScrapedGalleryDataFragmentDoc}`;

/**
 * __useScrapeGalleryUrlQuery__
 *
 * To run a query within a React component, call `useScrapeGalleryUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeGalleryUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeGalleryUrlQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useScrapeGalleryUrlQuery(baseOptions: Apollo.QueryHookOptions<ScrapeGalleryUrlQuery, ScrapeGalleryUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeGalleryUrlQuery, ScrapeGalleryUrlQueryVariables>(ScrapeGalleryUrlDocument, options);
      }
export function useScrapeGalleryUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeGalleryUrlQuery, ScrapeGalleryUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeGalleryUrlQuery, ScrapeGalleryUrlQueryVariables>(ScrapeGalleryUrlDocument, options);
        }
export type ScrapeGalleryUrlQueryHookResult = ReturnType<typeof useScrapeGalleryUrlQuery>;
export type ScrapeGalleryUrlLazyQueryHookResult = ReturnType<typeof useScrapeGalleryUrlLazyQuery>;
export type ScrapeGalleryUrlQueryResult = Apollo.QueryResult<ScrapeGalleryUrlQuery, ScrapeGalleryUrlQueryVariables>;
export function refetchScrapeGalleryUrlQuery(variables: ScrapeGalleryUrlQueryVariables) {
      return { query: ScrapeGalleryUrlDocument, variables: variables }
    }
export const ScrapeMovieUrlDocument = gql`
    query ScrapeMovieURL($url: String!) {
  scrapeMovieURL(url: $url) {
    ...ScrapedMovieData
  }
}
    ${ScrapedMovieDataFragmentDoc}`;

/**
 * __useScrapeMovieUrlQuery__
 *
 * To run a query within a React component, call `useScrapeMovieUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeMovieUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeMovieUrlQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useScrapeMovieUrlQuery(baseOptions: Apollo.QueryHookOptions<ScrapeMovieUrlQuery, ScrapeMovieUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeMovieUrlQuery, ScrapeMovieUrlQueryVariables>(ScrapeMovieUrlDocument, options);
      }
export function useScrapeMovieUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeMovieUrlQuery, ScrapeMovieUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeMovieUrlQuery, ScrapeMovieUrlQueryVariables>(ScrapeMovieUrlDocument, options);
        }
export type ScrapeMovieUrlQueryHookResult = ReturnType<typeof useScrapeMovieUrlQuery>;
export type ScrapeMovieUrlLazyQueryHookResult = ReturnType<typeof useScrapeMovieUrlLazyQuery>;
export type ScrapeMovieUrlQueryResult = Apollo.QueryResult<ScrapeMovieUrlQuery, ScrapeMovieUrlQueryVariables>;
export function refetchScrapeMovieUrlQuery(variables: ScrapeMovieUrlQueryVariables) {
      return { query: ScrapeMovieUrlDocument, variables: variables }
    }
export const InstalledScraperPackagesDocument = gql`
    query InstalledScraperPackages {
  installedPackages(type: Scraper) {
    ...PackageData
  }
}
    ${PackageDataFragmentDoc}`;

/**
 * __useInstalledScraperPackagesQuery__
 *
 * To run a query within a React component, call `useInstalledScraperPackagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstalledScraperPackagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstalledScraperPackagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useInstalledScraperPackagesQuery(baseOptions?: Apollo.QueryHookOptions<InstalledScraperPackagesQuery, InstalledScraperPackagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InstalledScraperPackagesQuery, InstalledScraperPackagesQueryVariables>(InstalledScraperPackagesDocument, options);
      }
export function useInstalledScraperPackagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InstalledScraperPackagesQuery, InstalledScraperPackagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InstalledScraperPackagesQuery, InstalledScraperPackagesQueryVariables>(InstalledScraperPackagesDocument, options);
        }
export type InstalledScraperPackagesQueryHookResult = ReturnType<typeof useInstalledScraperPackagesQuery>;
export type InstalledScraperPackagesLazyQueryHookResult = ReturnType<typeof useInstalledScraperPackagesLazyQuery>;
export type InstalledScraperPackagesQueryResult = Apollo.QueryResult<InstalledScraperPackagesQuery, InstalledScraperPackagesQueryVariables>;
export function refetchInstalledScraperPackagesQuery(variables?: InstalledScraperPackagesQueryVariables) {
      return { query: InstalledScraperPackagesDocument, variables: variables }
    }
export const InstalledScraperPackagesStatusDocument = gql`
    query InstalledScraperPackagesStatus {
  installedPackages(type: Scraper) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${PackageDataFragmentDoc}`;

/**
 * __useInstalledScraperPackagesStatusQuery__
 *
 * To run a query within a React component, call `useInstalledScraperPackagesStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstalledScraperPackagesStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstalledScraperPackagesStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useInstalledScraperPackagesStatusQuery(baseOptions?: Apollo.QueryHookOptions<InstalledScraperPackagesStatusQuery, InstalledScraperPackagesStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InstalledScraperPackagesStatusQuery, InstalledScraperPackagesStatusQueryVariables>(InstalledScraperPackagesStatusDocument, options);
      }
export function useInstalledScraperPackagesStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InstalledScraperPackagesStatusQuery, InstalledScraperPackagesStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InstalledScraperPackagesStatusQuery, InstalledScraperPackagesStatusQueryVariables>(InstalledScraperPackagesStatusDocument, options);
        }
export type InstalledScraperPackagesStatusQueryHookResult = ReturnType<typeof useInstalledScraperPackagesStatusQuery>;
export type InstalledScraperPackagesStatusLazyQueryHookResult = ReturnType<typeof useInstalledScraperPackagesStatusLazyQuery>;
export type InstalledScraperPackagesStatusQueryResult = Apollo.QueryResult<InstalledScraperPackagesStatusQuery, InstalledScraperPackagesStatusQueryVariables>;
export function refetchInstalledScraperPackagesStatusQuery(variables?: InstalledScraperPackagesStatusQueryVariables) {
      return { query: InstalledScraperPackagesStatusDocument, variables: variables }
    }
export const AvailableScraperPackagesDocument = gql`
    query AvailableScraperPackages($source: String!) {
  availablePackages(source: $source, type: Scraper) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${PackageDataFragmentDoc}`;

/**
 * __useAvailableScraperPackagesQuery__
 *
 * To run a query within a React component, call `useAvailableScraperPackagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAvailableScraperPackagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAvailableScraperPackagesQuery({
 *   variables: {
 *      source: // value for 'source'
 *   },
 * });
 */
export function useAvailableScraperPackagesQuery(baseOptions: Apollo.QueryHookOptions<AvailableScraperPackagesQuery, AvailableScraperPackagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AvailableScraperPackagesQuery, AvailableScraperPackagesQueryVariables>(AvailableScraperPackagesDocument, options);
      }
export function useAvailableScraperPackagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AvailableScraperPackagesQuery, AvailableScraperPackagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AvailableScraperPackagesQuery, AvailableScraperPackagesQueryVariables>(AvailableScraperPackagesDocument, options);
        }
export type AvailableScraperPackagesQueryHookResult = ReturnType<typeof useAvailableScraperPackagesQuery>;
export type AvailableScraperPackagesLazyQueryHookResult = ReturnType<typeof useAvailableScraperPackagesLazyQuery>;
export type AvailableScraperPackagesQueryResult = Apollo.QueryResult<AvailableScraperPackagesQuery, AvailableScraperPackagesQueryVariables>;
export function refetchAvailableScraperPackagesQuery(variables: AvailableScraperPackagesQueryVariables) {
      return { query: AvailableScraperPackagesDocument, variables: variables }
    }
export const ConfigurationDocument = gql`
    query Configuration {
  configuration {
    ...ConfigData
  }
}
    ${ConfigDataFragmentDoc}`;

/**
 * __useConfigurationQuery__
 *
 * To run a query within a React component, call `useConfigurationQuery` and pass it any options that fit your needs.
 * When your component renders, `useConfigurationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConfigurationQuery({
 *   variables: {
 *   },
 * });
 */
export function useConfigurationQuery(baseOptions?: Apollo.QueryHookOptions<ConfigurationQuery, ConfigurationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConfigurationQuery, ConfigurationQueryVariables>(ConfigurationDocument, options);
      }
export function useConfigurationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConfigurationQuery, ConfigurationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConfigurationQuery, ConfigurationQueryVariables>(ConfigurationDocument, options);
        }
export type ConfigurationQueryHookResult = ReturnType<typeof useConfigurationQuery>;
export type ConfigurationLazyQueryHookResult = ReturnType<typeof useConfigurationLazyQuery>;
export type ConfigurationQueryResult = Apollo.QueryResult<ConfigurationQuery, ConfigurationQueryVariables>;
export function refetchConfigurationQuery(variables?: ConfigurationQueryVariables) {
      return { query: ConfigurationDocument, variables: variables }
    }
export const DirectoryDocument = gql`
    query Directory($path: String) {
  directory(path: $path) {
    path
    parent
    directories
  }
}
    `;

/**
 * __useDirectoryQuery__
 *
 * To run a query within a React component, call `useDirectoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useDirectoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDirectoryQuery({
 *   variables: {
 *      path: // value for 'path'
 *   },
 * });
 */
export function useDirectoryQuery(baseOptions?: Apollo.QueryHookOptions<DirectoryQuery, DirectoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DirectoryQuery, DirectoryQueryVariables>(DirectoryDocument, options);
      }
export function useDirectoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DirectoryQuery, DirectoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DirectoryQuery, DirectoryQueryVariables>(DirectoryDocument, options);
        }
export type DirectoryQueryHookResult = ReturnType<typeof useDirectoryQuery>;
export type DirectoryLazyQueryHookResult = ReturnType<typeof useDirectoryLazyQuery>;
export type DirectoryQueryResult = Apollo.QueryResult<DirectoryQuery, DirectoryQueryVariables>;
export function refetchDirectoryQuery(variables?: DirectoryQueryVariables) {
      return { query: DirectoryDocument, variables: variables }
    }
export const ValidateStashBoxDocument = gql`
    query ValidateStashBox($input: StashBoxInput!) {
  validateStashBoxCredentials(input: $input) {
    valid
    status
  }
}
    `;

/**
 * __useValidateStashBoxQuery__
 *
 * To run a query within a React component, call `useValidateStashBoxQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidateStashBoxQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidateStashBoxQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useValidateStashBoxQuery(baseOptions: Apollo.QueryHookOptions<ValidateStashBoxQuery, ValidateStashBoxQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidateStashBoxQuery, ValidateStashBoxQueryVariables>(ValidateStashBoxDocument, options);
      }
export function useValidateStashBoxLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidateStashBoxQuery, ValidateStashBoxQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidateStashBoxQuery, ValidateStashBoxQueryVariables>(ValidateStashBoxDocument, options);
        }
export type ValidateStashBoxQueryHookResult = ReturnType<typeof useValidateStashBoxQuery>;
export type ValidateStashBoxLazyQueryHookResult = ReturnType<typeof useValidateStashBoxLazyQuery>;
export type ValidateStashBoxQueryResult = Apollo.QueryResult<ValidateStashBoxQuery, ValidateStashBoxQueryVariables>;
export function refetchValidateStashBoxQuery(variables: ValidateStashBoxQueryVariables) {
      return { query: ValidateStashBoxDocument, variables: variables }
    }
export const SystemStatusDocument = gql`
    query SystemStatus {
  systemStatus {
    databaseSchema
    databasePath
    appSchema
    status
    configPath
    os
    workingDir
    homeDir
  }
}
    `;

/**
 * __useSystemStatusQuery__
 *
 * To run a query within a React component, call `useSystemStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useSystemStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSystemStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useSystemStatusQuery(baseOptions?: Apollo.QueryHookOptions<SystemStatusQuery, SystemStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SystemStatusQuery, SystemStatusQueryVariables>(SystemStatusDocument, options);
      }
export function useSystemStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SystemStatusQuery, SystemStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SystemStatusQuery, SystemStatusQueryVariables>(SystemStatusDocument, options);
        }
export type SystemStatusQueryHookResult = ReturnType<typeof useSystemStatusQuery>;
export type SystemStatusLazyQueryHookResult = ReturnType<typeof useSystemStatusLazyQuery>;
export type SystemStatusQueryResult = Apollo.QueryResult<SystemStatusQuery, SystemStatusQueryVariables>;
export function refetchSystemStatusQuery(variables?: SystemStatusQueryVariables) {
      return { query: SystemStatusDocument, variables: variables }
    }
export const FindStudiosDocument = gql`
    query FindStudios($filter: FindFilterType, $studio_filter: StudioFilterType) {
  findStudios(filter: $filter, studio_filter: $studio_filter) {
    count
    studios {
      ...StudioData
    }
  }
}
    ${StudioDataFragmentDoc}`;

/**
 * __useFindStudiosQuery__
 *
 * To run a query within a React component, call `useFindStudiosQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindStudiosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindStudiosQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      studio_filter: // value for 'studio_filter'
 *   },
 * });
 */
export function useFindStudiosQuery(baseOptions?: Apollo.QueryHookOptions<FindStudiosQuery, FindStudiosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindStudiosQuery, FindStudiosQueryVariables>(FindStudiosDocument, options);
      }
export function useFindStudiosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindStudiosQuery, FindStudiosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindStudiosQuery, FindStudiosQueryVariables>(FindStudiosDocument, options);
        }
export type FindStudiosQueryHookResult = ReturnType<typeof useFindStudiosQuery>;
export type FindStudiosLazyQueryHookResult = ReturnType<typeof useFindStudiosLazyQuery>;
export type FindStudiosQueryResult = Apollo.QueryResult<FindStudiosQuery, FindStudiosQueryVariables>;
export function refetchFindStudiosQuery(variables?: FindStudiosQueryVariables) {
      return { query: FindStudiosDocument, variables: variables }
    }
export const FindStudioDocument = gql`
    query FindStudio($id: ID!) {
  findStudio(id: $id) {
    ...StudioData
  }
}
    ${StudioDataFragmentDoc}`;

/**
 * __useFindStudioQuery__
 *
 * To run a query within a React component, call `useFindStudioQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindStudioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindStudioQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindStudioQuery(baseOptions: Apollo.QueryHookOptions<FindStudioQuery, FindStudioQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindStudioQuery, FindStudioQueryVariables>(FindStudioDocument, options);
      }
export function useFindStudioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindStudioQuery, FindStudioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindStudioQuery, FindStudioQueryVariables>(FindStudioDocument, options);
        }
export type FindStudioQueryHookResult = ReturnType<typeof useFindStudioQuery>;
export type FindStudioLazyQueryHookResult = ReturnType<typeof useFindStudioLazyQuery>;
export type FindStudioQueryResult = Apollo.QueryResult<FindStudioQuery, FindStudioQueryVariables>;
export function refetchFindStudioQuery(variables: FindStudioQueryVariables) {
      return { query: FindStudioDocument, variables: variables }
    }
export const FindTagsDocument = gql`
    query FindTags($filter: FindFilterType, $tag_filter: TagFilterType) {
  findTags(filter: $filter, tag_filter: $tag_filter) {
    count
    tags {
      ...TagData
    }
  }
}
    ${TagDataFragmentDoc}`;

/**
 * __useFindTagsQuery__
 *
 * To run a query within a React component, call `useFindTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTagsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      tag_filter: // value for 'tag_filter'
 *   },
 * });
 */
export function useFindTagsQuery(baseOptions?: Apollo.QueryHookOptions<FindTagsQuery, FindTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTagsQuery, FindTagsQueryVariables>(FindTagsDocument, options);
      }
export function useFindTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTagsQuery, FindTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTagsQuery, FindTagsQueryVariables>(FindTagsDocument, options);
        }
export type FindTagsQueryHookResult = ReturnType<typeof useFindTagsQuery>;
export type FindTagsLazyQueryHookResult = ReturnType<typeof useFindTagsLazyQuery>;
export type FindTagsQueryResult = Apollo.QueryResult<FindTagsQuery, FindTagsQueryVariables>;
export function refetchFindTagsQuery(variables?: FindTagsQueryVariables) {
      return { query: FindTagsDocument, variables: variables }
    }
export const FindTagDocument = gql`
    query FindTag($id: ID!) {
  findTag(id: $id) {
    ...TagData
  }
}
    ${TagDataFragmentDoc}`;

/**
 * __useFindTagQuery__
 *
 * To run a query within a React component, call `useFindTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTagQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindTagQuery(baseOptions: Apollo.QueryHookOptions<FindTagQuery, FindTagQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTagQuery, FindTagQueryVariables>(FindTagDocument, options);
      }
export function useFindTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTagQuery, FindTagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTagQuery, FindTagQueryVariables>(FindTagDocument, options);
        }
export type FindTagQueryHookResult = ReturnType<typeof useFindTagQuery>;
export type FindTagLazyQueryHookResult = ReturnType<typeof useFindTagLazyQuery>;
export type FindTagQueryResult = Apollo.QueryResult<FindTagQuery, FindTagQueryVariables>;
export function refetchFindTagQuery(variables: FindTagQueryVariables) {
      return { query: FindTagDocument, variables: variables }
    }
export const JobsSubscribeDocument = gql`
    subscription JobsSubscribe {
  jobsSubscribe {
    type
    job {
      id
      status
      subTasks
      description
      progress
    }
  }
}
    `;

/**
 * __useJobsSubscribeSubscription__
 *
 * To run a query within a React component, call `useJobsSubscribeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useJobsSubscribeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobsSubscribeSubscription({
 *   variables: {
 *   },
 * });
 */
export function useJobsSubscribeSubscription(baseOptions?: Apollo.SubscriptionHookOptions<JobsSubscribeSubscription, JobsSubscribeSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<JobsSubscribeSubscription, JobsSubscribeSubscriptionVariables>(JobsSubscribeDocument, options);
      }
export type JobsSubscribeSubscriptionHookResult = ReturnType<typeof useJobsSubscribeSubscription>;
export type JobsSubscribeSubscriptionResult = Apollo.SubscriptionResult<JobsSubscribeSubscription>;
export const LoggingSubscribeDocument = gql`
    subscription LoggingSubscribe {
  loggingSubscribe {
    ...LogEntryData
  }
}
    ${LogEntryDataFragmentDoc}`;

/**
 * __useLoggingSubscribeSubscription__
 *
 * To run a query within a React component, call `useLoggingSubscribeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLoggingSubscribeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoggingSubscribeSubscription({
 *   variables: {
 *   },
 * });
 */
export function useLoggingSubscribeSubscription(baseOptions?: Apollo.SubscriptionHookOptions<LoggingSubscribeSubscription, LoggingSubscribeSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LoggingSubscribeSubscription, LoggingSubscribeSubscriptionVariables>(LoggingSubscribeDocument, options);
      }
export type LoggingSubscribeSubscriptionHookResult = ReturnType<typeof useLoggingSubscribeSubscription>;
export type LoggingSubscribeSubscriptionResult = Apollo.SubscriptionResult<LoggingSubscribeSubscription>;
export const ScanCompleteSubscribeDocument = gql`
    subscription ScanCompleteSubscribe {
  scanCompleteSubscribe
}
    `;

/**
 * __useScanCompleteSubscribeSubscription__
 *
 * To run a query within a React component, call `useScanCompleteSubscribeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useScanCompleteSubscribeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScanCompleteSubscribeSubscription({
 *   variables: {
 *   },
 * });
 */
export function useScanCompleteSubscribeSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ScanCompleteSubscribeSubscription, ScanCompleteSubscribeSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ScanCompleteSubscribeSubscription, ScanCompleteSubscribeSubscriptionVariables>(ScanCompleteSubscribeDocument, options);
      }
export type ScanCompleteSubscribeSubscriptionHookResult = ReturnType<typeof useScanCompleteSubscribeSubscription>;
export type ScanCompleteSubscribeSubscriptionResult = Apollo.SubscriptionResult<ScanCompleteSubscribeSubscription>;