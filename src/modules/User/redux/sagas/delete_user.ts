import {DeleteUserAction} from "../models";
import {checkDeleteUser, deleteUser} from "../service/apis";
import {deleteUserError, deleteUserSuccess, showDeleteUserConfirm} from "../action/delete_user";
import {put} from "redux-saga/effects";
import {reloadData} from "../action/get_users";
import {NotificationError, NotificationSuccess} from "../../../../components/Notification/Notification";
import {AppError} from "../../../../models/common";


export function* deleteUserAsync(action: DeleteUserAction) {
  try {
    const rs = yield deleteUser(action?.param);
    yield put(deleteUserSuccess());
    yield put(showDeleteUserConfirm(false));
    yield put(reloadData());
    if(rs.rc === 0){
      NotificationSuccess('Xóa thành công', rs.rd);
    }else {
      NotificationError("Xảy ra lỗi", rs.rd);
    }
  } catch (e) {
    yield put(deleteUserError(new AppError(e.message)))
  }
}

export function* checkDeleteUserAsync(action: DeleteUserAction) {
  try {
    const check = yield checkDeleteUser(action?.param);
    let message = "";
    let canDelete = true;
    if(check.rc != 0) {
      canDelete = false;
      message = check.rd;
    }
    yield put(showDeleteUserConfirm(true,message,canDelete));
  }catch (e) {
    NotificationError("Xảy ra lỗi", "Lỗi không xác định");
  }
}
