import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { editReservation } from '../../../actions/reservation_actions';
import { NavLink } from 'react-router-dom';
import { fetchGamePlace } from '../../../actions/game_place_actions';

const CancelReservation = (props) => {
    
    const location = useLocation();
    const {reservation} = location.state;
    const [gamePlace, setGamePlace] = useState('');
    const {avatarUrl, name, id} = gamePlace;
    const {playersNum, gameDate, gameStart} = reservation;
    const [reservationInfo, setReservation] = useState(location.state.reservation);
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(gamePlace)

    useEffect(() => {
        if (location.state.gamePlace) {
            setGamePlace(location.state.gamePlace)
        } else {
            dispatch(fetchGamePlace(location.state.gamePlaceId))
                .then(res => setGamePlace(res.gamePlace))
        }
    })

    const updateInfo = (e) => {
        setReservation({ ...reservationInfo, canceled: true })
    };

    useEffect(() => {
        if (reservationInfo.canceled) {
            history.push({
                    pathname: `/book/cancel/form`,
                    aboutProps: {
                        reservation: reservation,
                        gamePlace: gamePlace,
                        canceled: reservationInfo.canceled
                    }
                })
            }
        }
    )

    return (
        <div className='cancel-box'>
            <div className='cancel-message'>
                Cancel Your Reservation
            </div>
            <div className='cancel-avatar'>
                <img src={avatarUrl} />
            </div>
            <div className='cancel-info'>
                <div className='colum-name'>
                    <span>GUESTS</span>
                {playersNum === 1 ? (
                    <div className='column-info'>
                        {playersNum} person
                    </div>
                ) : (
                    <div className='column-info'>
                        {playersNum} people
                    </div>
                )}
                </div>
                <div className='colum-name'>
                    <span>DATE</span>
                <div className='column-info'>
                    {gameDate}
                </div>
                </div>
                <div className='colum-name'>
                    <span>TIME</span>
                <div className='column-info'>
                    {gameStart}
                </div>
                </div>
                <div className='colum-name'>   
                    <span>GAME PLACE</span>
                <div className='column-info'>
                    <NavLink to={`/gameplaces/${id}`}>
                        {name}
                    </NavLink>
                </div>
                </div>
            </div>

            <button className='auth-button' id='canceled' onClick={updateInfo}>
                Cancel Reservation
            </button>
        </div>
    );
};

export default CancelReservation;