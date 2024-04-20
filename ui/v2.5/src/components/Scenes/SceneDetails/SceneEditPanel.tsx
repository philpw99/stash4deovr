import React, { useEffect, useState, useMemo } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  Col,
  Row,
  ButtonGroup,
} from "react-bootstrap";
import Mousetrap from "mousetrap";
import * as GQL from "src/core/generated-graphql";
import * as yup from "yup";
import {
  queryScrapeScene,
  queryScrapeSceneURL,
  useListSceneScrapers,
  mutateReloadScrapers,
  queryScrapeSceneQueryFragment,
} from "src/core/StashService";
import { Icon } from "src/components/Shared/Icon";
import { LoadingIndicator } from "src/components/Shared/LoadingIndicator";
import { ImageInput } from "src/components/Shared/ImageInput";
import { useToast } from "src/hooks/Toast";
import ImageUtils from "src/utils/image";
import { getStashIDs } from "src/utils/stashIds";
import { useFormik } from "formik";
import { Prompt } from "react-router-dom";
import { ConfigurationContext } from "src/hooks/Config";
import { stashboxDisplayName } from "src/utils/stashbox";
import { IMovieEntry, SceneMovieTable } from "./SceneMovieTable";
import { faSearch, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { objectTitle } from "src/core/files";
import { galleryTitle } from "src/core/galleries";
import { lazyComponent } from "src/utils/lazyComponent";
import isEqual from "lodash-es/isEqual";
import {
  yupDateString,
  yupFormikValidate,
  yupUniqueStringList,
} from "src/utils/yup";
import {
  Performer,
  PerformerSelect,
} from "src/components/Performers/PerformerSelect";
import { formikUtils } from "src/utils/form";
import { Tag, TagSelect } from "src/components/Tags/TagSelect";
import { Studio, StudioSelect } from "src/components/Studios/StudioSelect";
import { Gallery, GallerySelect } from "src/components/Galleries/GallerySelect";
import { Movie } from "src/components/Movies/MovieSelect";

const SceneScrapeDialog = lazyComponent(() => import("./SceneScrapeDialog"));
const SceneQueryModal = lazyComponent(() => import("./SceneQueryModal"));

interface IProps {
  scene: Partial<GQL.SceneDataFragment>;
  initialCoverImage?: string;
  isNew?: boolean;
  isVisible: boolean;
  onSubmit: (input: GQL.SceneCreateInput) => Promise<void>;
  onDelete?: () => void;
}

export const SceneEditPanel: React.FC<IProps> = ({
  scene,
  initialCoverImage,
  isNew = false,
  isVisible,
  onSubmit,
  onDelete,
}) => {
  const intl = useIntl();
  const Toast = useToast();

  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [performers, setPerformers] = useState<Performer[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [studio, setStudio] = useState<Studio | null>(null);

  const Scrapers = useListSceneScrapers();
  const [fragmentScrapers, setFragmentScrapers] = useState<GQL.Scraper[]>([]);
  const [queryableScrapers, setQueryableScrapers] = useState<GQL.Scraper[]>([]);

  const [scraper, setScraper] = useState<GQL.ScraperSourceInput>();
  const [isScraperQueryModalOpen, setIsScraperQueryModalOpen] =
    useState<boolean>(false);
  const [scrapedScene, setScrapedScene] = useState<GQL.ScrapedScene | null>();
  const [endpoint, setEndpoint] = useState<string>();

  useEffect(() => {
    setGalleries(
      scene.galleries?.map((g) => ({
        id: g.id,
        title: galleryTitle(g),
        files: g.files,
        folder: g.folder,
      })) ?? []
    );
  }, [scene.galleries]);

  useEffect(() => {
    setPerformers(scene.performers ?? []);
  }, [scene.performers]);

  useEffect(() => {
    setMovies(scene.movies?.map((m) => m.movie) ?? []);
  }, [scene.movies]);

  useEffect(() => {
    setTags(scene.tags ?? []);
  }, [scene.tags]);

  useEffect(() => {
    setStudio(scene.studio ?? null);
  }, [scene.studio]);

  const { configuration: stashConfig } = React.useContext(ConfigurationContext);

  // Network state
  const [isLoading, setIsLoading] = useState(false);

  const schema = yup.object({
    title: yup.string().ensure(),
    code: yup.string().ensure(),
    urls: yupUniqueStringList(intl),
    date: yupDateString(intl),
    director: yup.string().ensure(),
    gallery_ids: yup.array(yup.string().required()).defined(),
    studio_id: yup.string().required().nullable(),
    performer_ids: yup.array(yup.string().required()).defined(),
    movies: yup
      .array(
        yup.object({
          movie_id: yup.string().required(),
          scene_index: yup.number().integer().nullable().defined(),
        })
      )
      .defined(),
    tag_ids: yup.array(yup.string().required()).defined(),
    stash_ids: yup.mixed<GQL.StashIdInput[]>().defined(),
    details: yup.string().ensure(),
    cover_image: yup.string().nullable().optional(),
  });

  const initialValues = useMemo(
    () => ({
      title: scene.title ?? "",
      code: scene.code ?? "",
      urls: scene.urls ?? [],
      date: scene.date ?? "",
      director: scene.director ?? "",
      gallery_ids: (scene.galleries ?? []).map((g) => g.id),
      studio_id: scene.studio?.id ?? null,
      performer_ids: (scene.performers ?? []).map((p) => p.id),
      movies: (scene.movies ?? []).map((m) => {
        return { movie_id: m.movie.id, scene_index: m.scene_index ?? null };
      }),
      tag_ids: (scene.tags ?? []).map((t) => t.id),
      stash_ids: getStashIDs(scene.stash_ids),
      details: scene.details ?? "",
      cover_image: initialCoverImage,
    }),
    [scene, initialCoverImage]
  );

  type InputValues = yup.InferType<typeof schema>;

  const formik = useFormik<InputValues>({
    initialValues,
    enableReinitialize: true,
    validate: yupFormikValidate(schema),
    onSubmit: (values) => onSave(schema.cast(values)),
  });

  const coverImagePreview = useMemo(() => {
    const sceneImage = scene.paths?.screenshot;
    const formImage = formik.values.cover_image;
    if (formImage === null && sceneImage) {
      const sceneImageURL = new URL(sceneImage);
      sceneImageURL.searchParams.set("default", "true");
      return sceneImageURL.toString();
    } else if (formImage) {
      return formImage;
    }
    return sceneImage;
  }, [formik.values.cover_image, scene.paths?.screenshot]);

  const movieEntries = useMemo(() => {
    return formik.values.movies
      .map((m) => {
        return {
          movie: movies.find((mm) => mm.id === m.movie_id),
          scene_index: m.scene_index,
        };
      })
      .filter((m) => m.movie !== undefined) as IMovieEntry[];
  }, [formik.values.movies, movies]);

  function onSetGalleries(items: Gallery[]) {
    setGalleries(items);
    formik.setFieldValue(
      "gallery_ids",
      items.map((i) => i.id)
    );
  }

  function onSetPerformers(items: Performer[]) {
    setPerformers(items);
    formik.setFieldValue(
      "performer_ids",
      items.map((item) => item.id)
    );
  }

  function onSetTags(items: Tag[]) {
    setTags(items);
    formik.setFieldValue(
      "tag_ids",
      items.map((item) => item.id)
    );
  }

  function onSetStudio(item: Studio | null) {
    setStudio(item);
    formik.setFieldValue("studio_id", item ? item.id : null);
  }

  useEffect(() => {
    if (isVisible) {
      Mousetrap.bind("s s", () => {
        if (formik.dirty) {
          formik.submitForm();
        }
      });
      Mousetrap.bind("d d", () => {
        if (onDelete) {
          onDelete();
        }
      });

      return () => {
        Mousetrap.unbind("s s");
        Mousetrap.unbind("d d");
      };
    }
  });

  useEffect(() => {
    const toFilter = Scrapers?.data?.listScrapers ?? [];

    const newFragmentScrapers = toFilter.filter((s) =>
      s.scene?.supported_scrapes.includes(GQL.ScrapeType.Fragment)
    );
    const newQueryableScrapers = toFilter.filter((s) =>
      s.scene?.supported_scrapes.includes(GQL.ScrapeType.Name)
    );

    setFragmentScrapers(newFragmentScrapers);
    setQueryableScrapers(newQueryableScrapers);
  }, [Scrapers, stashConfig]);

  function onSetMovies(items: Movie[]) {
    setMovies(items);

    const existingMovies = formik.values.movies;

    const newMovies = items.map((m) => {
      const existing = existingMovies.find((mm) => mm.movie_id === m.id);
      if (existing) {
        return existing;
      }

      return {
        movie_id: m.id,
        scene_index: null,
      };
    });

    formik.setFieldValue("movies", newMovies);
  }

  async function onSave(input: InputValues) {
    setIsLoading(true);
    try {
      await onSubmit(input);
      formik.resetForm();
    } catch (e) {
      Toast.error(e);
    }
    setIsLoading(false);
  }

  const encodingImage = ImageUtils.usePasteImage(onImageLoad);

  function onImageLoad(imageData: string) {
    formik.setFieldValue("cover_image", imageData);
  }

  function onCoverImageChange(event: React.FormEvent<HTMLInputElement>) {
    ImageUtils.onImageChange(event, onImageLoad);
  }

  async function onScrapeClicked(s: GQL.ScraperSourceInput) {
    setIsLoading(true);
    try {
      const result = await queryScrapeScene(s, scene.id!);
      if (!result.data || !result.data.scrapeSingleScene?.length) {
        Toast.success("No scenes found");
        return;
      }
      // assume one returned scene
      setScrapedScene(result.data.scrapeSingleScene[0]);
      setEndpoint(s.stash_box_endpoint ?? undefined);
    } catch (e) {
      Toast.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  async function scrapeFromQuery(
    s: GQL.ScraperSourceInput,
    fragment: GQL.ScrapedSceneDataFragment
  ) {
    setIsLoading(true);
    try {
      const input: GQL.ScrapedSceneInput = {
        date: fragment.date,
        code: fragment.code,
        details: fragment.details,
        director: fragment.director,
        remote_site_id: fragment.remote_site_id,
        title: fragment.title,
        urls: fragment.urls,
      };

      const result = await queryScrapeSceneQueryFragment(s, input);
      if (!result.data || !result.data.scrapeSingleScene?.length) {
        Toast.success("No scenes found");
        return;
      }
      // assume one returned scene
      setScrapedScene(result.data.scrapeSingleScene[0]);
    } catch (e) {
      Toast.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  function onScrapeQueryClicked(s: GQL.ScraperSourceInput) {
    setScraper(s);
    setEndpoint(s.stash_box_endpoint ?? undefined);
    setIsScraperQueryModalOpen(true);
  }

  async function onReloadScrapers() {
    setIsLoading(true);
    try {
      await mutateReloadScrapers();
    } catch (e) {
      Toast.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  function onScrapeDialogClosed(sceneData?: GQL.ScrapedSceneDataFragment) {
    if (sceneData) {
      updateSceneFromScrapedScene(sceneData);
    }
    setScrapedScene(undefined);
  }

  function maybeRenderScrapeDialog() {
    if (!scrapedScene) {
      return;
    }

    const currentScene = {
      id: scene.id!,
      ...formik.values,
    };

    if (!currentScene.cover_image) {
      currentScene.cover_image = scene.paths?.screenshot;
    }

    return (
      <SceneScrapeDialog
        scene={currentScene}
        sceneStudio={studio}
        sceneTags={tags}
        scenePerformers={performers}
        sceneMovies={movies}
        scraped={scrapedScene}
        endpoint={endpoint}
        onClose={(s) => onScrapeDialogClosed(s)}
      />
    );
  }

  function renderScrapeQueryMenu() {
    const stashBoxes = stashConfig?.general.stashBoxes ?? [];

    if (stashBoxes.length === 0 && queryableScrapers.length === 0) return;

    return (
      <Dropdown title={intl.formatMessage({ id: "actions.scrape_query" })}>
        <Dropdown.Toggle variant="secondary">
          <Icon icon={faSearch} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {stashBoxes.map((s, index) => (
            <Dropdown.Item
              key={s.endpoint}
              onClick={() =>
                onScrapeQueryClicked({
                  stash_box_index: index,
                  stash_box_endpoint: s.endpoint,
                })
              }
            >
              {stashboxDisplayName(s.name, index)}
            </Dropdown.Item>
          ))}
          {queryableScrapers.map((s) => (
            <Dropdown.Item
              key={s.name}
              onClick={() => onScrapeQueryClicked({ scraper_id: s.id })}
            >
              {s.name}
            </Dropdown.Item>
          ))}
          <Dropdown.Item onClick={() => onReloadScrapers()}>
            <span className="fa-icon">
              <Icon icon={faSyncAlt} />
            </span>
            <span>
              <FormattedMessage id="actions.reload_scrapers" />
            </span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  function onSceneSelected(s: GQL.ScrapedSceneDataFragment) {
    if (!scraper) return;

    if (scraper?.stash_box_index !== undefined) {
      // must be stash-box - assume full scene
      setScrapedScene(s);
    } else {
      // must be scraper
      scrapeFromQuery(scraper, s);
    }
  }

  const renderScrapeQueryModal = () => {
    if (!isScraperQueryModalOpen || !scraper) return;

    return (
      <SceneQueryModal
        scraper={scraper}
        onHide={() => setScraper(undefined)}
        onSelectScene={(s) => {
          setIsScraperQueryModalOpen(false);
          setScraper(undefined);
          onSceneSelected(s);
        }}
        name={formik.values.title || objectTitle(scene) || ""}
      />
    );
  };

  function renderScraperMenu() {
    const stashBoxes = stashConfig?.general.stashBoxes ?? [];

    return (
      <DropdownButton
        className="d-inline-block"
        id="scene-scrape"
        title={intl.formatMessage({ id: "actions.scrape_with" })}
      >
        {stashBoxes.map((s, index) => (
          <Dropdown.Item
            key={s.endpoint}
            onClick={() =>
              onScrapeClicked({
                stash_box_index: index,
                stash_box_endpoint: s.endpoint,
              })
            }
          >
            {stashboxDisplayName(s.name, index)}
          </Dropdown.Item>
        ))}
        {fragmentScrapers.map((s) => (
          <Dropdown.Item
            key={s.name}
            onClick={() => onScrapeClicked({ scraper_id: s.id })}
          >
            {s.name}
          </Dropdown.Item>
        ))}
        <Dropdown.Item onClick={() => onReloadScrapers()}>
          <span className="fa-icon">
            <Icon icon={faSyncAlt} />
          </span>
          <span>
            <FormattedMessage id="actions.reload_scrapers" />
          </span>
        </Dropdown.Item>
      </DropdownButton>
    );
  }

  function urlScrapable(scrapedUrl: string): boolean {
    return (Scrapers?.data?.listScrapers ?? []).some((s) =>
      (s?.scene?.urls ?? []).some((u) => scrapedUrl.includes(u))
    );
  }

  function updateSceneFromScrapedScene(
    updatedScene: GQL.ScrapedSceneDataFragment
  ) {
    if (updatedScene.title) {
      formik.setFieldValue("title", updatedScene.title);
    }

    if (updatedScene.code) {
      formik.setFieldValue("code", updatedScene.code);
    }

    if (updatedScene.details) {
      formik.setFieldValue("details", updatedScene.details);
    }

    if (updatedScene.director) {
      formik.setFieldValue("director", updatedScene.director);
    }

    if (updatedScene.date) {
      formik.setFieldValue("date", updatedScene.date);
    }

    if (updatedScene.urls) {
      formik.setFieldValue("urls", updatedScene.urls);
    }

    if (updatedScene.studio && updatedScene.studio.stored_id) {
      onSetStudio({
        id: updatedScene.studio.stored_id,
        name: updatedScene.studio.name ?? "",
        aliases: [],
      });
    }

    if (updatedScene.performers && updatedScene.performers.length > 0) {
      const idPerfs = updatedScene.performers.filter((p) => {
        return p.stored_id !== undefined && p.stored_id !== null;
      });

      if (idPerfs.length > 0) {
        onSetPerformers(
          idPerfs.map((p) => {
            return {
              id: p.stored_id!,
              name: p.name ?? "",
              alias_list: [],
            };
          })
        );
      }
    }

    if (updatedScene.movies && updatedScene.movies.length > 0) {
      const idMovis = updatedScene.movies.filter((p) => {
        return p.stored_id !== undefined && p.stored_id !== null;
      });

      if (idMovis.length > 0) {
        onSetMovies(
          idMovis.map((p) => {
            return {
              id: p.stored_id!,
              name: p.name ?? "",
            };
          })
        );
      }
    }

    if (updatedScene?.tags?.length) {
      const idTags = updatedScene.tags.filter((p) => {
        return p.stored_id !== undefined && p.stored_id !== null;
      });

      if (idTags.length > 0) {
        onSetTags(
          idTags.map((p) => {
            return {
              id: p.stored_id!,
              name: p.name ?? "",
              aliases: [],
            };
          })
        );
      }
    }

    if (updatedScene.image) {
      // image is a base64 string
      formik.setFieldValue("cover_image", updatedScene.image);
    }

    if (updatedScene.remote_site_id && endpoint) {
      let found = false;
      formik.setFieldValue(
        "stash_ids",
        formik.values.stash_ids.map((s) => {
          if (s.endpoint === endpoint) {
            found = true;
            return {
              endpoint,
              stash_id: updatedScene.remote_site_id,
            };
          }

          return s;
        })
      );

      if (!found) {
        formik.setFieldValue(
          "stash_ids",
          formik.values.stash_ids.concat({
            endpoint,
            stash_id: updatedScene.remote_site_id,
          })
        );
      }
    }
  }

  async function onScrapeSceneURL(url: string) {
    if (!url) {
      return;
    }
    setIsLoading(true);
    try {
      const result = await queryScrapeSceneURL(url);
      if (!result.data || !result.data.scrapeSceneURL) {
        return;
      }
      setScrapedScene(result.data.scrapeSceneURL);
    } catch (e) {
      Toast.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  const image = useMemo(() => {
    if (encodingImage) {
      return (
        <LoadingIndicator
          message={intl.formatMessage({ id: "actions.encoding_image" })}
        />
      );
    }

    if (coverImagePreview) {
      return (
        <img
          className="scene-cover"
          src={coverImagePreview}
          alt={intl.formatMessage({ id: "cover_image" })}
        />
      );
    }

    return <div></div>;
  }, [encodingImage, coverImagePreview, intl]);

  if (isLoading) return <LoadingIndicator />;

  const splitProps = {
    labelProps: {
      column: true,
      sm: 3,
    },
    fieldProps: {
      sm: 9,
    },
  };
  const fullWidthProps = {
    labelProps: {
      column: true,
      sm: 3,
      xl: 12,
    },
    fieldProps: {
      sm: 9,
      xl: 12,
    },
  };
  const {
    renderField,
    renderInputField,
    renderDateField,
    renderURLListField,
    renderStashIDsField,
  } = formikUtils(intl, formik, splitProps);

  function renderGalleriesField() {
    const title = intl.formatMessage({ id: "galleries" });
    const control = (
      <GallerySelect
        values={galleries}
        onSelect={(items) => onSetGalleries(items)}
        isMulti
      />
    );

    return renderField("gallery_ids", title, control);
  }

  function renderStudioField() {
    const title = intl.formatMessage({ id: "studio" });
    const control = (
      <StudioSelect
        onSelect={(items) => onSetStudio(items.length > 0 ? items[0] : null)}
        values={studio ? [studio] : []}
      />
    );

    return renderField("studio_id", title, control);
  }

  function renderPerformersField() {
    const title = intl.formatMessage({ id: "performers" });
    const control = (
      <PerformerSelect isMulti onSelect={onSetPerformers} values={performers} />
    );

    return renderField("performer_ids", title, control, fullWidthProps);
  }

  function onSetMovieEntries(input: IMovieEntry[]) {
    setMovies(input.map((m) => m.movie));

    const newMovies = input.map((m) => ({
      movie_id: m.movie.id,
      scene_index: m.scene_index,
    }));

    formik.setFieldValue("movies", newMovies);
  }

  function renderMoviesField() {
    const title = intl.formatMessage({ id: "movies" });
    const control = (
      <SceneMovieTable value={movieEntries} onUpdate={onSetMovieEntries} />
    );

    return renderField("movies", title, control, fullWidthProps);
  }

  function renderTagsField() {
    const title = intl.formatMessage({ id: "tags" });
    const control = (
      <TagSelect
        isMulti
        onSelect={onSetTags}
        values={tags}
        hoverPlacement="right"
      />
    );

    return renderField("tag_ids", title, control, fullWidthProps);
  }

  function renderDetailsField() {
    const props = {
      labelProps: {
        column: true,
        sm: 3,
        lg: 12,
      },
      fieldProps: {
        sm: 9,
        lg: 12,
      },
    };

    return renderInputField("details", "textarea", "details", props);
  }

  return (
    <div id="scene-edit-details">
      <Prompt
        when={formik.dirty}
        message={intl.formatMessage({ id: "dialogs.unsaved_changes" })}
      />

      {renderScrapeQueryModal()}
      {maybeRenderScrapeDialog()}
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Row className="form-container edit-buttons-container px-3 pt-3">
          <div className="edit-buttons mb-3 pl-0">
            <Button
              className="edit-button"
              variant="primary"
              disabled={
                (!isNew && !formik.dirty) || !isEqual(formik.errors, {})
              }
              onClick={() => formik.submitForm()}
            >
              <FormattedMessage id="actions.save" />
            </Button>
            {onDelete && (
              <Button
                className="edit-button"
                variant="danger"
                onClick={() => onDelete()}
              >
                <FormattedMessage id="actions.delete" />
              </Button>
            )}
          </div>
          {!isNew && (
            <div className="ml-auto text-right d-flex">
              <ButtonGroup className="scraper-group">
                {renderScraperMenu()}
                {renderScrapeQueryMenu()}
              </ButtonGroup>
            </div>
          )}
        </Row>
        <Row className="form-container px-3">
          <Col lg={7} xl={12}>
            {renderInputField("title")}
            {renderInputField("code", "text", "scene_code")}

            {renderURLListField("urls", onScrapeSceneURL, urlScrapable)}

            {renderDateField("date")}
            {renderInputField("director")}

            {renderGalleriesField()}
            {renderStudioField()}
            {renderPerformersField()}
            {renderMoviesField()}
            {renderTagsField()}

            {renderStashIDsField(
              "stash_ids",
              "scenes",
              "stash_ids",
              fullWidthProps
            )}
          </Col>
          <Col lg={5} xl={12}>
            {renderDetailsField()}
            <Form.Group controlId="cover_image">
              <Form.Label>
                <FormattedMessage id="cover_image" />
              </Form.Label>
              {image}
              <ImageInput
                isEditing
                onImageChange={onCoverImageChange}
                onImageURL={onImageLoad}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SceneEditPanel;
