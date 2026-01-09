import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Project } from "../utils/Project";

export const Route = createLazyFileRoute("/portfolio")({
  component: Portfolio,
});

const ecoxGithubURL = "https://github.com/averwhy/EconomyX";
const ecoxInviteURL =
  "https://discord.com/api/oauth2/authorize?client_id=780480654277476352&permissions=0&scope=bot";
const ecoxSupportURL = "https://discord.gg/epQZEp933x";

const fishyGithubURL = "https://github.com/averwhy/fishypy-discord-game";
const fishyInviteURL =
  "https://discord.com/api/oauth2/authorize?client_id=708428058822180874&permissions=289856&scope=bot";
const fishySupportURL = "https://discord.gg/HSqevex";

const timSourceURL = "https://github.com/averwhy/TimBot";
const timServerURL = "https://discord.gg/snhuesports";

const aversiteSourceURL = "https://github.com/averwhy/aversite";

const scoutingSourceURL = "https://github.com/averwhy/Scouting2022";
const packupSourceURL = "https://github.com/orgs/PackUpApp/repositories";

const treasureSourceURL = "https://github.com/averwhy/treasure-dig-vr";
const treasureDownloadURL =
  "https://github.com/averwhy/treasure-dig-vr/releases";

const trackrSourceURL = "https://github.com/averwhy/trackr";
const trackrSupportURL = "https://discord.gg/kzZJ87WMEQ";

const penpointSourceURL = "https://github.com/averwhy/penpoint";

const basicCardPT = {
  subTitle: { className: "text-slate-300 font-light text-sm m-0 mb-1" },
  title: { className: "mb-1" },
  content: { className: "py-1" },
  footer: { className: "py-2 px-0 flex gap-3 place-content-center" },
  root: { className: "m-3 md:m-0" },
};

