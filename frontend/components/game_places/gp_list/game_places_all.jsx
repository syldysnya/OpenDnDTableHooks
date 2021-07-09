import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllGPbyDate, fetchAllGPbyDefault, fetchAllGPbyRating } from '../../../actions/game_place_actions';
import { fetchCities } from '../../../actions/city_actions';
import AllGamePlaces from './all_game_places';
import RatedPage from './rated_page';
import NewestPage from './newest_page';
import { useHistory, useLocation, useParams } from 'react-router-dom';

const GamePlacesAll = () => {

    const dispatch = useDispatch();
    const player = useSelector(state => state.session.currentPlayer);
    const cities = useSelector(state => Object.values({...state.entities.cities.citiesAll}));
    const history = useHistory();
    const location = useLocation();
    const params = useParams();
    let mapped;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [location.pathname])
    
    useEffect(() => {
        if (params) {
            dispatch(fetchAllGPbyDefault(params.area))
        } else {
            dispatch(fetchAllGPbyDefault())
        }
    }, [player, location]);

    useEffect(() => {
        if (params) {
            dispatch(fetchAllGPbyRating(params.area))
        } else {
            dispatch(fetchAllGPbyRating())
        }
    }, [player, location]);

    useEffect(() => {
        if (params) {
            dispatch(fetchAllGPbyDate(params.area))
        } else {
            dispatch(fetchAllGPbyDate())
        }
    }, [player, location]);

    const handleClick = e => {
        let value = e.target.id;

        history.push(`/discover/${value}`)
    }

    if (cities) {
        mapped = cities.map((city, i) => {
            return (
            <div className={`link-city-${i}`} key={`link-city-${i}`} id={city.id} onClick={handleClick}>
                {city.name}
            </div>
            )
        })
    }

    return (
        <>
            <AllGamePlaces />
            <RatedPage />
            <NewestPage />
            <div className="destination-box">
                <span className='explore-title'>Explore OpenDnDTable</span>
                <div className="area-box">
                    <div className="east-area" id='east' onClick={handleClick}>the East</div>
                    <div className="west-area" id='west' onClick={handleClick}>the West</div>
                    <div className="south-area" id='south' onClick={handleClick}>the South</div>
                    <div className="midwest-area" id='midwest' onClick={handleClick}>the Midwest</div>
                </div>
                <div className="cities-list-links">
                    {mapped}
                </div>
            </div>
        </>
    );
};

export default GamePlacesAll;