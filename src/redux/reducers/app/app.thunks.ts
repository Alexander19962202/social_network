import {InitializedSuccessAction, SetGlobalErrorMessageAction} from "./app.types";
import {initializedSuccessAC, setGlobalErrorAC} from "./app.action-creators";
import {getAuthUserData} from "../auth/auth.thunks";
import {AppAsyncThunkAction, AppThunkAction} from "../common/common.types";

export const resetGlobalError = (): AppThunkAction<SetGlobalErrorMessageAction> => (dispatch) => {
  dispatch(setGlobalErrorAC(''));
};

export const initializeApp = (): AppAsyncThunkAction<InitializedSuccessAction> => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  dispatch(initializedSuccessAC());
  return Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccessAC());
    });
};
