import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import Login from "./login";
import { hideModal, openModal } from '../../actions/modal_actions';

// const mapSTP = () => ({
//     formType: 'login'
// })

const mapDTP = dispatch => ({
    login: player => dispatch(login(player)),
    hideModal: () => dispatch(hideModal()),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(null, mapDTP)(Login);