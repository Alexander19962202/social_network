import { getAuthUserData } from 'src/redux/slices/auth/auth.thunks';
import { AppAsyncThunkAction } from 'src/redux/slices/common/common.types';
import { appInitialized } from 'src/redux/slices/app/app.slice';
import { AnyAction } from 'redux';

export const initializeApp = (): AppAsyncThunkAction<AnyAction> => dispatch => {
  return Promise.all([dispatch(getAuthUserData())]).then(() => {
    dispatch(appInitialized());
  });
};
