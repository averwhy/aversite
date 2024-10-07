import { createLazyFileRoute } from '@tanstack/react-router'
import { asyncFolderWalker } from 'async-folder-walker';
//import { useEffect, useState } from 'react';

export const Route = createLazyFileRoute('/gallery')({
  component: Gallery,
})

const walker = asyncFolderWalker(['.git', 'node_modules'])
  for await (const file of walker) {
  console.log(file) // logs the file path!
}

function Gallery() {
  //const [galleryPics, setGalleryPics] = useState<React.JSX.Element[]>([]);

  return (
    <div className="flex h-screen justify-center p-2 text-white">
      <div className="grid grid-cols-3 items-center gap-8 gap-x-96 pt-10">
          wip
      </div>
    </div>
  )
}