import React from 'react';
import GamePlacesIndexContainer from '../game_places/game_places_index_container';
import NavBarContainer from '../home/nav_bar_container';

export default () => {

    return (
        <div className='home'>
            <div className='home-nav'>
                <div className='home-nav-right'>
                    <NavBarContainer />
                <div className='home-nav-left'>
                </div>
                </div>
            </div>
            <div className='home-page-header-frame'>
                <img className='home-page-img' src="https://app-opendndtable-seed.s3.amazonaws.com/Tiamat_2560x1600_0.jpeg"/>
            </div>
            <div className='main-page'>
                <GamePlacesIndexContainer />
            </div>
        </div>

    )
};
