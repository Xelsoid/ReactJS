import { ACTIONS } from '../helpers/constants'
import { sortMoviesByRating, sortMoviesByDate } from '../helpers/utils'

const initialState = {
  films: null,
  selectedFilm: null,
  sortedFilter: 'id',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FILM_SELECTED:
      return { ...state, selectedFilm: action.payload };

    case ACTIONS.FETCH_DATA_SUCCESS:
      return { ...state, films: action.payload.films.data};

    case ACTIONS.SORT_BY_RATING:
      return { ...state, films: [...sortMoviesByRating(action.payload.films, action.payload.isSortedASC)] };

    case ACTIONS.SORT_BY_DATE:
      return { ...state, films: [...sortMoviesByDate(action.payload.films, action.payload.isSortedASC)] };

    case ACTIONS.SET_SORT_FILTER:
      return { ...state, sortedFilter: action.payload };

    default:
      return state;
  }
};

export default reducer;
