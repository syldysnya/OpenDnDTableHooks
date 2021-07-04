import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchAllReservations } from '../../actions/reservation_actions';
import PastReservations from '../reservations/player_reservations/past_reservations';
import UpcomingReservations from '../reservations/player_reservations/upcoming_reservations';
import EditProfile from './edit_profile';
import { fetchCities } from '../../actions/city_actions';
import { fetchPlayer } from '../../actions/player_actions';
import { fetchAllFavs } from '../../actions/favorite_actions';
import StarsShow from '../stars/stars_show';
import SavedGamePlaces from '../game_places/gp/saved_game_place';
import { fetchAllReviews } from '../../actions/review_actions';

const Profile = () => {

    const history = useHistory();
    const reservations = useSelector(state => state.entities.reservations.reservationsAll);
    const review = useSelector(state => state.entities.reviews.review);
    const reviews = useSelector(state => state.entities.reviews.reviewsAll);
    const player = useSelector(state => state.session.currentPlayer);
    const dispatch = useDispatch();
    const location = useLocation();
    const [visibleRes, setVisibleRes] = useState(false);
    const [visibleFav, setVisibleFav] = useState(false);
    const [visibleAcc, setVisibleAcc] = useState(false);
    const [upcoming, setUpcoming] = useState([]);
    const [pastRes, setPastRes] = useState([]);
    const currentDate = new Date();
    const current = Date.parse(currentDate);
    let mapped;

    useEffect(() => {
        dispatch(fetchAllReservations())
    }, [])

    useEffect(() => {
        dispatch(fetchAllFavs())
    }, [])

    useEffect(() => {
        dispatch(fetchAllReviews())
    }, [review])
    
    useEffect(() => {
        dispatch(fetchCities())
    }, []);

    useEffect(() => {
        dispatch(fetchPlayer(player.id))
    }, [])

    useEffect(() => {
        setVisibleFav(false)
        setVisibleAcc(false)
        setVisibleRes(false)

        if (location.pathname === '/my/profile' || location.pathname === '/my') {
            setVisibleRes(true)
        } else if (location.pathname === '/my/favorites') {
            setVisibleFav(true)
        } else if (location.pathname === '/my/profile/edit') {
            setVisibleAcc(true)
        }
    }, [location.pathname])
    
    useEffect(() => {
        let res = document.getElementById("reservations-lb");
        let acc = document.getElementById("account-lb");
        let fav = document.getElementById("saved-lb");
        
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

    }, [visibleAcc, visibleFav, visibleRes])

    const handleClick = e => {
        let id = e.target.id;
        setVisibleFav(false);
        setVisibleAcc(false);
        setVisibleRes(false);

        if (id === 'reservations-lb') {
            setVisibleRes(true)
            history.push('/my/profile');
        } else if (id === 'saved-lb') {
            setVisibleFav(true)
            history.push('/my/favorites');
        } else if (id === 'account-lb') {
            setVisibleAcc(true)
            history.push('/my/profile/edit');
        }
    }

    useEffect(() => {
        let upres = [];
        let past = [];
    
        Object.values({...reservations}).filter(reservation => {
            let dateFull = new Date(`${reservation.gameDate} ${reservation.resYear} ${reservation.gameStart} ${reservation.gmt}`);
            let resDate = Date.parse(dateFull) 
    
            if (reservation.canceled === true) {
                past.push(reservation)
            } else if (current > resDate) {
                past.push(reservation)
            } else {
                upres.push(reservation)
            }
        });

        setUpcoming(upres);
        setPastRes(past);

    }, [reservations])

    return (
        <>
        <div className='profile-page'>
                <div className='profile-bar'>
                    {player.fname} {player.lname}
                    {/* <span>0 points</span> */}
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
                                <UpcomingReservations reservations={upcoming} player={player}/>
                            </div>
                        </div>
                        <div className='past-reses'>
                            <div className='text-up'>Past reservations</div>
                            <div className='res-index'>
                                <PastReservations reservations={pastRes} currentPlayer={player}/>
                            </div>
                        </div>
                    </>
                )}
                {visibleAcc && <EditProfile curPlayer={player}/>}
                {visibleFav && (
                    <div className='upcoming-reses'>
                        <div className='text-up'>Saved Restaurants</div>
                        <div className='res-index'>
                            <SavedGamePlaces />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Profile;