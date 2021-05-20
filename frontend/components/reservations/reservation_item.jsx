import React from 'react';
import { NavLink } from 'react-router-dom';
import CancelReservationForm from './cancel_reservation';
import EditForm from './edit_form';
import ReservationViewFormConf from './reservation_view_form_conf';

class ReservationItem extends React.Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.fetchAllGamePlaces();
        this.props.fetchReservation(this.props.match.params.reservationId)
    }

    render() {
        let reservation = this.props.reservations;

        if (!this.props.reservations) return null;
        
        
        
        let gamePlace;
        this.props.gamePlaces.map(gp => {
            if (reservation.gamePlaceId === gp.id) {
                gamePlace = gp
            }
        })
        
        let player;
        this.props.players.map(p => {
            if (reservation && reservation.playerId === parseInt(p.id)) {
                player = p
            }
        })
        
        return (
            <div>
                <ReservationViewFormConf reservation={this.props.reservations}
                                            gamePlace={gamePlace}
                                            player={player}
                                            editReservation={this.props.editReservation} />
                <EditForm reservation={this.props.reservations}
                                    gamePlace={gamePlace}
                                    player={player}
                                    editReservation={this.props.editReservation}
                                    fetchReservation={this.props.fetchReservation}
                                    formType='Modify'/>
                <div className='edit-btn'>
                    <NavLink to={{
                        pathname: '/book/cancel',
                        aboutProps: {
                            reservation: this.props.reservations,
                            gamePlace: gamePlace,
                            player: player,
                            editReservation: this.props.editReservation
                        }
                    }}>
                        Cancel
                    </NavLink>
                </div>
            </div>
        )
    }
};

export default ReservationItem;