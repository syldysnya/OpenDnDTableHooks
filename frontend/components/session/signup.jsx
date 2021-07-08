import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../../actions/city_actions';
import { hideModal, openModal } from '../../actions/modal_actions';
import { login, receiveErrors, signup } from '../../actions/session_actions';

const Signup = () => {
    
    const [user, setUser] = useState({
        email: '',
        password: '',
        fname: '',
        lname: '',
        city_id: '',
        confirmPassword: ''
    });

    const errors = useSelector(state => state.errors.session);
    const [erroredFName, setFnameErr] = useState(false);
    const [erroredLName, setLnameErr] = useState(false);
    const [erroredEmail, setEmailErr] = useState(false);
    const [erroredPassword, setPassErr] = useState(false);
    const [erroredConfPass, setConfPassErr] = useState(false);
    const [erroredCity, setCityErr] = useState(false);
    const cities = useSelector(state => Object.values(state.entities.cities.citiesAll));
    const isSignedIn = useSelector(state => state.session.isSignedIn);
    const dispatch = useDispatch();

    useEffect(() => {
        
        return () => {
            dispatch(receiveErrors([]))
        }
    }, [])

    useEffect(() => {
        if (isSignedIn) {
            dispatch(hideModal())
        }
    }, [isSignedIn])

    useEffect(() => {
        errors.map(err => {
            if (err.includes('Lname')) {
                setLnameErr(true)
            } else if (err.includes('Fname')) {
                setFnameErr(true)
            } else if (err.includes('Email')) {
                setEmailErr(true)
            } else if (err.includes('Password')) {
                setPassErr(true)
            } else if (err.includes('City')) {
                setCityErr(true)
            }
        })
    }, [errors]);

    useEffect(() => {}, [erroredCity, erroredConfPass, erroredEmail, erroredFName, erroredLName, erroredPassword, user])

    useEffect(() => {
        dispatch(fetchCities())
    }, []);

    const handleInputCity = e => {
        const idx = parseInt(e.target.value);
        setUser({ ...user, city_id: idx });
        setCityErr(false);
    }

    const handleInput = e => {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }))

        if (name === 'fname') {
            setFnameErr(false)
        } else if (name === 'lname') {
            setLnameErr(false)
        } else if (name === 'email') {
            setEmailErr(false)
        } else if (name === 'password') {
            setPassErr(false)
        } else if (name === 'confirmPassword') {
            setConfPassErr(false)
        }

        setErrored(false)
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (user.password !== user.confirmPassword) {
            setConfPassErr(true)
        } else {
            dispatch(signup(user))
        }
    }

    const demoSubmit = () => {
        const demoUser = {
            email: 'demo@mail.com',
            password: '12345678'
        };

        dispatch(login(demoUser))
            .then(dispatch(hideModal()))
            .catch(() => setErrored(true))
    }

    const handleModal = e => {
        e.preventDefault();
        dispatch(openModal('Sign In'))
    }

    return (
        <div id='signup-modal-background'>
            <div className='row'>
                <div className='first-message-column-modal'>
                    <h1>Welcome to OpenTable!</h1>
                </div>
                <div className='row'>
                    <form className='user-form'>
                        <label htmlFor="fname-login">
                            <input
                                className='modal-input'
                                type="text"
                                id="fname-login"
                                placeholder='First Name *'
                                name='fname'
                                onChange={handleInput}
                            />
                            <li className='auth-error'
                                key='fname-error'
                                value='Fname'>
                                {erroredFName && ("First name can't be blank")}
                            </li>
                        </label>
                        <label htmlFor="lname-login">
                            <input
                                className='modal-input'
                                type="text"
                                id="lname-login"
                                placeholder='Last Name *'
                                name='lname'
                                onChange={handleInput}
                            />
                            <li className='auth-error'
                                key='lname-error'
                                value='Lname'>
                                {erroredLName && ("Last name can't be blank")}
                            </li>
                        </label>
                        <label htmlFor="email-login">
                            <input
                                className='modal-input'
                                type="text"
                                id="email-login"
                                placeholder='Enter Email *'
                                name='email'
                                onChange={handleInput}
                            />
                            <li className='auth-error'
                                key='email-error'
                                value='Email'>
                                {erroredEmail && ("Email can't be blank")}
                            </li>
                        </label>
                        <label htmlFor="password-login">
                            <input
                                className='modal-input'
                                type="password"
                                id="password-login"
                                placeholder='Enter password *'
                                name='password'
                                onChange={handleInput}
                            />
                            <li className='auth-error'
                                key='password-error'
                                value='Password'>
                                {erroredPassword && ("Password is too short (minimum is 8 characters)")}
                            </li>
                        </label>
                        <label htmlFor="password-login2">
                            <input
                                className='modal-input'
                                type="password"
                                id="password-login2"
                                placeholder='Re-enter password *'
                                name='confirmPassword'
                                onChange={handleInput}
                            />
                            <li className='auth-error'
                                key='password-error'
                                value='Password'>
                                {erroredConfPass && ("Password doesn't match")}
                            </li>
                        </label>
                        <label htmlFor="city-login">
                            <select onChange={handleInputCity}
                                className='modal-input'
                                defaultValue='Primary city*'>
                                <option disabled>Primary city*</option>
                                {cities.map((city, i) => (
                                    <option key={`city-${i}`} value={city.id}>
                                        {city.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <li className='auth-error'
                            key='city-error'
                            value='City'>
                            {erroredCity && ("City must exist")}
                        </li>
                        <button type="button"
                            className='auth-button'
                            onClick={handleSubmit}>
                                Create Account
                        </button>
                    </form>
                    <div className='demouser-form'>
                        <div>Don't want to complete the form?</div>
                        <button
                            className='auth-button demouser-button'
                            onClick={demoSubmit}>
                            Continue with <span>DemoUser</span>
                        </button>
                    </div>
                    <div>
                        <span id='span-for-new'>Have an account?</span>
                        <div className='btn-sign-in-login' value='Sign Up'
                            onClick={handleModal}> 
                            Sign In
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Signup;