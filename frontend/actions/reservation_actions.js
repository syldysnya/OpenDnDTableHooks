import * as ApiUtil from '../util/reservations_util';

export const RECEIVE_ALL_RESERVATIONS = 'RECEIVE_ALL_RESERVATIONS';
export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';

const receiveAllReservations = reservations => ({
    type: RECEIVE_ALL_RESERVATIONS,
    reservations
});

const receiveReservation = reservation => ({
    type: RECEIVE_RESERVATION,
    reservation
});

export const fetchAllReservations = () => dispatch => (
    ApiUtil.fetchAllReservations()
        .then(reservations => dispatch(receiveAllReservations(reservations)))
);

export const fetchReservation = reservationId => dispatch => (
    ApiUtil.fetchReservation(reservationId)
        .then(reservation => dispatch(receiveReservation(reservation)))
)

export const createReservation = reservation => dispatch => (
    ApiUtil.createReservation(reservation)
        .then(reservation => dispatch(receiveReservation(reservation)))
)
