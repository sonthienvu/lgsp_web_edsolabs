import Login from '../modules/Login';
import AccountManeger from '../modules/ManagerAccount';
import Register from '../modules/Register';
import ServicePage from '../modules/ServicePage';

export interface IRoute {
  name: string;
  path: string;
  component: React.ComponentType<any>;
  exact: boolean;
  subMenu?: string;
}
export const PUBLIC_ROUTES: IRoute[] = [
  {
    name: 'login',
    path: '/login',
    component: Login,
    exact: false,
  },
  {
    name: 'register',
    path: '/register',
    component: Register,
    exact: false,
  },
  {
    name: 'service',
    path: '/service',
    component: ServicePage,
    exact: false,
  },
];

export const PRIVATE_ROUTES: IRoute[] = [
  {
    name: 'account-managerment',
    path: '/account-managerment',
    component: AccountManeger,
    exact: false,
  },
];
