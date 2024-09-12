import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/portfolio')({
  component: Portfolio,
})

function Portfolio() {
  return (
    <div className="p-2 text-white">
      Hello from Portfolio!
    </div>
  )
}