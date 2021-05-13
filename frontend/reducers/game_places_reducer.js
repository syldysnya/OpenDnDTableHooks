import { RECEIVE_GAME_PLACE, RECEIVE_GAME_PLACES } from "../actions/game_place_actions";


const gamePlacesReducer = (state=[], action) => {
    Object.freeze(state);
    debugger
    switch (action.type) {
        case RECEIVE_GAME_PLACES:
            return action.gamePlaces
        case RECEIVE_GAME_PLACE:
            return action.gamePlaceId
        default:
            return state;
    }
};

export default gamePlacesReducer;