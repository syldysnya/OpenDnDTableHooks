import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllGamePlaces } from '../../../actions/game_place_actions';
import { fetchCities } from '../../../actions/city_actions';
import AllGamePlaces from './all_game_places';
import NewYorkPlaces from './new_york_places';
import PhillyPlaces from './philly_places';
import NewarkPlaces from './newark_places';
import WashingtonPlaces from './washington_places';

const GamePlacesAll = () => {

    const gamePlaces = useSelector(state => state.entities.gamePlaces);
    const cities = useSelector(state => Object.values(state.entities.cities.citiesAll));
    const dispatch = useDispatch();
    const [fetched, setFetched] = useState(false);
    
    useEffect(() => {
        dispatch(fetchAllGamePlaces())
            .then(setFetched(true))
    }, []);

    useEffect(() => {
        dispatch(fetchCities());
    }, [fetched]);
    
    return (
        <div>
            <AllGamePlaces gamePlaces={gamePlaces} cities={cities} />
            <NewYorkPlaces gamePlaces={gamePlaces} cities={cities} />
            <PhillyPlaces gamePlaces={gamePlaces} cities={cities} />
            <NewarkPlaces gamePlaces={gamePlaces} cities={cities} />
            <WashingtonPlaces gamePlaces={gamePlaces} cities={cities} />
        </div>
    );
};

export default GamePlacesAll;