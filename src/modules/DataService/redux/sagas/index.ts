import {all, takeLatest} from "redux-saga/effects";
import {GET_ALL_DATA_SERVICE, GET_SINGLE_DATA_SERVICE} from "../constants";
import {getAllDataServiceAsync} from "./get_data_services";
import {getSingleDataServiceAsync} from "./get_single_data_service";

export default function* root(){
  return all([
    yield takeLatest(GET_ALL_DATA_SERVICE, getAllDataServiceAsync),
    yield takeLatest(GET_SINGLE_DATA_SERVICE, getSingleDataServiceAsync),
  ]);
}
