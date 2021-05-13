import * as ApiUtilGP from '../util/game_place_util';
export const RECEIVE_GAME_PLACE = 'RECEIVE_GAME_PLACE';
export const RECEIVE_GAME_PLACES = 'RECEIVE_GAME_PLACES';

const receiveAllgamePlaces = gamePlaces => {
    
    return ({
        type: RECEIVE_GAME_PLACES,
        gamePlaces
    })
};

const receiveGamePlace = gamePlaceId => {
    
    return ({
    type: RECEIVE_GAME_PLACE,
    gamePlaceId
    })
};

export const fetchAllGamePlaces = () => dispatch => {
    
    return ApiUtilGP.fetchAllGamePlaces()
        .then(gamePlaces => dispatch(receiveAllgamePlaces(gamePlaces)))
};

export const fetchGamePlace = gamePlaceId => dispatch => {
    
    return ApiUtilGP.fetchGamePlace(gamePlaceId)
        .then(gamePlace => dispatch(receiveGamePlace(gamePlace)))
};