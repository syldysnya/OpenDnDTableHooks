import { combineReducers } from "redux";
import playersReducer from "./players_reducer";


const entititiesReducer = combineReducers({
    players: playersReducer,
});

export default entititiesReducer;