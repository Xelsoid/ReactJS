import { ACTIONS } from '../helpers/constants'

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

    case ACTIONS.SET_SORT_FILTER:
      return { ...state, sortedFilter: action.payload.filter, sortOrder: action.payload.sortOrder };

    default:
      return state;
  }
};

export default reducer;
