import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import NavBar from "./nav_bar";


const mapSTP = (state) => {
    return {
        currentPlayer: state.session.currentPlayer,
    }
};

const mapDTP = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapSTP, mapDTP)(NavBar);

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function (e) {
//     if (!e.target.matches('.dropbtn')) {
//         var myDropdown = document.getElementById("myDropdown");
//         if (myDropdown.classList.contains('show')) {
//             myDropdown.classList.remove('show');
//         }
//     }
// }