import { Action } from "redux";

// ----- ACTION TYPES -----
export type SET_AUTH_USER_DATA_TYPE = 'AUTH/SET_AUTH_USER_DATA';
export type SET_CAPTCHA_URL_TYPE = 'AUTH/SET_CAPTCHA_URL';

// ----- ACTION TYPE CONSTS -----
export const SET_AUTH_USER_DATA: SET_AUTH_USER_DATA_TYPE = 'AUTH/SET_AUTH_USER_DATA';
export const SET_CAPTCHA_URL: SET_CAPTCHA_URL_TYPE = 'AUTH/SET_CAPTCHA_URL'

// ----- ACTIONS/THUNKS -----
export type SetAuthUserDataAction = Action<SET_AUTH_USER_DATA_TYPE> & { authUserData: IAuthUserData }
export type SetCaptchaUrlAction = Action<SET_CAPTCHA_URL_TYPE> & { captchaURL: string }
export type AuthAction = SetAuthUserDataAction | SetCaptchaUrlAction

// ----- STATE TYPES -----
export interface IAuthData {
  id: number,
  login: string | null,
  email: string | null,
}
export interface IAuthUserData extends IAuthData{
  isAuth: boolean,
  captchaURL: string | null
}
export type AuthState = {
  authUserData: IAuthUserData
}
