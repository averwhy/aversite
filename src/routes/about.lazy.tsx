import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      <div className="flex h-screen animate-fade items-center justify-center p-1">
        <div className="grid grid-cols-1 place-items-start gap-3 gap-x-7 gap-y-7 p-5 text-white lg:grid-cols-2 lg:p-64">
          <img src="https://cdn.averwhy.net/IMG_8388.jpg" alt="A young couple smiling at the camera"/>
          <p>
            My name is Avery. I'm a 20 year old aspiring programmer. I'm from New Hampshire, and I'm currently studying Computer Science at Southern New Hampshire University.
            I'm passionate about all things computers, especially programming, hardware, and open source software. I've worked with Python the most, but have also used Javascript/Typescript, 
            C++, Java, Rust, Lua/Luau, C#, and GDScript (Godot). I love working with databases too, primarily PostgreSQL.
          </p>
          <p>I've always loved technology. Ever since I first started using the computer at 7 years old, I was drawn to it more than anything. I played Minecraft almost every day on my families iMac.</p>
          <p>another pic of some kind</p>
        </div>
      </div>
    </>
  );
}