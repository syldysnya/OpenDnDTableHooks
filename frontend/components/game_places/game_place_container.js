import { connect } from "react-redux";
import GamePlace from "./game_place";


const mapSTP = (state, ownProps) => ({
    gamePlace: state.gamePlaces[ownProps.match.params.id]
});

// const mapDTP = dispatch => ({

// })

export default connect(mapSTP)(GamePlace);