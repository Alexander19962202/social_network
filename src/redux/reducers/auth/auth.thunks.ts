import {SetAuthUserDataAction, SetCaptchaUrlAction} from "./auth.types";
import {authAPI, securityAPI} from "src/api/api";
import {setAuthUserDataAC, setCaptchaUrlAC} from "src/redux/reducers/auth/auth.action-creators";
import {FormAction, stopSubmit} from "redux-form";
import {LoginResultCode, ResultCode} from "src/api/api.types";
import {AppAsyncThunkAction} from "../common/common.types";

export const getAuthUserData = (): AppAsyncThunkAction<SetAuthUserDataAction> => async (dispatch) => {
  let response = await authAPI.authMe();
  if (response.resultCode === ResultCode.OK) {
    dispatch(setAuthUserDataAC(response.data, true));
  }
};

export const login = (email: string, password: string, rememberMe?: boolean, captcha?: string): AppAsyncThunkAction<FormAction> =>
  async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);

  if (response.resultCode === ResultCode.OK) {
    return dispatch(getAuthUserData())
  }

  if (response.resultCode === LoginResultCode.NEED_TO_GET_CAPTCHA_URL) {
    return dispatch(getCaptchaUrl());
  }

  let message = response.messages.length > 0 ? response.messages[0] : "Some error";
  dispatch(stopSubmit("Login", {_error: message}));
};

export const logout = (): AppAsyncThunkAction<SetAuthUserDataAction> => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.resultCode === ResultCode.OK) {
    dispatch(setAuthUserDataAC(null, false));
  }
};

export const getCaptchaUrl = (): AppAsyncThunkAction<SetCaptchaUrlAction> => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.url;
  dispatch(setCaptchaUrlAC(captchaUrl));
}
