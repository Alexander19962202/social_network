import {
  AuthAction,
  AuthState,
  SET_CAPTCHA_URL,
  SET_AUTH_USER_DATA,
} from "./auth.types";
import {initialState} from "./auth.initial-state";

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case SET_AUTH_USER_DATA: {
      return {
        ...state,
        authUserData: { ...action.authUserData }
      }
    }
    case SET_CAPTCHA_URL: {
      return {
        ...state,
        authUserData: {
          ...state.authUserData,
          captchaURL: action.captchaURL
        }
      }
    }
    default:
      return state;
  }
};

export default authReducer;
