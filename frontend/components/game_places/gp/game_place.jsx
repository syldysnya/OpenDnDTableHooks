import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGamePlace } from '../../../actions/game_place_actions';
import { fetchAllReviews } from '../../../actions/review_actions';
import GamePlaceMap from '../../map/game_place_map';
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
    const revErrors = useSelector(state => state.entities.reviews.errors);

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

    let showBigGallery;
    let showSmallGallery;

    if (gamePlace.pictureUrls) {
        let bigArr = gamePlace.pictureUrls.filter((pic, i) => i < 3)
        let smArr = gamePlace.pictureUrls.filter((pic, i) => i >= 3)

        showBigGallery = bigArr.map((pic, i) => (
            <li className='gallery-pic' key={`gallery-pic-${i}`}>
                <img src={pic} />
            </li>
        ))

        showSmallGallery = smArr.map((pic, i) => (
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
                    <div className='gp-description'>
                        {gamePlace.description}
                    </div>
                    <div className='gp-gallery'>
                        <div className="large-pics">{showBigGallery}</div>
                        <div className="small-pics">{showSmallGallery}</div>
                    </div>
                    {/* <div className='review-submit'>
                        { loggedIn && <CreateReviewForm gamePlace={gamePlace} player={player} setCreated={setCreated} created={created} revErrors={revErrors} /> }
                    </div> */}
                    <div className='reviews-box'>
                        <ReviewsIndex reviews={reviews} />
                    </div>
                </div>
                <div className='right-gpage'>
                    <MainPageCreateForm gamePlace={gamePlace} />
                    <div className='gp-map'>
                        <div className='map-box'>
                            <GamePlaceMap gamePlace={gamePlace}/>
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