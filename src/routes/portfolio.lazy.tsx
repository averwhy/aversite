import { createLazyFileRoute } from '@tanstack/react-router'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'

export const Route = createLazyFileRoute('/portfolio')({
  component: Portfolio,
})

const ecoxGithubURL = "https://github.com/averwhy/EconomyX"
const ecoxInviteURL = "https://discord.com/api/oauth2/authorize?client_id=780480654277476352&permissions=0&scope=bot"
const ecoxSupportURL = "https://discord.gg/epQZEp933x"

const fishyGithubURL = "https://github.com/averwhy/fishypy-discord-game"
const fishyInviteURL = "https://discord.com/api/oauth2/authorize?client_id=708428058822180874&permissions=289856&scope=bot"
const fishySupportURL = "https://discord.gg/HSqevex"

const timSourceURL = "https://github.com/averwhy/TimBot"
const timServerURL = "https://discord.gg/snhuesports"

const aversiteSourceURL = "https://github.com/averwhy/aversite"

const basicCardPT = {
  subTitle: { className: 'text-slate-300 font-light text-sm m-0 mb-1' },
  title : { className: 'mb-0' },
  content: { className: 'py-1' },
  footer: { className: 'py-2 flex gap-5 place-content-center' },
}

const ecoxHeader = (
  <img alt='EconomyX banner' src="./../ecox-banner.png"/>
)
const fpyHeader = (
  <img alt='Fishy.py banner' src="./../fishypy banner.png" height={220} width={518}/>
)
const timHeader = (
  <img alt='TimBot banner' src="./../snhuesports.png" height={220} width={518}/>
)
const aversiteHeader = (
  <img alt='aversite logo banner' src="./../avry_banner.png" height={220} width={518}/>
)

function ecoSC(){ window.open(ecoxGithubURL) }
function ecoIC(){ window.open(ecoxInviteURL) }
function ecoTIC(){ window.open(ecoxSupportURL) }

function fishySC(){ window.open(fishyGithubURL) }
function fishyIC(){ window.open(fishyInviteURL) }
function fishyTIC(){ window.open(fishySupportURL) }

function timSC(){ window.open(timSourceURL) }
function timTIC(){ window.open(timServerURL) }

function aversiteSC(){ window.open(aversiteSourceURL) }

const ecoxFooter = (
  <>
    <Button label="Source" icon="pi pi-github" link onClick={ecoSC} className='text-pretty bg-slate-900 p-3 hover:bg-slate-950'/>
    {" "}
    <Button label="Invite" icon="pi pi-discord" link onClick={ecoIC} className='text-pretty bg-blurple p-3 hover:bg-new-blurple'/>
    {" "}
    <Button label="Try it" icon="pi pi-comments" link onClick={ecoTIC} className='text-pretty bg-slate-800 p-3 hover:bg-slate-900'/>
  </>
)

const fishyFooter = (
  <>
    <Button label="Source" icon="pi pi-github" link onClick={fishySC} className='text-pretty bg-slate-900 p-3 hover:bg-slate-950'/>
    {" "}
    <Button label="Invite" icon="pi pi-discord" link onClick={fishyIC} className='text-pretty bg-blurple p-3 hover:bg-new-blurple'/>
    {" "}
    <Button label="Try it" icon="pi pi-comments" link onClick={fishyTIC} className='text-pretty bg-slate-800 p-3 hover:bg-slate-900'/>
  </>
)

const timFooter = (
  <>
    <Button label="Source" icon="pi pi-github" link onClick={timSC} className='text-pretty bg-slate-900 p-3 hover:bg-slate-950'/>
    {" "}
    <Button label="Try it" icon="pi pi-comments" link onClick={timTIC} className='text-pretty bg-slate-800 p-3 hover:bg-slate-900'/>
  </>
)

const aversiteFooter = (
  <>
    <Button label="Source" icon="pi pi-github" link onClick={aversiteSC} className='text-pretty bg-slate-900 p-3 hover:bg-slate-950'/>
  </>
)

const ecoCardTitle = ( <>EconomyX <span className="pi pi-discord" /></> )
const timCardTitle = ( <>TimBot <span className="pi pi-discord" /></> )
const fishCardTitle = ( <>fishy.py <span className="pi pi-discord" /></> )

function Portfolio() {
  return (
    <>
      <p className="pt-5 text-center text-6xl text-white tracking-widest">portfolio</p>
      <p className="pt-2 pb-10 text-center text-gray-400">coding projects, organization work & more</p>
      <div className="flex animate-fade items-center justify-center p-1">
        <div className="xl:gay-y-5 grid grid-cols-1 place-items-start gap-3 gap-y-5 lg:grid-cols-2 xl:grid-cols-3 xl:gap-32">
          <Card header={fpyHeader} title={fishCardTitle} subTitle="python, discord.py, sqlite" footer={fishyFooter} pt={basicCardPT} className="bg-slate-700 font-bold font-mono text-white sm:w-56 md:w-96">
            <p className="font-normal text-xs lg:text-sm">
                Fishy.py is recreation and revival of the old Discord bot Fishy, which was a reaction-based fishing game with over 16,000 catchable fish.
                This was my first major bot project that taught me a lot about Python, SQLite and common coding practices.
                While not as successful as some of my other projects, it was still a project i throughly enjoyed making, as well as learned a lot through.
            </p>
            <p>Fishy.py is in 320+ servers, with 600+ unique players.</p>
          </Card>
          <Card header={ecoxHeader} title={ecoCardTitle} subTitle="python, discord.py, postgreSQL" footer={ecoxFooter} pt={basicCardPT} className="bg-slate-700 font-bold font-mono text-white sm:w-56 md:w-96">
            <p className="font-normal text-xs lg:text-sm">
                EconomyX is a unique & simple economy game bot for Discord. This project began in 2020, starting out with just a few commands and a lightweight
                SQLite database.
                Today, it's come to have 6+ gambling commands <span className="text-slate-300 text-xs italic">(remember it's a virtual currency!)</span>,
                a stocks system, lottery, jobs system, and a treasure digging sim coming soon.
            </p>
            <p>
              EconomyX is in 855+ servers, with 1,080+ players.
            </p>
          </Card>
          <Card header={timHeader} title={timCardTitle} subTitle="python, discord.py, postgreSQL" footer={timFooter} pt={basicCardPT} className="bg-slate-700 font-bold font-mono text-white sm:w-56 md:w-96">
            <p className="font-normal text-xs lg:text-sm">
              TimBot is the main utility and moderation bot for the SNHU Esports Discord server.
              <span className="text-slate-300 text-xs italic"><br/>If you want to read more about my involvement with SNHU Esports, check out the /about page.<br/></span>
              TimBot was initally made as a ticket managing bot, so 2,000+ users could seek support for recruitment, tech issues with our Arena, or general program questions if they needed to. However over the time it's been
              a bot for the server, multiple features have been added such as 'reaction' roles, GGCircuit integration, and more.
            </p>
          </Card>
          <Card header={aversiteHeader} title="This site!" subTitle="react, tailwind css, vite, biome + more" footer={aversiteFooter} pt={basicCardPT} className="bg-slate-700 font-bold font-mono text-white sm:w-56 md:w-96">
            <p className="font-normal text-xs lg:text-sm">
              I hand coded this website that you're reading today! It was much needed and i think it came out looking pretty nice :)
            </p>
          </Card>
        </div>
      </div>
      <br/>
    </>
  )
}