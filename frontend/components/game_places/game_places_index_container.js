import { connect } from "react-redux";
import { fetchCity } from "../../actions/city_actions";
import { fetchPlayer } from "../../actions/player_actions";
import GamePlacesIndex from "./game_places_index";


const mapSTP = (state) => {
    return ({
        gamePlaces: Object.values(state.entities.gamePlaces),
        currentPlayer: state.session.currentPlayer
    })
};

const mapDTP = dispatch => {
    return ({
        fetchAllGamePlaces: () => dispatch(fetchAllGamePlaces()),
        fetchPlayer: playerId => dispatch(fetchPlayer(playerId)),
        fetchCity: cityId => dispatch(fetchCity(cityId))
    })
}

export default connect(mapSTP, mapDTP)(GamePlacesIndex);