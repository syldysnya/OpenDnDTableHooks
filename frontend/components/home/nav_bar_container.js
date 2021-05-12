import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";
import NavBar from "./nav_bar";


const mapSTP = (state) => {
    return {
        player: state.entities.players[state.session.currentPlayer],
        currentPlayer: state.session.currentPlayer,
    }
};

const mapDTP = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    logout: () => dispatch(logout())
});

export default connect(mapSTP, mapDTP)(NavBar);