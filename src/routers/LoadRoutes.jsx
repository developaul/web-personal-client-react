import { Route, Switch } from 'react-router';

export const LoadRoutes = ({ routes }) => (
  <Switch>
    {routes.map(({ Component, ...rest }, idx) => (
      <Route
        key={idx}
        {...rest}
        component={Component}
      />
    ))}
  </Switch>
);