import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { NavLink } from 'react-router-dom';
import ReservationViewForm from './reservation_view_form';

class ReservationCreateForm extends React.Component {
    constructor(props) {
        super(props);
        debugger
        this.state = props.reservation;
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    };

    render() {
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
                    <label className='info-create-form'
                            onChange={this.update('gameDate')}>
                        Date
                        <Calendly />
                    </label>
                    <label className='info-create-form'>
                        Time
                        <TimePick time={this.state.gameStart}
                            onChange={this.update('gameStart')}/>
                    </label>
                    <NavLink to={{
                            pathname: '/booking/details',
                            aboutProps: {
                                reservation: this.state,
                                createReservation: this.props.createReservation,
                                currentPlayer: this.props.currentPlayer,
                                fetchGamePlace: this.props.fetchGamePlace,
                                fetchPlayer: this.props.fetchPlayer
                            }
                        }} exact>
                            Find a table
                    </NavLink>
                </form>
            </div>
        )
    }
};

export default ReservationCreateForm;

const TimePick = (props) => {
    
    return (
        <select>
            {dateRange().map(t => {
                if (t === props) {
                    return (
                        <option selected>
                            {t}
                        </option>
                    )
                } else {
                    return (
                        <option>
                            {t}
                        </option>
                    )
                }
            })}
        </select>
    )
}

const dateRange = () => {
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

const Calendly = () => {
    const [reservationDate, setReservationDate] = useState(new Date());
    return (
        <DatePicker
            selected={reservationDate}
            onChange={date => setReservationDate(date)}
        />
    )
};