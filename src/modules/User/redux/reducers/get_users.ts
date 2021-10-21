import {GET_ALL_USERS, GET_ALL_USERS_ERROR, GET_ALL_USERS_SUCCESS, RELOAD_DATA_USERS} from "../constant";
import {GetUserAction, GetUserState} from "../models";


const initState: GetUserState = {
  loading: false,
  rows: [],
  total: 0,
  flag_reload: false,
  params: undefined,
  error: undefined
};

export default (state = initState, {type, payload, error, params}: GetUserAction): GetUserState => {
  switch (type) {
    case GET_ALL_USERS: {
      return {
        ...state,
        loading: true,
        params: {
          ...state.params,
          ...params
        }
      };
    }

    case GET_ALL_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        rows: payload?.rows.map((item,index) =>{
          return {
            ...item,
            index
          }
        }) || [],
        total: payload?.total || 0,
      };
    }

    case GET_ALL_USERS_ERROR:{
      return {
        ...state,
        error,
        loading: false,
      };
    }

    case RELOAD_DATA_USERS:{
      return {
        ...state,
        flag_reload: !state.flag_reload
      }
    }
    default:
      return state;
  }
}
