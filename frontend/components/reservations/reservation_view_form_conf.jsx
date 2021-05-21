import React from 'react';
import { NavLink } from 'react-router-dom';

class ReservationViewFormConf extends React.Component {
    
    render() {
        
        if (!this.props.gamePlace) return null;
        
        return (
                <div className='confirmation-box'>
                    <div className='green-bos-confirmation'>
                        <span className='thanks'>Thanks! Your reservation is confirmed.</span>
                        <span>Confirmation # {this.props.reservation.confirmationNum}</span>
                    </div>
                    <div className='res-details'>
                        <div>
                            <img src={this.props.gamePlace.avatarUrl}/>
                        </div>
                        <div>
                            <span className='gp-name-span'>
                                {this.props.gamePlace.name}</span>
                            <div>
                                <span>{this.props.reservation.gameDate}</span>
                                <span>{this.props.reservation.gameStart}</span>
                            </div>
                            <span>{this.props.reservation.playersNum} people</span>
                        </div>
                    </div>
                </div>
        )
    }
};

export default ReservationViewFormConf;