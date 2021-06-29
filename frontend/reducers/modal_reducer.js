import { CLOSE_MODAL, SHOW_MODAL } from "../actions/modal_actions";


const modalReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case SHOW_MODAL:
            return {...state, modal: action.modal, path: action.path};
        case CLOSE_MODAL:
            debugger
            return {};
        default:
            return state;
    }
};

export default modalReducer;