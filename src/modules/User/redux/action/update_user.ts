import {SHOW_UPDATE_USER_FORM, UPDATE_USER, UPDATE_USER_ERROR, UPDATE_USER_SUCCESS} from "../constant";
import {CreateUserParams, UpdateUserAction, UserEntity} from "../models";


export const showUpdateUserForm = (show: boolean, originData?: UserEntity) : UpdateUserAction => {
  return {
    type: SHOW_UPDATE_USER_FORM,
    show: show,
    originData: originData
  }
}

export const updateUser = (params : CreateUserParams): UpdateUserAction => {
  return {
    type: UPDATE_USER,
    params: params
  }
}

export const updateUserSuccess = () => {
  return{
    type: UPDATE_USER_SUCCESS
  }
}

export const updateUserError = (error: UpdateUserAction['error']): UpdateUserAction => {
  return{
    type: UPDATE_USER_ERROR,
    error: error
  }
}
