import * as ApiUtil from '../util/review_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveAllReviews = reviews => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
});

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const fetchAllReviews = (id) => dispatch => {
    return ApiUtil.fetchAllReviews(id)
        .then(reviews => dispatch(receiveAllReviews(reviews)))
};

export const fecthReview = reviewId => dispatch => (
    ApiUtil.fecthReview(reviewId)
        .then(review => dispatch(receiveReview(review)))
)

export const createReview = review => dispatch => (
    ApiUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)))
)

export const editReview = review => dispatch => (
    ApiUtil.editReview(review)
        .then(review => dispatch(receiveReview(review)))
);

export const deleteReview = reviewId => dispatch => (
    ApiUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)))
)