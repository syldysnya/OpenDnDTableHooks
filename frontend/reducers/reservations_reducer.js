import { RECEIVE_ALL_RESERVATIONS, RECEIVE_RESERVATION } from "../actions/reservation_actions";

const initialState = {
    past: {},
    future: {},
    reservation: {}
} 

const reservationsReducer = (state = initialState, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_ALL_RESERVATIONS:
            let key = Object.keys(action.reservations);
            return {...state, [key[0]]: action.reservations[key[0]], [key[1]]: action.reservations[key[1]]}
        case RECEIVE_RESERVATION:
            return {...state, reservation: action.reservation };
        default:
            return state;
    }
}

export default reservationsReducer;