const economyx = new Project(
  "ecox",
  "EconomyX",
  "pi pi-discord",
  "python, discord.py, postgreSQL",
  <>
    <p className="font-normal text-xs lg:text-sm">
      EconomyX is a unique & simple economy game bot for Discord. This project
      began in 2020, starting out with just a few commands and a lightweight
      SQLite database. Today, it's come to have 6+ gambling commands{" "}
      <span className="text-slate-300 text-xs italic">
        (remember it's a virtual currency!)
      </span>
      , a stocks system, lottery, jobs system, and a treasure digging sim coming
      soon.
    </p>
    <p>EconomyX is in 930+ servers, with 1,110+ players.</p>
  </>,
  {
    alt: "EconomyX banner",
    url: "./../ecox-banner.png",
    height: 220,
    width: 518,
  },
  [
    {
      type: "github",
      url: ecoxGithubURL,
      label: "Source",
      icon: "pi pi-github",
    },
    {
      type: "discord",
      url: ecoxInviteURL,
      label: "Invite",
      icon: "pi pi-discord",
    },
    {
      type: "support",
      url: ecoxSupportURL,
      label: "Try it",
      icon: "pi pi-comments",
    },
  ],
  false,
  true,
);

const fishypy = new Project(
  "fpy",
  "Fishy.py",
  "pi pi-discord",
  "python, discord.py, sqlite",
  <>
    <p className="font-normal text-xs lg:text-sm">
      Fishy.py is a re-creation and revival of the old Discord bot Fishy, which
      was a reaction-based fishing game with over 16,000 catchable fish. This
      was my first major bot project that taught me a lot about Python, SQLite
      and common coding practices. While not as successful as some of my other
      projects, it was still a project i throughly enjoyed making, as well as
      learned a lot through.
    </p>
    <p>Fishy.py is in 325+ servers, with 600+ unique players.</p>
  </>,
  {
    alt: "Fishy.py banner",
    url: "./../fishypy banner.png",
    height: 220,
    width: 518,
  },
  [
    {
      type: "github",
      url: fishyGithubURL,
      label: "Source",
      icon: "pi pi-github",
    },
    {
      type: "discord",
      url: fishyInviteURL,
      label: "Invite",
      icon: "pi pi-discord",
    },
    {
      type: "support",
      url: fishySupportURL,
      label: "Try it",
      icon: "pi pi-comments",
    },
  ],
  false,
  true,
);

const trackr = new Project(
  "trackr",
  "Trackr",
  "pi pi-discord",
  "rust, serenity, poise, postgresql",
  <>
    <p className="font-normal text-xs lg:text-sm">
      Trackr is a Discord bot that aims to enable live train tracking from
      transit agencies such as the NY MTA, MBTA, SEPTA, Amtrak, and more. It's
      built with Rust using Serenity and Poise, and uses PostgreSQL for data
      storage. I'm building it without as hardcoding as much as possible, so it
      can be easily expanded to other transit agencies. I started this project
      in January, so it's still a work in progress, but I'm excited to see where
      it goes.
    </p>
  </>,
  {
    alt: "Trackr logo",
    url: "https://cdn.averwhy.net/Designer_TO1qaEwEWn.png",
    height: 220,
    width: 518,
  },
  [
    {
      type: "github",
      url: trackrSourceURL,
      label: "Source",
      icon: "pi pi-github",
    },
    {
      type: "support",
      url: trackrSupportURL,
      label: "Test it",
      icon: "pi pi-comments",
    },
  ],
  true,
  true,
);

const timbot = new Project(
  "timbot",
  "TimBot",
  "pi pi-discord",
  "python, discord.py, postgresql",
  <>
    <p className="font-normal text-xs lg:text-sm">
      TimBot is the main utility and moderation bot for the SNHU Esports Discord
      server.
      <span className="text-slate-300 text-xs italic" />
      TimBot was initally made as a ticket managing bot, so 2,000+ users could
      seek support for recruitment, tech issues with our Arena, or general
      program questions if they needed to. However over the time it's been a bot
      for the server, multiple features have been added such as 'reaction'
      roles, GGCircuit integration, and more.
    </p>
  </>,
  {
    alt: "SNHU Esports logo",
    url: "./../snhuesports.png",
    height: 220,
    width: 518,
  },
  [
    {
      type: "github",
      url: timSourceURL,
      label: "Source",
      icon: "pi pi-github",
    },
    {
      type: "support",
      url: timServerURL,
      label: "Try It",
      icon: "pi pi-comments",
    },
  ],
  false,
  true,
);

const packup = new Project(
  "packup",
  "packUP",
  "pi pi-mobile",
  "python, discord.py, postgresql",
  <>
    <p className="font-normal text-xs lg:text-sm">
      packUP is a simple trip planning app that me and my team of peers in
      CS-360 (Mobile Application Development) worked on. We used React Native
      with Expo & GluestackUI, then we built a backend with Express.js and
      PostgreSQL. The app allows users to create trips, and it will
      automatically add items to their list based on their answers to a
      questionaire. Due to the nature of the class, we weren't able to implement
      everything we wanted to, but it was a great learning experience.
    </p>
  </>,
  {
    alt: "packUP logo",
    url: "https://cdn.averwhy.net/PackUp-Logo.png",
    height: 220,
    width: 518,
  },
  [
    {
      type: "github",
      url: packupSourceURL,
      label: "Source",
      icon: "pi pi-github",
    },
  ],
  false,
  true,
);

const tdvr = new Project(
  "tdvr",
  "TreasureDig VR",
  "",
  "godot engine & gdscript",
  <>
    <p className="font-normal text-xs lg:text-sm">
      For my high school's senior project, I chose to tackle a new project that
      I had not tried or learned before. Godot Engine is a free and open source
      engine that some of my friends had been using for projects. So I came up
      with TreasureDigVR, a simple game made for the Oculus Quest 2. After
      researching all aspects of VR, including the games industry, technology
      and more, I presented this and achieved Senior Project Honors.
    </p>
  </>,
  {
    alt: "TreasureDig VR Screenshot",
    url: "https://cdn.averwhy.net/SCR-20241127-cpvh.jpeg",
    height: 220,
    width: 518,
  },
  [
    {
      type: "github",
      url: treasureSourceURL,
      label: "Source",
      icon: "pi pi-download",
    },
    {
      type: "download",
      url: treasureDownloadURL,
      label: "Download",
      icon: "pi pi-download",
    },
  ],
  false,
  true,
);

const scouting = new Project(
  "scouting",
  "Scouting 2022/2023",
  "pi pi-desktop",
  "react & firebase",
  <>
    <p className="font-normal text-xs lg:text-sm">
      During my time on my high school's FIRST Robotics team, I made a new
      Scouting website using React that stored scouting data in Firestore, it
      then compiled that data in a few different views, allowing the team to see
      vital information by team or match.
    </p>
  </>,
  {
    alt: "Scouting2022 Website Screenshot",
    url: "./../scouting.png",
    height: 220,
    width: 518,
  },
  [
    {
      type: "github",
      url: scoutingSourceURL,
      label: "Source",
      icon: "pi pi-github",
    },
  ],
  false,
  true,
);

const aversite = new Project(
  "aversite",
  "This Site!",
  "pi pi-desktop",
  "react, tailwindcss & biome",
  <>
    <p className="font-normal text-xs lg:text-sm">
      I hand coded this website that you're reading today! It was much needed
      and i think it came out looking pretty nice :)
    </p>
  </>,
  {
    alt: "aversite logo",
    url: "./../avry_banner.png",
    height: 220,
    width: 518,
  },
  [
    {
      type: "github",
      url: aversiteSourceURL,
      label: "Source",
      icon: "pi pi-github",
    },
  ],
  false,
  true,
);

