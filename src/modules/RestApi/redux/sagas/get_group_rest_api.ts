import {GetGroupRestApiAction} from "../models";
import {put} from "redux-saga/effects";
import {getGroupRestApiDetail} from "../../../GroupRestApi/redux/services/apis";
import {getGroupRestApiError, getGroupRestApiSuccess} from "../actions/get_group_rest_api";

export function* getGroupRestApiAsync(action: GetGroupRestApiAction){
  try {
    const rs = yield getGroupRestApiDetail(action.groupId);
    yield put(getGroupRestApiSuccess(rs));
  }catch (error){
    yield put(getGroupRestApiError(error));
  }
}
