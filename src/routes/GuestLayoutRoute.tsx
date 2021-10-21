import React from 'react';
import { Route, RouteProps } from 'react-router';
import GuestLayout from '../components/layouts/GuestLayout';
export interface IPublicRouteProps extends RouteProps {
  component: React.ComponentType<any>;
}

const GuestLayoutRoute : React.FC<IPublicRouteProps> = ({component: Component, ...rest}) => {  
  return (  
    <Route {...rest} render={props => (
      <GuestLayout>  
          <Component {...props} /> 
      </GuestLayout>  
    )} />  
  )  
};  

export default GuestLayoutRoute; 
