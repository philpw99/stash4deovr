import React, { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Prompt } from "react-router-dom";
import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  Col,
  Row,
} from "react-bootstrap";
import Mousetrap from "mousetrap";
import * as GQL from "src/core/generated-graphql";
import * as yup from "yup";
import {
  queryScrapeGallery,
  queryScrapeGalleryURL,
  useListGalleryScrapers,
  mutateReloadScrapers,
} from "src/core/StashService";
import {
  TagSelect,
  SceneSelect,
  StudioSelect,
} from "src/components/Shared/Select";
import { Icon } from "src/components/Shared/Icon";
import { LoadingIndicator } from "src/components/Shared/LoadingIndicator";
import { useToast } from "src/hooks/Toast";
import { useFormik } from "formik";
import { GalleryScrapeDialog } from "./GalleryScrapeDialog";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { galleryTitle } from "src/core/galleries";
import { useRatingKeybinds } from "src/hooks/keybinds";
import { ConfigurationContext } from "src/hooks/Config";
import isEqual from "lodash-es/isEqual";
import { handleUnsavedChanges } from "src/utils/navigation";
import {
  Performer,
  PerformerSelect,
} from "src/components/Performers/PerformerSelect";
import {
  yupDateString,
  yupFormikValidate,
  yupUniqueStringList,
} from "src/utils/yup";
import { formikUtils } from "src/utils/form";

interface IProps {
  gallery: Partial<GQL.GalleryDataFragment>;
  isVisible: boolean;
  onSubmit: (input: GQL.GalleryCreateInput) => Promise<void>;
  onDelete: () => void;
}

