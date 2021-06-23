import { REQUEST_PLAYER } from "../actions/player_actions";

const initialState = {
    player: []
}

const playersReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case REQUEST_PLAYER:
            return action.player;
        default:
            return state;   
    }
};

export default playersReducer;