import React, { useEffect, useRef, useState } from 'react';
import { RES_TIME } from '../reservations/create_forms/main_page_create_form';
import { Calendar } from 'react-date-range';

const SearchBarSearchPage = (props) => {

    const [visible, setVisible] = useState(false);
    const {reservation} = props;
    const {playersNum} = reservation;

    const updateInfo = (e) => {
        props.setReservation({ ...reservation, [e.target.id]: e.target.value })
    };

    const showCalendar = () => {
        setVisible(!visible)
    }

    const timePick = RES_TIME.map(t => {
        if (t === reservation.gameStart) {
            return (
                <option selected key={t} value={t}>{t}</option>
            )
            
        } else {
            return (
                <option key={t} value={t}>{t}</option>
            )
        }
    })

    const updateDate = (e) => {
        let newDate = e.toDateString().replace(' 2021', '');
        props.setReservation({ ...reservation, gameDate: newDate })
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
                        <select onChange={updateInfo} 
                            id='gameStart'>
                            {timePick}
                        </select>
                    </div>
                    <div className='info-create-form' onClick={hideCalendar}>
                        <select id='playersNum' defaultValue={playersNum}
                            onChange={updateInfo}>
                            <option key='1' value='1'>For 1</option>
                            <option key='2' value='2'>For 2</option>
                            <option key='3' value='3'>For 3</option>
                            <option key='4' value='4'>For 4</option>
                            <option key='5' value='5'>For 5</option>
                        </select>
                    </div>
                </div>
                <div className="search-input">
                    <i className="fas fa-search"></i>
                    <input type="search" 
                        name="search-bar"
                        onChange={props.handleInput}
                        value={props.searchInput}/>
                </div>
                <button onClick={props.handleClick}>
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