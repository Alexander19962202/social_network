import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./reducers/auth/auth.reducer";
import profilePage_reducer from "./reducers/profiles/profilepage_reducer";
import messagesReducer from "./reducers/messages/messages.reducer";
import newsPage_reducer from "./reducers/news/newspage_reducer"
import musicPage_reducer from "./reducers/music/musicpage_reducer";
import settingsPage_reducer from "./reducers/settings/settingspage_reducer";
import usersPage_reducer from "./reducers/users/userspage_reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./reducers/app/app.reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
    auth: authReducer,
    profilePage: profilePage_reducer,
    messagesPage: messagesReducer,
    newsPage: newsPage_reducer,
    musicPage: musicPage_reducer,
    settingsPage: settingsPage_reducer,
    usersPage: usersPage_reducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
// @ts-expect-error TS(2339): Property '__store__' does not exist on type 'Windo... Remove this comment to see the full error message
window.__store__ = store;

export default store;
