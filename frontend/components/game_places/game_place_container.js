import { connect } from "react-redux";
import { fetchAllGamePlaces, fetchGamePlace } from "../../actions/game_place_actions";
import { openModal } from "../../actions/modal_actions";
import { createReview, fecthReview, fetchAllReviews } from "../../actions/review_actions";
import GamePlace from "./game_place";


const mapSTP = (state, ownProps) => {
    
    return ({
        gamePlace: state.entities.gamePlaces[ownProps.match.params.gamePlaceId],
        reviews: Object.values(state.entities.reviews),
        currentPlayer: state.session.currentPlayer,
    })
};

const mapDTP = dispatch => ({
    fetchAllGamePlaces: () => dispatch(fetchAllGamePlaces()),
    fetchGamePlace: gamePlaceId => dispatch(fetchGamePlace(gamePlaceId)),
    openModal: modal => dispatch(openModal(modal)),
    fetchAllReviews: () => dispatch(fetchAllReviews()),
    fetchReview: reviewId => dispatch(fecthReview(reviewId)),
    createReview: review => dispatch(createReview(review))
})

export default connect(mapSTP, mapDTP)(GamePlace);