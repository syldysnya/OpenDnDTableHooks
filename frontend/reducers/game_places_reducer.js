import { RECEIVE_GAME_PLACE } from "../actions/game_place_actions";


const gamePlacesReducer = (state=[], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_GAME_PLACE:
            return action.gamePlaceId
        default:
            return state;
    }
};

export default gamePlacesReducer;