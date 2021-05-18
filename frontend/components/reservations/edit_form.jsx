import React from 'react';
import { withRouter } from 'react-router';

class EditForm extends React.Component {
    constructor(props) {
        super(props)
        debugger
        this.state = {
            gameDate: props.reservation.gameDate,
            gameStart: props.reservation.gameStart,
            playersNum: props.reservation.playersNum,
            dndCampaignId: props.reservation.dndCampaignId,
            gamePlaceId: props.reservation.gamePlaceId,
            playerId: props.reservation.playerId,
            confirmation_num: props.reservation.confirmation_num,
            addInfo: props.reservation.addInfo,
            showed: false
        };
    }
    
    componentDidMount() {
        this.props.fetchReservation(this.props.match.params.reservationId);
    }
    
    render() {
        debugger
        if (!this.props.reservation.gameDate) return null;
        return (
            <div>
                {this.props.reservation.gameDate}
            </div>
        )
    }
};

export default withRouter(EditForm);