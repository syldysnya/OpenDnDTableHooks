import React, { useEffect, useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const TimePickButtons = (props) => {
    const {gameStart} = props.reservation;
    const currentPlayer =  useSelector(state => state.session.currentPlayer);
    const {gamePlace} = props;
    const [visibleButton, setVisibleButton] = useState(false);
    const [reservation, setReservation] = useState(props.reservation);
    
    useEffect(() => {
        if (props.formType === 'ViewPage' || props.formType ==='SearchPage') {
            setVisibleButton(true)
        }
    }, [])

    useEffect(() => {
        setReservation({...reservation, gamePlaceId: gamePlace.id, playerId: currentPlayer.id})
    }, [gamePlace])
    
    const timeOptions = (curTime) => {
        const {gameDate, resYear, gmt} = reservation;
        const currentDateFull = new Date();
        // const w = currentDateFull.setHours(22)
        const currentDate = currentDateFull.toString().split(' ');
        let currentTime = parseInt(currentDate[4]) + 2;

        if (currentTime < 12 || currentTime > 24) {
            currentTime = currentTime % 12
        }

        const validDate = gameDate + ' ' + resYear + ' ' + curTime + ' ' +  gmt
        const openDate = gameDate + ' ' + resYear + ' ' + gamePlace.openHour + ' ' +  gmt
        const closeDate = gameDate + ' ' + resYear + ' ' + gamePlace.closeHour + ' ' +  gmt
        const a = Date.parse(validDate);
        const o = Date.parse(openDate);
        const c = Date.parse(closeDate);
        const b = Date.parse(new Date());

        if ( a < b && a >= o && a < c) {
            
            if (currentTime > 12) {
                currentTime = currentTime % 12;
                curTime = `${currentTime}` + ':00 PM'
            } else if (currentTime === 12) {
                curTime = '12:00 PM'
            } else if (currentTime === 24) {
                curTime = '12:00 AM'
            } else {
                curTime = `${currentTime}` + ':00 AM'
            }
        } else if (a < o || a >= c) {
            curTime = gamePlace.openHour
        }
    
        let splitted = curTime.split(' ');
        let t = splitted[0].split(':');
        let h = parseInt(t[0]);
        let m = parseInt(t[1]);
        let btn1;
        let btn2;
        let btn3;
        let btn4;
        let timeOptions;

        if (m === 30) { // 8:30
            btn1 = (h.toString() + ':00 ' + splitted[1])
            btn2 = (t[0] + ':15 ' + splitted[1])
            btn3 = (t[0] + ':45 ' + splitted[1])
            if (t[0] === '11') {
                
                splitted[1] === 'PM' ? splitted[1] = 'AM' : splitted[1] = 'PM';
                btn4 = ((h + 1).toString() + ':00 ' + splitted[1])
            } else {
                btn4 = ((h + 1).toString() + ':00 ' + splitted[1])
            }

            timeOptions = [btn1, btn2, curTime, btn3, btn4]
        } else { // 8:00
            if (t[0] === '12') {
                let pod = splitted[1]
                pod === 'PM' ? pod = 'AM' : pod = 'PM';
                btn1 = ((h - 1).toString() + ':30 ' + pod)
                btn2 = ((h - 1).toString() + ':45 ' + pod)
            } else {
                if (h === 1) {
                    btn1 = '12:30 ' + splitted[1]
                    btn2 = '12:45 ' + splitted[1]
                } else {
                    btn1 = ((h - 1).toString() + ':30 ' + splitted[1])
                    btn2 = ((h - 1).toString() + ':45 ' + splitted[1])
                }
            }
            btn3 = (h.toString() + ':15 ' + splitted[1])
            btn4 = (h.toString() + ':30 ' + splitted[1])
            timeOptions = [btn1, btn2, curTime, btn3, btn4]
        }

        let mapped = timeOptions.map((t, i) => {

            if (props.formType === 'MainPage' || props.formType ==='SearchPage') {
                return (
                    <NavLink 
                        key={`timePick-${i}`}
                        style={{ textDecoration: 'none' }}
                        className='auth-button' to={{
                            pathname: '/booking/details',
                            state: {reservation: props.reservation, gamePlace: gamePlace, gameStart: t}
                        }} exact>
                        {t}
                    </NavLink>
                )
            } else {
                return (
                    <li key={`btn-time-${i}`}>
                        <NavLink key={`timePick-${i}`}
                            style={{ textDecoration: 'none' }}
                            className='auth-button' to={{
                                pathname: '/booking/details/edit',
                                state: {reservation: props.reservation, gamePlace: gamePlace, gameStart: t}
                            }} exact>
                            {t}
                        </NavLink>
                    </li>
                )
            }
        })
        
        return (
            <div className='time-buttons'>
                {mapped}
            </div>
        )
    }
    
    const handleTable = () => {
        setVisibleButton(true)
    }
    
    let buttonForm;
        
    if (visibleButton) {
        buttonForm = timeOptions(gameStart)
    } else {
        buttonForm = <button className='auth-button btn-find'onClick={handleTable}>
                        Find a table
                    </button>
    }

    return buttonForm;
};

export default TimePickButtons;