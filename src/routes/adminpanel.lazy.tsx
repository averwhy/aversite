import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/adminpanel')({
  component: Portfolio,
})

function Portfolio() {
  return (
    <div className="p-2 text-white h-screen">
      Admin panel here lol
    </div>
  )
}