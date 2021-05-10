export const signup = player => (
    $.ajax({
        method: 'POST',
        url: '/api/players',
        data: { player }
    })
);

export const login = player => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { player }
    })
);

export const logout = player => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);