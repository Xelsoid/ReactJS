const initialState = {
  films: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILM_SELECTED":
      return action.payload
    case "FETCH_DATA":
      return { ...state, films: action.payload }
    case "SORT_BY_RATING":
      return { ...state, films: action.payload }
    case "SORT_BY_DATE":
      return { ...state, films: action.payload }
    default:
      return state;
  }
};


export default reducer;
