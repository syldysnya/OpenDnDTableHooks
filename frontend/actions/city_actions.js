import * as ApiUtil from '../util/session_api_util';
export const RECEIVE_CITIES = 'RECEIVE_CITIES';

const receiveCities = cities => ({
    type: RECEIVE_CITIES,
    cities
});

export const fetchCities = () => dispatch => (
    ApiUtil.fetchCities()
        .then(cities => dispatch(receiveCities(cities))
));