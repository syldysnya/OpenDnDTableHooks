import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const TimePickButtons = (props) => {

    const {gameStart} = props.reservation;
    const [visibleButton, setVisibleButton] = useState(false);
    const [reservation, setReservation] = useState(props.reservation)

    const handleClick = (e) => {
        setReservation({...reservation, gameStart: e.currentTarget.innerHTML})
    }
    
    const timeOptions = (curTime) => {
    
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
                btn1 = ((h - 1).toString() + ':30 ' + splitted[1])
                btn2 = ((h - 1).toString() + ':45 ' + splitted[1])
            }
            btn3 = (h.toString() + ':15 ' + splitted[1])
            btn4 = (h.toString() + ':30 ' + splitted[1])
            timeOptions = [btn1, btn2, curTime, btn3, btn4]
        }

        let mapped = timeOptions.map((t, i) => {
            return (
                <NavLink onClick={handleClick}
                    key={`timePick-${i}`}
                    style={{ textDecoration: 'none' }}
                    className='auth-button' to={{
                        pathname: '/booking/details',
                        state: {reservation: reservation}
                    }} exact>
                    {t}
                </NavLink>
            )
        })
        debugger
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