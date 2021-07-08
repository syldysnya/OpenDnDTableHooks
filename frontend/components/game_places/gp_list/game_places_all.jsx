import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllGPbyDate, fetchAllGPbyDefault, fetchAllGPbyRating } from '../../../actions/game_place_actions';
import { fetchCities } from '../../../actions/city_actions';
import AllGamePlaces from './all_game_places';
import RatedPage from './rated_page';
import NewestPage from './newest_page';

const GamePlacesAll = () => {

    const dispatch = useDispatch();
    const player = useSelector(state => state.session.currentPlayer);
    const cities = useSelector(state => Object.values({...state.entities.cities.citiesAll}));
    let mapped;
    
    useEffect(() => {
        dispatch(fetchAllGPbyDefault())
    }, [player]);

    useEffect(() => {
        dispatch(fetchAllGPbyRating())
    }, [player]);

    useEffect(() => {
        dispatch(fetchAllGPbyDate())
    }, [player]);

    useEffect(() => {
        dispatch(fetchCities());
    }, []);

    if (cities) {
        mapped = cities.map((city, i) => {
            return (
            <div className={`link-city-${i}`}>
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
            {/* <div className="flux-ad">
                <article>FLUX</article>
                <div className="photos-of-us">
                    <div className='rectangle-fr-1'></div>
                    <div className='rectangle-fr-2'></div>
                    <div className='rectangle-fr-3'></div>
                    <div className='rectangle-fr-4'></div>
                </div>
                <h1>Flux is a travel planner app</h1>
                <span>made by us</span>
                <ul>
                    <li>MongoDB</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Node.js</li>
                    <li>Gmail API</li>
                </ul>
            </div> */}
            <div className="destination-box">
                <span className='explore-title'>Explore OpenDnDTable</span>
                <div className="area-box">
                    <div className="east-area">the East</div>
                    <div className="west-area">the West</div>
                    <div className="south-area">the South</div>
                    <div className="midwest-area">the Midwest</div>
                </div>
                <div className="cities-list-links">
                    {mapped}
                </div>
            </div>
            {/* <NewarkPlaces />
            <WashingtonPlaces /> */}
        </>
    );
};

export default GamePlacesAll;