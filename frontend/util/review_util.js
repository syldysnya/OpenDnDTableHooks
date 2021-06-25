import { convertToSnakeCase } from "./reservations_util";

export const fetchAllReviews = () => (
    $.ajax({
        method: 'GET',
        url: '/api/reviews'
    })
);

export const fecthReview = reviewId => (
    $.ajax({
        method: 'GET',
        url: `/api/reviews/${reviewId}`
    })
);

export const createReview = review => {
    review = convertToSnakeCase(review);

    return $.ajax({
        method: 'POST',
        url: '/api/reviews',
        data: { review }
    })
};

export const editReview = review => {
    review = convertToSnakeCase(review);

    return $.ajax({
        method: 'PATCH',
        url: `/api/reviews/${review.id}`,
        data: { review }
    })
};

export const deleteReview = reviewId => {
    review = convertToSnakeCase(review);

    return $.ajax({
        method: 'DELETE',
        url: `/api/reviews/${reviewId}`
    })
}