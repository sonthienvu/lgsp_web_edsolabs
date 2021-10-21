import React from 'react';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Homepage from './modules/Homepage/homepage';
import GuestLayoutRoute from './routes/GuestLayoutRoute';
import PrivateLayoutRoute from './routes/PrivateLayoutRoute';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './constants/routes';
import DashBoardLayout from './components/layouts/DashBoardLayut';
import GuestLayout from './components/layouts/GuestLayout';
import PageNotFound from './components/PageNotFound';
import { useAppSelector } from './redux/hooks';


function App() {
  const isLogin = useAppSelector(state => !!state.auth.auth.data?.token)
  history.listen(() => {
    // props && props.showBreadcrumbs(undefined);
  });

  return (
    <div className="App">
        <Router history={history}>
          <Switch>
          <Route path='/' exact >
            <Redirect to="/home" />
          </Route>
          <Route path='/home' exact>
          {isLogin ? 
            <DashBoardLayout>
                <Homepage />
            </DashBoardLayout>
            : <GuestLayout>
            <Homepage />
           </GuestLayout>}
          </Route>
          {PUBLIC_ROUTES.map(route => {
             return <GuestLayoutRoute {...route} />
          })}

          {PRIVATE_ROUTES.map(route => {
             return <PrivateLayoutRoute {...route} />
          })}
          <Route path='*' exact={true} component={PageNotFound} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
