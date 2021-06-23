import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPlayer, fetchPlayer } from '../../actions/player_actions';

const EditProfile = (props) => {
    const {id} = props.curPlayer;
    const [player, setPlayer] = useState({
        id: '',
        email: '',
        password: '',
        fname: '',
        lname: '',
        cityId: '',
        confirmPassword: '',
        phone: '',
        email: '',
        dname: ''
    });
    const dispatch = useDispatch();
    const cities = useSelector(state => Object.values(state.entities.cities.citiesAll));
    const [erroredConfPass, setConfPassErr] = useState(false);
    const [created, setCreated] = useState(false);

    useEffect(() => {
        if (created) {
            setPlayer({
                id: '',
                email: '',
                password: '',
                fname: '',
                lname: '',
                cityId: '',
                confirmPassword: '',
                phone: '',
                email: '',
                dname: ''
            })
        }
    }, [created])

    useEffect(() => {
        dispatch(fetchPlayer(id))
            .then(res => setPlayer(res.player))
    }, [])


    const updateInfo = e => {
        const { name, value } = e.target;
        setPlayer({ ...player, [name]: value })
    }

    const handleInputCity = e => {
        const idx = parseInt(e.target.value);
        setPlayer({ ...player, cityId: idx });
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        if (player.password !== player.confirmPassword) {
            setConfPassErr(true)
        } else {
            dispatch(editPlayer(player))
            setCreated(true)
        }
    }

    return (
        <div className='upcoming-reses'>
            {created && (
                <div className="success-box">
                    <i className="fas fa-check-circle"></i>
                    <div className="success-message">Your changes are saved!</div>
                </div>
            )}
            <div className='text-up'>About me</div>
            <div className='res-index'>
                <div className="name-info">
                    <div className="fname">
                        <h2>First Name</h2>
                        <input type="text"
                        name='fname'
                        value={player.fname}
                        onChange={updateInfo}/>
                    </div>
                    <div className="fname">
                        <h2>Last Name</h2>
                        <input type="text"
                        name='lname'
                        value={player.lname}
                        onChange={updateInfo}/>
                    </div>
                </div>
                <div className="dname-info">
                    <h2>Review display name</h2>
                    <input type="text"
                    name='dname'
                    onChange={updateInfo}/>
                </div>
                <div className="email-info">
                    <h2>Email address</h2>
                    <input type="text"
                    name='email'
                    value={player.email}
                    onChange={updateInfo}/>
                </div>
                <div className="phone-info">
                    <h2>Phone</h2>
                    <input type="number"
                    name='phone'
                    onChange={updateInfo}/>
                </div>
                <div className="location-info">
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
                </div>
                <div className="password-info">
                    <h1>Change password</h1>
                    <h3>Please choose a password that is at least 8 characters long.</h3>
                    <div>
                        <h2>New password</h2>
                        <input type="password"
                        name='password'
                        onChange={updateInfo}/>
                        <h2>Confirm new password</h2>
                        <input type="password"
                        name='confirmPassword'
                        onChange={updateInfo}/>
                        {erroredConfPass && ("Password doesn't match")}
                    </div>
                </div>
                <button className="auth-button" onClick={handleSubmit}>Save changes</button>
            </div>
        </div>
    );
};

export default EditProfile;