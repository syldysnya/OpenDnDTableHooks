import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { openModal } from '../../../actions/modal_actions';
import { createReservation, editReservation } from '../../../actions/reservation_actions';

const ConfirmationModifyForm = () => {

    const player = useSelector(state => state.session.currentPlayer);
    const location = useLocation();
    const [reservation, setReservation] = useState(location.state.reservation);
    const {gamePlace} = location.state;
    const dispatch = useDispatch();
    const history = useHistory();
    const {fname, lname} = player;
    const [time, setTimer] = useState(300);
    const [mins, setMins] = useState('');
    const [secs, setSecs] = useState('');
    const [formatted, setFormatted] = useState('5:00');

    useEffect(() => {
        
        setMins(Math.floor(time / 60) % 60)
        setSecs(Math.floor(time % 60));

    }, [time])

    useEffect(() => {
        if (!time) return;

        const countdown = setInterval(() => {
            setTimer(time - 1)
        }, 1000)

        return () => clearInterval(countdown)
    }, [time])

    useEffect(() => {
        if (secs < 10) {
            setFormatted(`${mins}:0${secs}`)
        } else {
            setFormatted(`${mins}:${secs}`)
        }
    }, [mins, secs])

    useEffect(() => {
        setReservation({...reservation, gameStart: location.state.gameStart, email: player.email, gamePlaceId: gamePlace.id })
    }, [])

    const updateInfo = (e) => {
        setReservation({ ...reservation, [e.target.id]: e.target.value })
    };

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(editReservation(reservation))
            .then(res => history.push(`/book/view/${res.reservation.id}`))
    }

    const handleModal = () => {
        dispatch(openModal('Sign In'))
    }
    
    return (
        <div className='reservation-completion'>
            <div className='reservation-completion-form'>
                <div className='almost-done'>Modify your reservation</div>
                <div className='res-info-in-conf'>
                    <div className='gp-avatar-in-conf'>
                        <img src={gamePlace.avatarUrl} />
                    </div>
                    <div className='reservation-info'>
                        <div>{gamePlace.name}</div>
                        <div className='res-info-conf'>
                            <i className="far fa-calendar"></i>
                            <div></div>
                            <li id='1'>{reservation.gameDate}</li>
                            <i className="far fa-clock"></i>
                            <div></div>
                            <li id='2'>{reservation.gameStart}</li>
                            <i className="far fa-user"></i>
                            <div></div>
                            <li id='3'>{reservation.playersNum} people</li>
                        </div>
                    </div>
                </div>
                <div className="countdown" id="countdown">
                    {time ?  (
                        <div className="countdown-message">
                            <span>We're holding this table for you for </span>
                            <span> {formatted} minutes</span>
                        </div>
                    ) : (
                        <div className="countdown-over-mess">
                            You can still try to complete your reservation, but this table may no longer be available.
                        </div>
                    )}
                </div>
                <div className="grid-line"></div>
                <div className="reserv-points">
                    <span>Reservation points coming soon!</span>
                    <span>Receive points for dining rewards, KAYAK hotel savings, and more</span>
                </div>
                <div className="grid-line"></div>
                <div className='game-session-details'>Game session details</div>
                <div className="user-info-res">
                    <div>{fname} {lname} (
                        <span className='modal' onClick={handleModal}>Not {fname}?</span>
                    )</div>
                </div>
                <form className='reservation-completion-box'>
                    <div className='player-contacts'>
                        <div>
                            <select className='phone-codes' defaultValue='USA'>
                                <option value='Canada' className='Canada'>🇨🇦</option>
                                <option value='Mexico' className='Mexico'>🇲🇽</option>
                                <option value='Russia' className='Russia'>🇷🇺</option>
                                <option value='USA' className="USA">🇺🇸</option>
                            </select>
                            <input type="text" id="plphone" onChange={updateInfo}/>
                        </div>
                        <div>
                            <input type="text" id="email" onChange={updateInfo} value={player.email}/>
                        </div>
                    </div>
                    <textarea className='Additional-info-inp'
                            id="add_info"
                            onChange={updateInfo}
                            placeholder='Add a special request (optional)'/>
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

export default ConfirmationModifyForm;