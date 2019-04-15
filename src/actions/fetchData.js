export function fetchedDataSuccess(films) {
  return {
    type: "FETCH_DATA",
    payload: films,
  }
}

export function fetchData(url) {
  return (dispatch) => {
    fetch(url)
      .then(response => response.json())
      .then(films => dispatch(fetchedDataSuccess(films)));
  }
}
