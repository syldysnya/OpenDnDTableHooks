import { connect } from "react-redux";
import { fetchCity, fetchCities } from "../../actions/city_actions";
import { fetchPlayer } from "../../actions/player_actions";
import GamePlacesIndex from "./game_places_index";


const mapSTP = (state) => {
    return ({
        gamePlaces: Object.values(state.entities.gamePlaces),
        currentPlayer: state.session.currentPlayer,
        cities: Object.values(state.entities.cities)
    })
};

const mapDTP = dispatch => {
    return ({
        fetchAllGamePlaces: () => dispatch(fetchAllGamePlaces()),
        fetchPlayer: playerId => dispatch(fetchPlayer(playerId)),
        fetchCity: cityId => dispatch(fetchCity(cityId)),
        fetchCities: () => dispatch(fetchCities())
    })
}

export default connect(mapSTP, mapDTP)(GamePlacesIndex);