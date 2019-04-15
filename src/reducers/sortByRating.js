const initialState = {
  films: undefined
};
export default function(state=initialState, action) {
  switch (action.type) {
    case "SORT_BY_RATING":
      console.log(state);
      console.log(action);
      return { ...state, films: action.payload.data }
      break;

    default:
      return state;
  }
}
function compare(a, b) {
  // console.log(a);
  // console.log(a.vote_average);
  // console.log(b.vote_average);
  return a.vote_average - b.vote_average;
}
