import {CreateUserAction} from "../models";
import {updateUser} from "../service/apis";
import {put} from "redux-saga/effects";
import {reloadData} from "../action/get_users";
import {NotificationError, NotificationSuccess} from "../../../../components/Notification/Notification";
import {AppError} from "../../../../models/common";
import {showUpdateUserForm, updateUserError, updateUserSuccess} from "../action/update_user";

export function* updateUserAsync(action: CreateUserAction){
  try {
    const rs = yield updateUser(action.params);
    yield put(updateUserSuccess());
    yield put(showUpdateUserForm(false));
    yield put(reloadData());
    if(rs.rc == 0){
      NotificationSuccess('Thêm mới thành công', rs.rd);
    }else {
      NotificationError("Xảy ra lỗi", rs.rd)
    }
  }catch (e){
    yield put(updateUserError(new AppError(e.message)));
  }
}
