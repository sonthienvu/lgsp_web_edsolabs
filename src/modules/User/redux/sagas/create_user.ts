import {CreateUserAction} from "../models";
import {createUser} from "../service/apis";
import {createUserError, createUserSuccess, showCreateUserForm} from "../action/create_user";
import {put} from "redux-saga/effects";
import {reloadData} from "../action/get_users";
import {NotificationError, NotificationSuccess} from "../../../../components/Notification/Notification";
import {AppError} from "../../../../models/common";


export function* createUserAsync(action: CreateUserAction){
  try {
    const rs = yield createUser(action.params);
    yield put(createUserSuccess());
    yield put(showCreateUserForm(false));
    yield put(reloadData());
    if(rs.rc == 0){
      NotificationSuccess('Thêm mới thành công', rs.rd);
    }else {
      NotificationError("Xảy ra lỗi", rs.rd)
    }
  }catch (e){
    yield put(createUserError(new AppError(e.message)));
  }
}
