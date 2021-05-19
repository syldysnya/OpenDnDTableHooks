import React from 'react';
import GamePlacesIndexContainer from '../game_places/game_places_index_container';
import NavBarContainer from '../home/nav_bar_container';
import MapSearchContainer from '../map/map_search_container';

export default () => {

    return (
        <div className='home'>
            {/* <NavBarContainer /> */}
            <div className='home-page-header-frame'>
                <img className='home-page-img' src="https://app-opendndtable-seed.s3.amazonaws.com/Tiamat_2560x1600_0.jpeg"/>
            </div>
            <div className='main-page'>
                <div className='location-message'>
                    <span>It looks like you're in 'current city'</span>
                    <i class="fas fa-location-arrow"></i>
                    <span className='red-text'>Get current location</span>
                </div>
                <GamePlacesIndexContainer />
                {/* <MapSearchContainer /> */}
            </div>
        </div>

    )
};
