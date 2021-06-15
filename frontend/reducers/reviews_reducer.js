import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";

const initialState = {
    reviewsAll: [],
    review: []
} 

const reservationsReducer = (state = initialState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            return  {...state, reviewsAll: Object.values(action.reviews) };
        case RECEIVE_REVIEW:
            return {...state, review: action.review };
        case REMOVE_REVIEW:
            const nextState = {...state};
            delete nextState.reviewsAll[action.review.id];
            return nextState;
        default:
            return state;
    }
}

export default reservationsReducer;