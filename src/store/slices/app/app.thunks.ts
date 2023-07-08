import { appInitialized } from 'src/store/slices/app/app.slice';
import { getAuthUserData } from 'src/store/slices/auth/auth.thunks';
import { createAppAsyncThunk } from 'src/store/store';

export const initializeApp = createAppAsyncThunk('app/initializeApp', async (_, { dispatch }) => {
  Promise.all([dispatch(getAuthUserData())]).then(() => {
    dispatch(appInitialized());
  });
});
