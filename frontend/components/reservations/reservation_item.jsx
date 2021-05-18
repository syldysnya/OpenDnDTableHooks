import React from 'react';
import EditForm from './edit_form';
import EditFormContainer from './edit_form_container';
import ReservationViewFormConf from './reservation_view_form_conf';

class ReservationItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = props.reservations;
    }

    render() {
        let gamePlace;
        let reservation = this.state;
        this.props.gamePlaces.map(gp => {
            if (reservation.gamePlaceId === gp.id) {
                gamePlace = gp
            }
        })
        
        let player;
        this.props.players.map(p => {
            debugger
            if (reservation.playerId === parseInt(p.id)) {
                player = p
            }
        })

        // debugger
        return (
            <div>
                <ReservationViewFormConf reservation={this.props.reservations}
                                            gamePlace={gamePlace}
                                            player={player} />
                <EditFormContainer reservation={this.props.reservations}
                                    gamePlace={gamePlace}
                                    player={player}
                                    editReservation={this.props.editReservation}
                                    formType='Modify'/>
            </div>
        )
    }
};

export default ReservationItem;