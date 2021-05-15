import { connect } from "react-redux";
import ReservationsIndex from "./reservations_index";


const mapSTP = (state) => ({
    reservations: Object.values(state.entities.reservations),
    currentPlayer: state.session.currentPlayer
});

const mapDTP = dispatch => ({
    fetchAllReservations: () => dispatch(fetchAllReservations())
});

export default connect(mapSTP, mapDTP)(ReservationsIndex);