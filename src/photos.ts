import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string) {
  return `https://cdn.averwhy.net${encodeURIComponent(`/${asset}`)}`;
}

const photos = [
  {
    asset: "AVP_2048.JPG",
    width: 556,
    height: 835,
    alt: "Up close shot of colorful flowers",
  },
  {
    asset: "AVP_2188.png",
    width: 556,
    height: 835,
    alt: "A long exposure (~8s) shot of someones face with a fiberglass wand painting over it",
  },
  {
    asset: "AVP_2190.png",
    width: 556,
    height: 835,
    alt: "A long exposure (~8s) shot of someones face with a fiberglass wand painting over it",
  },
  {
    asset: "AVP_2205.png",
    width: 835,
    height: 556,
    alt: "A long exposure (~8s) shot of someones face with a fiberglass wand painting over it",
  },
  {
    asset: "image.jpg",
    width: 556,
    height: 835,
    alt: "A girl wearing a blue dress looking off to the left",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: assetLink(asset),
      alt,
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => ({
        src: assetLink(asset),
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    }) as Photo,
);

export default photos;