import { Route } from 'react-router-dom'
import Login from './Login'

const AuthAccount = () => {
  return (
    <>
      <Route exact path='/login' component={Login} />
      <Route exact path='/' component={Login} />
    </>
  )
}

export default AuthAccount
