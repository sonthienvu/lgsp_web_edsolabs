import {GetGroupRestApiAction, GetGroupRestApiState} from "../models";
import {
  GET_ALL_GROUP_REST_API,
  GET_ALL_GROUP_REST_API_ERROR,
  GET_ALL_GROUP_REST_API_SUCCESS,
  RELOAD_DATA_GROUP_REST_API
} from "../constants";


const initState: GetGroupRestApiState = {
  loading: false,
  rows: [],
  total: 0,
  flag_reload: false,
  params: undefined,
  error: undefined
};

export default (state = initState, {type, payload, error, params}: GetGroupRestApiAction): GetGroupRestApiState => {
  switch (type) {
    case GET_ALL_GROUP_REST_API:
      return {
        ...state,
        loading: true,
        params: {
          ...state.params,
          ...params
        }
      };

    case GET_ALL_GROUP_REST_API_SUCCESS:
      return {
        ...state,
        loading: false,
        rows: payload?.rows.map((item, index) => {
          return {
            ...item,
            index
          }
        }) || [],
        total: payload?.total || 0,
      };

    case GET_ALL_GROUP_REST_API_ERROR:
      return {
        ...state,
        error,
        loading: false,
      };
    case RELOAD_DATA_GROUP_REST_API:
      return {
        ...state,
        flag_reload: !state.flag_reload
      }

    default:
      return state;
  }


}
