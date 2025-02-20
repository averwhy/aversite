import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { PrimeReactProvider } from "primereact/api";
import HoverLink from "../utils/HoverLink";

const topMenu = (
  <div className="flex break-after-auto gap-2 bg-slate-800 p-2 font-mono text-blue-50">
    <HoverLink to="/" text="home" duration={300} />
    {"   "}
    <HoverLink to="/about" text="about" duration={300} />
    {"   "}
    <HoverLink to="/portfolio" text="portfolio" duration={300} />
    {"   "}
    <HoverLink to="/gallery" text="gallery" duration={300} />
    {"   "}
    <HoverLink to="/music" text="music" duration={300} />
    {"   "}
    <Link to="/adminpanel" className="ml-24 text-slate-800">
      '
    </Link>
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
    <span>
      <a href="/">averwhy.net,</a>
    </span>{" "}
    made with <span className="pi pi-heart-fill" /> (and vite) by avery b
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