export const GalleryEditPanel: React.FC<IProps> = ({
  gallery,
  isVisible,
  onSubmit,
  onDelete,
}) => {
  const intl = useIntl();
  const Toast = useToast();
  const [scenes, setScenes] = useState<{ id: string; title: string }[]>(
    (gallery?.scenes ?? []).map((s) => ({
      id: s.id,
      title: galleryTitle(s),
    }))
  );

  const [performers, setPerformers] = useState<Performer[]>([]);

  const isNew = gallery.id === undefined;
  const { configuration: stashConfig } = React.useContext(ConfigurationContext);

  const Scrapers = useListGalleryScrapers();
  const [queryableScrapers, setQueryableScrapers] = useState<GQL.Scraper[]>([]);

  const [scrapedGallery, setScrapedGallery] =
    useState<GQL.ScrapedGallery | null>();

  // Network state
  const [isLoading, setIsLoading] = useState(false);

  const titleRequired =
    isNew || (gallery?.files?.length === 0 && !gallery?.folder);

  const schema = yup.object({
    title: titleRequired ? yup.string().required() : yup.string().ensure(),
    code: yup.string().ensure(),
    urls: yupUniqueStringList(intl),
    date: yupDateString(intl),
    photographer: yup.string().ensure(),
    rating100: yup.number().integer().nullable().defined(),
    studio_id: yup.string().required().nullable(),
    performer_ids: yup.array(yup.string().required()).defined(),
    tag_ids: yup.array(yup.string().required()).defined(),
    scene_ids: yup.array(yup.string().required()).defined(),
    details: yup.string().ensure(),
  });

  const initialValues = {
    title: gallery?.title ?? "",
    code: gallery?.code ?? "",
    urls: gallery?.urls ?? [],
    date: gallery?.date ?? "",
    photographer: gallery?.photographer ?? "",
    rating100: gallery?.rating100 ?? null,
    studio_id: gallery?.studio?.id ?? null,
    performer_ids: (gallery?.performers ?? []).map((p) => p.id),
    tag_ids: (gallery?.tags ?? []).map((t) => t.id),
    scene_ids: (gallery?.scenes ?? []).map((s) => s.id),
    details: gallery?.details ?? "",
  };

  type InputValues = yup.InferType<typeof schema>;

  const formik = useFormik<InputValues>({
    initialValues,
    enableReinitialize: true,
    validate: yupFormikValidate(schema),
    onSubmit: (values) => onSave(schema.cast(values)),
  });

  function setRating(v: number) {
    formik.setFieldValue("rating100", v);
  }

  interface ISceneSelectValue {
    id: string;
    title: string;
  }

  function onSetScenes(items: ISceneSelectValue[]) {
    setScenes(items);
    formik.setFieldValue(
      "scene_ids",
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

  useRatingKeybinds(
    isVisible,
    stashConfig?.ui?.ratingSystemOptions?.type,
    setRating
  );

  useEffect(() => {
    setPerformers(gallery.performers ?? []);
  }, [gallery.performers]);

  useEffect(() => {
    if (isVisible) {
      Mousetrap.bind("s s", () => {
        if (formik.dirty) {
          formik.submitForm();
        }
      });
      Mousetrap.bind("d d", () => {
        onDelete();
      });

      return () => {
        Mousetrap.unbind("s s");
        Mousetrap.unbind("d d");
      };
    }
  });

  useEffect(() => {
    const newQueryableScrapers = (Scrapers?.data?.listScrapers ?? []).filter(
      (s) => s.gallery?.supported_scrapes.includes(GQL.ScrapeType.Fragment)
    );

    setQueryableScrapers(newQueryableScrapers);
  }, [Scrapers]);

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

  async function onScrapeClicked(scraper: GQL.Scraper) {
    if (!gallery || !gallery.id) return;

    setIsLoading(true);
    try {
      const result = await queryScrapeGallery(scraper.id, gallery.id);
      if (!result.data || !result.data.scrapeSingleGallery?.length) {
        Toast.success("No galleries found");
        return;
      }
      setScrapedGallery(result.data.scrapeSingleGallery[0]);
    } catch (e) {
      Toast.error(e);
    } finally {
      setIsLoading(false);
    }
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

  function onScrapeDialogClosed(data?: GQL.ScrapedGalleryDataFragment) {
    if (data) {
      updateGalleryFromScrapedGallery(data);
    }
    setScrapedGallery(undefined);
  }

  function maybeRenderScrapeDialog() {
    if (!scrapedGallery) {
      return;
    }

    const currentGallery = {
      id: gallery.id!,
      ...formik.values,
    };

    return (
      <GalleryScrapeDialog
        gallery={currentGallery}
        galleryPerformers={performers}
        scraped={scrapedGallery}
        onClose={(data) => {
          onScrapeDialogClosed(data);
        }}
      />
    );
  }

  function renderScraperMenu() {
    if (isNew) {
      return;
    }

    return (
      <DropdownButton
        className="d-inline-block"
        id="gallery-scrape"
        title={intl.formatMessage({ id: "actions.scrape_with" })}
      >
        {queryableScrapers.map((s) => (
          <Dropdown.Item key={s.name} onClick={() => onScrapeClicked(s)}>
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
      (s?.gallery?.urls ?? []).some((u) => scrapedUrl.includes(u))
    );
  }

  function updateGalleryFromScrapedGallery(
    galleryData: GQL.ScrapedGalleryDataFragment
  ) {
    if (galleryData.title) {
      formik.setFieldValue("title", galleryData.title);
    }

    if (galleryData.code) {
      formik.setFieldValue("code", galleryData.code);
    }

    if (galleryData.details) {
      formik.setFieldValue("details", galleryData.details);
    }

    if (galleryData.photographer) {
      formik.setFieldValue("photographer", galleryData.photographer);
    }

    if (galleryData.date) {
      formik.setFieldValue("date", galleryData.date);
    }

    if (galleryData.urls) {
      formik.setFieldValue("urls", galleryData.urls);
    }

    if (galleryData.studio?.stored_id) {
      formik.setFieldValue("studio_id", galleryData.studio.stored_id);
    }

    if (galleryData.performers?.length) {
      const idPerfs = galleryData.performers.filter((p) => {
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

    if (galleryData?.tags?.length) {
      const idTags = galleryData.tags.filter((t) => {
        return t.stored_id !== undefined && t.stored_id !== null;
      });

      if (idTags.length > 0) {
        const newIds = idTags.map((t) => t.stored_id);
        formik.setFieldValue("tag_ids", newIds as string[]);
      }
    }
  }

  async function onScrapeGalleryURL(url: string) {
    if (!url) {
      return;
    }
    setIsLoading(true);
    try {
      const result = await queryScrapeGalleryURL(url);
      if (!result || !result.data || !result.data.scrapeGalleryURL) {
        return;
      }
      setScrapedGallery(result.data.scrapeGalleryURL);
    } catch (e) {
      Toast.error(e);
    } finally {
      setIsLoading(false);
    }
  }

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
    renderRatingField,
    renderURLListField,
  } = formikUtils(intl, formik, splitProps);

  function renderScenesField() {
    const title = intl.formatMessage({ id: "scenes" });
    const control = (
      <SceneSelect
        selected={scenes}
        onSelect={(items) => onSetScenes(items)}
        isMulti
      />
    );

    return renderField("scene_ids", title, control);
  }

  function renderStudioField() {
    const title = intl.formatMessage({ id: "studio" });
    const control = (
      <StudioSelect
        onSelect={(items) =>
          formik.setFieldValue(
            "studio_id",
            items.length > 0 ? items[0]?.id : null
          )
        }
        ids={formik.values.studio_id ? [formik.values.studio_id] : []}
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

  function renderTagsField() {
    const title = intl.formatMessage({ id: "tags" });
    const control = (
      <TagSelect
        isMulti
        onSelect={(items) =>
          formik.setFieldValue(
            "tag_ids",
            items.map((item) => item.id)
          )
        }
        ids={formik.values.tag_ids}
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
    <div id="gallery-edit-details">
      <Prompt
        when={formik.dirty}
        message={handleUnsavedChanges(intl, "galleries", gallery?.id)}
      />

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
            <Button
              className="edit-button"
              variant="danger"
              onClick={() => onDelete()}
            >
              <FormattedMessage id="actions.delete" />
            </Button>
          </div>
          <div className="ml-auto text-right d-flex">{renderScraperMenu()}</div>
        </Row>
        <Row className="form-container px-3">
          <Col lg={7} xl={12}>
            {renderInputField("title")}
            {renderInputField("code", "text", "scene_code")}

            {renderURLListField("urls", onScrapeGalleryURL, urlScrapable)}

            {renderDateField("date")}
            {renderInputField("photographer")}
            {renderRatingField("rating100", "rating")}

            {renderScenesField()}
            {renderStudioField()}
            {renderPerformersField()}
            {renderTagsField()}
          </Col>
          <Col lg={5} xl={12}>
            {renderDetailsField()}
          </Col>
        </Row>
      </Form>
    </div>
  );
};
