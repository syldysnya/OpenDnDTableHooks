import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { fetchGamePlace } from '../../actions/game_place_actions';

class ReservationViewFormConf extends React.Component {
    constructor(props) {
        super(props) 
        debugger
    }
    
    render() {

        return (
            <div>
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
                </div>
            </div>
        )
    }
};

export default withRouter(ReservationViewFormConf);