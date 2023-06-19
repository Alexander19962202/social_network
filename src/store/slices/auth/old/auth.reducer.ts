import { initialState } from 'src/store/slices/auth/auth.initial-state';
import { AuthAction, SET_AUTH_USER_DATA, SET_CAPTCHA_URL } from 'src/store/slices/auth/old/auth.types';
import { AuthState } from 'src/store/slices/auth/auth.types';

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case SET_AUTH_USER_DATA: {
      return {
        ...state,
        authUserData: { ...action.authUserData },
      };
    }
    case SET_CAPTCHA_URL: {
      return {
        ...state,
        authUserData: {
          ...state.authUserData,
          captchaURL: action.captchaURL,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
