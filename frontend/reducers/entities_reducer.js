import { combineReducers } from "redux";
import citiesReducer from "./cities_reducer";
import favoritesReducer from "./favorites._reducer";
import gamePlacesReducer from "./game_places_reducer";
import playersReducer from "./players_reducer";
import reservationsReducer from "./reservations_reducer";
import reviewsReducer from './reviews_reducer';


const entitiesReducer = combineReducers({
    player: playersReducer,
    gamePlaces: gamePlacesReducer,
    cities: citiesReducer,
    reservations: reservationsReducer,
    reviews: reviewsReducer,
    favorites: favoritesReducer
});

export default entitiesReducer;