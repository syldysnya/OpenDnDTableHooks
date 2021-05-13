export const fetchAllGamePlaces = () => (
    $.ajax({
        method: "GET",
        url: 'api/gameplaces'
    })
)

export const fetchGamePlace = gamePlaceId => (
    $.ajax({
        method: 'GET',
        url: `api/gameplaces/${gamePlaceId}`,
    })
);