import {all} from 'redux-saga/effects';
import authSaga from '../modules/Auth/redux/sagas';
import dashboardSaga from '../modules/Dashboard/redux/sagas';

//new
import userSaga from '../modules/User/redux/sagas'
import groupRestApiSaga from '../modules/GroupRestApi/redux/sagas'
import restApiSaga from '../modules/RestApi/redux/sagas'
import dataServiceSaga from '../modules/DataService/redux/sagas'
import dataSourceSaga from '../modules/DataServiceDetail/DataSource/redux/sagas'
import querySaga from '../modules/DataServiceDetail/Query/redux/sagas'

import * as commonSaga from './common-saga';


export default function* rootSaga() {
  yield all([
    authSaga(),
    dashboardSaga(),
    // add new
    userSaga(),
    groupRestApiSaga(),
    restApiSaga(),
    dataServiceSaga(),
    dataSourceSaga(),
    querySaga(),
    commonSaga.checkErrorAsync(),
  ]);
}
