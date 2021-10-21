import {GET, POST} from '../../../../services';
import {User} from 'src/models/user';
import {CreateUserParams, DeleteUserParam, UserEntity} from "../models";
import {ListResponseBase} from "../../../../models/baseResponse";


export const searchUsers = async (params?: any): Promise<ListResponseBase<UserEntity>> => {
  const response = (await GET('account-svc/account/search', params)) as ListResponseBase<UserEntity>;
  return {
    total: response.total,
    rows: response?.rows || [],
    code: response.code,
    message: response.message,
  };
};

export const getUser = async (params?: any): Promise<ListResponseBase<User>> => {
  const response = (await GET('account-svc/account/find/', params)) as ListResponseBase<User>;
  return response;
};

export const createUser = (params?: CreateUserParams): Promise<any> => {
  return POST('account-svc/account/create-account', params);
}

export const updateUser = (params?: CreateUserParams): Promise<any> => {
  return POST('account-svc/account/update-account', params);
}

export const deleteUser = (param: DeleteUserParam | undefined): Promise<any> => {
  return POST('account-svc/account/delete-account', param);
}

export const checkDeleteUser = (param: DeleteUserParam | undefined): Promise<any> => {
  return POST('account-svc/account/check-delete-account', param);
}

export const checkExistUsername = (text: string): Promise<any> => {
  return GET(`account-svc/account/check-exist-username?username=${text}`);
}

export const checkExistEmail = (text: string): Promise<any> => {
  return GET(`account-svc/account/check-exist-email?email=${text}`);
}

export const checkExistPhone = (text: string): Promise<any> => {
  return GET(`account-svc/account/check-exist-phone?phone=${text}`);
}
