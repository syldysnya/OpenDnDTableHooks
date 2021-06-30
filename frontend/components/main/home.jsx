import React, { useEffect } from 'react';
import GamePlacesAll from '../game_places/gp_list/game_places_all';
import SearchBar from '../search/search_bar';

const Home = () => {
    
    return (
        <div className='home'>
            <div className='home-page-header-frame'>
                <SearchBar />
            </div>
            <div className='main-page'>
                <GamePlacesAll />
            </div>
        </div>
    );
};

export default Home;