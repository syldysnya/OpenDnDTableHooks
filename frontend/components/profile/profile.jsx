import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchPlayer } from '../../actions/player_actions';
import { fetchAllReservations } from '../../actions/reservation_actions';
import PastReservations from '../reservations/player_reservations/past_reservations';
import UpcomingReservations from '../reservations/player_reservations/upcoming_reservations';
import { NavLink } from 'react-router-dom';

const Profile = () => {

    const reservations = useSelector(state => state.entities.reservations.reservationsAll);
    const player = useSelector(state => state.session.currentPlayer)
    const dispatch = useDispatch();
    const location = useLocation();
    const [visibleRes, setVisibleRes] = useState(true);
    const [visibleFav, setVisibleFav] = useState(false);
    const [visibleAcc, setVisibleAcc] = useState(false);
    const [plInfo, setPlInfo] = useState('');
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchPlayer(player.id))
            .then(res => setPlInfo(res.player))
    }, [])

    useEffect(() => {
        let res = document.getElementById("reservations-lb");
        let acc = document.getElementById("account-lb");
        let fav = document.getElementById("saved-lb");
        debugger
        if (visibleRes) {
            res.classList.add('active');
            acc.classList.remove('active');
            fav.classList.remove('active');
        } else if (visibleFav) {
            fav.classList.add('active');
            acc.classList.remove('active');
            res.classList.remove('active');
        } else if (visibleAcc) {
            acc.classList.add('active')
            fav.classList.remove('active');
            res.classList.remove('active');
        }

    })

    const handleClick = e => {
        let id = e.target.id;
        setVisibleFav(false);
        setVisibleAcc(false);
        setVisibleRes(false);

        if (id === 'reservations-lb') {
            setVisibleRes(true)
        } else if (id === 'saved-lb') {
            setVisibleFav(true)
        } else if (id === 'account-lb') {
            setVisibleAcc(true)
        }
    }

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
                    <div id='reservations-lb' onClick={handleClick}>Reservations</div>
                    <div id='saved-lb' onClick={handleClick}>Saved Places</div>
                    <div id='account-lb' onClick={handleClick}>Account Details</div>
                </div>
                {visibleRes && (
                    <>
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
                    </>
                )}
                {visibleAcc && (
                    <div className='upcoming-reses'>
                        <div className='text-up'>About me</div>
                        <div className='res-index'>
                            
                        </div>
                    </div>
                )}
                {visibleFav && (
                    <div className='upcoming-reses'>
                        <div className='text-up'>Saved Restaurants</div>
                        <div className='res-index'>
                            
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Profile;