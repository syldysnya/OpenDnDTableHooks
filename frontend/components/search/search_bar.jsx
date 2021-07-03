import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Calendar } from 'react-date-range';
import { RES_TIME } from '../reservations/create_forms/main_page_create_form';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('');
    const history = useHistory();
    const currentDateFull = new Date();
    const currentDate = currentDateFull.toDateString().replace(' 2021', '');
    const player = useSelector(state => state.session.currentPlayer);
    const dispatch = useDispatch();

    const [reservation, setReservation] = useState({
        gameDate: currentDate,
        gameStart: '8:00 PM',
        playersNum: 2
    });

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let searchBox = document.getElementById('search-box-main');
        
        if (window.innerWidth <= 1000) {
            searchBox.classList.add('resized')      
        } else {
            searchBox.classList.remove('resized') 
        }

        const handleResize = () => {
            if (window.innerWidth <= 1000) {
                searchBox.classList.add('resized') 
            } else {
                searchBox.classList.remove('resized') 
            }
        }
      
        window.addEventListener('resize', handleResize)
    }, [])

    const handleSearch = e => {
        setSearchInput(e.target.value)
    }

    const updateInfo = (e) => {
        setReservation({ ...reservation, [e.target.id]: e.target.value })
    };

    const showCalendar = () => {
        setVisible(!visible)
    }

    const timePick = RES_TIME.map(t => {
            return (
                <option key={t} value={t}>{t}</option>
            )
        })

    const updateDate = (e) => {
        let newDate = e.toDateString().replace(' 2021', '');
        setReservation({ ...reservation, gameDate: newDate })
        setVisible(false)
    }

    const hideCalendar = e => {
        setVisible(false)
    }

    const handleClick = e => {
        e.preventDefault();

        if (player) {
            history.push({
                pathname: '/search',
                aboutProps: {
                    reservation: reservation,
                    searchInput: searchInput
                }
            })
        } else {
            dispatch(openModal('Sign In'))
        }
    }

    return (
        <div className="search-box-main" id='search-box-main'>
            <div className="search-text-main">
                Find your table for DnD sessions
            </div>
            <div className='search'>
                <div className="search-reserv-info">
                    <div className='info-create-date'>
                        <i className="far fa-calendar"></i>
                        <div className='parent-calendar-box'
                            id='gameDate'
                            onClick={showCalendar} tabIndex='0'
                            >
                            <span>{reservation.gameDate}</span>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className='info-create-time' value='gameStart' onClick={hideCalendar}>
                        <select onChange={updateInfo} 
                            id='gameStart'
                            defaultValue='8:00 PM'>
                            {timePick}
                        </select>
                    </div>
                    <div className='info-create-form' onClick={hideCalendar}>
                        <select defaultValue='2'
                            id='playersNum'
                            onChange={updateInfo}>
                            <option key='1'value="1">For 1</option>
                            <option key='2'value="2">For 2</option>
                            <option key='3'value="3">For 3</option>
                            <option key='4'value="4">For 4</option>
                            <option key='5'value="5">For 5</option>
                        </select>
                    </div>
                </div>
                <div className="search-input" onClick={hideCalendar}>
                    <i className="fas fa-search"></i>
                    <input type="search" 
                        name="search-bar"
                        onChange={handleSearch}
                        value={searchInput}
                        placeholder='Location or Place'/>
                </div>
                <button onClick={handleClick}>
                    Let's go
                </button>
            </div>
            {visible && (
                <div className='dropdown-calendar' onMouseLeave={showCalendar}>
                    <Calendar
                        date={new Date()}
                        onChange={e => updateDate(e)}
                        minDate={new Date()}
                        maxDate={new Date('12-31-2021')}
                    />
            </div>)}
        </div>
    );
};

export default SearchBar;