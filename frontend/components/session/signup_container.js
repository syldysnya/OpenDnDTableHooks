import { connect } from "react-redux";
import { hideModal } from "../../actions/modal_actions";
import { login, receiveErrors, signup } from "../../actions/session_actions";
import Signup from "./signup";

const mapSTP = state => {
    return ({
        errors: state.errors.session,
    })
};

const mapDTP = dispatch => {
    const demoUser = { email: 'sykh@mail.com', password: '12345678'}
    return ({
        signup: user => dispatch(signup(user)),
        hideModal: () => dispatch(hideModal()),
        loginDemo: () => dispatch(login(demoUser)),
        removeErrors: () => dispatch(receiveErrors([]))
    })
};

export default connect(mapSTP, mapDTP)(Signup);