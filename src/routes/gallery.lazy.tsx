import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/gallery')({
  component: Gallery,
})

function Gallery() {
  return <div className="p-2">Hello from Gallery!</div>
}