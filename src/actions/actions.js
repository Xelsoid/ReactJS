import ACTIONS from '../helpers/constants'

export const chooseFilm = (film) => ({
  type: ACTIONS.FILM_SELECTED,
  payload: film,
});

export const fetchedDataSuccess = (films) => ({
  type: ACTIONS.FETCH_DATA,
  payload: films,
});

export const sortByDate = (films, isSortedASC) => ({
  type: ACTIONS.SORT_BY_DATE,
  payload: {films: films, isSortedASC: isSortedASC},
});

export const sortByRating = (films, isSortedASC) => ({
  type: ACTIONS.SORT_BY_RATING,
  payload: {films: films, isSortedASC: isSortedASC},
});

export const closeDescription = () => ({
  type: ACTIONS.CLOSE_DESCRIPTION
});


