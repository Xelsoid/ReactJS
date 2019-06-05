import { ACTIONS } from '../helpers/constants'

export const chooseFilm = (film) => ({
  type: ACTIONS.FILM_SELECTED,
  payload: film,
});

export const fetchedDataSuccess = (films) => ({
  type: ACTIONS.FETCH_DATA_SUCCESS,
  payload: {films},
});

export const setSortFilter = (filter, sortOrder) => ({
  type: ACTIONS.SET_SORT_FILTER,
  payload: {filter, sortOrder}
});


