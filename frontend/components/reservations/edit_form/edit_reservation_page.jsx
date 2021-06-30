import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { fetchGamePlace } from '../../../actions/game_place_actions';
import { createReservation, editReservation, fetchReservation } from '../../../actions/reservation_actions';
import { RES_TIME } from '../create_forms/main_page_create_form';
import { Calendar } from 'react-date-range';
import TimePickButtons from '../create_forms/time_pick_buttons';

const EditReservationPage = (props) => {
    const params = useParams();
    const player = useSelector(state => state.session.currentPlayer);
    const [reservation, setReservation] = useState('');
    const [gamePlace, setGamePlace] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const [visible, setVisible] = useState(false);
    const [visibleTime, setVisibleTime] = useState(false);

    useEffect(() => {
        dispatch(fetchReservation(params.reservationId))
            .then(res => setReservation(res.reservation))
        dispatch(fetchGamePlace(params.gamePlaceId))
            .then(res => setGamePlace(res.gamePlace))
    }, [])

    const updateInfo = (e) => {
        setReservation({ ...reservation, [e.target.id]: e.target.value })
    };

    const handleClick = (e) => {
        e.preventDefault();

        dispatch(editReservation(reservation))
            .then(res => history.push(`/book/view/${res.reservation.id}`))
    }

    const showCalendar = () => {
        setVisible(!visible)
    }

    const timePick = RES_TIME.map(t => {
        return (
            <option key={t} value={t}>{t}</option>
        )
    })

    const handleButton = e => {
        setVisibleTime(true)
    }

    const updateDate = (e) => {
        const newDateFull = e;
        const newDate = newDateFull.toString().split(' ');
        const gameDate = newDate[0] + ' ' + newDate[1] + ' ' + newDate[2];
        const resYear = newDate[3];
        const gmt = newDate[5];
        setReservation({ ...reservation, gameDate: gameDate, resYear: resYear, gmt: gmt })
        setVisible(false)
    }

    const {gameDate, gameStart, playersNum} = reservation;

    return (
        <div className='reservation-edit-parent'>
            <div className='reservation-completion-form'>
            <div className='almost-done'>Your current reservation</div>
                <div className='res-info-in-conf'>
                    <div className='gp-avatar-in-edit'>
                        <img src={gamePlace.avatarUrl} />
                    </div>
                    <div className='reservation-info'>
                        <div>{gamePlace.name}</div>
                        <div className='res-info-conf'>
                            <i className="far fa-calendar"></i>
                            <div></div>
                            <li id='1'>{gameDate}</li>
                            <i className="far fa-clock"></i>
                            <div></div>
                            <li id='2'>{gameStart}</li>
                            <i className="far fa-user"></i>
                            <div></div>
                            <li id='3'>{playersNum} people</li>
                        </div>
                    </div>
                </div>
                <div className="modify-reservation-info">
                    <div className="modify-text">Modify your reservation</div>
                    <div className="modify-inputs">
                        <div className='info'>
                            <div className='info-create-date'>
                                <i className="far fa-calendar"></i>
                                <div className='parent-calendar-box'
                                    id='gameDate'
                                    onClick={showCalendar} tabIndex='0'
                                    >
                                    <span>{gameDate}</span>
                                </div>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className='info-create-time' value='gameStart'>
                                <select onChange={updateInfo} 
                                    id='gameStart'
                                    defaultValue='8:00 PM'>
                                    {timePick}
                                </select>
                            </div>
                            <div className='info-create-form'>
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
                        <button className='auth-button'
                            onClick={handleButton}>
                            Find a new table
                        </button>
                    </div>
                </div>
                {visible && (
                    <div className='dropdown-calendar edit' onMouseLeave={showCalendar}>
                        <Calendar
                            date={new Date()}
                            onChange={e => updateDate(e)}
                            minDate={new Date()}
                            maxDate={new Date('12-31-2021')}
                        />
                    </div>
                )}
                {visibleTime && <TimePickButtons reservation={reservation} gamePlace={gamePlace} formType='ViewPage'/>}
            </div>
        </div>
    );
};

export default EditReservationPage;