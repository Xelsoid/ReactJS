import {fetchedDataSuccess} from "../actions/actions";

export default (url) => {
  return (dispatch) => {
    fetch(url)
      .then(response => response.json())
      .then(films => dispatch(fetchedDataSuccess(films)));
  }
};
