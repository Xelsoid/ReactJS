import { ACTIONS } from '../helpers/constants'

export const chooseFilm = (film) => ({
  type: ACTIONS.FILM_SELECTED,
  payload: film,
});

export const fetchDataRequest = (search) => ({
  type: ACTIONS.FETCH_DATA_REQUEST,
  payload: {search},
});

export const fetchedDataSuccess = (films) => ({
  type: ACTIONS.FETCH_DATA_SUCCESS,
  payload: {films: films},
});

export const sortByDate = (films, isSortedASC) => ({
  type: ACTIONS.SORT_BY_DATE,
  payload: {films: films, isSortedASC: isSortedASC},
});

export const sortByRating = (films, isSortedASC) => ({
  type: ACTIONS.SORT_BY_RATING,
  payload: {films: films, isSortedASC: isSortedASC},
});


