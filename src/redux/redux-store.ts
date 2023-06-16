import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from 'src/redux/reducers/auth/auth.reducer';
import profilesReducer from 'src/redux/reducers/profiles/profiles.reducer';
import messagesReducer from 'src/redux/reducers/messages/messages.reducer';
import newsReducer from 'src/redux/reducers/news/news.reducer';
import musicReducer from 'src/redux/reducers/music/music.reducer';
import settingsReducer from 'src/redux/reducers/settings/settings.reducer';
import usersReducer from 'src/redux/reducers/users/users.reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from 'src/redux/reducers/app/app.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

let rootReducer = combineReducers({
  auth: authReducer,
  profilePage: profilesReducer,
  messagesPage: messagesReducer,
  newsPage: newsReducer,
  musicPage: musicReducer,
  settingsPage: settingsReducer,
  usersPage: usersReducer,
  form: formReducer,
  app: appReducer,
});

export type RootReducer = typeof rootReducer;
export type RootState = ReturnType<RootReducer>;

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
// @ts-expect-error TS(2339): Property '__store__' does not exist on type 'Windo... Remove this comment to see the full error message
window.__store__ = store;

export default store;
