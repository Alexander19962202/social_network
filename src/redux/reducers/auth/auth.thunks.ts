import {Dispatch} from "react";
import {AuthAction, AuthThunk, SetCaptchaUrlAction, SetAuthUserDataAction} from "./auth.types";
import {authAPI, securityAPI} from "../../../api/Api";
import {setCaptchaUrlAC, setAuthUserDataAC} from "./auth.action-creators";
import {FormAction, stopSubmit} from "redux-form";

export const getAuthUserData = () => async (dispatch: Dispatch<SetAuthUserDataAction>) => {
  let response = await authAPI.authMe();
  if (response.resultCode === 0) {
    dispatch(setAuthUserDataAC(response.data, true));
  }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: Dispatch<AuthAction | AuthThunk | FormAction>) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0)
    dispatch(getAuthUserData())
  else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
    dispatch(stopSubmit("Login", {_error: message}));
  }
};

export const logout = () => async (dispatch: Dispatch<SetAuthUserDataAction>) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0)
    dispatch(setAuthUserDataAC(null, false));
};

export const getCaptchaUrl = () => async (dispatch: Dispatch<SetCaptchaUrlAction>) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(setCaptchaUrlAC(captchaUrl));
}
