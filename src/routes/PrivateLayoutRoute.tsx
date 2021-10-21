import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router';
import DashBoardLayout from '../components/layouts/DashBoardLayut';
import { useAppSelector } from '../redux/hooks';
export interface IPrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}
const PrivateLayoutRoute: React.FC<IPrivateRouteProps> = ({ component: Component, ...rest }) => {
  const isLogin = useAppSelector(state => !!state.auth.auth.data?.token)
  return (
    <Route
      {...rest}
      render={props =>
        isLogin ? (
          <DashBoardLayout>
            <Component {...props} />
          </DashBoardLayout>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateLayoutRoute;
