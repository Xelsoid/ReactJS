// @flow
import orderBy from 'lodash/orderBy';
import { createSelector } from 'reselect';

export const removeSpecialSymbols = (string: string): string => {return string.replace(/[^A-Z0-9]/ig, '_')};

const getMovies = (state) => {
  return state;
};

const filmsSelector = state => state.films || [];

const sortedFilterSelector = state => state.sortedFilter || 'id';
/*
export const sortMoviesByRating = createSelector(
  [ getMovies, getFlag ],
  (state, flag) => {
    if(flag) {
      return state.sort((a: Object,b: Object) => (a.vote_average - b.vote_average))
    } else {
      return state.sort((a: Object,b: Object) => (b.vote_average - a.vote_average))
    }
  }
);

export const sortMoviesByDate = createSelector(
  [ getMovies, getFlag ],
  (state, flag) => {
    if(flag) {
      return state.sort((a: Object,b: Object) => (new Date(a.release_date) - new Date(b.release_date)))
    } else {
      return state.sort((a: Object,b: Object) => (new Date(b.release_date) - new Date(a.release_date)))
    }
  }
);
*/

export const sortByFilter = (films, filter) => {
  if (!filter || films.length === 0) return films;
  return orderBy(films, [film => film[filter]], ['desc']);
}

export const sortedFilmsSelector = createSelector(
  filmsSelector,
  sortedFilterSelector,
  sortByFilter,
);


export const fetchData = (url: string) => {
  return fetch(url)
    .then(response => response.json())
    .then(films => films);
};
