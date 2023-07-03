export interface IAuthData {
  id: number;
  login: string | null;
  email: string | null;
}

export interface IAuthUserData extends IAuthData {
  isAuth: boolean;
  captchaURL: string | null;
}

export type AuthState = {
  authUserData: IAuthUserData;
};
