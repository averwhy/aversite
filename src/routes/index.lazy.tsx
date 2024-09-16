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
/*
<Planet centerContent={<div style={{height: 100, width: 100, borderRadius: '50%', backgroundColor: '#1da8a4'}} />} open autoClose
        > <div style={{height: 70, width: 70, borderRadius: '50%', backgroundColor: '#9257ad'}}/>
        <div style={{height: 70, width: 70, borderRadius: '50%', backgroundColor: '#9257ad'}}/>
        </Planet>
*/