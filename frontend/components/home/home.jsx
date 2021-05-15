import React from 'react';
import GamePlacesIndexContainer from '../game_places/game_places_index_container';
import NavBarContainer from '../home/nav_bar_container';

export default () => {

    return (
        <div className='home'>
            <div className='home-nav'>
                <div className='home-nav-right'>
                    <NavBarContainer />
                </div>
                <div className='home-nav-left'>
                </div>
            </div>
            <div className='home-page-header-frame'>
                <img className='home-page-img' src="https://media-waterdeep.cursecdn.com/attachments/thumbnails/0/642/850/213/half-elfintro.png"/>
            </div>
            <div className='main-page'>
                <GamePlacesIndexContainer />
            </div>
        </div>

    )
};
