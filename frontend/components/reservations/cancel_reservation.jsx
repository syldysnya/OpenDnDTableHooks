import React from 'react';
import { NavLink } from 'react-router-dom';

class CancelReservationForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = props.location.aboutProps.reservation;
        this.update = this.update.bind(this);
        this.handleLink = this.handleLink.bind(this);
    }

    update(field) {
        
        return e => this.setState({ [field]: true })
    }

    handleLink() {
        
        this.props.location.aboutProps.editReservation(this.state)
            .then((res) => {
            return this.props.history.push({
                pathname: `/book/cancel/form`,
                aboutProps: {
                    reservation: res.reservation,
                    player: this.props.location.aboutProps.player,
                    gamePlace: this.props.location.aboutProps.gamePlace,
                }
            })
        })
    }

    render() {

        const { reservation, gamePlace } = this.props.location.aboutProps
        return (
            <div className='cancel-box'>
                <div className='cancel-message'>
                    Cancel Your Reservation
                </div>
                <div className='cancel-avatar'>
                    <img src={gamePlace.avatarUrl} />
                </div>
                <div className='cancel-info'>
                    <div className='colum-name'>
                        <span>GUESTS</span>
                    {reservation.playersNum === 1 ? (
                        <div className='column-info'>
                            {reservation.playersNum} person
                        </div>
                    ) : (
                        <div className='column-info'>
                            {reservation.playersNum} people
                        </div>
                    )}
                    </div>
                    <div className='colum-name'>
                        <span>DATE</span>
                    <div className='column-info'>
                        {reservation.gameDate}
                    </div>
                    </div>
                    <div className='colum-name'>
                        <span>TIME</span>
                    <div className='column-info'>
                        {reservation.gameStart}
                    </div>
                    </div>
                    <div className='colum-name'>   
                        <span>GAME PLACE</span>
                    <div className='column-info'>
                        <NavLink to={`/gameplaces/${gamePlace.id}`}>
                            {gamePlace.name}
                        </NavLink>
                    </div>
                    </div>
                </div>

                <button className='auth-button' onClick={this.update('canceled')}>
                    Cancel Reservation
                </button>
                {this.state.canceled ? this.handleLink() : null}
            </div>
        )
    }
};

export default CancelReservationForm;