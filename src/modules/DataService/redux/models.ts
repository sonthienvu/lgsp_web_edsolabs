import {AppError, ItemResponseBase, ListResponseBase} from "../../../models/baseResponse";

export interface DataServiceEntity{
  id: string;
  name: string;
  description: string;
  namespace: string;
  status: string;
  active: string;
  date: number;
  create_by: string;
  create_at: number;
}

export interface GetDataServiceParams {
  text?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  size?: number;
}

export interface GetDataServiceDetailParams {
  id: string;
  page?: number;
  size?: number;
}


export interface GetDataServiceAction{
  type: string,
  params?: GetDataServiceParams,
  payload?: ListResponseBase<DataServiceEntity>
  error?: AppError,
}

export interface GetDataServiceState{
  loading: boolean,
  params?: GetDataServiceParams,
  error?: AppError,
  total: number,
  rows: DataServiceEntity[],
  flag_reload: boolean
}

export interface GetSingleDataServiceAction{
  type: string,
  dataServiceId?: string,
  payload?: ItemResponseBase<DataServiceEntity>
  error?: AppError,
}

export interface GetSingleDataServiceState{
  loading: boolean,
  dataServiceId?: string,
  error?: AppError,
  data?: DataServiceEntity,
  flag_reload: boolean
}

export interface DataServiceData{
  id: string;
  name: string;
  description: string;
  namespace: string;
  status: string;
  createBy: string;
  time: string;
}
