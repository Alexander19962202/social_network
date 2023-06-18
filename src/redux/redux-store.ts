import { configureStore } from '@reduxjs/toolkit';
import authSlice from 'src/redux/slices/auth/auth.slice';
import profilesReducer from 'src/redux/slices/profiles/profiles.reducer';
import messagesReducer from 'src/redux/slices/messages/messages.reducer';
import usersReducer from 'src/redux/slices/users/users.reducer';
import { reducer as formReducer } from 'redux-form';
import appSlice from 'src/redux/slices/app/app.slice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    profilePage: profilesReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    form: formReducer,
    app: appSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type RootStory = typeof store;

// @ts-expect-error TS(2339): Property '__store__' does not exist on type 'Windo... Remove this comment to see the full error message
window.__store__ = store;

export default store;
