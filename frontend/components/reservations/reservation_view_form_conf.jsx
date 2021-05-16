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
        // const gamePLace = this.props.location.fetchGamePlace(this.props.location.reservation.gamePlaceId)
        debugger
        return (
            <div>
                <div className='green-bos-confirmation'>
                    <h1>Thanks! Your reservation is confirmed.</h1>
                    <p>Confirmation # {this.props.location.reservation.confirmation_num}</p>
                    <p>{this.props.location.gamePlace.name}</p>
                </div>
            </div>
        )
    }
};

export default withRouter(ReservationViewFormConf);