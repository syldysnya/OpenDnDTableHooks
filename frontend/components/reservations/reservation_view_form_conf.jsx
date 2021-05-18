import React from 'react';

class ReservationViewFormConf extends React.Component {
    
    render() {
        debugger
        return (
            <div className='confirmation-box'>
                <div className='green-bos-confirmation'>
                    <h1>Thanks! Your reservation is confirmed.</h1>
                    <p>Confirmation # {this.props.reservation.confirmation_num}</p>
                </div>
                <div className='res-details'>
                    <img src={this.props.gamePlace.avatarUrl}/>
                    <h1>{this.props.gamePlace.name}</h1>
                    <span>{this.props.reservation.gameDate}</span>
                    <span>{this.props.reservation.gameStart}</span>
                    <p>{this.props.reservation.playersNum} people</p>
                    <p>Modify</p>
                    <p>Cancel</p>
                </div>
            </div>
        )
    }
};

export default ReservationViewFormConf;