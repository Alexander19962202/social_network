import {applyMiddleware, combineReducers, createStore} from "redux";
import auth_reducer from "./reducers/auth_reducer";
import profilePage_reducer from "./reducers/profilepage_reducer";
import messagesPage_reducer from "./reducers/messagespage_reducer";
import newsPage_reducer from "./reducers/newspage_reducer"
import musicPage_reducer from "./reducers/musicpage_reducer";
import settingsPage_reducer from "./reducers/settingspage_reducer";
import usersPage_reducer from "./reducers/userspage_reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import app_reducer from "./reducers/app_reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
    auth: auth_reducer,
    profilePage: profilePage_reducer,
    messagesPage: messagesPage_reducer,
    newsPage: newsPage_reducer,
    musicPage: musicPage_reducer,
    settingsPage: settingsPage_reducer,
    usersPage: usersPage_reducer,
    form: formReducer,
    app: app_reducer
});

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
// @ts-expect-error TS(2339): Property '__store__' does not exist on type 'Windo... Remove this comment to see the full error message
window.__store__ = store;

export default store;