import React, { useState } from 'react';
import { Calendar } from 'react-date-range';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { openModal } from '../../../actions/modal_actions';
import { NavLink } from 'react-router-dom';

const RES_TIME = [
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
    const history = useHistory();
    const currentDateFull = new Date();
    const currentDate = currentDateFull.toDateString().replace(' 2021', '');
    const randomNum = Math.ceil(Math.random(10000));
    const dispatch = useDispatch();
    
    const [reservation, setReservation] = useState({
        gameDate: currentDate,
        gameStart: '8:00 PM',
        playersNum: 2,
        dndCampaignId: 1,
        gamePlaceId: props.gamePlace.id,
        playerId: 1,
        confirmation_num: randomNum,
        addInfo: ''
    });

    const [visible, setVisible] = useState(false);

    const {
        gameDate,
        gameStart,
        playersNum,
        dndCampaignId,
        gamePlaceId,
        playerId,
        confirmation_num,
        addInfo
    } = reservation;

    const updateInfo = (e) => {
        debugger
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

    const handleAuth = () => {
        dispatch(openModal('Sign In'))
    }

    const handleTimeOpts = (curTime) => {
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
                   <button key={`timePick-${i}`}>1</button>
            )
        })
        debugger
        return (
            <div className='time-buttons'>
                {mapped}
            </div>
        )
    }

    const handleButton = (e) => {
        if (currentPlayer) {
            handleTimeOpts(gameStart)
        } else {
            handleAuth()
        }
    } 

    // if (!currentPlayer) {
    //     createForm = <LoggedOutForm openModal={this.props.openModal}/>
    // } else {
        // createForm = <LoggedInForm reservation={this.state}
        //     gamePlace={this.props.gamePlaces[0]}
        //     player={this.props.players[0]}
        //     createReservation={this.props.createReservation}
        //     currentPlayer={this.props.currentPlayer}
        //     fetchReservation={this.props.fetchReservation}
        // />
    // }

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
                        onClick={showCalendar} tabIndex='0'>
                        {/* // onBlur={this.showCalendar}> */}
                        {/* // onChange={this.update('gameDate')}> */}
                        {gameDate}
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
            <button className='auth-button btn-find' onClick={handleButton}>
                Find a table
            </button>
        </div>
    );
};

export default MainPageCreateForm;