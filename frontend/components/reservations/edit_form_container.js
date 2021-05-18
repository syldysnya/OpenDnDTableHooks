import { connect } from "react-redux";
import { withRouter } from "react-router";
import { editReservation, fetchAllReservations } from "../../actions/reservation_actions";
import EditForm from "./edit_form";


const mapSTP = (state, ownProps) => {
    
    return ({
        reservations: state.entities.reservations[ownProps.match.params.reservationId],
        formType: 'Modify'
    })
};

const mapDTP = dispatch => ({
    fetchAllReservations: reservations => dispatch(fetchAllReservations(reservations)),
    editReservation: reservation => dispatch(editReservation(reservation)) 
});

export default withRouter(connect(mapSTP, mapDTP)(EditForm));