import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import Login from "./login";


const mapDTP = dispatch => ({
    login: player => dispatch(login(player))
});

export default connect(null, mapDTP)(Login);