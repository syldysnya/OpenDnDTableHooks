import { RECEIVE_GAME_PLACE, RECEIVE_GAME_PLACES } from "../actions/game_place_actions";

const initialState = {
    gamePlacesAll: [],
    gamePlace: []
} 

const gamePlacesReducer = (state=initialState, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_GAME_PLACES:
            return {...state, gamePlacesAll: action.gamePlaces}
        case RECEIVE_GAME_PLACE:
            return { ...state, gamePlace: action.gamePlace };
        default:
            return state;
    }
};

export default gamePlacesReducer;