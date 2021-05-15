export const convertToSnakeCase = obj => {
    const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
    let newObj = {};
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let convertedKeys = keys.map(key => camelToSnakeCase(key));
    for (let i = 0; i < keys.length; i++) { newObj[convertedKeys[i]] = values[i] }
    return newObj;
}

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

export const createReservation = reservation => {
    reservation = convertToSnakeCase(reservation);

    return $.ajax({
            method: 'POST',
            url: '/api/reservations',
            data: { reservation }
    })
}

