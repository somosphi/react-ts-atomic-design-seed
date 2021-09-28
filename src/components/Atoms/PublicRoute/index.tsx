import { Route, Redirect, RouteProps } from 'react-router-dom'

interface PrivateRouteProps extends RouteProps {
  component: any
}

export default function PublicRoute({
  component: Component,
  ...rest
}: PrivateRouteProps) {
  const isAuthed = false

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuthed ? (
          <Redirect
            to={{
              pathname: '/dashboard',
              state: { from: routeProps.location },
            }}
          />
        ) : (
          <Component {...routeProps} />
        )
      }
    />
  )
}
