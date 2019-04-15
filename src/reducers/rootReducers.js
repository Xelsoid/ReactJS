const initialState = {
  films: null,
  selectedFilm: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILM_SELECTED":
      return { ...state, selectedFilm: action.payload };

    case "FETCH_DATA":
      return { ...state, films: action.payload.data };

    case "SORT_BY_RATING":
      return { ...state, films: action.sortBy
          ? [].concat(action.payload.sort((a,b) => (a.vote_average - b.vote_average)))
          : [].concat(action.payload.sort((a,b) => (b.vote_average - a.vote_average)))
      };

    case "SORT_BY_DATE":
      return { ...state, films: action.sortBy
          ? [].concat(action.payload.sort((a,b) => (new Date(a.release_date) - new Date(b.release_date))))
          : [].concat(action.payload.sort((a,b) => (new Date(b.release_date) - new Date(a.release_date))))
      };

    case "CLOSE_DESCRIPTION":
      return { ...state, selectedFilm: null};

    default:
      return state;
  }
};

export default reducer;
