import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import auth_reducer from "./auth_reducer";
import profilePage_reducer from "./profilepage_reducer";
import messagesPage_reducer from "./messagespage_reducer";
import newsPage_reducer from "./newspage_reducer"
import musicPage_reducer from "./musicpage_reducer";
import settingsPage_reducer from "./settingspage_reducer";
import usersPage_reducer from "./userspage_reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import app_reducer from "./app_reducer";
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
window.__store__ = store;

export default store;