import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import Modal from "./modal";



const mapSTP = (state) => {
    debugger
    return ({
        modal: state.ui.modal,
    })
};

const mapDTP = dispatch => {
    debugger
    return ({
        closeModal: () => dispatch(closeModal())
    })
};

export default connect(mapSTP, mapDTP)(Modal);