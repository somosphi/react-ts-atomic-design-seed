import { BrowserRouter, Switch } from 'react-router-dom'
import Internal from '@/components/Templates/Internal'
import PrivateRoute from '@/components/Atoms/PrivateRoute'
import AuthAccount from '@/pages/AuthAccount'
import Dashboard from '@/pages/Dashboard'
import PublicRoute from '@/components/Atoms/PublicRoute'

const TemplatePages = () => (
  <Internal>
    <PrivateRoute exact path='/dashboard' component={Dashboard} />
  </Internal>
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute exact path='/' component={AuthAccount} />
      <PublicRoute exact path='/login' component={AuthAccount} />
      <TemplatePages />
    </Switch>
  </BrowserRouter>
)

export default Routes
