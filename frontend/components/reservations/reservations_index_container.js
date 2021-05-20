import { connect } from "react-redux";
import { fetchAllGamePlaces, fetchGamePlace } from "../../actions/game_place_actions";
import { fetchAllReservations } from "../../actions/reservation_actions";
import ReservationsIndex from "./reservations_index";


const mapSTP = (state) => {
    return ({
        reservations: Object.values(state.entities.reservations),
        currentPlayer: state.session.currentPlayer,
        players: state.entities.players
    })
};

const mapDTP = dispatch => ({
    fetchAllReservations: (() => dispatch(fetchAllReservations()))
});

export default connect(mapSTP, mapDTP)(ReservationsIndex);