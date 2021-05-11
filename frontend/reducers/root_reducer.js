import { combineReducers } from "redux";
import entititiesReducer from "./entitities_reducer";
import sessionReducer from "./session_reducer";
import uiReducer from "./ui_reducer";


const rootReducer = combineReducers({
    entitities: entititiesReducer,
    session: sessionReducer,
    ui: uiReducer,
});

export default rootReducer;