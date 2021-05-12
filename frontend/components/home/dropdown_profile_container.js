import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import DropdownProfile from "./dropdown_profile";


const mapSTP = state => {
    debugger 
    return ({
        player: state.entities.players[state.session.currentPlayer]
    })
};

const mapDTP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapSTP, mapDTP)(DropdownProfile);