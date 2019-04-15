const initialState = {
  films: undefined
};
export default function(state=initialState, action) {
  switch (action.type) {
    case "SORT_BY_RATING":
      return { ...state, films: action.payload }
      break;

    default:
      return state;
  }
}
