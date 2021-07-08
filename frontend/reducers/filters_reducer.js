import { REMOVE_FILTER, UPDATE_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  location: [],
  rating: 0,
  name: ''
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_FILTER) {
      const newFilter = {
        [action.filter]: action.value
      };
    return Object.assign({}, state, newFilter);
  } else if (action.type === REMOVE_FILTER) {
      let newFilter;
      if (action.filter === 'location') {
        newFilter = {
          location: [] 
        }
      } else if (action.filter === 'rating') {
        newFilter = {
          rating: 0 
        }
      } else if (action.filter === 'name') {
        newFilter = {
          name: '' 
        }
      } else {
        newFilter = defaultFilters
      }
    return Object.assign({}, state, newFilter);
  } else {
    return state;
  }
};

export default filtersReducer;
