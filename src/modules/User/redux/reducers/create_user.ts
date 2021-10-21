import {CreateUserAction, CreateUserState} from "../models";
import {CREATE_USER, CREATE_USER_ERROR, CREATE_USER_SUCCESS, SHOW_CREATE_USER_FORM} from "../constant";

const initState : CreateUserState = {
  loading: false,
  show: false,
  error: undefined,
  params: {
    username: "",
    fullName: "",
    password: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    role: -1,
  }
}

export default (state = initState, {type, show, params, error}: CreateUserAction): CreateUserState =>{
  switch (type) {
    case SHOW_CREATE_USER_FORM :
      return {
        ...state,
        show: !!show
      }

    case CREATE_USER:
      return {
        ...state,
        loading: true,
        params: {
          ...state.params,
          ...params
        }
      }

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading:false
      }

    case CREATE_USER_ERROR:
      return {
        ...state,
        loading:false,
        error: error
      }

    default:
      return state;
  }
}
