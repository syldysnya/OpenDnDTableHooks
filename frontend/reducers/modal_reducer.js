import { CLOSE_MODAL, SHOW_MODAL } from "../actions/modal_actions";


// const initialState = {
//     openModal: false,

// };

const modalReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger // { type: SHOW_MODAL, modal: 'login' }
    switch (action.type) {
        case SHOW_MODAL:
            return action.modal; // login
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
};

export default modalReducer;