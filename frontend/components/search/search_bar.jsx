import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Calendar } from 'react-date-range';
import { RES_TIME } from '../reservations/create_forms/main_page_create_form';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('');
    const location = useLocation();
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
        <div>
            <div className='info-create-form'>
                <span>Party Size</span>
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
            <div className='info-create-date'>
                <span>Date</span>
                <div className='parent-calendar-box'
                    id='gameDate'
                    onClick={showCalendar} tabIndex='0'
                    >
                    {reservation.gameDate}
                    <div className='dropdown-calendar'>
                        {visible && (
                            <Calendar
                                date={new Date()}
                                onChange={e => updateDate(e)}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className='info-create-time' value='gameStart'>
                <span>Time</span>
                <select onChange={updateInfo} 
                    id='gameStart'
                    defaultValue='8:00 PM'>
                    {timePick}
                </select>
            </div>
            <input type="search" 
                name="search-bar"
                onChange={handleSearch}
                value={searchInput}/>
            <button onClick={handleClick}>
                Let's go
            </button>
        </div>
    );
};

export default SearchBar;