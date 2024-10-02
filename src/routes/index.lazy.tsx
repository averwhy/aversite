import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="font-bold text-white">
        hey
        <p className='pt-2 pb-10 text-center text-gray-400'>
          this site is a work in progress! so far /portfolio has had the most work done on it
          <br/>
          thanks for visiting :D
        </p>
      </div>
    </div>
  )
}