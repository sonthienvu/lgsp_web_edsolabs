import {GetGroupRestApiState} from "../models";
import {combineReducers} from "redux";
import getState from "./get_group_rest_api"

export interface GroupRestApiModuleState{
  getState: GetGroupRestApiState;
}

export default combineReducers<GroupRestApiModuleState>({
  getState: getState
})
