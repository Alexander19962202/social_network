import { AppAction, INITIALIZED_SUCCESS, SET_GLOBAL_ERROR_MESSAGE } from 'src/redux/slices/app/old/app.types';

export const initialState = {
  initialized: false,
  globalError: '',
};

const appReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    case SET_GLOBAL_ERROR_MESSAGE: {
      return {
        ...state,
        globalError: action.error,
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
