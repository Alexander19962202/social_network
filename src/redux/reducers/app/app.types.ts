import { Action } from "redux";

// ----- ACTION TYPES -----
export type INITIALIZED_SUCCESS_TYPE = 'APP/INITIALIZED_SUCCESS';
export type SET_GLOBAL_ERROR_MESSAGE_TYPE = 'APP/SET_GLOBAL_ERROR_MESSAGE';

// ----- ACTION TYPE CONSTS -----
export const INITIALIZED_SUCCESS: INITIALIZED_SUCCESS_TYPE = 'APP/INITIALIZED_SUCCESS';
export const SET_GLOBAL_ERROR_MESSAGE: SET_GLOBAL_ERROR_MESSAGE_TYPE = 'APP/SET_GLOBAL_ERROR_MESSAGE';

// ----- ACTIONS/THUNKS -----
export type InitializedSuccessAction = Action<INITIALIZED_SUCCESS_TYPE>
export type SetGlobalErrorMessageAction = Action<SET_GLOBAL_ERROR_MESSAGE_TYPE> & { error: string }
export type AppAction = InitializedSuccessAction | SetGlobalErrorMessageAction;

// ----- STATE TYPES -----
export type AppState = {
  initialized: boolean,
  globalError: string,
};
