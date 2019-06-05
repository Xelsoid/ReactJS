// @flow
import orderBy from 'lodash/orderBy';
import { createSelector } from 'reselect';

export const removeSpecialSymbols = (string: string): string => {return string.replace(/[^A-Z0-9]/ig, '_')};

const filmsSelector = state => state.films || [];

const sortedFilterSelector = state => state.sortedFilter || 'id';

const sortedOrder = state => state.sortOrder || 'asc';

export const sortByFilter = (films: Object, filter: string, order: string) => {
  if (!filter || films.length === 0) return films;
  return orderBy(films, [film => film[filter]], [order]);
};

export const sortedFilmsSelector = createSelector(
  filmsSelector,
  sortedFilterSelector,
  sortedOrder,
  sortByFilter,
);


export const fetchData = (url: string) => {
  return fetch(url)
    .then(response => response.json())
    .then(films => films)
    .catch(() => {window.location.href = 'not-found';})
};
