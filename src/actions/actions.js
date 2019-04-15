export const chooseFilm = (film) => ({
  type: "FILM_SELECTED",
  payload: film,
});

export const fetchedDataSuccess = (films) => ({
  type: "FETCH_DATA",
  payload: films,
});

export const sortByDate = (films, sortBy) => ({
  type: "SORT_BY_DATE",
  payload: films,
  sortBy: sortBy
});

export const sortByRating = (films, sortBy) => ({
  type: "SORT_BY_RATING",
  payload: films,
  sortBy: sortBy
});


