import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

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
const trackrInviteURL = "";

const basicCardPT = {
  subTitle: { className: "text-slate-300 font-light text-sm m-0 mb-1" },
  title: { className: "mb-1" },
  content: { className: "py-1" },
  footer: { className: "py-2 px-0 flex gap-3 place-content-center" },
  root: { className: "m-3 md:m-0" },
};

const ecoxHeader = <img alt="EconomyX banner" src="./../ecox-banner.png" />;
const fpyHeader = (
  <img
    alt="Fishy.py banner"
    src="./../fishypy banner.png"
    height={220}
    width={518}
  />
);
const timHeader = (
  <img
    alt="TimBot banner"
    src="./../snhuesports.png"
    height={220}
    width={518}
  />
);
const aversiteHeader = (
  <img
    alt="aversite logo banner"
    src="./../avry_banner.png"
    height={220}
    width={518}
  />
);
const packupHeader = (
  <img
    alt="packUP logo"
    src="https://cdn.averwhy.net/PackUp-Logo.png"
    height={220}
    width={518}
  />
);
const scoutingHeader = (
  <img
    alt="FIRST robotics logo"
    src="./../scouting.png"
    height={220}
    width={518}
  />
);
const treasureHeader = (
  <img
    alt="Screenshot of VR game"
    src="https://cdn.averwhy.net/SCR-20241127-cpvh.jpeg"
    height={220}
    width={518}
  />
);
const trackrheader = (
  <img
    alt="Trackr Logo"
    src="https://cdn.averwhy.net/Designer_TO1qaEwEWn.png"
    height={220}
    width={518}
  />
);

function ecoSC() {
  window.open(ecoxGithubURL);
}
function ecoIC() {
  window.open(ecoxInviteURL);
}
function ecoTIC() {
  window.open(ecoxSupportURL);
}

function fishySC() {
  window.open(fishyGithubURL);
}
function fishyIC() {
  window.open(fishyInviteURL);
}
function fishyTIC() {
  window.open(fishySupportURL);
}

function timSC() {
  window.open(timSourceURL);
}
function timTIC() {
  window.open(timServerURL);
}

function aversiteSC() {
  window.open(aversiteSourceURL);
}

function scoutingSC() {
  window.open(scoutingSourceURL);
}

function packupSC() {
  window.open(packupSourceURL);
}

function treasureSC() {
  window.open(treasureSourceURL);
}
function treasureDL() {
  window.open(treasureDownloadURL);
}

function trackrSC() {
  window.open(trackrSourceURL);
}
function trackrIC() {
  window.open(trackrInviteURL);
}

const ecoxFooter = (
  <>
    <Button
      label="Source"
      icon="pi pi-github"
      link
      onClick={ecoSC}
      className="text-pretty bg-slate-900 p-3 hover:bg-slate-950"
    />{" "}
    <Button
      label="Invite"
      icon="pi pi-discord"
      link
      onClick={ecoIC}
      className="text-pretty bg-blurple p-3 hover:bg-new-blurple"
    />{" "}
    <Button
      label="Try it"
      icon="pi pi-comments"
      link
      onClick={ecoTIC}
      className="text-pretty bg-slate-800 p-3 hover:bg-slate-900"
    />
  </>
);

const fishyFooter = (
  <>
    <Button
      label="Source"
      icon="pi pi-github"
      link
      onClick={fishySC}
      className="text-pretty bg-slate-900 p-3 hover:bg-slate-950"
    />{" "}
    <Button
      label="Invite"
      icon="pi pi-discord"
      link
      onClick={fishyIC}
      className="text-pretty bg-blurple p-3 hover:bg-new-blurple"
    />{" "}
    <Button
      label="Try it"
      icon="pi pi-comments"
      link
      onClick={fishyTIC}
      className="text-pretty bg-slate-800 p-3 hover:bg-slate-900"
    />
  </>
);

