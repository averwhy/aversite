import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string) {
  return `https://cdn.averwhy.net/${encodeURIComponent(`${asset}`)}`;
}

const photos = [
  {
    asset: "AVP_2049.JPG",
    width: 556,
    height: 835,
    alt: "Up close shot of colorful flowers",
  },
  {
    asset: "AVP_1894.JPG",
    width: 556,
    height: 835,
    alt: "A long exposure (~8s) shot of someones face with a fiberglass wand painting over it",
  },
  {
    asset: "AVP_2180.JPG",
    width: 556,
    height: 835,
    alt: "A long exposure (~10s) shot of fiber-optic brush",
  },
  {
    asset: "AVP_2190.JPG",
    width: 556,
    height: 835,
    alt: "A long exposure (~8s) shot of someones face with a fiberglass wand painting over it",
  },
  {
    asset: "AVP_2191.JPG",
    width: 556,
    height: 835,
    alt: "A long exposure (~8s) shot of someones face with a fiberglass wand painting over it",
  },
  {
    asset: "AVP_2192.JPG",
    width: 556,
    height: 835,
    alt: "A long exposure (~8s) shot of someones face with a fiberglass wand painting over it",
  },
  {
    asset: "AVP_2201.JPG",
    width: 835,
    height: 556,
    alt: "A long exposure (~8s) shot of someones face with a fiberglass wand painting over it",
  },
  {
    asset: "AVP_2206.JPG",
    width: 835,
    height: 556,
    alt: "A long exposure (~8s) shot of someones face with a fiberglass wand painting over it",
  },
  {
    asset: "AVP_2545.JPG",
    width: 835,
    height: 556,
    alt: "A long exposure (~10s) of a purple-ish nighttime sky caused by a solar storm",
  },
  {
    asset: "AVP_2548.JPG",
    width: 835,
    height: 556,
    alt: "A long exposure (~10s) of a purple-ish nighttime sky caused by a solar storm",
  },
  {
    asset: "AVP_2551.JPG",
    width: 835,
    height: 556,
    alt: "A long exposure (~10s) of a purple-ish nighttime sky caused by a solar storm",
  },
  {
    asset: "AVP_2561.JPG",
    width: 835,
    height: 556,
    alt: "A long exposure (~10s) of a purple-ish nighttime sky caused by a solar storm",
  },
  {
    asset: "AVP_2573.JPG",
    width: 835,
    height: 556,
    alt: "A long exposure (~10s) of a purple-ish nighttime sky caused by a solar storm",
  },
  {
    asset: "AVP_2577.JPG",
    width: 835,
    height: 556,
    alt: "A long exposure (~10s) of a purple-ish nighttime sky caused by a solar storm",
  },
  {
    asset: "AVP_2617.JPG",
    width: 835,
    height: 556,
    alt: "A long exposure (~10s) of a nighttime sky",
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