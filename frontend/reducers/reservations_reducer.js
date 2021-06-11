import { REQUEST_PLAYER } from "../actions/player_actions";
import { RECEIVE_ALL_RESERVATIONS, RECEIVE_RESERVATION } from "../actions/reservation_actions";


const reservationsReducer = (state = {}, action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_ALL_RESERVATIONS:
            
            return action.reservations;
        case RECEIVE_RESERVATION:
            return Object.assign({}, state, { [action.reservation.id]: action.reservation })
        default:
            return state;
    }
}

export default reservationsReducer;