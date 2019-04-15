import {compare} from "../helpers/utils";

const initialState = {
  films: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILM_SELECTED":
      return { ...state, selectedFilm: action.payload };
      break;
    case "FETCH_DATA":
      return { ...state, films: action.payload.data };
      break;
    case "SORT_BY_RATING":
      return { ...state, films: action.sortBy
          ? [].concat(action.payload.sort((a,b) => (a.vote_average - b.vote_average)))
          : [].concat(action.payload.sort((a,b) => (b.vote_average - a.vote_average)))
      };
      break;
    case "SORT_BY_DATE":
      return { ...state, films: action.sortBy
          ? [].concat(action.payload.sort((a,b) => (new Date(a.release_date) - new Date(b.release_date))))
          : [].concat(action.payload.sort((a,b) => (new Date(b.release_date) - new Date(a.release_date))))
      };
      break;
    default:
      return state;
  }
};

export default reducer;
