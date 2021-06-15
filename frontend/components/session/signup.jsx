import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../../actions/city_actions';
import { hideModal } from '../../actions/modal_actions';
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
    const [errored, setErrors] = useState(false);
    const cities = useSelector(state => Object.values(state.entities.cities.citiesAll));
    const isSignedIn = useSelector(state => state.session.isSignedIn);
    const dispatch = useDispatch();

    useEffect(() => {
    }, [errors, console.log(errors)]);

    // useEffect(() => {
    //     return () => {
    //         dispatch(receiveErrors([]))
    //     }
    // }, [user]);

    useEffect(() => {
        dispatch(fetchCities())
    }, []);

    const handleErrors = e => {
        
        if (errored) return errors.filter(error => error.includes(field))
    }

    const handleInputCity = e => {
        
        const idx = parseInt(e.target.value);
        setUser({ ...user, city_id: idx })
    }

    const handleInput = e => {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value }))
    }

    const handleSubmit = e => {
        
        dispatch(signup(user))
    }

    const demoSubmit = () => {
        const demoUser = {
            email: 'sykh@mail.com',
            password: '12345678'
        };

        dispatch(login(demoUser))
            .then(dispatch(hideModal()))
            .catch(() => setErrored(true))
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
                                    {errored ? handleErrors : null}
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
                                {/* {handleErrors} */}
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
                                {/* {handleErrors} */}
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
                                {/* {handleErrors} */}
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
                                {/* {handleErrors} */}
                            </li>
                        </label>
                        <label htmlFor="city-login">
                            <select onChange={handleInputCity}
                                className='modal-input'>
                                <option disabled defaultValue='Primary city'>Primary city*</option>
                                {cities.map((city, i) => (
                                    <option key={`city-${i}`} value={i}>
                                        {city.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <li className='auth-error'
                            key='city-error'
                            value='City'>
                            {/* {handleErrors} */}
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
                </div>
            </div>
        </div>
    )

};

export default Signup;