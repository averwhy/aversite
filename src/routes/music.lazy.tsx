import { createLazyFileRoute } from "@tanstack/react-router";
import ImgThatCanHandleItsOwnErrors from "../utils/ImgWithFallback";
export const Route = createLazyFileRoute("/music")({
  component: Music,
});

function Music() {
  return (
    <>
      <div className="flex h-screen animate-fade items-center justify-center p-1">
        <div className="grid grid-cols-1 place-items-center items-center gap-3 gap-x-7 gap-y-7 p-12 text-white leading-6 lg:grid-cols-2 lg:p-32">
          <ImgThatCanHandleItsOwnErrors
            src="https://cdn.averwhy.net/IMG_8064.png"
            alt="Young adult standing playing electric bass on a black and white Fender Squire Precision Bass"
          />
          <p>
            Music has been a huge part of a my life. I always enjoyed listening
            to all kinds. What first got me into music was when I played
            Minecraft for the first time- it's soundtrack, by{" "}
            <span className="italic">C418</span>, captivated me. The whole
            reason my parents gave me my first phone was so I could listen to
            music.
            <br />
            <br />
            In elementary school, my parents signed me up for guitar lessons.
            Unfortunately, it didn't really stick. It wasn't until the summer of
            2024 where I became drawn towards electric bass- primarily because
            of my love of <span className="italic">Radiohead</span>. Since then
            I've been taking lessons through my college and been having so much
            fun with this new hobby.
            <br />
            <br />I also have been producing some music in Ableton Live,
            including a song I am working on for my CIS-206 Digital Music class.
            When i finish and release it, i'll have it here!
          </p>
        </div>
      </div>
    </>
  );
}
