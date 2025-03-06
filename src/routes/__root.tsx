import { createRootRoute, Outlet } from "@tanstack/react-router";
import { PrimeReactProvider } from "primereact/api";
import { Tooltip } from "primereact/tooltip";
import HoverLink from "../utils/HoverLink";

const topMenu = (
  <div className="flex flex-wrap gap-2 bg-slate-800 p-2 font-mono text-blue-50">
    <div className="flex gap-2">
      <HoverLink to="/" text="home" duration={300} />
      {"   "}
      <HoverLink to="/about" text="about" duration={300} />
      {"   "}
      <HoverLink to="/portfolio" text="portfolio" duration={300} />
    </div>
    <div className="flex gap-2">
      <HoverLink to="/gallery" text="gallery" duration={300} />
      {"   "}
      <HoverLink to="/music" text="music" duration={300} />
      {"   "}
      <HoverLink to="https://blog.averwhy.net" text="blog" duration={300} />
      <Tooltip target=".custom-blog-tooltip" />
      <div
        className="custom-blog-tooltip relative ml-[-10px]"
        data-pr-tooltip="New!"
        data-pr-position="right"
        data-pr-at="right+5 top"
        data-pr-my="left center-2"
        style={{ fontSize: "1rem", cursor: "pointer" }}
      >
        <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-sky-400 opacity-75" />
        <span className="absolute inline-flex h-3 w-3 rounded-full bg-sky-500" />
      </div>
    </div>
  </div>
);

const menuBreak = <hr className="border-slate-700 border-t-1" />;

const pageBody = (
  <div className="bg-cover bg-slate-800 font-mono">
    <Outlet />
  </div>
);

const bottomFooter = (
  <div className="flex w-full break-after-auto justify-end gap-2 bg-slate-900 p-2 font-mono text-blue-50 text-xs">
    made with react, vite and <span className="pi pi-heart-fill" /> by avery b
  </div>
);

export const Route = createRootRoute({
  component: () => (
    <>
      <PrimeReactProvider>
        {topMenu}
        {menuBreak}
        {pageBody}
        {menuBreak}
        {bottomFooter}
      </PrimeReactProvider>
    </>
  ),
});
