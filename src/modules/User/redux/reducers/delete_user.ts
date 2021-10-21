import {DeleteUserAction, DeleteUserState} from "../models";
import {
  CLICK_DELETE_USER_BUTTON,
  DELETE_USER,
  DELETE_USER_ERROR,
  DELETE_USER_SUCCESS,
  SHOW_DELETE_USER_CONFIRM
} from "../constant";

const initState: DeleteUserState = {
  loading: false,
  show: false,
  canDelete: true,
  param: {
    code: "",
  },
  message: "",
  error: undefined
}

export default (state = initState,  {type, show, message, canDelete,  param, error}: DeleteUserAction): DeleteUserState =>{

  switch (type) {
    case CLICK_DELETE_USER_BUTTON:{
      return {
        ...state,
        param: param
      }
    }

    case SHOW_DELETE_USER_CONFIRM:
      return {
        ...state,
        show: !!show,
        message: message,
        canDelete: !!canDelete
      }

    case DELETE_USER:
      return {
        ...state,
        loading: true,
        error: undefined,
        param: param
      }

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      }

    case DELETE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: error
      }

    default:
      return state;
  }
}
