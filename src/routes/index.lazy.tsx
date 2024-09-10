import { createLazyFileRoute } from '@tanstack/react-router'
import { Planet } from "react-planet"

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          I WANT TO BE CENTERED
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