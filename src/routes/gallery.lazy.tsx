import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/gallery')({
  component: Gallery,
})

function Gallery() {
  return (
    <div className="p-2 text-white">
      Hello from Gallery!
    </div>
  )
}