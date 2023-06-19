import {
  SET_AUTH_USER_DATA,
  SET_CAPTCHA_URL,
  SetAuthUserDataAction,
  SetCaptchaUrlAction,
} from 'src/store/slices/auth/old/auth.types';
import { IAuthData } from 'src/store/slices/auth/auth.types';
import { initialState } from 'src/store/slices/auth/auth.initial-state';

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
