import {all, takeLatest} from "redux-saga/effects";
import {GET_ALL_GROUP_REST_API} from "../constants";
import {getAllGroupRestApiAsync} from "./get_group_rest_api";


export default function* root(){
  return all([
    yield takeLatest(GET_ALL_GROUP_REST_API, getAllGroupRestApiAsync),
  ]);
}
