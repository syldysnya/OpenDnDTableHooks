import React from 'react';
import LoggedOutForm from './logged_out_form';
import LoggedInForm from './logged_in_form';
// import Calendar from 'react-calendar';

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
            confirmation_num: randomNum(10000),
            addInfo: ''
        };

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

        let createForm;

        if (!this.props.currentPlayer) {
            createForm = <LoggedOutForm openModal={this.props.openModal}/>
        } else {
            createForm = <LoggedInForm reservation={this.state}
                gamePlace={this.props.gamePlaces[0]}
                player={this.props.players[0]}
                createReservation={this.props.createReservation}
                currentPlayer={this.props.currentPlayer}
                fetchReservation={this.props.fetchReservation}
            />
        }

        return (
            <div>
                <h1>Make a reservation</h1>
                <form className='create-form-box'>
                    <label className='info-create-form'>
                        Party Size
                            <select defaultValue='2'
                                onChange={this.update('playersNum')}>
                            <option key='1'value="1">For 1</option>
                            <option key='2'value="2">For 2</option>
                            <option key='3'value="3">For 3</option>
                            <option key='4'value="4">For 4</option>
                            <option key='5'value="5">For 5</option>
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
                </form>
                {createForm}
            </div>
        )
    }
};

export default ReservationCreateForm;

const currentDate = () => {
    const arrOfDow = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let d = new Date().getDate();
    let m = new Date().getMonth();
    let dNum = new Date().getDay()
    dNum === 0 ? dNum = 6 : dNum -= 1; 
    let dow = arrOfDow[dNum];
    return (`${dow}, ${m}/${d}`)
}

const randomNum = (max) => {
    return (Math.floor(Math.random() * max))
}



// return (
//     <div className='dropdown-time-opts'>
//         {timeOptions.map(timePick => {
//             return (
//                 <button key={time}>
//                     {timePick}
//                 </button>
//             )
//         })}
//     </div>
// )