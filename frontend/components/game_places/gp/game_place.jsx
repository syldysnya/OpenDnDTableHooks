import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGamePlace } from '../../../actions/game_place_actions';
import { fetchAllReviews } from '../../../actions/review_actions';
import MainPageCreateForm from '../../reservations/create_forms/main_page_create_form';
import CreateReviewForm from '../../reviews/create_review_form';
import ReviewsIndex from '../../reviews/reviews_index';

const GamePlace = () => {
    let gamePlaceParams = useParams();
    const dispatch = useDispatch();
    const gamePlace = useSelector(state => state.entities.gamePlaces.gamePlace);
    const player = useSelector(state => state.session.currentPlayer);
    const [loggedIn, setLoggedIn] = useState(false);
    const [created, setCreated] = useState(false);
    const reviews = useSelector(state => state.entities.reviews.reviewsAll);

    useEffect(() => {
        dispatch(fetchAllReviews(gamePlaceParams.gamePlaceId))
    }, [created])

    useEffect(() => {
        if (player) {
            setLoggedIn(true)
        }
    }, [])
    
    useEffect(() => {
        dispatch(fetchGamePlace(gamePlaceParams.gamePlaceId))
    }, [])

    let loremIpsumText = (
        <div className='gp-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
    )

    let showGallery;

    if (gamePlace.pictureUrls) {
        showGallery = gamePlace.pictureUrls.map((pic, i) => (
            <li className='gallery-pic' key={`gallery-pic-${i}`}>
                <img src={pic} />
            </li>
        ))
    }

    return (
        <div className='gp-body'>
            <div className='gp-header'>
                <img src={gamePlace.photoUrl} />
            </div>
            
            <div className='gp-page-box'>
                <div className='left-gpage'>
                    <div className='gp-info-navbar'>
                        <li key='overview'>Overview</li>
                        <li key='photos'>Photos</li>
                        <li key='campaigns'>DnD Campaigns</li>
                        <li key='reviews'>Reviews</li>
                    </div>
                    <div className='gp-info-box'>
                        <h1>{gamePlace.name}</h1>
                    </div>
                        {loremIpsumText}
                    <div className='gp-gallery'>
                        {showGallery}
                    </div>
                    <div className='review-submit'>
                        { loggedIn && <CreateReviewForm gamePlace={gamePlace} player={player} setCreated={setCreated} created={created} /> }
                    </div>
                    <div className='reviews-box'>
                        <ReviewsIndex reviews={reviews} />
                    </div>
                </div>
                <div className='right-gpage'>
                    <MainPageCreateForm gamePlace={gamePlace} />
                    {/* <ReservationCreateFormContainer /> */}
                
                    <div className='gp-map'>
                        <div className='map-box'>
                            <img src='https://app-opendndtable-seed.s3.amazonaws.com/Screen+Shot+2021-05-20+at+1.28.32+AM.png'/>
                            <p>{gamePlace.address}</p>
                        </div>
                        <div className='hours-info'>
                            <p>{gamePlace.openHour}</p>
                            <p>{gamePlace.closeHour}</p>
                            <span> 
                                <i className="fas fa-hat-wizard"></i>
                                Dress Code
                            </span>
                            <p>Casual Dress</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamePlace;