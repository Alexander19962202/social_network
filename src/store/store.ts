import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';

import appReducer from 'src/store/slices/app/app.slice';
import authReducer from 'src/store/slices/auth/auth.slice';
import messengerReducer from 'src/store/slices/messenger/messenger.slice';
import profilesReducer from 'src/store/slices/profiles/profiles.slice';
import usersReducer from 'src/store/slices/users/users.slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    profiles: profilesReducer,
    messenger: messengerReducer,
    users: usersReducer,
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type RootStory = typeof store;
export type AsyncThunkConfig = { state: RootState; dispatch: AppDispatch };
type CreateAsyncThunkParams<InputParams, ReturnValues> = Parameters<
  typeof createAsyncThunk<ReturnValues, InputParams, AsyncThunkConfig>
>;
export const createAppAsyncThunk = <InputParam = void, ReturnValues = void>(
  ...arg: CreateAsyncThunkParams<InputParam, ReturnValues>
) => createAsyncThunk<ReturnValues, InputParam, AsyncThunkConfig>(...arg);

// @ts-expect-error TS(2339): Property '__store__' does not exist on type 'Windo... Remove this comment to see the full error message
window.reactStore = store;

export default store;
