import React, { useEffect } from 'react';
import GamePlacesAll from '../game_places/gp_list/game_places_all';
import Footer from './footer';

const Home = () => {
    
    return (
        <div className='home'>
            <div className='home-page-header-frame'>
                <img className='home-page-img' src="https://app-opendndtable-seed.s3.amazonaws.com/Tiamat_2560x1600_0.jpeg"/>
                <div className="grey-background"></div>
            </div>
            <div className='main-page'>
                <GamePlacesAll />
            </div>
            <Footer />
        </div>
    );
};

export default Home;