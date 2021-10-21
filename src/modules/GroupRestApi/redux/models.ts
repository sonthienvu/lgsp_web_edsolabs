import {AppError, ListResponseBase} from "../../../models/baseResponse";

export interface GroupRestApiEntity{
  id: string;
  uuid: string;
  name: string;
  description: string;
  context: string;
  version: string;
  endpoint_url: string;
  production_endpoint_url?: string;
  sandbox_endpoint_url?: string;
  policies: string[];
  status: string;
  active: string;
  create_by: string;
  create_at: number;
  date: number;
}

export interface GetGroupRestApiParams {
  text?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  size?: number;
}

export interface GetGroupRestApiDetailParams {
  id: string;
  page?: number;
  size?: number;
}


export interface GetGroupRestApiAction{
  type: string,
  params?: GetGroupRestApiParams,
  payload?: ListResponseBase<GroupRestApiEntity>
  error?: AppError,
}

export interface GetGroupRestApiState{
  loading: boolean,
  params?: GetGroupRestApiParams,
  error?: AppError,
  total: number,
  rows: GroupRestApiEntity[],
  flag_reload: boolean
}

export interface GroupRestApiData{
  id: string;
  uuid: string;
  name: string;
  description: string;
  context: string;
  version: string;
  endpoint_url: string;
  policies: string;
  status: string;
  active: string;
  createBy: string;
  time: string;
}

export interface CreateGroupRestApiParams{
  name: string,
  context: string,
  version: string,
  policies: string[],
  endpointUrl: string
}

export interface CreateGroupRestApiAction{
  type: string,
  show?: boolean,
  params?: CreateGroupRestApiParams
  addPointParam?: string,
  error?: AppError
}

export interface CreateGroupRestApiState{
  loading: boolean,
  show: boolean,
  params: CreateGroupRestApiParams,
  error?: AppError
}
