import { connect } from "react-redux";
import { fetchAllGamePlaces, fetchGamePlace } from "../../actions/game_place_actions";
import GamePlace from "./game_place";


const mapSTP = (state, ownProps) => {
    debugger
    return ({
        gamePlace: state.entities.gamePlaces[ownProps.match.params.id]
    })
};

const mapDTP = dispatch => ({
    fetchAllGamePlaces: () => dispatch(fetchAllGamePlaces()),
    fetchGamePlace: gamePlaceId => dispatch(fetchGamePlace(gamePlaceId))
})

export default connect(mapSTP, mapDTP)(GamePlace);