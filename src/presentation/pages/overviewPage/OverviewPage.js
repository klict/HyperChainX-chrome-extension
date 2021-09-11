import "./OverviewPage.css";

import platforms from "../../../config/platforms";
import { ListGroup } from "react-bootstrap";

function OverviewPage() {
  const renderedPlatformList = renderPlatformList();
  return (
    <div>
      <ListGroup as="ul" className="list-group-flush">
        {renderedPlatformList}
      </ListGroup>
    </div>
  );
}

function renderPlatformList() {
  const platformsListItems = [];

  for (let i = 0; i < platforms.length; i++) {
    const platform = platforms[i];
    let logoImgElement = undefined;
    let titleElement = undefined;

    if (platform.config.render.logo) {
      logoImgElement = (
        <img
          src={loadImage(platform.logo)}
          alt={"logo of " + platform.title}
          className="logo"
        />
      );
    }

    if (platform.config.render.title) {
      titleElement = <span className="title">{platform.title}</span>;
    }

    platformsListItems.push(
      <a
        key={i}
        href={platform.link}
        className="text-decoration-none"
        target="_blank"
        rel="noreferrer"
      >
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-center list-group-item"
        >
          {logoImgElement}
          {titleElement}
        </ListGroup.Item>
      </a>
    );
  }
  return platformsListItems;
}

function loadImage(imageName) {
  return require(`../../../resource/platforms/${imageName}`).default;
}

export default OverviewPage;
