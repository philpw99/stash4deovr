import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button } from "react-bootstrap";
import { useIntl } from "react-intl";
import { Icon } from "src/components/Shared/Icon";
import { objectTitle } from "src/core/files";
import { SceneDataFragment } from "src/core/generated-graphql";

export interface IExternalPlayerButtonProps {
  scene: SceneDataFragment;
}

export const ExternalPlayerButton: React.FC<IExternalPlayerButtonProps> = ({
  scene,
}) => {
  const isAndroid = /(android)/i.test(navigator.userAgent);
  const isAppleDevice = /(ipod|iphone|ipad)/i.test(navigator.userAgent);
  const intl = useIntl();
  const alwaysShow = true; // Added

  const { paths } = scene;
  const { files } = scene; // added
  const { path } = files[0]; // added.
  let file = path?.split("\\").pop(); // like "file.mp4" or "file.mkv"
  if (file == undefined) file = "";

  if (!paths || !paths.stream || (!isAndroid && !isAppleDevice && !alwaysShow))
    // moded
    return <span />;

  const { stream } = paths;
  const title = objectTitle(scene);

  let url, url2;
  const streamURL = new URL(stream);
  if (isAndroid) {
    const scheme = streamURL.protocol.slice(0, -1);
    streamURL.hash = `Intent;action=android.intent.action.VIEW;scheme=${scheme};type=video/mp4;S.title=${encodeURI(
      title
    )};end`;
    streamURL.protocol = "intent";
    url = streamURL.toString();
  } else if (isAppleDevice) {
    streamURL.host = "x-callback-url";
    streamURL.port = "";
    streamURL.pathname = "stream";
    streamURL.search = `url=${encodeURIComponent(stream)}`;
    streamURL.protocol = "vlc-x-callback";
    url = streamURL.toString();
  } else if (alwaysShow) {
    // In all other cases.

    url = stream + "/org/" + encodeURIComponent(file.toString()); // like http://192.168.1.10:9999/scene/123/stream/org/file.mp4
    url2 = url; // for now. Need to fix it for PlayA
    streamURL.pathname = "/api/playa/v1/video/" + scene.id;
  }

  return (
    <Button
      className="minimal px-0 px-sm-2 pt-2"
      variant="secondary"
      title={intl.formatMessage({ id: "actions.open_in_external_player" })}
    >
      <a href={url2}>
        PlayA&nbsp;&nbsp;
        <Icon icon={faExternalLinkAlt} color="white" />
      </a>
      <a href={url}>
        DeoVR&nbsp;&nbsp;
        <Icon icon={faExternalLinkAlt} color="white" />
      </a>
    </Button>
  );
};

export default ExternalPlayerButton;
