const ACTIONS = {
  FILM_SELECTED: 'FILM_SELECTED',
  FETCH_DATA: 'FETCH_DATA',
  SORT_BY_RATING: 'SORT_BY_RATING',
  SORT_BY_DATE:'SORT_BY_DATE',
  CLOSE_DESCRIPTION: 'CLOSE_DESCRIPTION',
};

const PATHS = {
  DEFAULT: '/',
  MOVIES: '/movies',
  MOVIE: '/description/:name',
  NOTFOUND: '/page-not-found',
  RESTURLS: '*',
};

export { ACTIONS, PATHS };
