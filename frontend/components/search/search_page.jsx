import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchResults from './search_results';
import { fetchCities } from '../../actions/city_actions';
import SearchBarSearchPage from './seacrh_bar_search_page';
import SearchFilter from './search_filter';
import { useLocation } from 'react-router-dom';
import { deleteFilter, updateFilter } from '../../actions/filter_actions';

const SearchPage = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const currentDateFull = new Date();
    const currentDate = currentDateFull.toString().split(' ');
    const defaultDate = currentDate[0] + ' ' + currentDate[1] + ' ' + currentDate[2];
    const defaultYear = currentDate[3];
    const defaultGMT = currentDate[5];
    const [reservation, setReservation] = useState('');
    const urlParams = location.search.substring(1).split('%20').join(' ');

    useEffect(() => {
        return () => {
            dispatch(deleteFilter())
        }
    }, [])

    useEffect(() => {
        dispatch(updateFilter('name', urlParams))
    }, [urlParams])

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
                                    setReservation={setReservation}/>
            </div>
            <div className="search-grid">
                <div className='left-bar-search'>
                <div className="map-page">

                </div>
                    <SearchFilter/>
                </div>
                <div className='right-bar-search'>
                    <SearchResults reservation={reservation}/>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;