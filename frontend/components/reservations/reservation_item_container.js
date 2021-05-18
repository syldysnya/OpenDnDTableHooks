import { connect } from "react-redux";
import { withRouter } from "react-router";
import { editReservation } from "../../actions/reservation_actions";
import ReservationItem from "./reservation_item";


const mapSTP = (state, ownProps) => {
    // debugger
    return ({
        reservations: state.entities.reservations[ownProps.match.params.reservationId],
        gamePlaces: Object.values(state.entities.gamePlaces),
        players: Object.values(state.entities.players)
    })
};

const mapDTP = dispatch => ({
    editReservation: reservation => dispatch(editReservation(reservation))
})

export default withRouter(connect(mapSTP, mapDTP)(ReservationItem));