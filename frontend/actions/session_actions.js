import * as ApiUtilSession from '../util/session_api_util';

export const RECEIVE_CURRENT_PLAYER = 'RECEIVE_CURRENT_PLAYER';
export const LOGOUT_CURRENT_PLAYER = 'LOGOUT_CURRENT_PLAYER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

const receiveCurrentPlayer = player => ({
    type: RECEIVE_CURRENT_PLAYER,
    player
});

const logoutCurrentPlayer = () => ({
    type: LOGOUT_CURRENT_PLAYER
});


export const login = player => dispatch => {
    return ApiUtilSession.login(player)
        .then(player => dispatch(receiveCurrentPlayer(player)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const signup = player => dispatch => {
    return ApiUtilSession.signup(player)
        .then(player => dispatch(receiveCurrentPlayer(player)),
            errors => dispatch(receiveErrors(errors.responseJSON)))
};

export const logout = () => dispatch => {
    return ApiUtilSession.logout()
        .then(() => dispatch(logoutCurrentPlayer()))
};