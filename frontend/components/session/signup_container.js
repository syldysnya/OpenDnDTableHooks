import { connect } from "react-redux";
import { fetchCities } from "../../actions/city_actions";
import { hideModal } from "../../actions/modal_actions";
import { login, receiveErrors, signup } from "../../actions/session_actions";
import Signup from "./signup";

const mapSTP = state => {
    const cities = Object.values(state.entities.cities);
    const mapped = cities.map((city) => {
        return city.name 
    })

    const mapped_idx = cities.map((city) => {
        return city.id
    })

    return ({
        errors: state.errors.session,
        cities: mapped,
        city_indices: mapped_idx
    })
};

const mapDTP = dispatch => {
    const demoUser = { email: 'sykh@mail.com', password: '12345678'}
    return ({
        signup: user => dispatch(signup(user)),
        hideModal: () => dispatch(hideModal()),
        loginDemo: () => dispatch(login(demoUser)),
        removeErrors: () => dispatch(receiveErrors([])),
        fetchCities: () => dispatch(fetchCities())
    })
};

export default connect(mapSTP, mapDTP)(Signup);