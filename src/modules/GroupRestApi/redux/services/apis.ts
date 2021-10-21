import {GET} from '../../../../services';
import {GroupRestApiEntity} from "../models";
import {RestApiEntity} from "../../../RestApi/redux/models";
import {ListResponseBase} from "../../../../models/baseResponse";


export const searchGroupRestApi = async (params?: any): Promise<ListResponseBase<GroupRestApiEntity>> => {
  const response = (await GET('core-svc/group-rest-api/search', params)) as ListResponseBase<GroupRestApiEntity>;

  return {
    total: response.total,
    rows: response?.rows || [],
    code: response.code,
    message: response.message,
  };
};

export const getGroupRestApiDetail = async (groupId?: any): Promise<ListResponseBase<RestApiEntity>> => {
  const response = (await GET(`core-svc/group-rest-api/find/${groupId}`)) as ListResponseBase<RestApiEntity>;
  return response;
};

// export const createGroupRestAPI = (params?: CreateGroupRestAPIParams): Promise<any> => {
//   return POST('group-rest-api/account/create-account', params);
// }
//
// export const updateGroupRestAPI = (params?: CreateGroupRestAPIParams): Promise<any> => {
//   return POST('group-rest-api/account/update-account', params);
// }
//
// export const deleteGroupRestAPI = (param: DeleteGroupRestAPIParam | undefined): Promise<any> => {
//   return POST('group-rest-api/account/delete-account', param);
// }
//
// export const checkDeleteGroupRestAPI = (param: DeleteGroupRestAPIParam | undefined): Promise<any> => {
//   return POST('group-rest-api/account/check-delete-account', param);
// }

