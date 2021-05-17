import { connect } from "react-redux";
import MapSearch from "./map_search";


const mapSTP = state => ({
    gamePlaces: Object.values(state.entities.gamePlaces),
    currentPlayer: state.session.currentPlayer
});

export default connect(mapSTP)(MapSearch);