import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      <div className="flex animate-fade items-center justify-center p-1">
        <div className="grid grid-cols-1 place-items-start gap-3 gap-y-5 lg:grid-cols-2 text-white">
          <img src="https://cdn.averwhy.net/IMG_8388.jpg" />
          <p>
            My name is Avery. I'm a 20 year old aspiring programmer. I'm from New Hampshire, and im currently studying Computer Science Southern New Hampshire University.

          </p>
          <p>I've always loved technology. Ever since I first started using the computer at 7 years old, I was drawn to it more than anything. I played Minecraft almost every day on my families iMac.</p>
          <p>another pic of some kind</p>
        </div>
      </div>
    </>
  );
}