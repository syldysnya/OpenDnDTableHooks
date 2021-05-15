import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginContainer from '../session/login_container';
// import Calendar from 'react-calendar';

class ReservationCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameDate: currentDate(),
            gameStart: '8:00 PM',
            playersNum: 2,
            dndCampaignId: 1,
            gamePlaceId: props.reservation.gamePlaceId,
            playerId: 1,
            confirmation_num: randomNum(100000000000),
            addInfo: ''
        };
        this.handleAuth = this.handleAuth.bind(this)
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    };

    handleAuth(e) {
        let field = e.target.innerHTML;
        this.props.openModal(field)
    }

    TimePick = () => {
        return (
            <select onChange={this.update('gameStart')} >
                {this.dateRange().map(t => {
                    if (t === '8:00 PM') {
                        return (
                            <option selected value={t}>{t}</option>
                            )
                    } else {
                        return (
                            <option value={t}>{t}</option>
                        )
                    }
                })}
            </select>
        )
    }

    dateRange = () => {
        let amTimes = [];
        let pmTimes = [];
        let idx = 1;

        while (idx <= 12) {
            let am1 = `${idx}:00 AM`
            let am2 = `${idx}:30 AM`
            let pm1 = `${idx}:00 PM`
            let pm2 = `${idx}:30 PM`

            amTimes.push(am1);
            amTimes.push(am2);
            pmTimes.push(pm1);
            pmTimes.push(pm2);

            idx += 1;
        }

        for (let i = 0; i < 2; i++) {
            let pop1 = amTimes.pop(1);
            amTimes.unshift(pop1);
            let pop2 = pmTimes.pop(1);
            pmTimes.unshift(pop2);
        }

        let merged = amTimes.concat(pmTimes);
        return merged;
    }

    render() {

        const ifLoggedIn = () => {
            return (
                <div>
                    <h1>Make a reservation</h1>
                    <form className='create-form-box'>
                        <label className='info-create-form'>
                            Party Size
                        <select onChange={this.update('playersNum')}>
                                <option value="1">For 1</option>
                                <option selected value="2">For 2</option>
                                <option value="3">For 3</option>
                                <option value="4">For 4</option>
                                <option value="5">For 5</option>
                            </select>
                        </label>
                        <label className='info-create-form'>
                            Date
                        <div onChange={this.update('gameDate')}>
                                {this.state.gameDate}
                            </div>
                        </label>
                        <label className='info-create-form'>
                            Time
                        {this.TimePick()}
                        </label>
                        <NavLink className='auth-button' to={{
                            pathname: '/booking/details',
                            aboutProps: {
                                reservation: this.state,
                                createReservation: this.props.createReservation,
                                currentPlayer: this.props.currentPlayer,
                                fetchGamePlace: this.props.fetchGamePlace
                            }
                        }} exact>
                            Find a table
                    </NavLink>
                    </form>
                </div>
            )
        }

        const ifLoggedOut = () => {
            return (
                <div>
                    <h1>Make a reservation</h1>
                    <form className='create-form-box'>
                        <label className='info-create-form'>
                            Party Size
                        <select onChange={this.update('playersNum')}>
                                <option value="1">For 1</option>
                                <option selected value="2">For 2</option>
                                <option value="3">For 3</option>
                                <option value="4">For 4</option>
                                <option value="5">For 5</option>
                            </select>
                        </label>
                        <label className='info-create-form'>
                            Date
                        <div onChange={this.update('gameDate')}>
                                {this.state.gameDate}
                            </div>
                        </label>
                        <label className='info-create-form'>
                            Time
                        {this.TimePick()}
                        </label>
                        <button onClick={this.handleAuth} className='auth-button'>
                                Sign In
                        </button>
                        <button onClick={this.handleAuth} className='auth-button'>
                                Sign Up
                        </button>
                    </form>
                </div>
            )
        }
        return this.props.currentPlayer ? ifLoggedIn() : ifLoggedOut()
    }
};

export default ReservationCreateForm;

const currentDate = () => {
    const arrOfDow = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let d = new Date().getDate();
    let m = new Date().getMonth();
    let dow = arrOfDow[new Date().getDay() - 1];

    return (`${dow}, ${m}/${d}`)
}

const randomNum = (max) => {
    return (Math.floor(Math.random() * max).to_s)
}
