import axios from 'axios';
import {getToken} from '../helpers/token';
import {AppError, ResponseBase} from 'src/models/common';
import store from '../redux/store';
import {logout} from '../modules/Auth/redux/actions';
import {NotificationError} from 'src/components/Notification/Notification';
import FileSaver from 'file-saver';
import moment from 'moment';
import env from '../configs/env';

// const API_PATH = process.env.REACT_APP_API_URL;
// const API_PATH = env.localApIUri;
const API_PATH = env.apiUri;

export const ResponseCode = {
  Ok: 0,
  Created: 201,
  TokenTimeout: 6,
  AssignedShift: 614,
  PackageTimesheet: 7,
  ConfirmShift: 900,
  CantDelete: 619,
  CameraCategoryExist: 1001,
  CardIdExist: 401,
  InvalidBirthday: 1101,
  CameraAreaExist: 1023,
  CardNumberExist: 1107,
  CameraCodeExist: 1025,
  CannotChangeTypeArea: 1026,
};

let count = 0;

const getOptions = (data?: any) => ({
  transformResponse: [
    function (body: string) {
      const data: ResponseBase = JSON.parse(body);
      if (data?.rc?.code !== ResponseCode.TokenTimeout) {
        return data;
      }
      if (data?.rc?.code === ResponseCode.TokenTimeout) {
        // Refresh token
        count++;
        if (count === 1) {
          NotificationError('Có lỗi', data.rc.desc);
        }
        store.dispatch(logout());
        return Promise.reject(data);
      }
      throw new AppError(data.rc.desc, data.rc.code);
    },
  ],
  data: data,
});

export const AXIOS = axios;

axios.interceptors.request.use(
  function (config) {
    let _token: any = localStorage.getItem('auth-n-token');
    if (_token) {
      _token = JSON.parse(_token);
      // config.headers.token = _token.token;
      config.headers.Authorization = _token.token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const POST = <T = any>(path: string, params: any) => {
  return axios.post(API_PATH + '/' + path, params, getOptions()).then<T>(response => {
    return response.data;
  });
};

export const POSTIMAGE = <T = any>(path: string, params: any, {}) => {
  return axios
    .post(API_PATH + '/' + path, params, {
      ...getOptions(),
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then<T>(response => response.data);
};

export const POSTEXCEL = <T = any>(path: string, params: any) => {
  let _token: any = localStorage.getItem('auth-n-token');
  if (_token) {
    _token = JSON.parse(_token);
    const options = {
      method: 'POST',
      responseType: 'arrayBuffer',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json; charset=utf-8',
        'Accept-Language': 'vi',
        token: _token.token,
      },
    };

    return fetch(API_PATH + '/' + path, options)
      .then(result => {
        if (result && result.status === 200) {
          const a = result.blob().then((res: any) => {
            const myBlob = new Blob([res], {
              // encoding: 'UTF-8',
              type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8',
            });
            FileSaver.saveAs(myBlob, `${params.fileName} ${moment().format("DD/MM/YYYY")}.xlsx`);
          });
          return Promise.resolve('success');
        } else if (result && result.status === 500) {
          NotificationError("Có lỗi", "Không tìm thấy template")
        } else if (result && result.status === 403) {
          NotificationError("Có lỗi", "UserPage không có quyền export")
        } else if (result && result.status === 413) {
          NotificationError("Có lỗi", "Không thể export file lớn 6.000 bản ghi")
        } else {
          return Promise.resolve('fail');
        }
      })
      .catch(err => {
        console.log('err => ', err);
        return Promise.reject(err);
      });
  }
};

export const GET = <T extends {}>(path: string, params: any = {}): Promise<T> => {
  const _params = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
  return axios
    .get(API_PATH + '/' + path + (_params !== '' ? '?' + _params : ''), getOptions())
    .then(response => response.data as T);
};

export const PUT = (path: string, params?: any): Promise<any> => {
  return axios.put(API_PATH + '/' + path, params, getOptions()).then(response => response.data as any);
};

export const PUTIMAGE = <T = any>(path: string, params: any, {}) => {
  return axios
    .put(API_PATH + '/' + path, params, {
      ...getOptions(),
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then<T>(response => response.data);
};

export const DELETE = (path: string, params?: any) => {
  return axios.delete(API_PATH + '/' + path, getOptions(params)).then(response => response.data);
};

export const EXPORT = <T extends {}>(path: string, params: any = {}): Promise<T> => {
  const _params = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
  return axios
    .get(API_PATH + '/' + path + (_params !== '' ? '?' + _params : ''), {
      responseType: 'blob',
      headers: {
        token: getToken(),
      },
    })
    .then(response => response.data as T);
};

export const FAKE_DATA = <T extends {}>(path: string, params: any = {}): Promise<T> => {
  const _params = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
  return axios
    .get('/' + path + (_params !== '' ? '?' + _params : ''), getOptions())
    .then(response => response.data as T);
};
