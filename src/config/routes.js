// Layouts
import { AdminLayout, BasicLayout } from '../layouts';

// Pages
import {
  AdminHome,
  AdminSignIn,
  Home,
  Contact,
  Error404
} from '../pages';

const routes = [
  {
    path: '/admin',
    Component: AdminLayout,
    exact: false,
    routes: [
      {
        path: '/admin',
        Component: AdminHome,
        exact: true
      },
      {
        path: '/admin/login',
        Component: AdminSignIn,
        exact: true
      },
      {
        Component: Error404,
      }
    ]
  },
  {
    path: '/',
    Component: BasicLayout,
    exact: false,
    routes: [
      {
        path: '/',
        Component: Home,
        exact: true
      },
      {
        path: '/contact',
        Component: Contact,
        exact: true
      },
      {
        Component: Error404,
      }
    ]
  }
]

export {
  routes
}