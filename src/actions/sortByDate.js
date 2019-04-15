const sortByDate = (films, option) => {
  console.log(films);
  console.log(option);
  return {
    type: "SORT_BY_DATE",
    payload: films.data.sort(compare),
  }
};

function compare(a, b) {
  return a.release_date - b.release_date;
}

export default sortByDate;
