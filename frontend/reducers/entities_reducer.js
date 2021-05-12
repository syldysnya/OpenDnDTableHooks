import { combineReducers } from "redux";
import gamePlacesReducer from "./game_places_reducer";
import playersReducer from "./players_reducer";


const entitiesReducer = combineReducers({
    players: playersReducer,
    gamePlaces: gamePlacesReducer,
});

export default entitiesReducer;