import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";


const reservationsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            return Object.assign({}, state, { [action.review.id]: action.review })
        case REMOVE_REVIEW:
            const nextState = Object.assign({}, state);
            delete nextState[action.review.id];
            return nextState;
        default:
            return state;
    }
}

export default reservationsReducer;