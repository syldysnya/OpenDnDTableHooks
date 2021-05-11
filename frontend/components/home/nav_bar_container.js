import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import NavBar from "./nav_bar";


const mapSTP = (state) => {
    return {
        currentPlayer: state.session.currentPlayer,
    }
};

const mapDTP = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapSTP, mapDTP)(NavBar);