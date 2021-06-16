import React, { useState } from 'react';
import { RES_TIME } from '../reservations/create_forms/main_page_create_form';
import { Calendar } from 'react-date-range';

const SearchBarSearchPage = (props) => {

    const [visible, setVisible] = useState(false);
    const {reservation} = props;

    const updateInfo = (e) => {
        props.setReservation({ ...reservation, [e.target.id]: e.target.value })
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
        props.setReservation({ ...reservation, gameDate: newDate })
        setVisible(false)
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
                onChange={props.handleInput}
                value={props.searchInput}/>
            <button onClick={props.handleClick}>
                Find a Table
            </button>
        </div>
    );
};

export default SearchBarSearchPage;