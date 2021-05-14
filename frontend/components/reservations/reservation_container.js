import { connect } from "react-redux";
import { withRouter } from "react-router";
import Reservation from "./reservation";


const mapSTP = (state, ownProps) => ({
    reservation: state.entities.reservation
});

// const mapDTP = dispatch => ({

// });

export default withRouter(connect(mapSTP)(Reservation));