import {AuthState} from "./auth.types";

export const initialState: AuthState = {
  authUserData: {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaURL: null
  }
};
