import {ListResponseBase} from "../../../../models/baseResponse";
import {GET} from "../../../../services";
import {DataServiceEntity} from "../models";

export const searchDataService = async (params?: any): Promise<ListResponseBase<DataServiceEntity>> => {
  const response = (await GET('core-svc/data-service/search', params)) as ListResponseBase<DataServiceEntity>;
  return {
    total: response.total,
    rows: response?.rows || [],
    code: response.code,
    message: response.message,
  };
};

export const getDataServiceDetail = async (groupId?: any): Promise<ListResponseBase<DataServiceEntity>> => {
  const response = (await GET(`core-svc/data-service/find/${groupId}`)) as ListResponseBase<DataServiceEntity>;
  return response;
};
