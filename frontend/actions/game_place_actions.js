import * as ApiUtilGP from '../util/game_place_util';
export const RECEIVE_GAME_PLACE = 'RECEIVE_GAME_PLACE';
export const RECEIVE_GAME_PLACES = 'RECEIVE_GAME_PLACES';

const receiveAllgamePlaces = gamePlaces => {
    
    return ({
        type: RECEIVE_GAME_PLACES,
        gamePlaces
    })
};

const receiveGamePlace = gamePlace => ({
    type: RECEIVE_GAME_PLACE,
    gamePlace
});

export const fetchAllGamePlaces = filter => dispatch => (
    ApiUtilGP.fetchAllGamePlaces(filter)
        .then(gamePlaces => dispatch(receiveAllgamePlaces(gamePlaces)))
);

export const fetchAllGPbyDefault = filter => dispatch => (
    ApiUtilGP.sortByDefault(filter)
        .then(gamePlaces => dispatch(receiveAllgamePlaces(gamePlaces)))
);

export const fetchAllGPbyRating = filter => dispatch => (
    ApiUtilGP.sortByRating(filter)
        .then(gamePlaces => dispatch(receiveAllgamePlaces(gamePlaces)))
);

export const fetchAllGPbyDate = filter => dispatch => (
    ApiUtilGP.sortByDate(filter)
        .then(gamePlaces => dispatch(receiveAllgamePlaces(gamePlaces)))
);

export const fetchGamePlace = gamePlaceId => dispatch => (
    ApiUtilGP.fetchGamePlace(gamePlaceId)
        .then(gamePlace => dispatch(receiveGamePlace(gamePlace)))
);