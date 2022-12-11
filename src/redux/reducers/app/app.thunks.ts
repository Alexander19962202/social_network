import {Dispatch} from "react";
import {InitializedSuccessAction, SetGlobalErrorMessageAction} from "./app.types";
import {initializedSuccessAC, setGlobalErrorAC} from "./app.action-creators";
import {AuthThunk} from "../auth/auth.types";
import {getAuthUserData} from "../auth/auth.thunks";

export const resetGlobalError = () => (dispatch: Dispatch<SetGlobalErrorMessageAction>) => {
  dispatch(setGlobalErrorAC(''));
};

export const initializeApp = () => (dispatch: Dispatch<AuthThunk | InitializedSuccessAction>) => {
  let promise = dispatch(getAuthUserData());

  Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccessAC());
    });
};
