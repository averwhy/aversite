import { createLazyFileRoute } from '@tanstack/react-router'
import { Card } from 'primereact/card'

export const Route = createLazyFileRoute('/portfolio')({
  component: Portfolio,
})

function Portfolio() {
  return (
    <div className='h-screen p-32 items-center justify-center'>
      <Card title="Simple Card" subTitle="Python, discord.py, PostgreSQL" className='bg-slate-700 text-white font-bold md:w-96 sm:w-56'>
        <p className="font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </Card>
    </div>
  )
}