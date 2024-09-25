import { createLazyFileRoute } from '@tanstack/react-router'
import Imgix from 'react-imgix';

export const Route = createLazyFileRoute('/gallery')({
  component: Gallery,
})

function lotsOfPics(){
  var picList = [];
  for (let i = 0; i < 50; i++){
    picList.push(
      <Imgix src="https://scmapdb.wdfiles.com/local--resized-images/wad:developer-textures/dev_256_or_032x.jpg/small.jpg"></Imgix>
    )
  }
  return picList;
}

function Gallery() {
  return (
    <div className="p-2 text-white">
          {lotsOfPics()}
    </div>
  )
}