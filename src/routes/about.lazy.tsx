import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      <div className="flex animate-fade items-center justify-center p-1">
        <div className="grid grid-cols-1 place-items-start gap-3 gap-x-7 gap-y-7 p-5 text-white leading-9 lg:grid-cols-2 lg:p-64">
          <img src="https://cdn.averwhy.net/IMG_8388.jpg" alt="A young couple smiling at the camera"/>
          <p>
            My name is Avery. I'm a 20 year old aspiring programmer. I'm from New Hampshire, and I'm currently studying Computer Science at Southern New Hampshire University.
            I'm passionate about all things computers, especially programming, hardware, and open source software. I've worked with Python the most, but have also used Javascript/Typescript, 
            C++, Java, Rust, Lua/Luau, C#, and GDScript (Godot). I love working with databases too, primarily PostgreSQL.
          </p>
          <p>
            I've always loved technology. Ever since I first started using the computer at 7 years old, I was drawn to it more than anything. I played Minecraft almost every day on my
            families iMac. Since then, my passion for computers grew. I still remember being in elementary school when the Hour of Code came to my school, and I tried 'coding' for the first time.
            Needless to say, I remember staying on the website even after it ended because I wanted to beat all the levels. When I started middle school, I heard about computer classes 
            you could take. They mostly just taught computer competency skills, but enjoyed it nonetheless. In 8th grade, I vividly remember writing Windows Batch scripts for the first time.
            Then came the time to pick my freshman year classes. The first one I added was Programming with John Ranta.
          </p>
          <p>another pic of some kind</p>
          <p>yet another pic</p>
          <p>
            My first programming class was an intro to Python. We used Notepad++ to edit our programs, and John showed us videos 
            on {<a href="https://py4e.com" rel='noopener noreferrer' className="text-blue-400 hover:text-blue-700">PY4E.</a>} On 
            most of my projects I would go above and beyond because I was curious how I could make my program different. Throughout my years in High School, I took programming classes every year/semester.
            Some of the things I learned include but aren't limited to: Python & Pygame, some Rust, Javascript, and Java.
          </p>
        </div>
      </div>
    </>
  );
}