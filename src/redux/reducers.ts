import {combineReducers} from 'redux';


//new
import user, {UserModuleState} from "../modules/User/redux/reducers";
import groupRestApi, {GroupRestApiModuleState} from "../modules/GroupRestApi/redux/reducers";
import restApi, {RestApiModuleState} from "../modules/RestApi/redux/reducers";
import dataService, {DataServiceModuleState} from "../modules/DataService/redux/reducers";
import dataSource, {DataSourceModuleState} from "../modules/DataServiceDetail/DataSource/redux/reducers";
import query, {QueryModuleState} from "../modules/DataServiceDetail/Query/redux/reducers";
// in
import auth, {AuthModuleState} from '../modules/Auth/redux/reducers';
import dashboard, {DashboardModuleState} from '../modules/Dashboard/redux/reducers';

export interface RootState {
  auth: AuthModuleState;
  dashboard: DashboardModuleState;

  // out
  // new
  user: UserModuleState;
  groupRestApi: GroupRestApiModuleState,
  restApi: RestApiModuleState,
  dataService: DataServiceModuleState,
  dataSource: DataSourceModuleState,
  query: QueryModuleState,
}

export default combineReducers<RootState>({
  auth,
  dashboard,

  // new
  user,
  groupRestApi,
  restApi,
  dataService,
  dataSource,
  query,
});
