import {CREATE_USER, CREATE_USER_ERROR, CREATE_USER_SUCCESS, SHOW_CREATE_USER_FORM} from "../constant";
import {CreateUserAction, CreateUserParams} from "../models";


export const showCreateUserForm = (show: boolean): CreateUserAction  => {
  return {
    type: SHOW_CREATE_USER_FORM,
    show: show
  }
}

export const createUser = (params: CreateUserParams): CreateUserAction => {
  return{
    type: CREATE_USER,
    params: params,
  }
}

export const createUserSuccess = () => {
  return{
      type: CREATE_USER_SUCCESS
  }
}

export const createUserError = (error: CreateUserAction['error']): CreateUserAction => {
  return{
    type: CREATE_USER_ERROR,
    error: error
  }
}



