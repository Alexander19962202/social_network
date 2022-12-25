import {Thunk} from "../common/common.types";

// ----- ACTION TYPES -----
export type SET_AUTH_USER_DATA_TYPE = 'AUTH/SET_AUTH_USER_DATA';
export type SET_CAPTCHA_URL_TYPE = 'AUTH/SET_CAPTCHA_URL';

// ----- ACTION TYPE CONSTS -----
export const SET_AUTH_USER_DATA: SET_AUTH_USER_DATA_TYPE = 'AUTH/SET_AUTH_USER_DATA';
export const SET_CAPTCHA_URL: SET_CAPTCHA_URL_TYPE = 'AUTH/SET_CAPTCHA_URL'

// ----- ACTIONS/THUNKS -----
export type SetAuthUserDataAction = { type: SET_AUTH_USER_DATA_TYPE, authUserData: AuthUserData }
export type SetCaptchaUrlAction = { type: SET_CAPTCHA_URL_TYPE, captchaURL: string }
export type AuthThunk = Thunk<AuthAction>
export type AuthAction = SetAuthUserDataAction | SetCaptchaUrlAction

// ----- STATE TYPES -----
export type AuthUserData = {
  id: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean,
  captchaURL: string | null
}
export type AuthState = {
  authUserData: AuthUserData
}
