export const RECEIVE_GAME_PLACE = 'RECEIVE_GAME_PLACE';

export const receiveGamePlace = gamePlaceId => ({
    type: RECEIVE_GAME_PLACE,
    gamePlaceId
});