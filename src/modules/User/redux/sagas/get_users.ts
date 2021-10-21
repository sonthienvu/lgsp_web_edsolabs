import {put} from 'redux-saga/effects';
import {ActionBase} from "../../../../models/common";
import {getAllUsersError, getAllUsersSuccess} from "../action/get_users";
import {searchUsers} from "../service/apis";

export function* getAllUserAsync(action : ActionBase<{}>){
  try {
    const users = yield searchUsers(action.params);
    yield put(getAllUsersSuccess(users));
  }catch (error){
    yield put(getAllUsersError(error));
  }
}

