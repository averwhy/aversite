import { createLazyFileRoute } from '@tanstack/react-router'
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import photos from "../photos";

export const Route = createLazyFileRoute('/gallery')({
  component: Gallery,
})

function Gallery() {
  
  return (
    <div className="justify-center p-2 text-white">
      <RowsPhotoAlbum photos={photos}/>
    </div>
  )
}