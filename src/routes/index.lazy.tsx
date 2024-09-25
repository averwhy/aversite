import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-white font-bold">
        hey
      </div>
    </div>
  )
}