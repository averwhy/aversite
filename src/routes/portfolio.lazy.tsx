import { createLazyFileRoute } from '@tanstack/react-router'
import { Card } from 'primereact/card'

export const Route = createLazyFileRoute('/portfolio')({
  component: Portfolio,
})

const ecoCardPT = {
  subTitle: { className: 'text-slate-300 font-light text-sm m-0' },
  title : { className: 'mb-0' },
  content: { className: 'py-2' }
}

const ecoxHeader = (
  <img alt='EconomyX banner' src="./src/assets/ecox-banner.png"/>
)

function Portfolio() {
  return (
    <div className='p-32 animate-fade'>
      <Card header={ecoxHeader} title="EconomyX" subTitle="python, discord.py, postgreSQL" pt={ecoCardPT} className='bg-slate-700 text-white font-mono font-bold md:w-96 sm:w-56'>
        <p className="font-normal">
            EconomyX is a unique & simple economy game bot for Discord. This project began in 2020, starting out with just a few commands and a lightweight
            SQLite database. Today, it's come to have 6+ gambling commands (remember it's a virtual currency!), a stocks system, lottery, jobs system, and
            a treasure digging sim coming soon.
        </p>
        <p>
          EconomyX is in 855+ servers, with 1,080+ players.
        </p>
      </Card>
    </div>
  )
}