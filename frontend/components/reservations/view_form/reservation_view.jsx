import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGamePlace } from '../../../actions/game_place_actions';
import { editReservation, fetchReservation } from '../../../actions/reservation_actions';
import EditReservation from '../edit_form/edit_reservation';
import ReservationViewDetails from './reservation_view_details';
import { NavLink } from 'react-router-dom'
import { getMonth } from 'date-fns';
import { fetchPlayer } from '../../../actions/player_actions';
import { fetchCities } from '../../../actions/city_actions';

export const MONTHES =  {
    '01': "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
}

const ReservationView = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const reservation = useSelector(state => state.entities.reservations.reservation);
    const gamePlace = useSelector(state => state.entities.gamePlaces.gamePlace);
    const currentPlayer = useSelector(state => state.session.currentPlayer);
    const [player, setPlayer] = useState('');
    const [visible, setVisible] = useState(false);
    const [visibleButton, setVisibleButton] = useState(false);
    let textarea = document.getElementById('addInfo');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    useEffect(() => {
        dispatch(fetchPlayer(currentPlayer.id))
            .then(res => setPlayer(res.player))
        dispatch(fetchReservation(params.reservationId))
    }, [])

    useEffect(() => {
        if (player) {
            let date = player.createdAt.split('-');
            let monthInt = date[1];
            let year = date[0];

            setYear(year)
            setMonth(MONTHES[monthInt])
        }
    }, [player])

    useEffect(() => {
        if (reservation.gamePlaceId) {
            dispatch(fetchGamePlace(reservation.gamePlaceId))
        }
    }, [reservation])

    const updateInfo = (e) => {
        reservation.addInfo = e.target.value;
        textarea.style.animation = 'textareaAnimation 1s forwards';
        setVisibleButton(true)
    };

    const handleClick = (e) => {
        
        dispatch(editReservation(reservation))
        textarea.value = '';
        textarea.style.animation = 'textareaBack 1s forwards';
        setVisibleButton(false)
    }

    return (
        <div className="home">
            <div className='view-conf-box'>
                <div className="conf-box-parent">
                    <ReservationViewDetails reservation={reservation}
                                            gamePlace={gamePlace}
                                            currentPlayer={currentPlayer}/>
                    <div className="buttons-res-view">
                        <div className='modify-btn'>
                            <NavLink style={{ textDecoration: 'none' }}
                                to={{
                                pathname: `/booking/${gamePlace.id}/${reservation.id}/modify`,
                                state: {
                                    reservation: reservation,
                                    gamePlace: gamePlace,
                                    currentPlayer: currentPlayer
                                }
                            }}>
                                Modify
                            </NavLink>
                        </div>
                        <div className='edit-btn'>
                            <NavLink style={{ textDecoration: 'none' }}
                                to={{
                                pathname: '/book/cancel',
                                state: {
                                    reservation: reservation,
                                    gamePlace: gamePlace,
                                    currentPlayer: currentPlayer
                                }
                            }}>
                                Cancel
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="what-to-know">
                    <div className="res-add-info-edit">
                        <textarea id="addInfo" placeholder='Add a special request (optional)' onChange={updateInfo}>
                        </textarea>
                        {visibleButton && (
                            <button className='auth-button' id='auth-button-submit' onClick={handleClick}>
                                Submit
                            </button>
                        )}
                    </div>
                    <div className="what-to-know-i">
                        <h1>What to know before you go</h1>
                        <span>
                            A note from the restaurant
                            Thank you for choosing {gamePlace.name}!
                            Our brick oven specialties are perfect for every occasion.
                            Keep in mind, we will seat your party once all of your guests have arrived.
                            There is a 15-minute grace period on your reservation, so if you are running late,
                            please give us a call. We look forward to celebrating with you!
                        </span>
                    </div>
                </div>
                <div className="user-info-box">
                    <div className="u-name">
                        <i className="far fa-user"></i>
                        <span>{currentPlayer.fname} {currentPlayer.lname}</span>
                    </div>
                    <div className="joined-info">Joined in {month} {year}</div>
                    {player && (
                        <>
                            <div className="u-city">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>{player.city.name}</span>
                            </div>
                            <div className="u-reviews">
                                <i className="far fa-comment-alt"></i>
                                <span>{player.reviews.length} reviews</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReservationView;