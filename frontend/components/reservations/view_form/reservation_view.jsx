import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGamePlace } from '../../../actions/game_place_actions';
import { fetchReservation } from '../../../actions/reservation_actions';
import EditReservation from '../edit_form/edit_reservation';
import ReservationViewDetails from './reservation_view_details';
import { NavLink } from 'react-router-dom'

const ReservationView = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const reservation = useSelector(state => state.entities.reservations.reservation);
    const gamePlace = useSelector(state => state.entities.gamePlaces.gamePlace);
    const currentPlayer = useSelector(state => state.session.currentPlayer);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        dispatch(fetchReservation(params.reservationId))
    }, [])

    useEffect(() => {
        if (reservation.gamePlaceId) {
            dispatch(fetchGamePlace(reservation.gamePlaceId))
        }
    }, [reservation])

    const handleDropdownMenu = e => {
        if (e.target.contains(e.relatedTarget)) {
            return null;
        }

        setVisible(!visible)
    }

    console.log(gamePlace)
    return (
        <div className='view-conf-box'>
            <ReservationViewDetails reservation={reservation}
                                    gamePlace={gamePlace}
                                    currentPlayer={currentPlayer}/>
            <div className='modify-btn'
                onClick={handleDropdownMenu}>
                Modify
            </div>
            {visible && <EditReservation reservation={reservation}/>}

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
    );
};

export default ReservationView;