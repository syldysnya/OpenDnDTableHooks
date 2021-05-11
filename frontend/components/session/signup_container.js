import { connect } from "react-redux";
import { hideModal } from "../../actions/modal_actions";
import { login, signup } from "../../actions/session_actions";
import Signup from "./signup";

// const mapSTP = state => ({
// })

const mapDTP = dispatch => {
    const demoUser = { email: 'sykh@mail.com', password: '12345678'}
    return ({
        signup: user => dispatch(signup(user)),
        hideModal: () => dispatch(hideModal()),
        loginDemo: () => dispatch(login(demoUser))
    })
};

export default connect(null, mapDTP)(Signup);