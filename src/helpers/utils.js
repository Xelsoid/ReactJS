import {fetchedDataSuccess} from "../actions/actions";

export const fetchData = (url) => {
  return (dispatch) => {
    fetch(url)
      .then(response => response.json())
      .then(films => dispatch(fetchedDataSuccess(films)));
  }
};

export const compare = (a, b, option, ) => {
  return a[option] - b[option]
};
