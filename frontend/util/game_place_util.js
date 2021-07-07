export const fetchAllGamePlaces = filter => {
    return $.ajax({
        method: "GET",
        url: 'api/game_places',
        data: { filter }
    })
}

export const sortByDefault = () => {
    return $.ajax({
        method: "POST",
        url: '/api/game_places/default',
    })
}

export const sortByRating = () => {
    return $.ajax({
        method: "POST",
        url: '/api/game_places/rating',
    })
}

export const sortByDate = () => {
    return $.ajax({
        method: "POST",
        url: '/api/game_places/newest',
    })
}

export const fetchGamePlace = gamePlaceId => (
    $.ajax({
        method: 'GET',
        url: `api/game_places/${gamePlaceId}`,
        // contentType: 'application/json'
    })
);