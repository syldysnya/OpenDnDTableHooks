import React, { useState } from 'react';
import { RES_TIME } from '../create_forms/main_page_create_form';
import TimePickButtons from '../create_forms/time_pick_buttons';

const EditReservation = (props) => {

    const [visible, setVisible] = useState(false);
    const [reservation, setReservation] = useState(props.reservation);

    const handleButton = (e) => {
        e.preventDefault();

        setVisible(!visible)
    }

    const updateInfo = (e) => {
        setReservation({ ...reservation, [e.target.id]: e.target.value })
    };

    let timePick = (
            <select onChange={updateInfo}
                defaultValue='8:00 PM'
                id="gameStart">
                {RES_TIME.map(t => {
                    return (
                        <option key={t} value={t}>{t}</option>
                    )
                })}
            </select>
        )

    return (
        <div className='edit-res-box'>
            <div className='edit-input'>
                <div className='input-time'>
                    <select defaultValue={props.reservation.playersNum}
                        id='playersNum'
                        onChange={updateInfo}>
                        <option key='1' value='1'>1 person</option>
                        <option key='2' value='2'>2 people</option>
                        <option key='3' value='3'>3 people</option>
                        <option key='4' value='4'>4 people</option>
                        <option key='5' value='5'>5 people</option>
                    </select>
                </div>
                <label className='t'>
                    {timePick}
                </label>
            <button className='auth-button' onClick={handleButton}>
                Find a Table
            </button>
                {visible && <TimePickButtons reservation={reservation} gamePlace={props.gamePlace} formType='ViewPage'/>}
            </div>
        </div>
    );
};

export default EditReservation;