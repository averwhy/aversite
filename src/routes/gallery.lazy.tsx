import { createLazyFileRoute } from "@tanstack/react-router";
import { RowsPhotoAlbum } from "react-photo-album";
import { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import "react-photo-album/rows.css";

import photos from "../photos";

export const Route = createLazyFileRoute("/gallery")({
  component: Gallery,
});

const toastErrorPT = {
  text: { className: "text-xs font-mono" },
  message: { className: "bg-slate-600" },
};

function Gallery() {
  const [errorDisplayed, setErrorDisplayed] = useState(false);
  const galleryErrorToast = useRef<Toast>(null);
  function galleryLoadError() {
    if (!errorDisplayed) {
      galleryErrorToast.current?.show({
        severity: "error",
        summary: "Gallery Error",
        detail:
          "One or more photos failed to load. this is probably cloudflare's fault",
        life: 30000,
      });
      setErrorDisplayed(true);
    }
  }
  return (
    <div className="animate-fade justify-center p-4">
      <Toast ref={galleryErrorToast} pt={toastErrorPT} />
      <p className="pb-4 text-gray-500 text-xs">
        these are all unedited photos taken by me. © avery b 2024.
      </p>
      <RowsPhotoAlbum
        photos={photos}
        componentsProps={{
          image: {
            onError: galleryLoadError,
          },
        }}
      />
    </div>
  );
}
