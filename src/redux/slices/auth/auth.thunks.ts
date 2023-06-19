import { authAPI, securityAPI } from 'src/api/api';
import { stopSubmit } from 'redux-form';
import { LoginResultCode, ResultCode } from 'src/api/api.types';
import { AppAsyncThunkAction } from 'src/redux/slices/common/common.types';
import { setAuthUserData, setCaptchaURL } from 'src/redux/slices/auth/auth.slice';
import { AnyAction } from 'redux';
import { initialState } from 'src/redux/slices/auth/auth.initial-state';

export const getAuthUserData = (): AppAsyncThunkAction<AnyAction> => async dispatch => {
  const response = await authAPI.authMe();
  if (response.resultCode === ResultCode.OK) {
    const { id, email, login } = response.data;
    dispatch(setAuthUserData({ id, email, login, isAuth: true, captchaURL: null }));
  }
};

export const login =
  (email: string, password: string, rememberMe?: boolean, captcha?: string): AppAsyncThunkAction<AnyAction> =>
  async dispatch => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.resultCode === ResultCode.OK) {
      return dispatch(getAuthUserData());
    }

    if (response.resultCode === LoginResultCode.NEED_TO_GET_CAPTCHA_URL) {
      return dispatch(getCaptchaUrl());
    }

    let message = response.messages.length > 0 ? response.messages[0] : 'Some error';
    dispatch(stopSubmit('Login', { _error: message }));
  };

export const logout = (): AppAsyncThunkAction<AnyAction> => async dispatch => {
  let response = await authAPI.logout();
  if (response.resultCode === ResultCode.OK) {
    dispatch(setAuthUserData({ ...initialState.authUserData }));
  }
};

export const getCaptchaUrl = (): AppAsyncThunkAction<AnyAction> => async dispatch => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaURL = response.url;
  dispatch(setCaptchaURL({ captchaURL }));
};
