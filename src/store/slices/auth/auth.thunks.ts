import { stopSubmit } from 'redux-form';

import { authAPI, securityAPI } from 'src/api/api';
import { ResultCode } from 'src/api/api.types';
import { initialState } from 'src/store/slices/auth/auth.initial-state';
import { setAuthUserData, setCaptchaURL } from 'src/store/slices/auth/auth.slice';
import { createAppAsyncThunk } from 'src/store/store';

export const getAuthUserData = createAppAsyncThunk('auth/getAuthUserData', async (_, { dispatch }) => {
  const response = await authAPI.authMe();
  if (response.resultCode === ResultCode.OK) {
    const { id, email, login } = response.data;
    dispatch(
      setAuthUserData({
        id,
        email,
        login,
        isAuth: true,
        captchaURL: null,
      }),
    );
  }
});

export const getCaptchaUrl = createAppAsyncThunk('auth/getCaptchaUrl', async (_, { dispatch }) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaURL = response.url;
  dispatch(setCaptchaURL({ captchaURL }));
});

export const login = createAppAsyncThunk<{
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: string;
}>('auth/login', async ({ email, password, rememberMe, captcha }, { dispatch }) => {
  const response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.resultCode === ResultCode.OK) {
    dispatch(getAuthUserData());
    return;
  }

  if (response.resultCode === ResultCode.NEED_TO_GET_CAPTCHA_URL) {
    dispatch(getCaptchaUrl());
    return;
  }

  const message = response.messages.length > 0 ? response.messages[0] : 'Some error';
  dispatch(stopSubmit('Login', { _error: message }));
});

export const logout = createAppAsyncThunk('auth/logout', async (_, { dispatch }) => {
  const response = await authAPI.logout();
  if (response.resultCode === ResultCode.OK) {
    dispatch(setAuthUserData({ ...initialState.authUserData }));
  }
});
