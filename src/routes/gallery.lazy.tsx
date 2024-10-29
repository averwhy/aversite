import { createLazyFileRoute } from "@tanstack/react-router";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import photos from "../photos";

export const Route = createLazyFileRoute("/gallery")({
  component: Gallery,
});

function Gallery() {
  console.log(photos);
  return (
    <div className="animate-fade justify-center p-4">
      <p className="pb-4 text-gray-500 text-xs">
        these are all unedited photos taken by me. © avery bertrand 2024.
      </p>
      <RowsPhotoAlbum photos={photos} />
    </div>
  );
}
