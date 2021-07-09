import { RECEIVE_GAME_PLACE, RECEIVE_GAME_PLACES } from "../actions/game_place_actions";

const initialState = {
    default: {},
    gamePlace: {},
    rating: {},
    newest: {},
    gamePlacesAll: {}
} 

const gamePlacesReducer = (state=initialState, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_GAME_PLACES:
            let key = Object.keys(action.gamePlaces)[0];
            return {...state, [key]: action.gamePlaces[key]}
        case RECEIVE_GAME_PLACE:
            
            return { ...state, gamePlace: action.gamePlace };
        default:
            return state;
    }
};

export default gamePlacesReducer;