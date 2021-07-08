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
    const review = useSelector(state => state.entities.reviews.review);
    const reviews = useSelector(state => state.entities.reviews.reviewsAll);
    const futureRes = useSelector(state => state.entities.reservations.future);
    const pastRes = useSelector(state => state.entities.reservations.past);
    const player = useSelector(state => state.session.currentPlayer);
    const dispatch = useDispatch();
    const location = useLocation();
    const [visibleRes, setVisibleRes] = useState(false);
    const [visibleFav, setVisibleFav] = useState(false);
    const [visibleAcc, setVisibleAcc] = useState(false);

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
        return () => {
            setVisibleFav(false);
            setVisibleAcc(false);
            setVisibleRes(false);
        }
    }, [location.pathname])

    useEffect(() => {
        if (location.pathname === '/my/profile' || location.pathname === '/my/' || location.pathname === '/my/history') {
            setVisibleRes(true)
        } else if (location.pathname === '/my/favorites') {
            setVisibleFav(true)
        } else if (location.pathname === '/my/profile/edit') {
            setVisibleAcc(true)
        }
    }, [location.pathname])

    useEffect(() => {
        if (visibleRes && location.pathname === '/my/history') {
            let part = document.getElementById('history');
            part.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [location, visibleRes])

    const handleClick = e => {
        let id = e.target.id;

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

    return (
        <>
        <div className='profile-page'>
                <div className='profile-bar'>
                    {player.fname} {player.lname}
                </div>
                <div className='profile-left-bar'>
                    <div id='reservations-lb' className={visibleRes ? 'active' : ''} onClick={handleClick}>Reservations</div>
                    <div id='saved-lb' className={visibleFav ? 'active' : ''} onClick={handleClick}>Saved Places</div>
                    <div id='account-lb' className={visibleAcc ? 'active' : ''} onClick={handleClick}>Account Details</div>
                </div>
                {visibleRes && (
                    <>
                        <div className='upcoming-reses'>
                            <div className='text-up'>Upcoming reservations</div>
                            <div className='res-index'>
                                {futureRes.length > 0 && (<UpcomingReservations/>)}
                            </div>
                        </div>
                        <div className='past-reses' id='history'>
                            <div className='text-up'>Past reservations</div>
                            <div className='res-index'>
                                {pastRes.length > 0 && (<PastReservations/>)}
                            </div>
                        </div>
                    </>
                )}
                {visibleAcc && <EditProfile/>}
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