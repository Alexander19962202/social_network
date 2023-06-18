import {
  SET_CAPTCHA_URL,
  SetCaptchaUrlAction,
  SET_AUTH_USER_DATA,
  SetAuthUserDataAction,
  IAuthData,
} from '../auth.types';
import { initialState } from '../auth.initial-state';

export const setAuthUserDataAC = (authUserData: IAuthData | null, isAuth: boolean): SetAuthUserDataAction => {
  return {
    type: SET_AUTH_USER_DATA,
    authUserData: authUserData
      ? { ...authUserData, isAuth, captchaURL: null }
      : { ...initialState.authUserData, isAuth, captchaURL: null },
  };
};

export const setCaptchaUrlAC = (captchaURL: string): SetCaptchaUrlAction => ({
  type: SET_CAPTCHA_URL,
  captchaURL,
});
