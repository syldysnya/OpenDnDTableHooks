import React from 'react';
import Calendar from 'react-calendar'

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

class EditForm extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {};
    }

    componentDidMount() {
        this.props.fetchAllReservations();
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    };

    TimePick = () => {

        return (
            <select onChange={this.update('gameStart')}
                defaultValue='8:00 PM'>
                {RES_TIME.map(t => {
                    return (
                        <option key={t} value={t}>{t}</option>
                    )
                })}
            </select>
        )
    }

    render() {

        if (!this.props.reservations) return null;
        const reservation = this.props.reservations;
        debugger
        return (
            <div className='edit-res-box'>
                <div className='edit-input'>
                    <select defaultValue={reservation.playersNum}
                        onChange={this.update('playersNum')}>
                        <option key='1' value='1'>1 person</option>
                        <option key='2' value='2'>2 people</option>
                        <option key='3' value='3'>3 people</option>
                        <option key='4' value='4'>4 people</option>
                        <option key='5' value='5'>5 people</option>
                    </select>
                    {/* <select defaultValue={reservation.gameDate}>
                        <option value="1"><Calendar /></option>
                    </select> */}
                    <label className='info-create-form'>
                        {this.TimePick()}
                    </label>
                </div>
            </div>
        )
    }
};

export default EditForm;

