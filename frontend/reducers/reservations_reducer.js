import { RECEIVE_ALL_RESERVATIONS, RECEIVE_RESERVATION } from "../actions/reservation_actions";

const initialState = {
    reservationsAll: [],
    reservation: []
} 

const reservationsReducer = (state = initialState, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_ALL_RESERVATIONS:
            
            return {...state, reservationsAll: action.reservations};
        case RECEIVE_RESERVATION:
            return {...state, reservation: action.reservation };
        default:
            return state;
    }
}

export default reservationsReducer;