import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { GeistProvider, CssBaseline } from '@geist-ui/core';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2 bg-slate-800 text-blue-50 font-mono break-after-auto">
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
        <Link to="/adminpanel" className="text-slate-800 ml-24">
          a
        </Link>
      </div>
      <hr className="border-t-1 border-slate-700"/>
      <div className="bg-slate-800 bg-cover font-mono">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})