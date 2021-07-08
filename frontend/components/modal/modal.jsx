import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../session/login';
import Signup from '../session/signup';
import * as ModalActions from '../../actions/modal_actions';
import SearchBarModal from '../search/search_bar_modal';
import PictureModal from './picture_modal';

const Modal = (props) => {
    const modal = useSelector(state => state.ui.modal.modal);
    const imgModal = useSelector(state => state.ui.modal)
    const dispatch = useDispatch();
    let modalForm;
    let searchModal;
    let picModal;

    const handleModal = e => {
        e.preventDefault();
        dispatch(ModalActions.hideModal())
    }
    
    switch (modal) {
        case 'Sign In':
            modalForm = <Login />
            break
        case 'Sign Up':
            modalForm = <Signup />
            break
        case 'Search':
            searchModal = <SearchBarModal />
            break
        case 'Gallery':
            picModal = <PictureModal path={imgModal.path} />
            break
        default:
            return null
    }

    return (
        <>
            <div className='modal-background' onClick={handleModal}>
                {modalForm && (<div className='modal-content' onClick={e => e.stopPropagation()}>
                    { modalForm }
                </div>)}
                {searchModal && (<div className='modal-content-search' onClick={e => e.stopPropagation()}>
                    { searchModal }
                </div>)}
                {picModal && (<div className='pic-content-search' onClick={e => e.stopPropagation()}>
                    { picModal }
                </div>)}
            </div>
        </>
    );
};

export default Modal;