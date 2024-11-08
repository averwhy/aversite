import { createLazyFileRoute } from "@tanstack/react-router";
import ImgThatCanHandleItsOwnErrors from "../utils/ImgWithFallback";
export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      <div className="flex animate-fade items-center justify-center p-1">
        <div className="grid grid-cols-1 place-items-center items-center gap-3 gap-x-7 gap-y-7 p-12 text-white leading-9 lg:grid-cols-2 lg:p-32">
          <ImgThatCanHandleItsOwnErrors src="https://cdn.averwhy.net/IMG_8388.jpg" alt="A young couple smiling at the camera" width="480" height="360"/>
          <p>
            My name is Avery. I'm a 20 year old aspiring programmer. I'm from New Hampshire, and I'm currently studying Computer Science at Southern New Hampshire University.
            I'm passionate about all things computers, especially programming, hardware, and open source software. I've worked with Python the most, but have also used Javascript/Typescript, 
            C++, Java, Rust, Lua/{<a href="https://luau.org" rel='noopener noreferrer' className="text-blue-400 hover:text-blue-700">Luau</a>}, C#, and GDScript (Godot). I love working with databases too, primarily PostgreSQL.
          </p>
          <p>
            I've always loved technology. Ever since I first started using the computer at 7 years old, I was drawn to it more than anything. I played Minecraft almost every day on my
            families iMac. Since then, my passion for computers grew. I still remember being in elementary school when the Hour of Code came to my school, and I tried 'coding' for the first time.
            Needless to say, I remember staying on the website even after it ended because I wanted to beat all the levels. When I started middle school, I heard about computer classes 
            you could take. They mostly just taught computer competency skills, but enjoyed it nonetheless. In 8th grade, I vividly remember writing Windows Batch scripts for the first time.
            Then came the time to pick my freshman year classes. The first one I added was Programming with John Ranta.
          </p>
          <ImgThatCanHandleItsOwnErrors src="https://cdn.averwhy.net/IMG_2338.jpeg" alt="Young toddler sitting on his dad's lap playing Webkinz on an old iMac" width="270" height="360"/>
          <ImgThatCanHandleItsOwnErrors src="https://cdn.averwhy.net/IMG_roboticsvarsityletter.jpg" alt="A teenager holding a certificate that reads 'FIRST Robotics Certification of Participation', while also holding a Varsity Letter. He is also posing with his mom"/>
          <p>
            My first programming class was an intro to Python. We used Notepad++ to edit our programs, and John showed us videos 
            on {<a href="https://py4e.com" rel='noopener noreferrer' className="text-blue-400 hover:text-blue-700">PY4E.</a>} On 
            most of my projects I would go above and beyond because I was curious how I could make my program different. Before I knew it, I found myself joining the Programming Club,
            along with some others at my school like The Claw (our schools digital magazine).
          </p>
          <p>
            Throughout my years in High School, I took programming classes every year/semester.
            Some of the things I learned include but aren't limited to: Python & Pygame, some Rust, Javascript, and Java. Come Sophomore year, I found myself getting involved in FIRST Robotics.
            I found my calling there in a team environment- kids my age working towards specific goals in a very collaborative setting. I stayed in FIRST Robotics through covid and 
            continued competing until I graduated. In order to graduate though, I needed to complete my <span>senior project.</span>
            For that, I choose to take on a unique project:
            I made {<a href="https://github.com/averwhy/treasure-dig-vr?tab=readme-ov-file#treasuredig-vr" rel='noopener noreferrer' className="text-blue-400 hover:text-blue-700">a VR game</a>} in 
            the Godot Game engine using GDScript, a Pythonic-like language.
          </p>
          <p>image aaaa</p>
          <image>another image aaa</image>
          <p>Come the Covid pandemic, everything stopped. I needed something to keep my hands busy, so I started a new Discord bot project, named EconomyX.
            I began writing this bot from the ground up
            using {<a href="https://averwhy.net/portfolio" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-700">discord.py</a>}, all
            whilst maintaining (and slowly working on) my other bot fishy.py. I share a bit more of the bots specific's details on my portfolio page. That bot today
            has since amassed over 880 guilds with over a thousand different players. <br/>
            Fast foward to the end of high school, I eagerly started college which has allowed me to take a handful of more focused classes that have fostered my interests a lot. 
            So far I've taking classes on Agile/Scrum, databases, mobile app development, operating platforms, and quite a handful of C++ classes. There are many more
            classes that I'm excited to take, such as software security, operating systems, and many more. I'm always looking to pick up new skills, discover new tools,
            and learn new languages.
          </p>
        </div>
      </div>
    </>
  );
}