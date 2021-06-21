import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchResults from './search_results';
import { fetchCities } from '../../actions/city_actions';
import { fetchAllGamePlaces } from '../../actions/game_place_actions';
import SearchBarSearchPage from './seacrh_bar_search_page';
import SearchFilter from './search_filter';

const SearchPage = (props) => {

    const gamePlaces = useSelector(state => Object.values(state.entities.gamePlaces.gamePlacesAll));
    const cities = useSelector(state => Object.values(state.entities.cities.citiesAll));
    const dispatch = useDispatch();
    const [searchInp, setSearchInp] = useState('');
    const currentDateFull = new Date();
    const currentDate = currentDateFull.toDateString().replace(' 2021', '');
    const [input, setHandleInput] = useState('');
    const [checkBoxInp, setCheckBoxInp] = useState('');
    const [searchResults, SetSearchResults] = useState(searchInp);
    const [filterResults, SetFilterResults] = useState(checkBoxInp);

    const [reservation, setReservation] = useState({
        gameDate: currentDate,
        gameStart: '8:00 PM',
        playersNum: 2
    });

    const handleInput = e => {
        setHandleInput(e.target.value)
    }

    useEffect(() => {
        if (props.location.aboutProps) {
            setSearchInp(props.location.aboutProps.searchInput.toLowerCase())
        }
    }, [])

    useEffect(() => {
        if (props.location.aboutProps) {
            setReservation(props.location.aboutProps.reservation)
        }
    }, [])

    useEffect(() => {
        dispatch(fetchAllGamePlaces())
    }, []);

    useEffect(() => {
        dispatch(fetchCities())
    }, []);

    useEffect(() => {
        
        let filteredGPlaces = gamePlaces.filter(gp => gp.name.toLowerCase().includes(searchInp))
        let filteredCity = cities.filter(city => city.name.toLowerCase() === searchInp)

        let filtered;

        if (filteredGPlaces.length === 0) {
            filtered = gamePlaces.filter(gp => gp.cityId === filteredCity[0].id)
        } else {
            filtered = filteredGPlaces
        }

        SetSearchResults(filtered)
    }, [searchInp])

    useEffect(() => {
        let checkBoxArray; 
        
        if (searchResults.length > 0) {
            checkBoxArray = searchResults
        } else {
            checkBoxArray = gamePlaces
        }

        let filtered;
        debugger
        if (checkBoxInp) {
            filtered = checkBoxArray.filter(gp => gp.cityId === parseInt(checkBoxInp))
        } else {
            filtered = ''
        }

        SetFilterResults(filtered)
    }, [checkBoxInp])

    const handleClick = e => {
        e.preventDefault();
        
        setReservation(reservation)
        setSearchInp(input)
    }

    const handleCheckBox = e => {
        e.preventDefault();
        debugger
        setCheckBoxInp(e.target.id)
    }

    return (
        <div className='search-results-page'>
            <div className='nav-bar-search'>
                <SearchBarSearchPage reservation={reservation}
                                    handleInput={handleInput}
                                    setSearchInp={setSearchInp}
                                    setReservation={setReservation}
                                    handleClick={handleClick} />
            </div>
            <div className="search-grid">
                <div className='left-bar-search'>
                <div className="map-page">

                </div>
                    <SearchFilter cities={cities}
                                handleCheckBox={handleCheckBox}/>
                </div>
                <div className='right-bar-search'>
                    <SearchResults  searchResults={searchResults}
                                    filterResults={filterResults}
                                    cities={cities}
                                    gamePlaces={gamePlaces}
                                    reservation={reservation}/>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;