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

  const { paths,files } = scene;
  const { path } = files[0];
  // Get file as the filename only
  // If path is undefined, file is empty string
  const file = path?.split('/').pop()?.split('\\').pop()??'';

  if (!paths || !paths.stream || (!isAndroid && !isAppleDevice && !alwaysShow))
    return <span />;

  const { stream } = paths;
  const title = objectTitle(scene);

  let url;
  const streamURL = new URL(stream);
  if (isAndroid) {
    const scheme = streamURL.protocol.slice(0, -1);
    streamURL.hash = `Intent;action=android.intent.action.VIEW;scheme=${scheme};type=video/mp4;S.title=${encodeURI(
      title
    )};end`;

    // #4401 - not allowed to set the protocol from a "special" protocol to a non-special protocol
    url = streamURL
      .toString()
      .replace(new RegExp(`^${streamURL.protocol}`), "intent:");
  } else if (isAppleDevice) {
    streamURL.host = "x-callback-url";
    streamURL.port = "";
    streamURL.pathname = "stream";
    streamURL.search = `url=${encodeURIComponent(stream)}`;

    // #4401 - not allowed to set the protocol from a "special" protocol to a non-special protocol
    url = streamURL
      .toString()
      .replace(new RegExp(`^${streamURL.protocol}`), "vlc-x-callback:");
  } else if (alwaysShow){ // added from here
    // In all other cases.
    url = stream + "/org/" + encodeURIComponent(file); // like http://192.168.1.10:9999/scene/123/stream/org/file.mp4
    // added end.
  }

  return (
    <Button
      className="minimal px-0 px-sm-2 pt-2"
      variant="secondary"
      title={intl.formatMessage({ id: "actions.open_in_external_player" })}
    >
      <a href={url}>
        Open Ext. &nbsp; &nbsp;
        <Icon icon={faExternalLinkAlt} color="white" />
      </a>
      &nbsp; &nbsp; &nbsp; &nbsp;
    </Button>
  );
};

export default ExternalPlayerButton;
