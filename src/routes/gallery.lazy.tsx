import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/gallery')({
  component: Gallery,
})

function lotsOfPics(){
  var picList = [];
  for (let i = 0; i < 50; i++){
    picList.push(
      <img src="https://scmapdb.wdfiles.com/local--resized-images/wad:developer-textures/dev_256_or_032x.jpg/small.jpg" alt={"Testing pic"}/>
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