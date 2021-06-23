export const signup = player => (
    $.ajax({
        method: 'POST',
        url: '/api/players',
        data: { player }
    })
);

export const login = player => {
    
    return $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { player }
    })
};

export const logout = player => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);

export const updatePlayer = player => (
    $.ajax({
        method: 'PATCH',
        url: `/api/players/${player.id}`,
        data: { player }
    })
)

export const fetchCities = () => (
    $.ajax({
        method: "GET",
        url: '/api/cities'
    })
)

export const fetchCity = cityId => (
    $.ajax({
        method: 'GET',
        url: `/api/cities/${cityId}`
    })
);

export const fetchPlayer = playerId => {
    
    return $.ajax({
            method: 'GET',
            url: `/api/players/${playerId}`,
        })

};