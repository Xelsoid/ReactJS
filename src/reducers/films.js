export default function(state=null, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return action.payload;
      break;

    default:
      return state;
  }
}
