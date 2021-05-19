import React from 'react';
import { NavLink } from 'react-router-dom';

class ReservationViewFormConf extends React.Component {
    
    render() {
        
        if (!this.props.gamePlace) return null;
        
        return (
            <div className='confirmation-box'>
                <div className='green-bos-confirmation'>
                    <h1>Thanks! Your reservation is confirmed.</h1>
                    <p>Confirmation # {this.props.reservation.confirmationNum}</p>
                </div>
                <div className='res-details'>
                    <img src={this.props.gamePlace.avatarUrl}/>
                    <h1>{this.props.gamePlace.name}</h1>
                    <span>{this.props.reservation.gameDate}</span>
                    <span>{this.props.reservation.gameStart}</span>
                    <p>{this.props.reservation.playersNum} people</p>
                    {/* <p>Modify</p> */}
                    {/* <NavLink to={{
                        pathname: '/book/cancel',
                        aboutProps: {
                            reservation: this.props.reservation,
                            gamePlace: gamePlace,
                            editReservation: this.props.editReservation
                        }
                    }}>
                        Cancel
                    </NavLink> */}
                </div>
            </div>
        )
    }
};

export default ReservationViewFormConf;