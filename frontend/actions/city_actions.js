import * as ApiUtil from '../util/session_api_util';
export const RECEIVE_CITIES = 'RECEIVE_CITIES';
export const RECEIVE_CITY = 'RECEIVE_CITY';

const receiveCities = cities => ({
    type: RECEIVE_CITIES,
    cities
});

const receiveCity = city => ({
    type: RECEIVE_CITY,
    city
});

export const fetchCity = cityId => dispatch => (
    ApiUtil.fetchCity(cityId)
        .then(city => dispatch(receiveCity(city)))
);

export const fetchCities = () => dispatch => (
    ApiUtil.fetchCities()
        .then(cities => dispatch(receiveCities(cities))
));