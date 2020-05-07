import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import siteBarReducer from "./siteBar-reducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    siteBar: siteBarReducer
});

let store = createStore(reducers);

window.store = store;

export default store;