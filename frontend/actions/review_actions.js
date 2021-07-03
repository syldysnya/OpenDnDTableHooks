import * as ApiUtil from '../util/review_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

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

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

export const fetchAllReviews = () => dispatch => {
    return ApiUtil.fetchAllReviews()
        .then(reviews => dispatch(receiveAllReviews(reviews)))
};

export const fecthReview = reviewId => dispatch => (
    ApiUtil.fecthReview(reviewId)
        .then(review => dispatch(receiveReview(review)))
)

export const createReview = review => dispatch => (
    ApiUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)),
        err => dispatch(receiveErrors(err)))
)

export const editReview = review => dispatch => (
    ApiUtil.editReview(review)
        .then(review => dispatch(receiveReview(review)),
        err => dispatch(receiveErrors(err)))
);

export const deleteReview = reviewId => dispatch => {
    debugger
    return (
    ApiUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)),
        err => dispatch(receiveErrors(err)))
)}