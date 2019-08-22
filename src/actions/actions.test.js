import { chooseFilm, fetchedDataSuccess } from './actions';
import { ACTIONS } from '../helpers/constants';
import DATA from '../mockedData/MOCKED_DATA'

describe('actions', () => {
  it('action FILM_SELECTED', () => {
    expect(chooseFilm(DATA.data[0])).toEqual(
      {
        type: ACTIONS.FILM_SELECTED,
        payload: DATA.data[0]
      });
  });

  it('action FETCH_DATA_SUCCESS', () => {
    expect(fetchedDataSuccess(DATA.data)).toEqual(
      {
        type: ACTIONS.FETCH_DATA_SUCCESS,
        payload: {films: DATA.data}
      });
  });

  it('action SORT_BY_DATE asc', () => {
    expect(sortByDate(DATA.data, true)).toEqual(
      {
        type: ACTIONS.SORT_BY_DATE,
        payload: {films: DATA.data, isSortedASC: true}
      });
  });

  it('action SORT_BY_DATE desc', () => {
    expect(sortByDate(DATA.data, false)).toEqual(
      {
        type: ACTIONS.SORT_BY_DATE,
        payload: {films: DATA.data, isSortedASC: false}
      });
  });

  it('action SORT_BY_RATING asc', () => {
    expect(sortByRating(DATA.data, true)).toEqual(
      {
        type: ACTIONS.SORT_BY_RATING,
        payload: {films: DATA.data, isSortedASC: true}
      });
  });

  it('action SORT_BY_RATING desc', () => {
    expect(sortByRating(DATA.data, false)).toEqual(
      {
        type: ACTIONS.SORT_BY_RATING,
        payload: {films: DATA.data, isSortedASC: false}
      });
  });
});
