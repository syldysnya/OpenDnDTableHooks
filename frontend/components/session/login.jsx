<<<<<<< HEAD
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
    const isSignedIn = useSelector(state => state.session.isSignedIn);
    const [errored, setErrored] = useState(false)
    
    const dispatch = useDispatch();

    useEffect(() => {
    }, [errors])

    useEffect(() => {
        
        return () => {
            dispatch(receiveErrors([]))
        }
    }, [user])

    useEffect(() => {
        if (errors) {
            setErrored(true)
        }
    }, [errors])

    const handleInput = e => {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }))
        setErrored(false)
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
            email: 'demo@mail.com',
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
                                {errors}
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
=======
import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoSubmit = this.demoSubmit.bind(this);
    }

    handleErrors(field) {
        return this.props.errors.filter(error => error.includes(field))
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    demoSubmit(e) {
        e.preventDefault();
        this.props.loginDemo().then(this.props.hideModal);
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state).then((payload) => {
            this.props.hideModal();
            this.props.removeErrors()
        })
    }

    render() {
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
                                onChange={this.handleInput('email')}
                            />
                            <li className='auth-error' key='fname-error'>
                                {this.handleErrors('Wrong')}
                            </li>
                        </label>
                        <label htmlFor="password-login">
                            <input
                                className='modal-input'
                                type="password"
                                id="password-login"
                                placeholder='Password'
                                onChange={this.handleInput('password')}
                            />
                            <li className='auth-error' key='fname-error'>
                                {this.handleErrors('Wrong')}
                            </li>
                        </label>
                        <button type='submit'
                            className='auth-button'
                            onClick={this.handleSubmit}>
                                Sign In
                        </button>
                    </form>
                    <div className='break-auth'></div>
                    <div className='demouser-form'>
                        <div>Don't want to complete the form?</div>
                        <button
                            className='auth-button demouser-button'
                            onClick={this.demoSubmit}>
                            Continue with <span>DemoUser</span>
                        </button>
                    </div>
                    <div>
                        <span id='span-for-new'>New to OpenTable?</span>
                        <div className='btn-sign-in-login'
                            onClick={() => this.props.openModal('Sign Up')}> 
                            Create an account
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Login;
>>>>>>> 725610b6f5481f09532c1b7d782bbd7c68170a9b
