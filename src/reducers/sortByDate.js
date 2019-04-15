export default function(state=null, action) {
  switch (action.type) {
    case "SORT_BY_DATE":
      return action.payload;
      break;

    default:
      return state;
  }
}
