import { convertToSnakeCase } from "./reservations_util";

export const fetchAllFavorites = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/favorites`
    })
);

export const fecthFavorite = favId => (
    $.ajax({
        method: 'GET',
        url: `/api/favorites/${favId}`
    })
);

export const createFavorite = favorite => {
    favorite = convertToSnakeCase(favorite);
    return $.ajax({
        method: 'POST',
        url: '/api/favorites',
        data: { favorite }
    })
};

export const deleteReview = favId => {
    fav = convertToSnakeCase(fav);

    return $.ajax({
        method: 'DELETE',
        url: `/api/favorites/${favId}`
    })
}