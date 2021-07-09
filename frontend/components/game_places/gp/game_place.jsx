import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { fetchGamePlace } from '../../../actions/game_place_actions';
import { fetchAllReviews } from '../../../actions/review_actions';
import GamePlaceMap from '../../map/game_place_map';
import MainPageCreateForm from '../../reservations/create_forms/main_page_create_form';
import CreateReviewForm from '../../reviews/create_review_form';
import ReviewsIndex from '../../reviews/reviews_index';
import RatingsBox from '../../stars/ratings_box';
import StarsShow from '../../stars/stars_show';
import Favorites from '../../favorites/favorites';
import { fetchPlayer } from '../../../actions/player_actions';
import { openModal } from '../../../actions/modal_actions';
import { fetchAllFavs } from '../../../actions/favorite_actions';

const GamePlace = () => {
    let params = useParams();
    const dispatch = useDispatch();
    const gamePlace = useSelector(state => state.entities.gamePlaces.gamePlace);
    const player = useSelector(state => state.session.currentPlayer);
    const reviews = useSelector(state => state.entities.reviews.reviewsAll);
    const {rating, servRating, orgRating, campRating, lengthRat, allRatingsNums, allLength} = gamePlace;
    const total = (rating / lengthRat).toFixed(1);
    const totalServ = (servRating / lengthRat).toFixed(1);
    const totalOrg = (orgRating / lengthRat).toFixed(1);
    const totalCamp = (campRating / lengthRat).toFixed(1);
    const [playerInfo, setPlayerInfo] = useState('');
    const [fav, setFav] = useState('');
    const favRef = useRef(null);

    useEffect(() => {
        if (player) {
            dispatch(fetchPlayer(player.id)).then(res => setPlayerInfo(res.player))
        }
    }, [])

    useEffect(() => {
        dispatch(fetchGamePlace(params.gamePlaceId))
    }, [])

    useEffect(() => {
        if (player) {
            dispatch(fetchAllFavs())
            .then(res => {
                let filtered = Object.values(res.favorites).filter(fav => fav.gamePlaceId === parseInt(params.gamePlaceId));
                setFav(filtered[0])
            })
        } else {
            setFav('')
        }
    }, [player])

    useEffect(() => {
        dispatch(fetchAllReviews(params.gamePlaceId))
    }, [])

    useEffect(() => {
        if (fav) {
            favRef.current.style.width = '100%'
        } else {
            favRef.current.style.width = '0%';
        }
    }, [fav])
    
    const handlePicModal = e => {
        dispatch(openModal(`Gallery:${e.target.id}`))
    }

    let showBigGallery;
    let showSmallGallery;

    if (gamePlace.pictureUrls) {
        let bigArr = gamePlace.pictureUrls.filter((pic, i) => i < 3)
        let smArr = gamePlace.pictureUrls.filter((pic, i) => i >= 3)

        showBigGallery = bigArr.map((pic, i) => (
            <li className='gallery-pic' key={`gallery-pic-${i}`}>
                <img src={pic} id={pic} onClick={handlePicModal}/>
            </li>
        ))

        showSmallGallery = smArr.map((pic, i) => (
            <li className='gallery-pic' key={`gallery-pic-${i}`}>
                <img src={pic} id={pic} onClick={handlePicModal}/>
            </li>
        ))
    }

    const handleScroll = e => {
        
        let key = e.target.id;
        let part = document.getElementById(`${key}-id`)

        part.scrollIntoView({
            behavior: "smooth"
        });
    }

    return (
        <div className='gp-body'>
            <Favorites fav={fav} setFav={setFav} favRef={favRef}/>
            <div className='gp-header'>
                <img src={gamePlace.photoUrl} />
            </div>
            
            <div className='gp-page-box'>
                <div className='left-gpage'>
                    <div className='gp-info-navbar'>
                        <div>
                            <li id='overview' onClick={handleScroll}>Overview</li>
                            <li id='photos' onClick={handleScroll}>Photos</li>
                            <li id='reviews' onClick={handleScroll}>Reviews</li>
                        </div>
                    </div>
                    <div className='gp-info-box' id='overview-id'>
                        <h1>{gamePlace.name}</h1>
                    </div>
                    <div className="rating-box">
                        <div className="rating-list">
                            <StarsShow stars={rating} lengthRat={lengthRat}/>
                            {lengthRat ? (
                                <>
                                    <div>{total}</div>
                                    <div><i className="far fa-comment-alt"></i></div>
                                    {lengthRat === 1 ? (<div>1 review</div>) : (<div>{lengthRat} reviews</div>)}
                                </>
                            ) : (
                                <div>No reviews yet</div>
                            )}
                        </div>
                    </div>
                    <div className='gp-description'>
                        <div>
                            {gamePlace.description}
                        </div>
                    </div>
                    <div className='gp-gallery' id='photos-id'>
                        <div className="gallery-title">9 Photos</div>
                        <div className="gallery-list">
                            <div className="large-pics">{showBigGallery}</div>
                            <div className="small-pics">{showSmallGallery}</div>
                        </div>
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
                                        <div className='rating-inreview'>
                                            <StarsShow stars={rating} lengthRat={lengthRat}/>
                                            {lengthRat > 0 && (<div>{total}</div>)}
                                            <span>based on recent ratings</span>
                                        </div>
                                        <div className='rating-cols'>
                                            <div>
                                                <p>{totalServ}</p>
                                                <span>Service</span>
                                            </div>
                                            <div>
                                                <p>{totalOrg}</p>
                                                <span>Planning</span>
                                            </div>
                                            <div>
                                                <p>{totalCamp}</p>
                                                <span>Campaign</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-reviews">
                                        <RatingsBox nums={allRatingsNums} total={allLength}/>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className='reviews-box'>
                        <ReviewsIndex />
                    </div>
                </div>
                <div className='right-gpage'>
                    <MainPageCreateForm gamePlace={gamePlace} />
                    <div className='gp-map'>
                        <div className='map-box'>
                            <GamePlaceMap />
                            <p>{gamePlace.address}</p>
                        </div>
                        <div className='hours-info'>
                            <div className="hours">
                                <div className="title">
                                    <i className="far fa-clock"></i>
                                    <p>Hours of operation</p>
                                </div>
                                <div className='details'>
                                    <p>{gamePlace.openHour} - {gamePlace.closeHour}</p>
                                </div>
                            </div>
                            <div className="dresscode">
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
        </div>
    );
};

export default GamePlace;