import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import NavBarContainer from '../home/nav_bar_container';

export default () => {

    return (
        <div className='home'>
            <div className='home-nav'>
                <NavBarContainer />
            </div>
            <div className='home-page-header-frame'>
                <img className='home-page-img' src="https://media-waterdeep.cursecdn.com/attachments/thumbnails/0/642/850/213/half-elfintro.png"/>
            </div>
        </div>

    )
};
