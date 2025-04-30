import type { ReactElement } from "react";
import { Tooltip } from "primereact/tooltip";

export type ProjectLink = {
  type: "github" | "discord" | "support" | "website" | "download";
  url: string;
  label: string;
  icon: string;
};

export type ProjectImage = {
  alt: string;
  url: string;
  height: number;
  width: number;
};

export class Project {
  id: string;
  name: string;
  icon: string;
  unfinished: boolean;
  maintained: boolean;
  subtitle: string;
  description: ReactElement;
  image: ProjectImage;
  links: ProjectLink[];

  constructor(
    id: string,
    name: string,
    icon: string,
    subtitle: string,
    description: ReactElement,
    image: ProjectImage,
    links: ProjectLink[],
    unfinished: boolean,
    maintained: boolean,
  ) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.subtitle = subtitle;
    this.description = description;
    this.image = image;
    this.links = links;
    this.unfinished = unfinished;
    this.maintained = maintained;
  }

  // Utility methods
  getHeader() {
    return (
      <img
        alt={this.image.alt}
        src={this.image.url}
        height={this.image.height}
        width={this.image.width}
      />
    );
  }
  openURL(url: string) {
    if (url) window.open(url);
  }
  formatTitle() {
    const unfinishedIcon = "pi pi-hammer ";
    return (
      <>
        {this.name} <span className={`${this.icon}`} />
        {this.unfinished && (
          <>
            <Tooltip target=".unfinished-project-icon" />
            <span
              className={`${unfinishedIcon} unfinished-project-icon relative ml-[-10px]`}
              data-pr-tooltip="This is being actively developed"
              style={{ marginLeft: "0.5rem", cursor: "pointer" }}
            />
          </>
        )}
      </>
    );
  }
}
