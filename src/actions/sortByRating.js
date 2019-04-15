const sortByRatingtest = (films) => {
  return {
    type: "SORT_BY_RATING",
    payload: {...films, data: films.data.sort(compare)}
  }
};
function sortByRating(films) {
  return (dispatch) => {
    dispatch(sortByRatingtest(films));
  }
}

function compare(a, b) {
  return a.vote_average - b.vote_average;
}


export default sortByRating;
