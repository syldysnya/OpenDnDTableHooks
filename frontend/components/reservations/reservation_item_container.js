import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchGamePlace } from "../../actions/game_place_actions";
import { editReservation, fetchReservation } from "../../actions/reservation_actions";
import { fetchAllGamePlaces } from "../../actions/game_place_actions";
import ReservationItem from "./reservation_item";


const mapSTP = (state, ownProps) => {
    debugger
    return ({
        reservations: state.entities.reservations[ownProps.match.params.reservationId],
        gamePlaces: Object.values(state.entities.gamePlaces),
        players: Object.values(state.entities.players)
    })
};

const mapDTP = dispatch => ({
    editReservation: reservation => dispatch(editReservation(reservation)),
    fetchReservation: reservationId => dispatch(fetchReservation(reservationId)),
    fetchGamePlace: gamePlaceId => dispatch(fetchGamePlace(gamePlaceId)),
    fetchAllGamePlaces: () => dispatch(fetchAllGamePlaces())
})

export default withRouter(connect(mapSTP, mapDTP)(ReservationItem));