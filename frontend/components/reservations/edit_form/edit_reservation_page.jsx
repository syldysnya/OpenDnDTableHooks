import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { fetchGamePlace } from '../../../actions/game_place_actions';
import { createReservation, fetchReservation } from '../../../actions/reservation_actions';

const EditReservationPage = (props) => {
    const params = useParams();
    const player = useSelector(state => state.session.currentPlayer);
    const [reservation, setReservation] = useState('');
    const [gamePlace, setGamePlace] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchReservation(params.reservationId))
            .then(res => setReservation(res.reservation))
        dispatch(fetchGamePlace(params.gamePlaceId))
            .then(res => setGamePlace(res.gamePlace))
    }, [])

    const updateInfo = (e) => {
        setReservation({ ...reservation, [e.target.id]: e.target.value })
    };

    const handleClick = (e) => {
        e.preventDefault();

        dispatch(createReservation(reservation))
            .then(res => history.push(`/book/view/${res.reservation.id}`))
    }

    const {gameDate, gameStart, }

    return (
        <div className='reservation-completion'>
            <div className='reservation-completion-form'>
                <p>Your current reservation</p>
                <h1>{gamePlace.name}</h1>
                <ul className='reservation-info'>
                    <i className="far fa-calendar"></i>
                    <li id='1'>{gameDate}</li>
                    <i className="far fa-clock"></i>
                    <li id='2'>{gameStart}</li>
                    <i className="far fa-user"></i>
                    <li id='3'>{playersNum} people</li>
                </ul>
                <form className='reservation-completion-box'>
                    <select className='phone-codes' defaultValue='USA'>
                        <option value='Canada' className='Canada'>🇨🇦</option>
                        <option value='Mexico' className='Mexico'>🇲🇽</option>
                        <option value='Russia' className='Russia'>🇷🇺</option>
                        <option value='USA' className="USA">🇺🇸</option>
                    </select>
                    <select className='adventure-type-list'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <input type="text" id='plphone' value={email} onChange={updateInfo} />
                    <input type="text" id='email' value={plphone} onChange={updateInfo} />
                    <textarea className='Additional-info-inp'
                        id='add_info'
                        onChange={updateInfo}
                        placeholder='Add a special request (optional)' />
                    <button className='auth-button'
                        onClick={handleClick}>
                        Complete Reservation
                    </button>
                </form>
            </div>
            <div className='right-bar-info'>
                <h1>What to know before you go</h1>
                <p>Important dining information
                We have a 15 minute grace period. Please call us if you are running later than 15 minutes after your reservation time.
                Your table will be reserved for 2 hours for parties of up to 4; and 2 hours 15 minutes for parties of 5+.
                </p>
                <h1>Points</h1>
                <p>
                    Keep in mind, you won’t collect points for this reservation unless you choose to below.
                </p>
            </div>
        </div>
    );
};

export default EditReservationPage;