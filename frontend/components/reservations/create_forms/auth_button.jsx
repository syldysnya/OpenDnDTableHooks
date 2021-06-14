import React from 'react';
import { openModal } from '../../../actions/modal_actions';

const AuthButton = () => {

    const dispatch = useDispatch();

    const handleAuth = () => {
        dispatch(openModal('Sign In'))
    }

    return (
        <div className='btns-log'>
            <button onClick={handleAuth} className='auth-button'>
                Sign In
            </button>
            <button onClick={handleAuth} className='auth-button'>
                Sign Up
            </button>
        </div>
    );
};

export default AuthButton;