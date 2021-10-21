import {combineReducers} from "redux";
import {GetDataServiceState, GetSingleDataServiceState} from "../models";
import getState from './get_data_services'
import getSingleState from './get_single_data_service'

export interface DataServiceModuleState{
  getState: GetDataServiceState;
  getSingleState: GetSingleDataServiceState;
}

export default combineReducers<DataServiceModuleState>({
  getState: getState,
  getSingleState: getSingleState,
})
