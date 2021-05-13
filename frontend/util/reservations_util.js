export const fetchAllReservations = () => (
    $.ajax({
        method: 'GET',
        url: '/api/reservations'
    })
);

export const fetchReservation = reservationId => (
    $.ajax({
        method: 'GET',
        url: `/api/reservations/${reservationId}`,
    })
);

export const createReservation = reservation => (
    $.ajax({
        method: 'POST',
        url: '/api/reservations',
        data: { reservation }
    })
);

