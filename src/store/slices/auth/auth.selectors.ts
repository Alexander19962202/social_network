import { RootState } from 'src/store/store';

export const authStateCurrentUserId = (state: RootState) => state.auth.authUserData.id;
export const authStateLogin = (state: RootState) => state.auth.authUserData.login;
export const authStateEmail = (state: RootState) => state.auth.authUserData.email;
export const authStateIsAuth = (state: RootState) => state.auth.authUserData.isAuth;
export const authStateCaptchaURL = (state: RootState) => state.auth.authUserData.captchaURL;
