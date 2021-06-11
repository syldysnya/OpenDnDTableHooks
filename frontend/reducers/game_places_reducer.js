import { RECEIVE_GAME_PLACE, RECEIVE_GAME_PLACES } from "../actions/game_place_actions";


const gamePlacesReducer = (state={}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_GAME_PLACES:
            return action.gamePlaces
        case RECEIVE_GAME_PLACE:
            return Object.assign({}, state, { [action.gamePlace.id]: action.gamePlace });
        default:
            return state;
    }
};

export default gamePlacesReducer;