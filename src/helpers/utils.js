export const sortMoviesByRating = (arr, isSortASC) => {
  if(isSortASC) {
    return arr.sort((a,b) => (a.vote_average - b.vote_average))
  } else {
    return arr.sort((a,b) => (b.vote_average - a.vote_average))
  }
};

export const sortMoviesByDate = (arr, isSortASC) => {
  if(isSortASC) {
    return arr.sort((a,b) => (new Date(a.release_date) - new Date(b.release_date)))
  } else {
    return arr.sort((a,b) => (new Date(b.release_date) - new Date(a.release_date)))
  }
};
