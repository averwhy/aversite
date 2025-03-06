import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import ParticleImage, {
  type ParticleOptions,
  Vector,
  forces,
  type ParticleForce,
} from "react-particle-image";
import { SpeedDial } from "primereact/speeddial";
import {
  FaLastfmSquare,
  FaGithub,
  FaSpotify,
  FaSteam,
  FaYoutube,
} from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import "primereact/resources/themes/lara-dark-indigo/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons

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

const items = [
  {
    icon: <FaBluesky size={30} className="hover:animate-pulse" />,
    command: bluesky,
    tooltip: "Bluesky (The new Twitter)",
  },
  {
    icon: <FaLastfmSquare size={30} className="hover:animate-pulse" />,
    command: lastfm,
    tooltip: "LastFM",
  },
  {
    icon: <FaGithub size={30} className="hover:animate-pulse" />,
    command: github,
    tooltip: "Github",
  },
  {
    icon: <FaYoutube size={30} className="hover:animate-pulse" />,
    command: youtube,
    tooltip: "Youtube",
  },
  {
    icon: <FaSpotify size={30} className="hover:animate-pulse" />,
    command: spotify,
    tooltip: "Spotify",
  },
  {
    icon: <FaSteam size={30} className="hover:animate-pulse" />,
    command: steam,
    tooltip: "Steam",
  },
];

const basicSpeedDialPT = {
  action: { className: "bg-slate-800" },
};

function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 700, height: 700 });
  
  // Update dimensions on mount and when window resizes
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;
        
        // Calculate size while maintaining aspect ratio
        const maxSize = Math.min(containerWidth, containerHeight, 700);
        
        setDimensions({
          width: maxSize,
          height: maxSize,
        });
      }
    };
    
    // Initial size calculation
    updateDimensions();
    
    // Handle resize events
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  return (
    <>
      <div className="flex items-center justify-center">
        <SpeedDial
          model={items}
          direction="left"
          type="semi-circle"
          showIcon="pi pi-plus"
          hideIcon="pi pi-times"
          buttonClassName="p-button-rounded p-button-outlined bg-slate-700 hover:bg-slate-500"
          style={{ top: "calc(50%)", right: 10 }}
          pt={basicSpeedDialPT}
        />
        <div className="mx-2 pt-4 font-bold text-white">
          <span>
            hey!
            <p className="mx-2 pb-5 text-center text-gray-400">
              welcome to my website. I'm avery, you can learn more about me <a href="/about" className="text-pretty text-blurple hover:text-new-blurple">here!</a><br/>
              check out the links above to see my portfolio, photography gallery, blog, and more!<br />
              <br />
              thanks for visiting :{">"}
            </p>
          </span>
        </div>
      </div>
      <div ref={containerRef} className="flex h-screen items-center justify-center">
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
          height={dimensions.height}
          width={dimensions.width}
        />
      </div>
    </>
  );
}
