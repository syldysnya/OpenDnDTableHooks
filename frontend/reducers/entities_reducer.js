import { combineReducers } from "redux";
import citiesReducer from "./cities_reducer";
import gamePlacesReducer from "./game_places_reducer";
import playersReducer from "./players_reducer";
import reservationsReducer from "./reservations_reducer";
import reviewsReducer from './reviews_reducer';


const entitiesReducer = combineReducers({
    players: playersReducer,
    gamePlaces: gamePlacesReducer,
    cities: citiesReducer,
    reservations: reservationsReducer,
    reviews: reviewsReducer,
});

export default entitiesReducer;