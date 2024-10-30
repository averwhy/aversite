import { createLazyFileRoute } from "@tanstack/react-router";
import ImgThatCanHandleItsOwnErrors from "../utils/ImgWithFallback";
export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      <div className="flex animate-fade items-center justify-center p-1">
        <div className="grid grid-cols-1 place-items-start gap-3 gap-x-7 gap-y-7 p-12 text-white leading-9 lg:grid-cols-2 lg:p-32">
          <ImgThatCanHandleItsOwnErrors src="https://cdn.averwhy.net/IMG_8388.jpg" alt="A young couple smiling at the camera"/>
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
          <ImgThatCanHandleItsOwnErrors src="https://cdn.averwhy.net/IMG_2338.jpeg" alt="Young toddler sitting on his dad's lap playing Webkinz on an old iMac"/>
          <ImgThatCanHandleItsOwnErrors src="https://cdn.averwhy.net/IMG_roboticsvarsityletter.jpg" alt="A teenager holding a certificate that reads 'FIRST Robotics Certification of Participation', while also holding a Varsity Letter. He is also posing with his mom"/>
          <p>
            My first programming class was an intro to Python. We used Notepad++ to edit our programs, and John showed us videos 
            on {<a href="https://py4e.com" rel='noopener noreferrer' className="text-blue-400 hover:text-blue-700">PY4E.</a>} On 
            most of my projects I would go above and beyond because I was curious how I could make my program different. Before I knew it, I found myself joining the Programming Club,
            along with some others at my school like The Claw (our schools digital magazine).
          </p>
          <p>
            Throughout my years in High School, I took programming classes every year/semester.
            Some of the things I learned include but aren't limited to: Python & Pygame, some Rust, Javascript, and Java. 
            I also took on some special projects, such
            as {<a href="https://github.com/averwhy/treasure-dig-vr?tab=readme-ov-file#treasuredig-vr" rel='noopener noreferrer' className="text-blue-400 hover:text-blue-700">my VR game</a>} that 
            I developed in the Godot Game engine.
          </p>
        </div>
      </div>
    </>
  );
}