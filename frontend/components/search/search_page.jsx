import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchResults from './search_results';
import { fetchCities } from '../../actions/city_actions';
import { fetchAllGamePlaces } from '../../actions/game_place_actions';
import SearchBarSearchPage from './seacrh_bar_search_page';
import SearchFilter from './search_filter';
import { useLocation, useParams } from 'react-router-dom';
import { updateFilter } from '../../actions/filter_actions';

const SearchPage = () => {
    const location = useLocation();
    const urlParams = location.search.substring(1).split('%20').join(' ');
    const dispatch = useDispatch();
    const currentDateFull = new Date();
    const currentDate = currentDateFull.toString().split(' ');
    const defaultDate = currentDate[0] + ' ' + currentDate[1] + ' ' + currentDate[2];
    const defaultYear = currentDate[3];
    const defaultGMT = currentDate[5];
    const [reservation, setReservation] = useState('');
    const locationFilter = useSelector(state => state.ui.filters.location);
    const [searchInp, setSearchInp] = useState(urlParams); 
    const [locationFilters, setLocationFilters] = useState('');

    useEffect(() => {
        setLocationFilters(locationFilter)
    }, [locationFilter])

    useEffect(() => {
        if (searchInp) {
            dispatch(updateFilter('name', searchInp))
        } else {
            dispatch(fetchAllGamePlaces())
        }
    }, [searchInp, locationFilters]);

    useEffect(() => {
        dispatch(fetchCities())
    }, []);
    
    useEffect(() => {
        if (location.state) {
            setReservation({
                ...location.state.reservation,
                resYear: defaultYear,
                gmt: defaultGMT,
            })
        } else {
            setReservation({
                gameDate: defaultDate,
                gameStart: '8:00 PM',
                playersNum: 2,
                resYear: defaultYear,
                gmt: defaultGMT,
            })
        }
    }, [location.state])
    
    return (
        <div className='search-results-page'>
            <div className='nav-bar-search'>
                <SearchBarSearchPage reservation={reservation}
                                    setReservation={setReservation}
                                    searchInp={searchInp}
                                    setSearchInp={setSearchInp}/>
            </div>
            <div className="search-grid">
                <div className='left-bar-search'>
                <div className="map-page">

                </div>
                    <SearchFilter locationFilters={locationFilters}
                                    setLocationFilters={setLocationFilters}/>
                </div>
                <div className='right-bar-search'>
                    <SearchResults reservation={reservation}
                                    locationFilters={locationFilters}
                                    setLocationFilters={setLocationFilters}/>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;