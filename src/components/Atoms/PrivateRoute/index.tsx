import { Route, Redirect, RouteProps } from 'react-router-dom'

interface PrivateRouteProps extends RouteProps {
  component: any
}

export default function PrivateRoute({
  component: Component,
  ...rest
}: PrivateRouteProps) {
  const isAuthed = false

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuthed ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  )
}
