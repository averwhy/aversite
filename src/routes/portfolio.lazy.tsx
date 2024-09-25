import { createLazyFileRoute } from '@tanstack/react-router'
import { isSupported } from 'firebase/messaging/sw'
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
  <img alt='EconomyX banner' src="./src/assets/ecox-banner.png"/>
)

function sourceClick(){ window.open(ecoxGithubURL) }
function inviteClick(){ window.open(ecoxInviteURL) }
function tryitClick(){ window.open(ecoxSupportURL) }

const ecoxFooter = (
  <>
    <Button label="Source" icon="pi pi-github" link onClick={sourceClick} className='bg-slate-900 p-3 hover:bg-slate-950'/>
    {" "}
    <Button label="Invite" icon="pi pi-discord" link onClick={inviteClick} className='bg-blurple p-3 hover:bg-new-blurple'/>
    {" "}
    <Button label="Try it" icon="pi pi-comments" link onClick={tryitClick} className='bg-slate-800 p-3 hover:bg-slate-900'/>
  </>
)

const ecoCardTitle = ( <>EconomyX <span className="pi pi-discord"></span></> )

function Portfolio() {
  return (
    <div className='p-32 animate-fade'>
      <Card header={ecoxHeader} title={ecoCardTitle} subTitle="python, discord.py, postgreSQL" footer={ecoxFooter} pt={ecoCardPT} className='bg-slate-700 text-white font-mono font-bold md:w-96 sm:w-56'>
        <p className="font-normal">
            EconomyX is a unique & simple economy game bot for Discord. This project began in 2020, starting out with just a few commands and a lightweight
            SQLite database.
            Today, it's come to have 6+ gambling commands <span className="italic text-slate-300 text-sm">(remember it's a virtual currency!)</span>,
            a stocks system, lottery, jobs system, and a treasure digging sim coming soon.
        </p>
        <p>
          EconomyX is in 855+ servers, with 1,080+ players.
        </p>
      </Card>
    </div>
  )
}