import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, openModal } from '../../actions/modal_actions';
import { login, receiveErrors } from '../../actions/session_actions';

const Login = () => {
    
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const {email, password} = user;
    
    const errors = useSelector(state => state.errors.session);
    const isSignedIn = useSelector(state => state.session.isSignedIn)
    const dispatch = useDispatch();

    useEffect(() => {
    }, [errors])

    useEffect(() => {
        
        return () => {
            dispatch(receiveErrors([]))
        }
    }, [user])

    const handleInput = e => {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }))
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (errors.length === 0) {
            dispatch(login(user))
        } 
    }

    const handleModal = e => {
        e.preventDefault();
        dispatch(openModal('Sign Up'))
    }

    const demoSubmit = () => {
        const demoUser = {
            email: 'sykh@mail.com',
            password: '12345678'
        };

        dispatch(login(demoUser))
            .then(dispatch(hideModal()))
    }

    if (isSignedIn) {
        dispatch(hideModal())
    }
    
    return (
        <div id='login-modal-background'>
            <div className='row'>
                <div className='first-message-column-modal'>
                    <h1>Please sign in</h1>
                </div>
            </div>
            <div className='row'>
                <form className='user-form'>
                    <label htmlFor="email-login">
                        <input
                            className='modal-input'
                            type="text"
                            id="email-login"
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={handleInput}
                        />
                        <li className='auth-error' key='fname-error'>
                            {errors.length > 0  && (
                                "Wrong credentials"
                                ) 
                            }
                        </li>
                    </label>
                    <label htmlFor="password-login">
                        <input
                            className='modal-input'
                            type="password"
                            id="password-login"
                            placeholder='Password'
                            name="password"
                            value={password}
                            onChange={handleInput}
                        />
                        {errors.length > 0 && (
                            <li className='auth-error' key='fname-error'>
                                Wrong credentials
                            </li>
                        ) }
                    </label>
                    <button type='submit'
                        className='auth-button'
                        onClick={handleSubmit}>
                            Sign In
                    </button>
                </form>
                <div className='break-auth'></div>
                <div className='demouser-form'>
                    <div>Don't want to complete the form?</div>
                    <button
                        className='auth-button demouser-button'
                        onClick={demoSubmit}>
                        Continue with <span>DemoUser</span>
                    </button>
                </div>
                <div>
                    <span id='span-for-new'>New to OpenTable?</span>
                    <div className='btn-sign-in-login' value='Sign Up'
                        onClick={handleModal}> 
                        Create an account
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
