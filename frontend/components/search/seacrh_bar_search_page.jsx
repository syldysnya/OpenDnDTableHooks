import React, { useEffect, useRef, useState } from 'react';
import { RES_TIME } from '../reservations/create_forms/main_page_create_form';
import { Calendar } from 'react-date-range';
import { useHistory, useLocation } from 'react-router-dom';

const SearchBarSearchPage = (props) => {

    const [visible, setVisible] = useState(false);
    const {reservation, setReservation, searchInp, setSearchInp} = props;
    const {playersNum, gameStart} = reservation;
    const location = useLocation();
    const history = useHistory();

    const updateInfo = (e) => {
        setReservation({ ...reservation, [e.target.id]: e.target.value })
    };

    const showCalendar = () => {
        setVisible(!visible)
    }

    const handleInput = e => {
        setSearchInp(e.target.value)
    }

    const handleClick = e => {
        e.preventDefault();

        history.push({
            pathname: '/search',
            state: {
                reservation: reservation,
            },
            search: searchInp
        })
    }

    const timePick = RES_TIME.map(t => {
        return (
            <option key={t} value={t}>{t}</option>
        )
    })

    const updateDate = (e) => {
        const newDateFull = e.toString().split(' ');
        const newDate = newDateFull[0] + ' ' + newDateFull[1] + ' ' + newDateFull[2];
        const newYear = newDateFull[3];
        const newGMT = newDateFull[5];
        setReservation({ ...reservation, gameDate: newDate, resYear: newYear, gmt: newGMT })
        setVisible(false)
    }

    const hideCalendar = e => {
        setVisible(false)
    }

    return (
        <>
            <div className='search-search-page'>
                <div className="search-reserv-info">
                    <div className='info-create-date'>
                        <i className="far fa-calendar"></i>
                        <div className='parent-calendar-box'
                            id='gameDate'
                            onClick={showCalendar} tabIndex='0'
                            >
                            {reservation.gameDate}
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className='info-create-time' defaultValue='gameStart' onClick={hideCalendar}>
                        {reservation && (<select onChange={updateInfo} defaultValue={gameStart}
                            id='gameStart'>
                            {timePick}
                        </select>)}
                    </div>
                    <div className='info-create-form' onClick={hideCalendar}>
                        {reservation && (<select id='playersNum' defaultValue={playersNum}
                            onChange={updateInfo}>
                            <option key='1' value='1'>For 1</option>
                            <option key='2' value='2'>For 2</option>
                            <option key='3' value='3'>For 3</option>
                            <option key='4' value='4'>For 4</option>
                            <option key='5' value='5'>For 5</option>
                        </select>)}
                    </div>
                </div>
                <div className="search-input">
                    <i className="fas fa-search"></i>
                    <input type="search" 
                        name="search-bar"
                        onChange={handleInput}
                        />
                </div>
                <button onClick={handleClick}>
                    Find a Table
                </button>
            </div>
            {visible && (
                <div className='dropdown-calendar search' onMouseLeave={hideCalendar}>
                    <Calendar
                        date={new Date()}
                        onChange={e => updateDate(e)}
                        minDate={new Date()}
                        maxDate={new Date('12-31-2021')}
                    />
                </div>
            )}
        </>
    );
};

export default SearchBarSearchPage;