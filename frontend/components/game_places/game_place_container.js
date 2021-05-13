import { connect } from "react-redux";
import { fetchAllGamePlaces } from "../../actions/game_place_actions";
import GamePlace from "./game_place";


const mapSTP = (state, ownProps) => {
    debugger
    return ({
        gamePlace: state.gamePlaces[ownProps.match.params.id]
    })
};

const mapDTP = dispatch => ({
    fetchAllGamePlaces: () => dispatch(fetchAllGamePlaces())
})

export default connect(mapSTP, mapDTP)(GamePlace);