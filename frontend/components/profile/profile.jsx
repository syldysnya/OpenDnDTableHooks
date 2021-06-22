import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchAllReservations } from '../../actions/reservation_actions';
import PastReservations from '../reservations/player_reservations/past_reservations';
import UpcomingReservations from '../reservations/player_reservations/upcoming_reservations';

const Profile = () => {

    const reservations = useSelector(state => state.entities.reservations.reservationsAll);
    const player = useSelector(state => state.session.currentPlayer)
    const dispatch = useDispatch();
    const location = useLocation();
    const [visibleRes, setVisibleRes] = useState(false);
    const [visibleAcc, setVisibleAcc] = useState(false);

    useEffect(() => {
        if (location.pathname === '/my/profile') {
            setVisibleRes(true)

            let res = document.getElementById("reservations-lb");
            res.classList.add('active')
        } else if (location.pathname === '/my/favorites') {
            setVisibleAcc(true)

            let res = document.getElementById("saved-lb");
            res.classList.add('active')
        }
        
    }, [])

    useEffect(() => {
        dispatch(fetchAllReservations())
    }, [])

    let upcoming = Object.values(reservations).filter(reservation => reservation.canceled === false);
    let past = Object.values(reservations).filter(reservation => reservation.canceled === true);

    return (
        <>
        <div className='profile-page'>
                <div className='profile-bar'>
                    {player.lname} {player.fname}
                    <span>0 points</span>
                </div>
                <div className='profile-left-bar'>
                    <div id='reservations-lb'>Reservations</div>
                    <div id='saved-lb'>Saved Places</div>
                    <div id='account-lb'>Account Details</div>
                </div>
                <div className='upcoming-reses'>
                    <div className='text-up'>Upcoming reservations</div>
                    <div className='res-index'>
                        <UpcomingReservations reservations={upcoming}/>
                    </div>
                </div>
                <div className='past-reses'>
                    <div className='text-up'>Past reservations</div>
                    <div className='res-index'>
                        <PastReservations reservations={past}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;