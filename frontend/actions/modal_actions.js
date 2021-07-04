export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = modal => {
    let newModal = modal.split(':');
    
    return ({
        type: SHOW_MODAL,
        modal: newModal[0],
        path: newModal[1]
    })
};

export const hideModal = () => {
    
    return ({
        type: CLOSE_MODAL
    });
}
