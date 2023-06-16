import { AppAction, AppState, INITIALIZED_SUCCESS, SET_GLOBAL_ERROR_MESSAGE } from './app.types';
import { initialState } from './app.initial-state';

const appReducer = (state = initialState, action: AppAction): AppState => {
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