const penpoint = new Project(
  "penpoint",
  "penpoint",
  "pi pi-desktop",
  "svelte/sveltekit, postgresql",
  <>
    <p className="font-normal text-xs lg:text-sm">
      Penpoint is an application for rewarding college students for attending
      events. Built on SvelteKit, students at my school will be able to tap
      their student ID to a Schlage wireless card reader, and they earn points
      for attending the event. For more info about Penmen Pride, visit <a href="https://snhusga.org/penmen-pride">here.</a> This project is a part of my role as the
      President of Student Government Organization at my college.
    </p>
  </>,
  {
    alt: "Penmen Pride logo",
    url: "https://cdn.averwhy.net/penmenpride.png",
    height: 220,
    width: 518,
  },
  [
    {
      type: "github",
      url: penpointSourceURL,
      label: "Source",
      icon: "pi pi-github",
    },
  ],
  true,
  true,
);

const projects = [
  penpoint,
  trackr,
  economyx,
  fishypy,
  packup,
  timbot,
  tdvr,
  scouting,
  aversite,
];

function Portfolio() {
  return (
    <>
      <p className="pt-5 text-center text-6xl text-white tracking-widest">
        portfolio
      </p>
      <p className="pt-2 pb-10 text-center text-gray-400">
        coding projects, organization work & more
      </p>
      <div className="flex animate-fade items-center justify-center p-1">
        <div className="grid grid-cols-1 place-items-start gap-3 gap-y-5 lg:grid-cols-2 xl:grid-cols-3 xl:gap-32 xl:gap-y-5">
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.formatTitle()}
              subTitle={project.subtitle}
              header={project.getHeader()}
              footer={project.links.map((link) => (
                <Button
                  key={link.label}
                  label={link.label}
                  icon={link.icon}
                  link
                  onClick={() => project.openURL(link.url)}
                  className="text-pretty bg-slate-900 p-3 hover:bg-slate-950"
                />
              ))}
              className="bg-slate-700 font-bold font-mono text-white sm:w-56 md:w-96"
              pt={basicCardPT}
            >
              <p>{project.description}</p>
            </Card>
          ))}
        </div>
      </div>
      <br />
    </>
  );
}
