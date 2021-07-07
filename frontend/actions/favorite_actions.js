import * as ApiUtil from '../util/favorites_util';

export const RECEIVE_ALL_FAVORITES = 'RECEIVE_ALL_FAVORITES';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveAllFavs = favorites => ({
    type: RECEIVE_ALL_FAVORITES,
    favorites
});

const receiveFav = favorite => {
    return ({
        type: RECEIVE_FAVORITE,
        favorite
})};

const removeFav = favoriteId => ({
    type: REMOVE_FAVORITE,
    favoriteId
})

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

export const fetchAllFavs = (id) => dispatch => {
    return ApiUtil.fetchAllFavorites(id)
        .then(favs => dispatch(receiveAllFavs(favs)))
};

export const fecthFav = favoriteId => dispatch => (
    ApiUtil.fecthFavorite(favoriteId)
        .then(favorite => dispatch(receiveFav(favorite)))
)

export const createFav = favorite => dispatch => (
    ApiUtil.createFavorite(favorite)
        .then(favorite => dispatch(receiveFav(favorite)))
)

export const deleteFav = favoriteId => dispatch => {
    
    return (
    ApiUtil.deleteFavorite(favoriteId)
        .then(() => dispatch(removeFav(favoriteId)),
        err => dispatch(receiveErrors(err)))
)}