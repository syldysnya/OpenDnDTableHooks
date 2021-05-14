import React from 'react';
import { Redirect } from 'react-router';
import ReservationContainer from './reservation_container';

class ReservationViewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { redirecting : false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.location.aboutProps.createReservation(this.props.location.aboutProps.reservation);
        this.setState({ redirecting: true })
    }
    
    render() {
        
        debugger
        let reservation = this.props.location.aboutProps.reservation;
        let currentPlayer = this.props.location.aboutProps.currentPlayer;
        let currGamePlace = this.props.location.aboutProps.fetchGamePlace(this.state.gamePlaceId);
        let player = this.props.location.aboutProps.fetchPlayer(parseInt(this.state.playerId));
        // let resId = this.props.location.aboutProps.
        // if (!currentPlayer) {
        //     return (

        //     )
        // } else {
            
        // }
        debugger

        if (this.state.redirecting) (
            <Redirect to='/reservations/:reservationId' component={ReservationContainer}/>
        );

        return (
            <div className='reservation-completion'>
                <div className='reservation-completion-form'>
                    <p>You’re almost done!</p>
                    <h1>{currGamePlace.name}</h1>
                    <ul className='reservation-info'>
                        <i class="far fa-calendar"></i>
                        <li id='1'>{reservation.gameDate}</li>
                        <i class="far fa-clock"></i>
                        <li id='2'>{reservation.gameStart}</li>
                        <i class="far fa-user"></i>
                        <li id='3'>{reservation.playersNum}</li>
                    </ul>
                    <h2>Game session details</h2>
                    <h3>{player.fname} {player.lname}</h3>
                    <form className='reservation-completion-box'>
                        <select className='phone-codes'>
                            <option className='Canada'>🇨🇦</option>
                            <option className='Mexico'>🇲🇽</option>
                            <option className='Russia'>🇷🇺</option>
                            <option selected className="USA">🇺🇸</option>
                        </select>
                        <input type="text" />
                        <input type="text" 
                            value={player.email} />
                        <textarea className='Additional-info-inp'
                            />
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

