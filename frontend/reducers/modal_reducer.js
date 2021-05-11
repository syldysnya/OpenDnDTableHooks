import { CLOSE_MODAL, SHOW_MODAL } from "../actions/modal_actions";


const initialState = {
    showModal: false,

};

const modalReducer = (state = initialState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case SHOW_MODAL:
            return Object.assign({}, state, { showModal: true });
        case CLOSE_MODAL:
            return Object.assign({}, state, { showModal: false });
        default:
            return state;
    }
};

export default modalReducer;