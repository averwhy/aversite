import { createLazyFileRoute } from "@tanstack/react-router";
import ParticleImage, {
  type ParticleOptions,
  Vector,
  forces,
  type ParticleForce,
} from "react-particle-image";
import { Button } from "primereact/button";
import {
  FaLastfmSquare,
  FaGithub,
  FaSpotify,
  FaSteam,
  FaYoutube,
} from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

function lastfm() {
  window.open("https://www.last.fm/user/averwhy_");
}
function bluesky() {
  window.open("https://bsky.averwhy.net");
}
function github() {
  window.open("https://github.com/averwhy");
}
function spotify() {
  window.open("https://open.spotify.com/user/averwhy");
}
function steam() {
  window.open("https://steamcommunity.com/id/averwhy/");
}
function youtube() {
  window.open("https://www.youtube.com/@averwhy_");
}

export const Route = createLazyFileRoute("/")({
  component: Index,
});

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: () => "#61dafb",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 35,
  friction: () => 0.1,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const mouseForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 0.01);
};

const clickForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 35);
};

function Index() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="mx-2 pt-4 font-bold text-white">
          <span>
            hey!
            <p className="mx-2 pb-5 text-center text-gray-400">
              welcome in, feel free to browse around and learn some stuff about
              me
              <br />
              thanks for visiting :{">"}
            </p>
          </span>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-6 items-start gap-4">
              <Button label="" onClick={bluesky}>
                <FaBluesky size={60} className="hover:animate-pulse" />
              </Button>
              <Button label="" onClick={lastfm}>
                <FaLastfmSquare size={60} className="hover:animate-pulse" />
              </Button>
              <Button label="" onClick={github}>
                <FaGithub size={60} className="hover:animate-pulse" />
              </Button>
              <Button label="" onClick={youtube}>
                <FaYoutube size={60} className="hover:animate-pulse" />
              </Button>
              <Button label="" onClick={spotify}>
                <FaSpotify size={60} className="hover:animate-pulse" />
              </Button>
              <Button label="" onClick={steam}>
                <FaSteam size={60} className="hover:animate-pulse" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-screen items-center justify-center">
        <ParticleImage
          src={"/avry_transparent.png"}
          scale={3}
          creationDuration={1500}
          entropy={20}
          maxParticles={2500}
          particleOptions={particleOptions}
          mouseMoveForce={mouseForce}
          touchMoveForce={clickForce}
          mouseDownForce={clickForce}
          backgroundColor="#1e293b"
          height={700}
          width={700}
        />
      </div>
    </>
  );
}
