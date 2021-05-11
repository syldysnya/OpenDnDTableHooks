import {
    LOGOUT_CURRENT_PLAYER,
    RECEIVE_CURRENT_PLAYER
} from "../actions/session_actions";

const _nullSession = {
    currentPlayer: null
};

const sessionReducer = (state=_nullSession, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_CURRENT_PLAYER:
            return { currentPlayer: action.player.id };
        case LOGOUT_CURRENT_PLAYER:
            return _nullSession;
        default:
            return state;
    }
};

export default sessionReducer;