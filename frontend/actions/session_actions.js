import * as ApiUtilSession from '../util/session_api_util';

export const RECEIVE_CURRENT_PLAYER = 'RECEIVE_CURRENT_PLAYER';
export const LOGOUT_CURRENT_PLAYER = 'LOGOUT_CURRENT_PLAYER';

const receiveCurrentPlayer = player => ({
    type: RECEIVE_CURRENT_PLAYER,
    player
});

const logoutCurrentPlayer = () => ({
    type: LOGOUT_CURRENT_PLAYER
});

export const login = player => dispatch => {
    return ApiUtilSession.login(player)
        .then(player => dispatch(receiveCurrentPlayer(player)))
};

export const signup = player => dispatch => {
    return ApiUtilSession.signup(player)
        .then(player => dispatch(receiveCurrentPlayer))
};

export const logout = () => dispatch => {
    return ApiUtilSession.logout()
        .then(() => dispatch(logoutCurrentPlayer()))
};