const sortByRating = (films) => {
  console.log(films);
  return {
    type: "SORT_BY_RATING",
    payload: films.data.sort(compare),
  }
};

function compare(a, b) {
  return a.vote_average - b.vote_average;
}

export default sortByRating;
