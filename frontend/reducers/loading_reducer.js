import { CLOSE_MODAL, SHOW_MODAL } from "../actions/modal_actions";


const loadingReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case SHOW_MODAL:
            return true;
        case CLOSE_MODAL:
            return false;
        default:
            return state;
    }
};

export default loadingReducer;
