import { createLazyFileRoute } from '@tanstack/react-router'
import { asyncFolderWalker } from 'async-folder-walker';
import { useEffect, useState } from 'react';

export const Route = createLazyFileRoute('/gallery')({
  component: Gallery,
})

const getGalleryPics = async function(): Promise<React.JSX.Element[]>{
  const walker = asyncFolderWalker('gallery')
  // biome-ignore lint: shut UP about it being only used once
  let picList = [];
  for await (const file of walker) {
    if (file instanceof String){
      picList.push(
        // biome-ignore lint: i promise its okay to put 'image' in the alt text
        <img src={file.toString()} alt={"Gallery image"}/>
      )
    }
  }
  return picList;
}

function Gallery() {
  const [galleryPics, setGalleryPics] = useState([]);

  useEffect(() => {
    const fetchPics = async () => {
      const pics = await getGalleryPics();
      setGalleryPics(pics);
    };
    fetchPics();
  }, []);

  return (
    <div className="flex justify-center p-2 text-white">
      <div className="grid grid-cols-3 items-center gap-8 gap-x-96 pt-10">
          {galleryPics}
      </div>
    </div>
  )
}