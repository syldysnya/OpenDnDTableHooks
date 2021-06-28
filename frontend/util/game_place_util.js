export const fetchAllGamePlaces = () => {
    return $.ajax({
        method: "GET",
        url: 'api/game_places',
        // contentType: 'application/json'
    })
}

export const fetchGamePlace = gamePlaceId => (
    $.ajax({
        method: 'GET',
        url: `api/game_places/${gamePlaceId}`,
        // contentType: 'application/json'
    })
);