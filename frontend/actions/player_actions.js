import * as ApiUtil from '../util/session_api_util';
export const REQUEST_PLAYER = 'REQUEST_PLAYER';

const requestPlayer = player => ({
    type: REQUEST_PLAYER,
    player
});

export const fetchPlayer = playerId => dispatch => (
    ApiUtil.fetchPlayer(playerId)
        .then(player => dispatch(requestPlayer(player)))
);
