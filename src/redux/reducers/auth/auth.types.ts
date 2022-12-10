// ----- ACTION TYPES -----
import {Dispatch} from "react";

export type SET_AUTH_USER_DATA_TYPE = 'AUTH/SET_AUTH_USER_DATA';
export type GET_CAPTCHA_URL_TYPE = 'AUTH/GET_CAPTCHA_URL';

// ----- ACTION TYPE CONSTS -----
export const SET_AUTH_USER_DATA: SET_AUTH_USER_DATA_TYPE = 'AUTH/SET_AUTH_USER_DATA';
export const GET_CAPTCHA_URL: GET_CAPTCHA_URL_TYPE = 'AUTH/GET_CAPTCHA_URL'

// ----- ACTIONS -----
export type SetAuthUserDataAction = {
  type: SET_AUTH_USER_DATA_TYPE,
  authUserData: AuthUserData
}
export type GetCaptchaUrlAction = {
  type: GET_CAPTCHA_URL_TYPE,
  captchaURL: string
}

export type AuthThunk = (dispatch: Dispatch<AuthAction>) => Promise<void>
export type AuthAction = SetAuthUserDataAction | GetCaptchaUrlAction

// ----- STATE TYPES -----
export type AuthUserData = {
  id: number | null,
  login: string | null,
  email: string | null,
  isAuth: boolean | null,
  captchaURL: string | null
}
export type AuthState = {
  authUserData: AuthUserData
}
