export const fetchAllGamePlaces = filter => {
    return $.ajax({
        method: "GET",
        url: 'api/game_places',
        data: { filter }
    })
}

export const fetchGamePlace = gamePlaceId => (
    $.ajax({
        method: 'GET',
        url: `api/game_places/${gamePlaceId}`,
        // contentType: 'application/json'
    })
);