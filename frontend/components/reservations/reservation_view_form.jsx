import React from 'react';
import { Redirect } from 'react-router';
import ReservationContainer from './reservations_index_container';

class ReservationViewForm extends React.Component {
    constructor(props) {
        super(props)
        debugger
        this.state = props.location.aboutProps.reservation;
        this.handleClick = this.handleClick.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    };

    handleClick(e) {
        e.preventDefault();
        this.props.location.aboutProps.createReservation(this.state)
            .then(this.props.history.push({
                pathname: '/book/view',
                reservation: this.state,
                gamePlace: this.props.location.aboutProps.gamePlace,
                player: this.props.location.aboutProps.player,
            }));
    }

    render() {
        debugger
        return (
            <div className='reservation-completion'>
                <div className='reservation-completion-form'>
                    <p>You’re almost done!</p>
                    <h1>{this.props.location.aboutProps.gamePlace.name}</h1>
                    <ul className='reservation-info'>
                        <i class="far fa-calendar"></i>
                        <li id='1'>{this.state.gameDate}</li>
                        <i class="far fa-clock"></i>
                        <li id='2'>{this.state.gameStart}</li>
                        <i class="far fa-user"></i>
                        <li id='3'>{this.state.playersNum}</li>
                    </ul>
                    <h2>Game session details</h2>
                    <h3>{this.props.location.aboutProps.player.lname} {this.props.location.aboutProps.player.fname}</h3>
                    <form className='reservation-completion-box'>
                        <select className='phone-codes'>
                            <option className='Canada'>🇨🇦</option>
                            <option className='Mexico'>🇲🇽</option>
                            <option className='Russia'>🇷🇺</option>
                            <option selected className="USA">🇺🇸</option>
                        </select>
                        <select className='adventure-type-list'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <textarea className='Additional-info-inp'
                                onChange={this.update('add_info')}/>
                        <button className='auth-button'
                            onClick={this.handleClick}>
                            Complete Reservation
                        </button>
                    </form>
                </div>
                <div className='right-bar-info'>
                    <h1>What to know before you go</h1>
                    <p>Important dining information
                    We have a 15 minute grace period. Please call us if you are running later than 15 minutes after your reservation time.
                    Your table will be reserved for 2 hours for parties of up to 4; and 2 hours 15 minutes for parties of 5+.
                    </p>
                    <h1>Points</h1>
                    <p>
                        Keep in mind, you won’t collect points for this reservation unless you choose to below.
                    </p>
                </div>
            </div>
        )
    }
};

export default ReservationViewForm;