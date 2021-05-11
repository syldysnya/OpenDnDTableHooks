import { connect } from "react-redux";
import { hideModal } from "../../actions/modal_actions";
import Modal from "./modal";



const mapSTP = (state) => {
    // debugger
    return ({
        modal: state.ui.modal,
    })
};

const mapDTP = dispatch => {
    // debugger
    return ({
        hideModal: () => dispatch(hideModal())
    })
};

export default connect(mapSTP, mapDTP)(Modal);