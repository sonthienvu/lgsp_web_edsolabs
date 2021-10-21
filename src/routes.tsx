import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import UserPage from './modules/User/components/UserPage';

import {RootState} from './redux/reducers';
import GroupRestApiPage from "./modules/GroupRestApi/components/GroupRestApiPage";
import RestApiPage from "./modules/RestApi/components/RestApiPage";
import DataServicePage from "./modules/DataService/components/DataServicePage";
import DataSourcePage from "./modules/DataServiceDetail/DataSource/components/DataSourcePage";
import QueryPage from "./modules/DataServiceDetail/Query/components/QueryPage";

const mapStateToProps = (state: RootState) => {
  return {
    isLogin: !!state.auth.auth.data?.token,
    auth: state.auth.auth.data,
  };
};

const connector = connect(mapStateToProps, {});
type PropsFromRedux = ConnectedProps<typeof connector>;

const Routes = (props: PropsFromRedux) => {
  return (
    <div>
      <Switch>
        <Route path="/users" component={UserPage} isLogin={props.isLogin}/>
        <Route path="/group-rest-api" component={GroupRestApiPage} isLogin={props.isLogin}/>
        <Route path="/group-rest-api-detail/:groupId" component={RestApiPage} isLogin={props.isLogin}/>
        <Route path="/data-service" component={DataServicePage} isLogin={props.isLogin}/>
        <Route path="/data-service-detail/:dataServiceId" component={DataSourcePage} isLogin={props.isLogin}/>
        <Route path="/data-source-detail/:dataSourceId" component={QueryPage} isLogin={props.isLogin}/>
        <Redirect exact from="/*" to={'/home/' + Date.now()}/>
      </Switch>
    </div>
  );
};

export default  connector(Routes);
