import ACTIONS from '../helpers/constants'
import { sortMoviesByRating, sortMoviesByDate } from '../helpers/utils'

const initialState = {
  films: null,
  selectedFilm: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FILM_SELECTED:
      return { ...state, selectedFilm: action.payload };

    case ACTIONS.FETCH_DATA:
      return { ...state, films: action.payload.data };

    case ACTIONS.SORT_BY_RATING:
      return { ...state, films: [...sortMoviesByRating(action.payload.films, action.payload.isSortedASC)]
      };

    case ACTIONS.SORT_BY_DATE:
      return { ...state, films: [...sortMoviesByDate(action.payload.films, action.payload.isSortedASC)]
      };

    case ACTIONS.CLOSE_DESCRIPTION:
      return { ...state, selectedFilm: null};

    default:
      return state;
  }
};

export default reducer;
