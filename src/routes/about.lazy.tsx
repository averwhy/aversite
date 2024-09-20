import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return ( 
    <div className="p-2 text-white h-screen">
      Hello from About!
    </div>
  )
}