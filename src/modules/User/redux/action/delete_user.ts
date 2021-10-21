import {DeleteUserAction, DeleteUserParam} from "../models";
import {
  CLICK_DELETE_USER_BUTTON,
  DELETE_USER,
  DELETE_USER_ERROR,
  DELETE_USER_SUCCESS,
  SHOW_DELETE_USER_CONFIRM
} from "../constant";


export const clickDeleteUserButton = (code: string) : DeleteUserAction => {
  return {
    type: CLICK_DELETE_USER_BUTTON,
    param: {
      code: code
    }
  }
}

export const showDeleteUserConfirm = (show: boolean, message?: string, canDelete?: boolean) : DeleteUserAction => {
  return {
    type: SHOW_DELETE_USER_CONFIRM,
    show: show,
    message: message,
    canDelete: canDelete
  }
}

export const deleteUser = (param: DeleteUserParam) : DeleteUserAction =>{
  return {
    type: DELETE_USER,
    param: param
  }
}

export const deleteUserSuccess = () : DeleteUserAction =>{
  return {
    type: DELETE_USER_SUCCESS,
  }
}

export const deleteUserError = (error : DeleteUserAction['error']) : DeleteUserAction =>{
  return {
    type: DELETE_USER_ERROR,
    error : error
  }
}
