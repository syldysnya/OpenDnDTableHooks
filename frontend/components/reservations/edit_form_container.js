import { connect } from "react-redux";
import { withRouter } from "react-router";
import { editReservation, fetchAllReservations, fetchReservation } from "../../actions/reservation_actions";
import EditForm from "./edit_form";


const mapSTP = (state, ownProps) => ({
    reservation: state.entities.reservations[ownProps.match.params.reservationId] || {},
    formType: 'Modify'
})

const mapDTP = dispatch => ({
    fetchAllReservations: reservations => dispatch(fetchAllReservations(reservations)),
    fetchReservation: reservationId => dispatch(fetchReservation(reservationId)),
    editReservation: reservation => dispatch(editReservation(reservation)) 
});

export default withRouter(connect(mapSTP, mapDTP)(EditForm));