import { getAuthUserData } from 'src/store/slices/auth/auth.thunks';
import { AppAsyncThunkAction } from 'src/store/slices/common/common.types';
import { appInitialized } from 'src/store/slices/app/app.slice';
import { AnyAction } from 'redux';

export const initializeApp = (): AppAsyncThunkAction<AnyAction> => dispatch => {
  return Promise.all([dispatch(getAuthUserData())]).then(() => {
    dispatch(appInitialized());
  });
};
