import {put, take} from 'redux-saga/effects';
import * as apis from './../../services/apis';
import {LoginAction, loginError, loginSuccess, LoginSuccessAction, LOGOUT} from '../actions';
import {AppError} from '../../../../models/common';
import {setToken} from '../../../../helpers/token';
import {LoginResponse} from '../../types';
import history from 'src/history';
import {NotificationError, NotificationSuccess} from 'src/components/Notification/Notification';

const TOKEN_KEY = 'auth-n-token';

export function* loginAsync(action: LoginAction) {
  try {
    const loginPayload = yield apis.login(action.payload);
    if (loginPayload.code === 0) {
      NotificationSuccess("Thành công", loginPayload.message);
      localStorage.setItem(TOKEN_KEY, JSON.stringify(loginPayload || {}));
      yield put(loginSuccess(loginPayload));
    } else {
      NotificationError("Có lỗi", loginPayload.message);
      yield put(loginError(new AppError(loginPayload.message)));
    }
  } catch (error) {
    console.log("function*loginAsync -> error", error)
    yield put(loginError(new AppError(error.message)));
  }
}

export function loginSuccessAsync(action: LoginSuccessAction) {
  setToken(action.payload?.token);
  if (action.payload?.user && window.location.pathname === '/') {
    history.push('/home/');
  }
}

export function* loginCheckerAsync() {
  while (1) {
    const savedToken = localStorage.getItem(TOKEN_KEY);
    if (savedToken && savedToken !== '{}') {
      const loginResponse: LoginResponse = JSON.parse(savedToken);
      yield put(loginSuccess(loginResponse));
    }
    yield take(LOGOUT);
    localStorage.removeItem(TOKEN_KEY);
  }
}
