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

export const Route = createRootRoute({
  component: () => (
    <>
      <PrimeReactProvider>
        {topMenu}
        {menuBreak}
        {pageBody}
      </PrimeReactProvider>
    </>
  ),
})