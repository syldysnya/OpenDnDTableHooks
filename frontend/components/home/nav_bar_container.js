import { connect } from "react-redux";
import { showModal } from "../../actions/modal_actions";
import NavBar from "./nav_bar";


const mapSTP = (state) => ({
    currentPlayer: state.session.currentPlayer
});

const mapDTP = dispatch => ({
    showModal: (modal) => dispatch(showModal(modal))
});

export default connect(mapSTP, mapDTP)(NavBar);