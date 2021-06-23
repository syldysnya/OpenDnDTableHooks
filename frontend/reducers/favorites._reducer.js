import { RECEIVE_ALL_FAVORITES, RECEIVE_ERRORS, RECEIVE_FAVORITE, REMOVE_FAVORITE } from "../actions/favorite_actions";

const initialState = {
    favoritesAll: [],
    favorite: [],
    errors: []
} 

const favoritesReducer = (state = initialState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_FAVORITES:
            return  {...state, favoritesAll: Object.values(action.favorites) };
        case RECEIVE_FAVORITE:
            return {...state, favorite: action.favorite };
        case REMOVE_FAVORITE:
            const nextState = {...state};
            delete nextState.favoritesAll[action.favorite.id];
            return nextState;
        case RECEIVE_ERRORS:
            return {...state, errors: action.errors.responseJSON };
        default:
            return state;
    }
}

export default favoritesReducer;