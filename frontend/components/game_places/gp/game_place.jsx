import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGamePlace } from '../../../actions/game_place_actions';
import { fetchAllReviews } from '../../../actions/review_actions';
import GamePlaceMap from '../../map/game_place_map';
import MainPageCreateForm from '../../reservations/create_forms/main_page_create_form';
import CreateReviewForm from '../../reviews/create_review_form';
import ReviewsIndex from '../../reviews/reviews_index';
import RatingsBox from '../../stars/ratings_box';
import StarsShow from '../../stars/stars_show';

const GamePlace = () => {
    let gamePlaceParams = useParams();
    const dispatch = useDispatch();
    const gamePlace = useSelector(state => state.entities.gamePlaces.gamePlace);
    const player = useSelector(state => state.session.currentPlayer);
    const [loggedIn, setLoggedIn] = useState(false);
    const reviews = useSelector(state => state.entities.reviews.reviewsAll);
    const {rating, servRating, orgRating, campRating, lengthRat, allRatingsNums, allLength} = gamePlace;
    const total = (rating / lengthRat).toFixed(1);
    const totalServ = (servRating / lengthRat).toFixed(1);
    const totalOrg = (orgRating / lengthRat).toFixed(1);
    const totalCamp = (campRating / lengthRat).toFixed(1);
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        dispatch(fetchAllReviews(gamePlaceParams.gamePlaceId))
    }, [])

    useEffect(() => {
        if (player) {
            setLoggedIn(true)
        }
    }, [])
    
    useEffect(() => {
        dispatch(fetchGamePlace(gamePlaceParams.gamePlaceId))
            .then(res => setFetched(true))
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

    const handleScroll = e => {
        debugger
        let key = e.target.id;
        let part = document.getElementById(`${key}-id`)

        part.scrollIntoView({
            behavior: "smooth"
        });
    }

    return (
        <div className='gp-body'>
            <div className='gp-header'>
                <img src={gamePlace.photoUrl} />
            </div>
            
            <div className='gp-page-box'>
                <div className='left-gpage'>
                    <div className='gp-info-navbar'>
                        <li id='overview' onClick={handleScroll}>Overview</li>
                        <li id='photos' onClick={handleScroll}>Photos</li>
                        <li id='reviews' onClick={handleScroll}>Reviews</li>
                    </div>
                    <div className='gp-info-box'>
                        <h1>{gamePlace.name}</h1>
                    </div>
                    <div className="rating-box">
                        {fetched && <StarsShow stars={rating} lengthRat={lengthRat}/>}
                        {lengthRat ? (
                            <>
                                <div>{total}</div>
                                <i className="far fa-comment-alt"></i>
                                {lengthRat === 1 ? (<div>1 review</div>) : (<div>{lengthRat} reviews</div>)}
                            </>
                        ) : (
                            <div>No reviews yet</div>
                        )}

                    </div>
                    <div className='gp-description' id='overview-id'>
                        {gamePlace.description}
                    </div>
                    <div className='gp-gallery' id='photos-id'>
                        <div className="large-pics">{showBigGallery}</div>
                        <div className="small-pics">{showSmallGallery}</div>
                    </div>
                    <div className='review-info-box' id='reviews-id'>
                        {lengthRat > 0 && (
                            <>
                                <h2>
                                    {lengthRat === 1 ? (<div>What people are saying</div>) : (<div>What {lengthRat} people are saying</div>)}
                                </h2>
                                <div className="ratings-box-small">
                                    <div className="left-reviews">
                                        <h1>
                                            Overall ratings and reviews
                                        </h1>
                                        <span>
                                            Reviews can only be made by diners who have eaten at this restaurant
                                        </span>
                                        <div>
                                            {fetched && <StarsShow stars={rating} lengthRat={lengthRat}/>}
                                            {lengthRat > 0 && (<div>{total}</div>)}
                                            <span>based on recent ratings</span>
                                        </div>
                                        <div>
                                            <div>
                                                <span>{totalServ}</span>
                                                <span>Service</span>
                                            </div>
                                            <div>
                                                <span>{totalOrg}</span>
                                                <span>Organization</span>
                                            </div>
                                            <div>
                                                <span>{totalCamp}</span>
                                                <span>Campaign</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-reviews">
                                        {fetched && <RatingsBox nums={allRatingsNums} total={allLength}/>}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
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