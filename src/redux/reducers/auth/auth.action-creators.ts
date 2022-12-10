import {
  AuthUserData,
  GET_CAPTCHA_URL,
  GetCaptchaUrlAction,
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

export const getCaptchaUrlSuccess = (captchaURL: string): GetCaptchaUrlAction => ({
  type: GET_CAPTCHA_URL,
  captchaURL
});
