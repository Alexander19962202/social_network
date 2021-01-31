import {combineReducers, createStore} from "redux";
import profilePage_reducer from "./profilepage_reducer";
import messagesPage_reducer from "./messagespage_reducer";
import newsPage_reducer from "./newspage_reducer"
import musicPage_reducer from "./musicpage_reducer";
import settingsPage_reducer from "./settingspage_reducer";

let reducers = combineReducers({
    profilePage: profilePage_reducer,
    messagesPage: messagesPage_reducer,
    newsPage: newsPage_reducer,
    musicPage: musicPage_reducer,
    settingsPage: settingsPage_reducer
});

let store = createStore(reducers);

export default store;