import React from 'react';

class ReservationViewFormConf extends React.Component {
    
    render() {

        return (
            <div className='confirmation-box'>
                <div className='green-bos-confirmation'>
                    <h1>Thanks! Your reservation is confirmed.</h1>
                    <p>Confirmation # {this.props.location.reservation.confirmation_num}</p>
                </div>
                <div className='res-details'>
                    <img src={this.props.location.gamePlace.avatarUrl}/>
                    <h1>{this.props.location.gamePlace.name}</h1>
                    <span>{this.props.location.reservation.gameDate}</span>
                    <span>{this.props.location.reservation.gameStart}</span>
                    <p>{this.props.location.reservation.playersNum} people</p>
                    <p>Modify</p>
                    <p>Cancel</p>
                </div>
            </div>
        )
    }
};

export default ReservationViewFormConf;