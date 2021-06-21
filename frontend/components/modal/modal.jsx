import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../session/login';
import Signup from '../session/signup';
import * as ModalActions from '../../actions/modal_actions';

const Modal = () => {

    const modal = useSelector(state => state.ui.modal);
    const dispatch = useDispatch();
    let modalForm;

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
        default:
            return null
    }

    return (
        <>
            <div className='modal-background' onClick={handleModal}>
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    { modalForm }
                </div>
            </div>
        </>
    );
};

export default Modal;