const chooseFilm = (film) => {
  return {
    type: "FILM_SELECTED",
    payload: film,
  }
};

export default chooseFilm;
