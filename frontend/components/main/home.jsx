import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCities, fetchCity } from '../../actions/city_actions';
import GamePlacesAll from '../game_places/gp_list/game_places_all';
import SearchBar from '../search/search_bar';

const Home = () => {
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        let par = params.area || ''
        if (par && parseInt(par)) {
            dispatch(fetchCity(par))
        }

    }, [params])

    useEffect(() => {
        dispatch(fetchCities())
    }, [])
    
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