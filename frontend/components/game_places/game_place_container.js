import { connect } from "react-redux";
import { fetchAllGamePlaces, fetchGamePlace } from "../../actions/game_place_actions";
import { openModal } from "../../actions/modal_actions";
import { fetchAllReviews } from "../../actions/review_actions";
import GamePlace from "./game_place";


const mapSTP = (state, ownProps) => {
    
    return ({
        gamePlace: state.entities.gamePlaces[ownProps.match.params.gamePlaceId],
        currentPlayer: state.session.currentPlayer
    })
};

const mapDTP = dispatch => ({
    fetchAllGamePlaces: () => dispatch(fetchAllGamePlaces()),
    fetchGamePlace: gamePlaceId => dispatch(fetchGamePlace(gamePlaceId)),
    openModal: modal => dispatch(openModal(modal)),
    fetchAllReviews: () => dispatch(fetchAllReviews())
})

export default connect(mapSTP, mapDTP)(GamePlace);