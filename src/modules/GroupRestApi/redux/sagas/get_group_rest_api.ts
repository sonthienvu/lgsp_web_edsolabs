import {getAllGroupRestApiError, getAllGroupRestApiSuccess} from "../actions/get_group_rest_api";
import {put} from "redux-saga/effects";
import {searchGroupRestApi} from "../services/apis";
import {GetGroupRestApiAction} from "../models";

export function* getAllGroupRestApiAsync(action: GetGroupRestApiAction){
  try {
    const rs = yield searchGroupRestApi(action.params);
    yield put(getAllGroupRestApiSuccess(rs));
  }catch (error){
    yield put(getAllGroupRestApiError(error));
  }
}
