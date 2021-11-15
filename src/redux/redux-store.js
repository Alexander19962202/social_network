import {applyMiddleware, combineReducers, createStore} from "redux";
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

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;