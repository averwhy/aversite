import { createLazyFileRoute } from "@tanstack/react-router";
import ImgThatCanHandleItsOwnErrors from "../utils/ImgWithFallback";
export const Route = createLazyFileRoute("/music")({
  component: Music,
});

function Music() {
  return (
    <>
      <div className="flex animate-fade items-center justify-center p-1 md:h-screen">
        <div className="grid grid-cols-1 place-items-center items-center gap-3 gap-x-7 gap-y-7 p-12 text-white leading-6 lg:grid-cols-2 md:pt-32 lg:mt-0">
          <ImgThatCanHandleItsOwnErrors
            src="https://cdn.averwhy.net/IMG_8064.png"
            alt="Young adult standing playing electric bass on a black and white Fender Squire Precision Bass"
            width="270"
            height="360"
          />
          <p>
            Music has been a huge part of my life. I've always enjoyed listening
            to so many different genres, such as EDM in elementary school, emo
            rap/pop in Middle & High school, and alternative rock, shoegaze &
            more today. What first got me into music was when I played Minecraft
            for the first time- it's soundtrack, by{" "}
            <span className="italic">C418</span>, captivated me. The whole
            reason my parents gave me my first phone was so I could listen to
            his music. I still listen to it today.
            <br />
            <br />
            In elementary school, my parents signed me up for guitar lessons.
            Unfortunately, it didn't really stick. It wasn't until the summer of
            2024 where I became drawn towards electric bass- primarily because
            of my love of <span className="italic">Radiohead</span>. Since then
            I've been taking lessons through my college and been having so much
            fun with learning it.
            <br />
            <br />I also have been producing some music in Ableton Live,
            including a song I am working on for my CIS-206 Digital Music class.
            Due to time constraints, and my focus on my{" "}
            <a
              href="https://averwhy.net/portfolio"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-700"
            >
              other projects
            </a>
            , I haven't been able to work on it as much as I want to. I hope to
            release my first song by the start of my senior year of college.
          </p>
        </div>
      </div>
    </>
  );
}
