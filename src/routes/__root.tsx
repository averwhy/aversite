import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2 bg-slate-800 text-blue-50">
        <Link to="/" className="[&.active]:font-bold">
          home
        </Link>{'  '}
        <Link to="/portfolio" className="[&.active]:font-bold">
          portfolio
        </Link>{'  '}
        <Link to="/gallery" className="[&.active]:font-bold">
          gallery
        </Link>{'  '}
        <Link to="/about" className="[&.active]:font-bold">
          about
        </Link>
      </div>
      
      <div className="bg-slate-800">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})