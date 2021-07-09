import { RECEIVE_CITIES, RECEIVE_CITY } from "../actions/city_actions";

const initialState = {
    citiesAll: {}
} 

const citiesReducer = (state = initialState, action) => {
    
    Object.freeze(state);
    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_CITIES:
            newState.citiesAll = action.cities;
            return newState;
        case RECEIVE_CITY:
            return Object.assign({}, state, { city: action.city })
        default:
            return state;
    }
};

export default citiesReducer;