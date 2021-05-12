import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import Login from "./login";
import { hideModal, openModal } from '../../actions/modal_actions';

// const mapSTP = () => ({
//     formType: 'login'
// })

const mapDTP = dispatch => {
    const demoUser = { email: 'sykh@mail.com', password: '12345678' }
    return ({
        login: player => dispatch(login(player)),
        loginDemo: () => dispatch(login(demoUser)),
        hideModal: () => dispatch(hideModal()),
        openModal: (modal) => dispatch(openModal(modal))
    })
};

export default connect(null, mapDTP)(Login);