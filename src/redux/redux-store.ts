import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./reducers/auth/auth.reducer";
import profilesReducer from "./reducers/profiles/profiles.reducer";
import messagesReducer from "./reducers/messages/messages.reducer";
import newsReducer from "./reducers/news/news.reducer"
import musicReducer from "./reducers/music/music.reducer";
import settingsReducer from "./reducers/settings/settings.reducer";
import usersReducer from "./reducers/users/users.reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./reducers/app/app.reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
    auth: authReducer,
    profilePage: profilesReducer,
    messagesPage: messagesReducer,
    newsPage: newsReducer,
    musicPage: musicReducer,
    settingsPage: settingsReducer,
    usersPage: usersReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
// @ts-expect-error TS(2339): Property '__store__' does not exist on type 'Windo... Remove this comment to see the full error message
window.__store__ = store;

export default store;
