import {AppError, ListResponseBase} from "src/models/common";


export interface UserEntity{
  id?: string;
  username: string;
  fullName: string;
  email: string;
  dateOfBirth: string;
  phone: string;
  roleCode: string,
  roleName?: string,
  active?: boolean;
}

export interface GetUserParams {
  page?: number;
  size?: number;
  key?: string;
  status?: number;
}

export interface GetUserAction{
  type: string,
  params?: GetUserParams,
  payload?: ListResponseBase<UserEntity>
  error?: AppError,
}

export interface GetUserState{
  loading: boolean,
  params?: GetUserParams,
  total: number,
  rows: UserEntity[]
  error?: AppError,
  flag_reload: boolean
}

export interface GetUserResponse {
  error?: AppError;
  payload?: ListResponseBase<UserEntity>
}
export interface CreateUserParams {
  username: string;
  password?: string,
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  role?: number;
}

export interface CreateUserAction{
  type: string,
  show?: boolean,
  params?: CreateUserParams,
  error?: AppError
}

export interface CreateUserState{
  loading: boolean,
  show: boolean,
  params: CreateUserParams,
  error?: AppError
}

export interface UpdateUserAction extends CreateUserAction{
  originData?: UserEntity
}

export interface UpdateUserState extends CreateUserState{
  originData?: UserEntity
}

export interface DeleteUserParam{
  code: string
}

export interface DeleteUserAction{
  type: string,
  show?: boolean,
  param?: DeleteUserParam,
  error?: AppError,
  canDelete?: boolean,
  message?: string,
}

export interface DeleteUserState{
  loading: boolean,
  show: boolean,
  param?: DeleteUserParam,
  error?: AppError,
  canDelete?: boolean,
  message?: string,
}
