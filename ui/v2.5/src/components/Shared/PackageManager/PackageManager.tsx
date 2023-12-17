import { Button, Form, Table } from "react-bootstrap";
import React, { useState, useMemo, useEffect } from "react";
import { FormattedMessage, IntlShape, useIntl } from "react-intl";
import * as GQL from "src/core/generated-graphql";
import { Icon } from "../Icon";
import {
  faChevronDown,
  faChevronRight,
  faRotate,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { SettingModal } from "src/components/Settings/Inputs";
import * as yup from "yup";
import { FormikErrors, yupToFormErrors } from "formik";
import { AlertModal } from "../Alert";
import { LoadingIndicator } from "../LoadingIndicator";
import { ApolloError } from "@apollo/client";
import { ClearableInput } from "../ClearableInput";

function formatDate(intl: IntlShape, date: string | undefined | null) {
  if (!date) return;

  const d = new Date(date);

  return `${intl.formatDate(d, {
    timeZone: "utc",
  })} ${intl.formatTime(d, {
    timeZone: "utc",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  })}`;
}

interface IPackage {
  package_id: string;
  name: string;
}

function filterPackages<T extends IPackage>(packages: T[], filter: string) {
  if (!filter) return packages;

  return packages.filter((pkg) => {
    return (
      pkg.name.toLowerCase().includes(filter.toLowerCase()) ||
      pkg.package_id.toLowerCase().includes(filter.toLowerCase())
    );
  });
}

export type InstalledPackage = Omit<GQL.Package, "requires">;

const InstalledPackageRow: React.FC<{
  loading?: boolean;
  pkg: InstalledPackage;
  selected: boolean;
  togglePackage: () => void;
  updatesLoaded: boolean;
}> = ({ loading, pkg, selected, togglePackage, updatesLoaded }) => {
  const intl = useIntl();

  function rowClassname() {
    if (pkg.upgrade?.version) {
      return "package-update-available";
    }
  }

  return (
    <tr className={rowClassname()}>
      <td>
        <Form.Check
          checked={selected}
          disabled={loading}
          onChange={() => togglePackage()}
        />
      </td>
      <td>
        <span className="package-name">{pkg.name}</span>
        <span className="package-id">{pkg.package_id}</span>
      </td>
      <td>
        <span className="package-version">{pkg.version}</span>
        <span className="package-date">{formatDate(intl, pkg.date)}</span>
      </td>
      {updatesLoaded ? (
        <td>
          <span className="package-version">{pkg.upgrade?.version}</span>
          <span className="package-date">
            {formatDate(intl, pkg.upgrade?.date)}
          </span>
        </td>
      ) : undefined}
    </tr>
  );
};

const InstalledPackagesList: React.FC<{
  filter: string;
  loading?: boolean;
  updatesLoaded: boolean;
  packages: InstalledPackage[];
  checkedPackages: InstalledPackage[];
  setCheckedPackages: React.Dispatch<React.SetStateAction<InstalledPackage[]>>;
}> = ({
  filter,
  packages,
  checkedPackages,
  setCheckedPackages,
  updatesLoaded,
  loading,
}) => {
  const checkedMap = useMemo(() => {
    const map: Record<string, boolean> = {};
    checkedPackages.forEach((pkg) => {
      map[`${pkg.sourceURL}-${pkg.package_id}`] = true;
    });
    return map;
  }, [checkedPackages]);

  const allChecked = useMemo(() => {
    return packages.length > 0 && checkedPackages.length === packages.length;
  }, [checkedPackages, packages]);

  const filteredPackages = useMemo(() => {
    return filterPackages(packages, filter);
  }, [filter, packages]);

  function toggleAllChecked() {
    setCheckedPackages(allChecked ? [] : packages.slice());
  }

  function togglePackage(pkg: InstalledPackage) {
    if (loading) return;

    setCheckedPackages((prev) => {
      if (prev.includes(pkg)) {
        return prev.filter((n) => n.package_id !== pkg.package_id);
      } else {
        return prev.concat(pkg);
      }
    });
  }

  return (
    <div className="package-manager-table-container">
      <Table>
        <thead>
          <tr>
            <th className="button-cell">
              <Form.Check
                checked={allChecked ?? false}
                onChange={toggleAllChecked}
                disabled={loading && packages.length > 0}
              />
            </th>
            <th>
              <FormattedMessage id="package_manager.package" />
            </th>
            <th>
              <FormattedMessage id="package_manager.installed_version" />
            </th>
            {updatesLoaded ? (
              <th>
                <FormattedMessage id="package_manager.latest_version" />
              </th>
            ) : undefined}
          </tr>
        </thead>
        <tbody>
          {filteredPackages.length === 0 ? (
            <tr className="package-manager-no-results">
              <td colSpan={updatesLoaded ? 4 : 3}>
                <FormattedMessage id="package_manager.no_packages" />
              </td>
            </tr>
          ) : (
            filteredPackages.map((pkg) => (
              <InstalledPackageRow
                key={`${pkg.sourceURL}-${pkg.package_id}`}
                loading={loading}
                pkg={pkg}
                selected={
                  checkedMap[`${pkg.sourceURL}-${pkg.package_id}`] ?? false
                }
                togglePackage={() => togglePackage(pkg)}
                updatesLoaded={updatesLoaded}
              />
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

const InstalledPackagesToolbar: React.FC<{
  loading?: boolean;
  filter: string;
  setFilter: (s: string) => void;
  checkedPackages: InstalledPackage[];
  onCheckForUpdates: () => void;
  onUpdatePackages: () => void;
  onUninstallPackages: () => void;
}> = ({
  loading,
  checkedPackages,
  onCheckForUpdates,
  onUpdatePackages,
  onUninstallPackages,
  filter,
  setFilter,
}) => {
  const intl = useIntl();
  return (
    <div className="package-manager-toolbar">
      <div>
        <ClearableInput
          placeholder={`${intl.formatMessage({ id: "filter" })}...`}
          value={filter}
          setValue={(v) => setFilter(v)}
        />
      </div>
      <div>
        <Button
          variant="primary"
          onClick={() => onCheckForUpdates()}
          disabled={loading}
        >
          <FormattedMessage id="package_manager.check_for_updates" />
        </Button>
        <Button
          variant="primary"
          disabled={!checkedPackages.length || loading}
          onClick={() => onUpdatePackages()}
        >
          <FormattedMessage id="package_manager.update" />
        </Button>
        <Button
          variant="danger"
          disabled={!checkedPackages.length || loading}
          onClick={() => onUninstallPackages()}
        >
          <FormattedMessage id="package_manager.uninstall" />
        </Button>
      </div>
    </div>
  );
};

export const InstalledPackages: React.FC<{
  loading?: boolean;
  packages: InstalledPackage[];
  updatesLoaded: boolean;
  onCheckForUpdates: () => void;
  onUpdatePackages: (packages: InstalledPackage[]) => void;
  onUninstallPackages: (packages: InstalledPackage[]) => void;
}> = ({
  packages,
  onCheckForUpdates,
  updatesLoaded,
  onUpdatePackages,
  onUninstallPackages,
  loading,
}) => {
  const [checkedPackages, setCheckedPackages] = useState<InstalledPackage[]>(
    []
  );
  const [filter, setFilter] = useState("");
  const [uninstalling, setUninstalling] = useState(false);

  const filteredPackages = useMemo(() => {
    return filterPackages(checkedPackages, filter);
  }, [checkedPackages, filter]);

  useEffect(() => {
    setCheckedPackages((prev) => {
      const newVal = prev.filter((pkg) =>
        packages.find((p) => p.package_id === pkg.package_id)
      );
      if (newVal.length !== prev.length) {
        return newVal;
      }

      return prev;
    });
  }, [checkedPackages, packages]);

  function confirmUninstall() {
    onUninstallPackages(filteredPackages);
    setUninstalling(false);
  }

  return (
    <>
      <AlertModal
        show={!!uninstalling}
        text={
          <FormattedMessage
            id="package_manager.confirm_uninstall"
            values={{ number: filteredPackages.length }}
          />
        }
        onConfirm={() => confirmUninstall()}
        onCancel={() => setUninstalling(false)}
      />
      <div className="installed-packages">
        <InstalledPackagesToolbar
          filter={filter}
          setFilter={(f) => setFilter(f)}
          loading={loading}
          checkedPackages={filteredPackages}
          onCheckForUpdates={onCheckForUpdates}
          onUpdatePackages={() => onUpdatePackages(filteredPackages)}
          onUninstallPackages={() => setUninstalling(true)}
        />
        <InstalledPackagesList
          filter={filter}
          loading={loading}
          packages={packages}
          // use original checked packages so that check boxes are not affected by filter
          checkedPackages={checkedPackages}
          setCheckedPackages={setCheckedPackages}
          updatesLoaded={updatesLoaded}
        />
      </div>
    </>
  );
};

const AvailablePackagesToolbar: React.FC<{
  filter: string;
  setFilter: (s: string) => void;
  loading?: boolean;
  hasSelectedPackages: boolean;
  onInstallPackages: () => void;

  selectedOnly: boolean;
  setSelectedOnly: (v: boolean) => void;
}> = ({
  hasSelectedPackages,
  onInstallPackages,
  loading,
  filter,
  setFilter,
  selectedOnly,
  setSelectedOnly,
}) => {
  const intl = useIntl();

  const selectedOnlyId = !selectedOnly
    ? "package_manager.hide_unselected"
    : "package_manager.show_all";

  return (
    <div className="package-manager-toolbar">
      <div>
        <ClearableInput
          placeholder={`${intl.formatMessage({ id: "filter" })}...`}
          value={filter}
          setValue={(v) => setFilter(v)}
        />
        {hasSelectedPackages && (
          <Button
            size="sm"
            variant="primary"
            onClick={() => setSelectedOnly(!selectedOnly)}
          >
            <FormattedMessage id={selectedOnlyId} />
          </Button>
        )}
      </div>
      <div>
        <Button
          variant="primary"
          disabled={!hasSelectedPackages || loading}
          onClick={() => onInstallPackages()}
        >
          <FormattedMessage id="package_manager.install" />
        </Button>
      </div>
    </div>
  );
};

const EditSourceModal: React.FC<{
  sources: GQL.PackageSource[];
  existing?: GQL.PackageSource;
  onClose: (source?: GQL.PackageSource) => void;
}> = ({ existing, sources, onClose }) => {
  const intl = useIntl();

  const schema = yup.object({
    name: yup
      .string()
      .required()
      .test({
        name: "name",
        test: (value) => {
          if (!value) return true;
          const found = sources.find((s) => s.name === value);
          return !found || found === existing;
        },
        message: intl.formatMessage({ id: "validation.unique" }),
      }),
    url: yup
      .string()
      .required()
      .test({
        name: "url",
        test: (value) => {
          if (!value) return true;
          const found = sources.find((s) => s.url === value);
          return !found || found === existing;
        },
        message: intl.formatMessage({ id: "validation.unique" }),
      }),
    local_path: yup.string().nullable(),
  });

  type InputValues = yup.InferType<typeof schema>;
  function validate(
    v: GQL.PackageSource | undefined
  ): FormikErrors<InputValues> | undefined {
    try {
      schema.validateSync(v, { abortEarly: false });
    } catch (e) {
      return yupToFormErrors(e);
    }
  }

  const headerID = !!existing
    ? "package_manager.edit_source"
    : "package_manager.add_source";

  function renderField(
    v: GQL.PackageSource | undefined,
    setValue: (v: GQL.PackageSource | undefined) => void
  ) {
    const errors = validate(v);

    return (
      <>
        <Form.Group id="package-source-name">
          <h6>
            <FormattedMessage id="package_manager.source.name" />
          </h6>
          <Form.Control
            placeholder={intl.formatMessage({
              id: "package_manager.source.name",
            })}
            className="text-input"
            value={v?.name ?? ""}
            isInvalid={!!errors?.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue({ ...v!, name: e.currentTarget.value })
            }
          />
          <Form.Control.Feedback type="invalid">
            {errors?.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group id="package-source-url">
          <h6>
            <FormattedMessage id="package_manager.source.url" />
          </h6>
          <Form.Control
            placeholder={intl.formatMessage({
              id: "package_manager.source.url",
            })}
            className="text-input"
            value={v?.url}
            isInvalid={!!errors?.url}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue({ ...v!, url: e.currentTarget.value.trim() })
            }
          />
          <Form.Control.Feedback type="invalid">
            {errors?.url}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group id="package-source-name">
          <h6>
            <FormattedMessage id="package_manager.source.local_path.heading" />
          </h6>
          <Form.Control
            placeholder={intl.formatMessage({
              id: "package_manager.source.local_path.heading",
            })}
            className="text-input"
            value={v?.local_path ?? ""}
            isInvalid={!!errors?.local_path}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue({ ...v!, local_path: e.currentTarget.value })
            }
          />
          <div className="sub-heading">
            <FormattedMessage id="package_manager.source.local_path.description" />
          </div>
          <Form.Control.Feedback type="invalid">
            {errors?.local_path}
          </Form.Control.Feedback>
        </Form.Group>
      </>
    );
  }

  return (
    <SettingModal<GQL.PackageSource>
      headingID={headerID}
      value={existing ?? { url: "", name: "" }}
      validate={(v) => validate(v) === undefined}
      renderField={renderField}
      close={onClose}
    />
  );
};

export type RemotePackage = Omit<GQL.Package, "requires"> & {
  requires: { package_id: string }[];
};

const AvailablePackageRow: React.FC<{
  disabled?: boolean;
  pkg: RemotePackage;
  requiredBy: RemotePackage[];
  selected: boolean;
  togglePackage: () => void;
  renderDescription?: (pkg: RemotePackage) => React.ReactNode;
}> = ({
  disabled,
  pkg,
  requiredBy,
  selected,
  togglePackage,
  renderDescription = () => undefined,
}) => {
  const intl = useIntl();

  function renderRequiredBy() {
    if (!requiredBy.length) return;

    return (
      <div className="package-required-by">
        <FormattedMessage
          id="package_manager.required_by"
          values={{ packages: requiredBy.map((p) => p.name).join(", ") }}
        />
      </div>
    );
  }

  return (
    <tr key={pkg.package_id}>
      <td colSpan={2}>
        <Form.Check
          checked={selected ?? false}
          onChange={() => togglePackage()}
          disabled={disabled}
        />
      </td>
      <td className="package-cell" onClick={() => togglePackage()}>
        <span className="package-name">{pkg.name}</span>
        <span className="package-id">{pkg.package_id}</span>
      </td>
      <td>
        <span className="package-version">{pkg.version}</span>
        <span className="package-date">{formatDate(intl, pkg.date)}</span>
      </td>
      <td>
        {renderRequiredBy()}
        <div>{renderDescription(pkg)}</div>
      </td>
    </tr>
  );
};

const SourcePackagesList: React.FC<{
  filter: string;
  disabled?: boolean;
  source: GQL.PackageSource;
  loadSource: () => Promise<RemotePackage[]>;
  selectedOnly: boolean;
  selectedPackages: RemotePackage[];
  setSelectedPackages: React.Dispatch<React.SetStateAction<RemotePackage[]>>;
  renderDescription?: (pkg: RemotePackage) => React.ReactNode;
  editSource: () => void;
  deleteSource: () => void;
}> = ({
  source,
  loadSource,
  selectedOnly,
  selectedPackages,
  setSelectedPackages,
  disabled,
  filter,
  renderDescription,
  editSource,
  deleteSource,
}) => {
  const intl = useIntl();
  const [packages, setPackages] = useState<RemotePackage[]>();
  const [sourceOpen, setSourceOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState<string>();

  const checkedMap = useMemo(() => {
    const map: Record<string, boolean> = {};

    selectedPackages.forEach((pkg) => {
      map[pkg.package_id] = true;
    });
    return map;
  }, [selectedPackages]);

  const sourceChecked = useMemo(() => {
    return packages && Object.keys(checkedMap).length === packages.length;
  }, [checkedMap, packages]);

  const filteredPackages = useMemo(() => {
    if (!packages) return [];

    let ret = filterPackages(packages, filter);

    if (selectedOnly) {
      ret = ret.filter((pkg) => checkedMap[pkg.package_id]);
    }

    return ret;
  }, [filter, packages, selectedOnly, checkedMap]);

  function toggleSource() {
    if (disabled || packages === undefined) return;

    if (sourceChecked) {
      setSelectedPackages([]);
    } else {
      setSelectedPackages(packages.slice());
    }
  }

  async function loadPackages() {
    // need to load
    setLoading(true);
    setLoadError(undefined);
    try {
      const loaded = await loadSource();
      setPackages(loaded);
    } catch (e) {
      setLoadError((e as ApolloError).message);
    } finally {
      setLoading(false);
    }
  }

  function toggleSourceOpen() {
    if (packages === undefined) {
      loadPackages();
    }

    setSourceOpen((prev) => !prev);
  }

  function renderCollapseButton() {
    return (
      <Button
        variant="minimal"
        size="sm"
        className="package-collapse-button"
        onClick={() => toggleSourceOpen()}
      >
        <Icon icon={sourceOpen ? faChevronDown : faChevronRight} />
      </Button>
    );
  }

  const children = useMemo(() => {
    function getRequiredPackages(pkg: RemotePackage) {
      const ret: RemotePackage[] = [];
      pkg.requires.forEach((r) => {
        const found = packages?.find((p) => p.package_id === r.package_id);
        if (found && !ret.includes(found)) {
          ret.push(found);
          ret.push(...getRequiredPackages(found));
        }
      });
      return ret;
    }

    function togglePackage(pkg: RemotePackage) {
      if (disabled || !packages) return;

      setSelectedPackages((prev) => {
        const selected = prev.find((p) => p.package_id === pkg.package_id);

        if (selected) {
          return prev.filter((n) => n.package_id !== pkg.package_id);
        } else {
          // also include required packages
          const toAdd = [pkg];
          toAdd.push(...getRequiredPackages(pkg));

          return prev.concat(...toAdd);
        }
      });
    }

    return filteredPackages.map((pkg) => (
      <AvailablePackageRow
        key={pkg.package_id}
        disabled={disabled}
        pkg={pkg}
        requiredBy={selectedPackages.filter((p) => {
          return p.requires.find((r) => r.package_id === pkg.package_id);
        })}
        selected={checkedMap[pkg.package_id] ?? false}
        togglePackage={() => togglePackage(pkg)}
        renderDescription={renderDescription}
      />
    ));
  }, [
    filteredPackages,
    disabled,
    checkedMap,
    selectedPackages,
    setSelectedPackages,
    packages,
    renderDescription,
  ]);

  return (
    <>
      <tr key={source.url} className="package-source">
        <td>
          {packages !== undefined ? (
            <Form.Check
              checked={sourceChecked ?? false}
              onChange={() => toggleSource()}
              disabled={disabled}
            />
          ) : undefined}
        </td>
        <td>{renderCollapseButton()}</td>
        <td colSpan={2} onClick={() => toggleSourceOpen()}>
          <span>{source.name ?? source.url}</span>
        </td>
        <td className="source-controls">
          <Button
            size="sm"
            variant="primary"
            title={intl.formatMessage({ id: "actions.edit" })}
            onClick={() => editSource()}
          >
            <FormattedMessage id="actions.edit" />
          </Button>
          <Button
            size="sm"
            variant="danger"
            title={intl.formatMessage({ id: "actions.delete" })}
            onClick={() => deleteSource()}
          >
            <FormattedMessage id="actions.delete" />
          </Button>
        </td>
      </tr>
      {loading ? (
        <tr>
          <td colSpan={2}></td>
          <td colSpan={3}>
            <LoadingIndicator inline small />
          </td>
        </tr>
      ) : undefined}
      {loadError ? (
        <tr>
          <td colSpan={2}></td>
          <td colSpan={3} className="source-error">
            <Icon icon={faWarning} />
            <span>{loadError}</span>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => loadPackages()}
              title={intl.formatMessage({ id: "actions.reload" })}
            >
              <Icon icon={faRotate} />
            </Button>
          </td>
        </tr>
      ) : undefined}
      {sourceOpen && !loading && children}
    </>
  );
};

const AvailablePackagesList: React.FC<{
  filter: string;
  loading?: boolean;
  sources: GQL.PackageSource[];
  renderDescription?: (pkg: RemotePackage) => React.ReactNode;
  loadSource: (source: string) => Promise<RemotePackage[]>;
  selectedPackages: Record<string, RemotePackage[]>; // map of source url to selected packages
  setSelectedPackages: React.Dispatch<
    React.SetStateAction<Record<string, RemotePackage[]>>
  >;
  selectedOnly: boolean;
  addSource: (src: GQL.PackageSource) => void;
  editSource: (existing: GQL.PackageSource, changed: GQL.PackageSource) => void;
  deleteSource: (source: GQL.PackageSource) => void;
}> = ({
  sources,
  loadSource,
  selectedPackages,
  setSelectedPackages,
  loading,
  filter,
  renderDescription,
  selectedOnly,
  addSource,
  editSource,
  deleteSource,
}) => {
  const [deletingSource, setDeletingSource] = useState<GQL.PackageSource>();
  const [editingSource, setEditingSource] = useState<GQL.PackageSource>();
  const [addingSource, setAddingSource] = useState(false);

  function onDeleteSource() {
    if (!deletingSource) return;

    deleteSource(deletingSource);
    setDeletingSource(undefined);
  }

  function setSelectedSourcePackages(
    src: GQL.PackageSource,
    v: RemotePackage[] | ((prevState: RemotePackage[]) => RemotePackage[])
  ) {
    setSelectedPackages((prev) => {
      const existing = prev[src.url] ?? [];
      const next = typeof v === "function" ? v(existing) : v;

      return {
        ...prev,
        [src.url]: next,
      };
    });
  }

  return (
    <>
      <AlertModal
        show={!!deletingSource}
        text={
          <FormattedMessage
            id="package_manager.confirm_delete_source"
            values={{ name: deletingSource?.name, url: deletingSource?.url }}
          />
        }
        onConfirm={() => onDeleteSource()}
        onCancel={() => setDeletingSource(undefined)}
      />

      {editingSource || addingSource ? (
        <EditSourceModal
          sources={sources}
          existing={editingSource}
          onClose={(v) => {
            if (v) {
              if (addingSource) addSource(v);
              else if (editingSource) editSource(editingSource, v);
            }
            setEditingSource(undefined);
            setAddingSource(false);
          }}
        />
      ) : undefined}

      <div className="package-manager-table-container">
        <Table>
          <thead>
            <tr>
              <th className="button-cell"></th>
              <th className="button-cell"></th>
              <th>
                <FormattedMessage id="package_manager.package" />
              </th>
              <th>
                <FormattedMessage id="package_manager.version" />
              </th>
              <th>
                <FormattedMessage id="package_manager.description" />
              </th>
            </tr>
          </thead>
          <tbody>
            {sources.length === 0 ? (
              <tr className="package-manager-no-results">
                <td colSpan={5}>
                  <FormattedMessage id="package_manager.no_sources" />
                  <br />
                  <Button
                    size="sm"
                    variant="success"
                    onClick={() => setAddingSource(true)}
                  >
                    <FormattedMessage id="package_manager.add_source" />
                  </Button>
                </td>
              </tr>
            ) : (
              sources.map((src) => (
                <SourcePackagesList
                  key={src.url}
                  filter={filter}
                  disabled={loading}
                  source={src}
                  renderDescription={renderDescription}
                  loadSource={() => loadSource(src.url)}
                  selectedOnly={selectedOnly}
                  selectedPackages={selectedPackages[src.url] ?? []}
                  setSelectedPackages={(v) => setSelectedSourcePackages(src, v)}
                  editSource={() => setEditingSource(src)}
                  deleteSource={() => setDeletingSource(src)}
                />
              ))
            )}
            {sources.length > 0 ? (
              <tr className="package-source">
                <td colSpan={2}></td>
                <td colSpan={3} onClick={() => setAddingSource(true)}>
                  <Button size="sm" variant="success">
                    <FormattedMessage id="package_manager.add_source" />
                  </Button>
                </td>
              </tr>
            ) : undefined}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export const AvailablePackages: React.FC<{
  loading?: boolean;
  sources: GQL.PackageSource[];
  renderDescription?: (pkg: RemotePackage) => React.ReactNode;
  loadSource: (source: string) => Promise<RemotePackage[]>;
  onInstallPackages: (packages: GQL.PackageSpecInput[]) => void;
  addSource: (src: GQL.PackageSource) => void;
  editSource: (existing: GQL.PackageSource, changed: GQL.PackageSource) => void;
  deleteSource: (source: GQL.PackageSource) => void;
}> = ({
  sources,
  loadSource,
  onInstallPackages,
  loading,
  renderDescription,
  addSource,
  editSource,
  deleteSource,
}) => {
  const [checkedPackages, setCheckedPackages] = useState<
    Record<string, RemotePackage[]>
  >({});
  const [filter, setFilter] = useState("");
  const [selectedOnly, setSelectedOnly] = useState(false);

  const hasPackagesSelected = useMemo(() => {
    return Object.values(checkedPackages).some((s) => s.length > 0);
  }, [checkedPackages]);

  // if no packages are selected, set selected only to false
  useEffect(() => {
    if (!hasPackagesSelected) {
      setSelectedOnly(false);
    }
  }, [hasPackagesSelected]);

  function toPackageSpecInput(): GQL.PackageSpecInput[] {
    const ret: GQL.PackageSpecInput[] = [];
    Object.keys(checkedPackages).forEach((sourceURL) => {
      checkedPackages[sourceURL].forEach((pkg) => {
        ret.push({ id: pkg.package_id, sourceURL });
      });
    });
    return ret;
  }

  return (
    <div className="available-packages">
      <AvailablePackagesToolbar
        filter={filter}
        setFilter={(f) => setFilter(f)}
        loading={loading}
        hasSelectedPackages={hasPackagesSelected}
        onInstallPackages={() => onInstallPackages(toPackageSpecInput())}
        selectedOnly={selectedOnly}
        setSelectedOnly={(v) => setSelectedOnly(v)}
      />
      <AvailablePackagesList
        filter={filter}
        loading={loading}
        sources={sources}
        renderDescription={renderDescription}
        loadSource={loadSource}
        selectedOnly={selectedOnly}
        selectedPackages={checkedPackages}
        setSelectedPackages={setCheckedPackages}
        addSource={addSource}
        editSource={editSource}
        deleteSource={deleteSource}
      />
    </div>
  );
};
