import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { routes } from '../config/routes';

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          {routes.map((route, idx) => (
            <RouteWithSubRoutes
              key={idx}
              {...route}
            />
          ))
          }
        </Switch>
      </>
    </Router>
  )
}

const RouteWithSubRoutes = ({ path, exact, Component, routes }) => (
  <Route
    path={path}
    exact={exact}
    render={
      props => (
        <Component
          routes={routes}
          {...props}
        />
      )
    }
  />
);