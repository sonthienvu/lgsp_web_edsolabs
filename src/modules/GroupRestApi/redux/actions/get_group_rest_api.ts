import {GetGroupRestApiAction, GetGroupRestApiParams} from "../models";
import {
  GET_ALL_GROUP_REST_API,
  GET_ALL_GROUP_REST_API_ERROR,
  GET_ALL_GROUP_REST_API_SUCCESS,
  RELOAD_DATA_GROUP_REST_API
} from "../constants";

export const getAllGroupRestApi = (params: GetGroupRestApiParams): GetGroupRestApiAction =>{
  return{
    type: GET_ALL_GROUP_REST_API,
    params: params
  }
}

export const getAllGroupRestApiSuccess = (resp: any): GetGroupRestApiAction => {
  return {
    type: GET_ALL_GROUP_REST_API_SUCCESS,
    payload: resp
  }
};

export const getAllGroupRestApiError = (error: GetGroupRestApiAction['error']): GetGroupRestApiAction => {
  return {
    type: GET_ALL_GROUP_REST_API_ERROR,
    error: error
  }
};

export const reloadData = () : GetGroupRestApiAction => {
  return {
    type: RELOAD_DATA_GROUP_REST_API,
  }
}
