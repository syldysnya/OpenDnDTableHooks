import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GamePlacesAll from '../game_places/gp_list/game_places_all';

const Home = () => {
    
    return (
        <div className='home'>
            {/* <NavBarContainer /> */}
            <div className='home-page-header-frame'>
                <img className='home-page-img' src="https://app-opendndtable-seed.s3.amazonaws.com/Tiamat_2560x1600_0.jpeg"/>
            </div>
            <div className='main-page'>
                <div className='location-message'>
                    <span>It looks like you're in 'current city'</span>
                    <i className="fas fa-location-arrow"></i>
                    <span className='red-text'>Get current location</span>
                </div>
                <GamePlacesAll />
                {/* <GamePlacesIndexContainer /> */}
                {/* <MapSearchContainer /> */}
            </div>
        </div>
    );
};

export default Home;