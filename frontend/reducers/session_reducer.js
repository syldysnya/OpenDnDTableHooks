import {
    LOGOUT_CURRENT_PLAYER,
    RECEIVE_CURRENT_PLAYER,
    RECEIVE_ERRORS,
    REMOVE_ERRORS
} from "../actions/session_actions";

const _nullSession = {
    currentPlayer: null,
    isSignedIn: false
};

const sessionReducer = (state=_nullSession, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_PLAYER:
            
            return { 
                currentPlayer: action.player,
                isSignedIn: true
            };
        case LOGOUT_CURRENT_PLAYER:
            return _nullSession;   
        case REMOVE_ERRORS:
            return [];
        default:
            return state;
    }
};

export default sessionReducer;