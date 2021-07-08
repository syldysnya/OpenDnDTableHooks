export const fetchAllGamePlaces = filter => {
    return $.ajax({
        method: "GET",
        url: 'api/game_places',
        data: { filter }
    })
}

export const sortByDefault = filter => {
    return $.ajax({
        method: "POST",
        url: '/api/game_places/default',
        data: {filter}
    })
}

export const sortByRating = filter => {
    return $.ajax({
        method: "POST",
        url: '/api/game_places/rating',
        data: {filter}
    })
}

export const sortByDate = filter => {
    return $.ajax({
        method: "POST",
        url: '/api/game_places/newest',
        data: {filter}
    })
}

export const fetchGamePlace = gamePlaceId => (
    $.ajax({
        method: 'GET',
        url: `api/game_places/${gamePlaceId}`,
        // contentType: 'application/json'
    })
);