import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '@pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={Home}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
