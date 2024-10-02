import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { PrimeReactProvider } from 'primereact/api'

const topMenu = (
  <div className="flex break-after-auto gap-2 bg-slate-800 p-2 font-mono text-blue-50">
    <Link to="/" className="[&.active]:font-bold">
      home
    </Link>{'   '}
    <Link to="/portfolio" className="[&.active]:font-bold">
      portfolio
    </Link>{'   '}
    <Link to="/gallery" className="[&.active]:font-bold">
      gallery
    </Link>{'   '}
    <Link to="/about" className="[&.active]:font-bold">
      about
    </Link>{'   '}
    <Link to="/adminpanel" className="ml-24 text-slate-800">
      '
    </Link>
  </div>
);

const menuBreak = (
  <hr className="border-slate-700 border-t-1"/>
);

const pageBody = (
  <div className="bg-cover bg-slate-800 font-mono">
    <Outlet />
  </div>
);

const bottomFooter = (
  <div className="flex w-full break-after-auto justify-end gap-2 bg-slate-900 p-2 font-mono text-blue-50 text-xs">
    <span><a href='/'>averwhy.net,</a></span> made with <span className="pi pi-heart-fill" /> (and vite) by avery b
  </div>
)

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
})