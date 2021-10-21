import {UpdateUserAction, UpdateUserState} from "../models";
import {SHOW_UPDATE_USER_FORM, UPDATE_USER, UPDATE_USER_ERROR, UPDATE_USER_SUCCESS} from "../constant";

const initState: UpdateUserState = {
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
  },
  originData: undefined
}

export default (state = initState, {type, show, originData, params, error}: UpdateUserAction): UpdateUserState => {
  switch (type) {
    case SHOW_UPDATE_USER_FORM:
      return {
        ...state,
        show: !!show,
        originData: originData,
      }

    case UPDATE_USER:
      return {
        ...state,
        loading: true,
        error: undefined,
        params: {...state.params, ...params}
      }

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      }

    case UPDATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: error
      }

    default:
      return state;
    }
  }
