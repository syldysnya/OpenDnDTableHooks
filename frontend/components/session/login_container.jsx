import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import Login from "./login";

const mapSTP = () => ({
    formType: 'login'
})

const mapDTP = dispatch => ({
    login: player => dispatch(login(player)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapSTP, mapDTP)(Login);