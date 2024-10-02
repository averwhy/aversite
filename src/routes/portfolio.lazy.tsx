import { createLazyFileRoute } from '@tanstack/react-router'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'

export const Route = createLazyFileRoute('/portfolio')({
  component: Portfolio,
})

const ecoxGithubURL = "https://github.com/averwhy/EconomyX"
const ecoxInviteURL = "https://discord.com/api/oauth2/authorize?client_id=780480654277476352&permissions=0&scope=bot"
const ecoxSupportURL = ""

const ecoCardPT = {
  subTitle: { className: 'text-slate-300 font-light text-sm m-0 mb-1' },
  title : { className: 'mb-0' },
  content: { className: 'py-1' },
  footer: { className: 'py-2' },
}

const ecoxHeader = (
  <img alt='EconomyX banner' src="./../ecox-banner.png"/>
)
const fpyHeader = (
  <img alt='Fishy.py banner' src="./../fishypy banner.png" height={220} width={518}/>
)

function ecoSC(){ window.open(ecoxGithubURL) }
function ecoIC(){ window.open(ecoxInviteURL) }
function ecoTIC(){ window.open(ecoxSupportURL) }

const ecoxFooter = (
  <>
    <Button label="Source" icon="pi pi-github" link onClick={ecoSC} className='bg-slate-900 p-3 hover:bg-slate-950'/>
    {" "}
    <Button label="Invite" icon="pi pi-discord" link onClick={ecoIC} className='bg-blurple p-3 hover:bg-new-blurple'/>
    {" "}
    <Button label="Try it" icon="pi pi-comments" link onClick={ecoTIC} className='bg-slate-800 p-3 hover:bg-slate-900'/>
  </>
)

const ecoCardTitle = ( <>EconomyX <span className="pi pi-discord" /></> )
const fishCardTitle = ( <>fishy.py <span className="pi pi-discord" /></> )

function Portfolio() {
  return (
    <div className="flex h-screen animate-fade items-center justify-center p-16">
      <div className="grid grid-cols-2 place-items-start gap-3 lg:grid-cols-3 lg:gap-32">
        <Card header={fpyHeader} title={fishCardTitle} subTitle="python, discord.py, sqlite" footer={ecoxFooter} pt={ecoCardPT} className="bg-slate-700 font-bold font-mono text-white sm:w-56 md:w-96">
          <p className="font-normal text-sm xs:text-xs">
              Fishy.py is recreation of a old Discord bot, which was a reaction-based fishing game with over 16,000 catchable fish.
              This was my first major bot project that taught me a lot about Python, SQLite and common coding practices.
              Fishy.py is in 320+ servers, and while not as successful as some of my other projects, it was still a project i throughly enjoyed making.
          </p>
        </Card>
        <Card header={ecoxHeader} title={ecoCardTitle} subTitle="python, discord.py, postgreSQL" footer={ecoxFooter} pt={ecoCardPT} className="bg-slate-700 font-bold font-mono text-white sm:w-56 md:w-96">
          <p className="font-normal">
              EconomyX is a unique & simple economy game bot for Discord. This project began in 2020, starting out with just a few commands and a lightweight
              SQLite database.
              Today, it's come to have 6+ gambling commands <span className="text-slate-300 text-xs italic">(remember it's a virtual currency!)</span>,
              a stocks system, lottery, jobs system, and a treasure digging sim coming soon.
          </p>
          <p>
            EconomyX is in 855+ servers, with 1,080+ players.
          </p>
        </Card>
        <Card header={ecoxHeader} title={ecoCardTitle} subTitle="python, discord.py, postgreSQL" footer={ecoxFooter} pt={ecoCardPT} className="bg-slate-700 font-bold font-mono text-white sm:w-56 md:w-96">
          <p className="font-normal">
              EconomyX is a unique & simple economy game bot for Discord. This project began in 2020, starting out with just a few commands and a lightweight
              SQLite database.
              Today, it's come to have 6+ gambling commands <span className="text-slate-300 text-xs italic">(remember it's a virtual currency!)</span>,
              a stocks system, lottery, jobs system, and a treasure digging sim coming soon.
          </p>
          <p>
            EconomyX is in 855+ servers, with 1,080+ players.
          </p>
        </Card>
      </div>
    </div>
  )
}