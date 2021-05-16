import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchGamePlace } from '../../actions/game_place_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchPlayer } from '../../actions/player_actions';
import { createReservation, fetchAllReservations, fetchReservation } from '../../actions/reservation_actions';
import ReservationCreateForm from './reservation_create_form';

const mapSTP = (state, ownProps) => {

    let gpId = parseInt(ownProps.match.params.gamePlaceId);
    return ({
        gamePlaces: Object.values(state.entities.gamePlaces),
        reservation: { gamePlaceId: gpId },
        currentPlayer: state.session.currentPlayer,
        players: Object.values(state.entities.players)
    })
}

const mapDTP = dispatch => ({
    createReservation: (reservation) => dispatch(createReservation(reservation)),
    fetchGamePlace: gamePlaceId => dispatch(fetchGamePlace(gamePlaceId)),
    fetchPlayer: playerId => dispatch(fetchPlayer(playerId)),
    openModal: modal => dispatch(openModal(modal)),
    fetchReservation: reservationId => dispatch(fetchReservation(reservationId))
});

export default withRouter(connect(mapSTP, mapDTP)(ReservationCreateForm));