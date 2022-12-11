import {
  AuthUserData,
  SET_CAPTCHA_URL,
  SetCaptchaUrlAction,
  SET_AUTH_USER_DATA,
  SetAuthUserDataAction
} from "./auth.types";
import {initialState} from "./auth.initial-state";

export const setAuthUserDataAC = (authUserData: AuthUserData | null, isAuth: boolean): SetAuthUserDataAction => {
  return {
    type: SET_AUTH_USER_DATA,
    authUserData: authUserData ? {...authUserData, isAuth} : {...initialState.authUserData, isAuth},
  }
};

export const setCaptchaUrlAC = (captchaURL: string): SetCaptchaUrlAction => ({
  type: SET_CAPTCHA_URL,
  captchaURL
});
