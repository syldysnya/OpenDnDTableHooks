import React, { useState } from 'react';
import { Calendar } from 'react-date-range';
import { useSelector } from 'react-redux';
import AuthButton from './auth_button';
import TimePickButtons from './time_pick_buttons';

export const RES_TIME = [
    "12:00 AM", "12:30 AM",
    "1:00 AM", "1:30 AM",
    "2:00 AM", "2:30 AM",
    "3:00 AM", "3:30 AM",
    "4:00 AM", "4:30 AM",
    "5:00 AM", "5:30 AM",
    "6:00 AM", "6:30 AM",
    "7:00 AM", "7:30 AM",
    "8:00 AM", "8:30 AM",
    "9:00 AM", "9:30 AM",
    "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM",
    "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM",
    "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM",
    "7:00 PM", "7:30 PM",
    "8:00 PM", "8:30 PM",
    "9:00 PM", "9:30 PM",
    "10:00 PM", "10:30 PM",
    "11:00 PM", "11:30 PM"
];

const MainPageCreateForm = (props) => {

    const currentPlayer =  useSelector(state => state.session.currentPlayer);
    const currentDateFull = new Date();
    const currentDate = currentDateFull.toDateString().replace(' 2021', '');
    const randomNum = Math.floor(Math.random() * 10000);

    const [reservation, setReservation] = useState({
        gameDate: currentDate,
        gameStart: '8:00 PM',
        playersNum: 2,
        gamePlaceId: '',
        playerId: currentPlayer.id,
        confirmation_num: randomNum,
        add_info: '',
        canceled: false,
        plphone: '',
        email: '',
        dndCampaignId: ''
    });
    const [visible, setVisible] = useState(false);

    const {
        gameDate,
    } = reservation;

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

    let createForm;

    if (!currentPlayer) {
        createForm = <AuthButton />
    } else {
        createForm = <TimePickButtons reservation={reservation} gamePlace={props.gamePlace} formType='MainPage'/>
    }

    return (
        <div className='reservation-box-new'>
            <div className='make-res-text'>
                <h1>Make a reservation</h1>
            </div>
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
                        {gameDate}
                    </div>
                    <div className='dropdown-calendar'>
                        {visible && (
                            <Calendar
                                date={new Date()}
                                onChange={e => updateDate(e)}
                                minDate={new Date()}
                            />
                        )}
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
            {createForm}
        </div>
    );
};

export default MainPageCreateForm;