const timFooter = (
  <>
    <Button
      label="Source"
      icon="pi pi-github"
      link
      onClick={timSC}
      className="text-pretty bg-slate-900 p-3 hover:bg-slate-950"
    />{" "}
    <Button
      label="Try it"
      icon="pi pi-comments"
      link
      onClick={timTIC}
      className="text-pretty bg-slate-800 p-3 hover:bg-slate-900"
    />
  </>
);
const aversiteFooter = (
  <>
    <Button
      label="Source"
      icon="pi pi-github"
      link
      onClick={aversiteSC}
      className="text-pretty bg-slate-900 p-3 hover:bg-slate-950"
    />
  </>
);
const scoutingFooter = (
  <>
    <Button
      label="Source"
      icon="pi pi-github"
      link
      onClick={scoutingSC}
      className="text-pretty bg-slate-900 p-3 hover:bg-slate-950"
    />
  </>
);
const packupFooter = (
  <>
    <Button
      label="Source"
      icon="pi pi-github"
      link
      onClick={packupSC}
      className="text-pretty bg-slate-900 p-3 hover:bg-slate-950"
    />
  </>
);
const treasureFooter = (
  <>
    <Button
      label="Source"
      icon="pi pi-github"
      link
      onClick={treasureSC}
      className="text-pretty bg-slate-900 p-3 hover:bg-slate-950"
    />
    <Button
      label="Releases"
      icon="pi pi-download"
      link
      onClick={treasureDL}
      className="text-pretty bg-slate-900 p-3 hover:bg-slate-950"
    />
  </>
);
const trackrFooter = (
  <>
    <Button
      label="Source"
      icon="pi pi-github"
      link
      onClick={trackrSC}
      className="text-pretty bg-slate-900 p-3 hover:bg-slate-950"
    />{" "}
    <Button
      label="Invite"
      icon="pi pi-discord"
      link
      onClick={trackrIC}
      className="text-pretty bg-blurple p-3 hover:bg-new-blurple"
    />
  </>
);

