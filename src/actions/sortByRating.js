const sortByRating = (films, sortBy) => ({
  type: "SORT_BY_RATING",
  payload: {...films, data: films.data.sort((a,b) => (a.vote_average - b.vote_average))}
});

export default sortByRating;
