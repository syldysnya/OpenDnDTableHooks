import * as ApiUtil from '../util/session_api_util';
import { receiveErrors } from './session_actions';
export const REQUEST_PLAYER = 'REQUEST_PLAYER';

const requestPlayer = player => ({
    type: REQUEST_PLAYER,
    player
});

export const fetchPlayer = playerId => dispatch => (
    ApiUtil.fetchPlayer(playerId)
        .then(player => dispatch(requestPlayer(player)))
);

export const editPlayer = player => dispatch => (
    ApiUtil.updatePlayer(player)
        .then(player => dispatch(requestPlayer(player)))
)