const ecoCardTitle = (
  <>
    EconomyX <span className="pi pi-discord" />
  </>
);
const timCardTitle = (
  <>
    TimBot <span className="pi pi-discord" />
  </>
);
const fishCardTitle = (
  <>
    fishy.py <span className="pi pi-discord" />
  </>
);
const trackrCardTitle = (
  <>
    Trackr <span className="pi pi-discord" />
  </>
);

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
          <Card
            header={fpyHeader}
            title={fishCardTitle}
            subTitle="python, discord.py, sqlite"
            footer={fishyFooter}
            pt={basicCardPT}
            className="bg-slate-700 font-bold font-mono text-white sm:w-56 md:w-96"
          >
            <p className="font-normal text-xs lg:text-sm">
              Fishy.py is recreation and revival of the old Discord bot Fishy,
              which was a reaction-based fishing game with over 16,000 catchable
              fish. This was my first major bot project that taught me a lot
              about Python, SQLite and common coding practices. While not as
              successful as some of my other projects, it was still a project i
              throughly enjoyed making, as well as learned a lot through.
            </p>
            <p>Fishy.py is in 325+ servers, with 600+ unique players.</p>
          </Card>
          <Card
            header={ecoxHeader}
            title={ecoCardTitle}
            subTitle="python, discord.py, postgreSQL"
            footer={ecoxFooter}
            pt={basicCardPT}
            className="bg-slate-700 font-bold font-mono text-white sm:w-56 md:w-96"
          >
            <p className="font-normal text-xs lg:text-sm">
              EconomyX is a unique & simple economy game bot for Discord. This
              project began in 2020, starting out with just a few commands and a
              lightweight SQLite database. Today, it's come to have 6+ gambling
              commands{" "}
              <span className="text-slate-300 text-xs italic">
                (remember it's a virtual currency!)
              </span>
              , a stocks system, lottery, jobs system, and a treasure digging
              sim coming soon.
            </p>
            <p>EconomyX is in 890+ servers, with 1,110+ players.</p>
          </Card>
          <Card
            header={trackrheader}
            title={trackrCardTitle}
            subTitle="rust, postgreSQL"
            footer={trackrFooter}
            pt={basicCardPT}
            className="bg-slate-700 font-bold font-mono text-white sm:w-56 md:w-96"
          >
            <p className="font-normal text-xs lg:text-sm">
              Trackr is a Discord bot that aims to enable live train tracking from
              transit agencies such as the NY MTA, MBTA, SEPTA, Amtrak, and more. It's built
              with Rust using Serenity and Poise, and uses PostgreSQL for data storage. I'm building it without 
              as hardcoding as much as possible, so it can be easily expanded to other transit agencies.
              I started this project in January, so it's still a work in progress, but I'm
              excited to see where it goes.
            </p>
          </Card>
          <Card
            header={timHeader}
            title={timCardTitle}
            subTitle="python, discord.py, postgreSQL"
            footer={timFooter}
            pt={basicCardPT}
            className="bg-slate-700 font-bold font-mono text-white sm:w-56 md:w-96"
          >
            <p className="font-normal text-xs lg:text-sm">
              TimBot is the main utility and moderation bot for the SNHU Esports
              Discord server.
              <span className="text-slate-300 text-xs italic">
                <br />
                If you want to read more about my involvement with SNHU Esports,
                check out the /about page.
                <br />
              </span>
              TimBot was initally made as a ticket managing bot, so 2,000+ users
              could seek support for recruitment, tech issues with our Arena, or
              general program questions if they needed to. However over the time
              it's been a bot for the server, multiple features have been added
              such as 'reaction' roles, GGCircuit integration, and more.
            </p>
          </Card>
          <Card
            header={packupHeader}
            title="packUP"
            subTitle="react native + expo,  express.js, postgresql"
            footer={packupFooter}
            pt={basicCardPT}
            className="bg-slate-700 font-bold font-mono text-white sm:w-56 md:w-96"
          >
            <p className="font-normal text-xs lg:text-sm">
              packUP is a simple trip planning app that me and my team of peers
              in CS-360 (Mobile Application Development) worked on. We used React Native with Expo &
              GluestackUI, then we built a backend with Express.js and PostgreSQL.
              The app allows users to create trips, and it will automatically add items
              to their list based on their answers to a questionaire. Due to the nature of the class,
              we weren't able to implement everything we wanted to, but it was a great learning experience.
            </p>
          </Card>
          <Card
            header={treasureHeader}
            title="TreasureDigVR"
            subTitle="godot engine, gdscript"
            footer={treasureFooter}
            pt={basicCardPT}
            className="bg-slate-700 font-bold font-mono text-white sm:w-56 md:w-96"
          >
            <p className="font-normal text-xs lg:text-sm">
              For my high school's senior project, I chose to tackle a new
              project that I had not tried or learned before. Godot Engine is a
              free and open source engine that some of my friends had been using
              for projects. So I came up with TreasureDigVR, a simple game made
              for the Oculus Quest 2. After researching all aspects of VR,
              including the games industry, technology and more, I presented
              this and achieved Senior Project Honors.
            </p>
          </Card>
          <Card
            header={scoutingHeader}
            title="Scouting2022 & 2023"
            subTitle="react, bootstrap, firebase"
            footer={scoutingFooter}
            pt={basicCardPT}
            className="bg-slate-700 font-bold font-mono text-white sm:w-56 md:w-96"
          >
            <p className="font-normal text-xs lg:text-sm">
              During my time on my high school's FIRST Robotics team, I made a
              new Scouting website using React that stored scouting data in
              Firestore, it then compiled that data in a few different views,
              allowing the team to see vital information by team or match.
            </p>
          </Card>
          <Card
            header={aversiteHeader}
            title="This site!"
            subTitle="react, tailwind css, vite, biome + more"
            footer={aversiteFooter}
            pt={basicCardPT}
            className="bg-slate-700 font-bold font-mono text-white sm:w-56 md:w-96"
          >
            <p className="font-normal text-xs lg:text-sm">
              I hand coded this website that you're reading today! It was much
              needed and i think it came out looking pretty nice :)
            </p>
          </Card>
        </div>
      </div>
      <br />
    </>
  );
}
