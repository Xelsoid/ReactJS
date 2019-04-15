import { combineReducers } from "redux";
import Films from './films';
import SelectedFilm from './films-selected';
import SortByRating from './sortByRating';
import SortByDate from './sortByDate';

const allReducers = combineReducers({
  films: Films,
  selectedFilm: SelectedFilm,
  sortByRating: SortByRating,
  sortByDate: SortByDate,
});

export default allReducers;
