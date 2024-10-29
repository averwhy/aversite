import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return ( 
    <div className="flex h-screen animate-fade items-center justify-center p-1">
      <div className="grid grid-cols-1 place-items-start gap-3 px-7 text-sm text-white xl:grid-cols-2 xl:px-96">
        <img src={'https://cdn.averwhy.net/IMG_8388.jpg'} alt=""/>
        <p>
          My name is Avery B. I'm 20 years old, was born, raised and currently live in New Hampshire US.
          I've loved computers since I was young, I remember every day hopping onto our families iMac to play
          Minecraft. In middle school, i started to learn Windows Batch scripts and made a bunch of various programs with those.
          Next thing i knew, i took programming classes all four years of highschool, including AP Comp Sci A and AP Comp Sci Principles.
          Fast foward to today, where i am currently studying Computer Science at Southern New Hampshire University on campus. I've worked
          with a handful of languages, included Python, Javascript & Typescript, C++, some Rust, some Lua, and even one project in NASM.
        </p>
      </div>
    </div>
  )
}