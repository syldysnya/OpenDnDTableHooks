import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGamePlace } from '../../../actions/game_place_actions';
import MainPageCreateForm from '../../reservations/create_forms/main_page_create_form';

const GamePlace = () => {
    let gamePlaceParams = useParams();
    const dispatch = useDispatch();
    const gamePlace = useSelector(state => state.entities.gamePlaces.gamePlace);
    
    useEffect(() => {
        dispatch(fetchGamePlace(gamePlaceParams.gamePlaceId))
    }, [])

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
                    {/* {loremIpsumText()} */}
                    <div className='gp-gallery'>
                        {showGallery}
                    </div>
                    <div className='review-submit'>
                        {/* <CreateFormReview /> */}
                    </div>
                    <div className='reviews-box'>
                        {/* <ReviewsIndex /> */}
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