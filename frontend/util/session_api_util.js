export const signup = player => (
    $.ajax({
        method: 'POST',
        url: '/api/players',
        data: { player }
    })
);

export const login = player => {
    debugger

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

export const fetchCities = () => (
    $.ajax({
        method: "GET",
        url: '/api/cities'
    })
) 