import {fetchedDataSuccess} from "../actions/actions";

export const fetchData = (search, searchBy) => {
  const baseURL = 'https://reactjs-cdp.herokuapp.com';
  let searchPart = `/movies?search=${search}&searchBy=${searchBy}`;

  if(!search && !searchBy) {
    searchPart = window.location.pathname + window.location.search;
  } else {
    searchPart = `/movies?search=${search}&searchBy=${searchBy}`;
  }

  const finalURL =`${baseURL}${searchPart}`;

  return (dispatch) => {
    fetch(finalURL)
      .then(response => response.json())
      .then(films => dispatch(fetchedDataSuccess(films, searchPart)));
  }
};

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
