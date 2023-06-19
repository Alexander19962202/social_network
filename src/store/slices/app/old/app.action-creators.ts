import {
  INITIALIZED_SUCCESS,
  InitializedSuccessAction,
  SET_GLOBAL_ERROR_MESSAGE,
  SetGlobalErrorMessageAction,
} from 'src/store/slices/app/old/app.types';

export const initializedSuccessAC = (): InitializedSuccessAction => ({ type: INITIALIZED_SUCCESS });
export const setGlobalErrorAC = (error: string): SetGlobalErrorMessageAction => ({
  type: SET_GLOBAL_ERROR_MESSAGE,
  error,
});
