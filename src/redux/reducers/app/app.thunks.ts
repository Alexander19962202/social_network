import { InitializedSuccessAction, SetGlobalErrorMessageAction } from 'src/redux/reducers/app/app.types';
import { initializedSuccessAC, setGlobalErrorAC } from 'src/redux/reducers/app/app.action-creators';
import { getAuthUserData } from 'src/redux/reducers/auth/auth.thunks';
import { AppAsyncThunkAction, AppThunkAction } from 'src/redux/reducers/common/common.types';

export const resetGlobalError = (): AppThunkAction<SetGlobalErrorMessageAction> => dispatch => {
  dispatch(setGlobalErrorAC(''));
};

export const initializeApp = (): AppAsyncThunkAction<InitializedSuccessAction> => dispatch => {
  return Promise.all([dispatch(getAuthUserData())]).then(() => {
    dispatch(initializedSuccessAC());
  });
};
