import { connect } from "react-redux";
import { login, receiveErrors } from "../../actions/session_actions";
import Login from "./login";
import { hideModal, openModal } from '../../actions/modal_actions';

const mapSTP = state => {
    return ({
        errors: state.errors.session,
    })
};

const mapDTP = dispatch => {
    const demoUser = { email: 'sykh@mail.com', password: '12345678' }
    return ({
        login: player => dispatch(login(player)),
        loginDemo: () => dispatch(login(demoUser)),
        hideModal: () => dispatch(hideModal()),
        openModal: (modal) => dispatch(openModal(modal)),
        removeErrors: () => dispatch(receiveErrors([]))
    })
};

export default connect(mapSTP, mapDTP)(Login);