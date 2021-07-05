import { fetchAllGamePlaces } from "./game_place_actions";

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const resetFilter = filter => ({
  type: REMOVE_FILTER,
  filter
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchAllGamePlaces(getState().ui.filters)(dispatch);
};

export const deleteFilter = filter => (dispatch, getState) => {
    dispatch(resetFilter(filter));
    return fetchAllGamePlaces(getState().ui.filters)(dispatch);
};