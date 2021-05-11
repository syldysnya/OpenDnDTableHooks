export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => {
    // debugger
    return ({
        type: SHOW_MODAL,
        modal // login
    })
};

export const hideModal = () => ({
    type: CLOSE_MODAL
});

// export const openModal = modal => dispatch => {
//     // debugger
//     return dispatch(modal => openModal(modal))
// };

// export const hideModal = () => dispatch => {
//     return dispatch(() => hideModal())
// };