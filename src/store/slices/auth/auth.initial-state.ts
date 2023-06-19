import { AuthState } from './auth.types';

export const initialState: AuthState = {
  authUserData: {
    id: 0,
    login: null,
    email: null,
    isAuth: false,
    captchaURL: null,
  },
};
