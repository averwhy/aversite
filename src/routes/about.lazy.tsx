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
          <p>short bio here</p>
          <p>my history in tech</p>
          <p>another pic of some kind</p>
        </div>
      </div>
    </>
  );
}
