import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllGPbyDefault, fetchAllGPbyRating } from '../../../actions/game_place_actions';
import { fetchCities } from '../../../actions/city_actions';
import AllGamePlaces from './all_game_places';
import RatedPage from './rated_page';

const GamePlacesAll = () => {

    const dispatch = useDispatch();
    const player = useSelector(state => state.session.currentPlayer)
    
    useEffect(() => {
        dispatch(fetchAllGPbyDefault())
        dispatch(fetchAllGPbyRating())
    }, [player]);

    useEffect(() => {
        dispatch(fetchCities());
    }, []);
    
    return (
        <>
            <AllGamePlaces />
            <RatedPage />
            {/* <PhillyPlaces />
            <NewarkPlaces />
            <WashingtonPlaces /> */}
        </>
    );
};

export default GamePlacesAll;