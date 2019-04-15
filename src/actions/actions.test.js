import {chooseFilm, fetchedDataSuccess, sortByDate, sortByRating} from './actions';
import DATA from '../mockedData/MOCKED_DATA'

describe('actions', () => {
  it('action FILM_SELECTED', () => {
    expect(chooseFilm(DATA.data[0])).toEqual(
      {
        type: "FILM_SELECTED",
        payload: DATA.data[0]
      });
  });

  it('action FETCH_DATA', () => {
    expect(fetchedDataSuccess(DATA.data)).toEqual(
      {
        type: "FETCH_DATA",
        payload: DATA.data
      });
  });

  it('action SORT_BY_DATE asc', () => {
    expect(sortByDate(DATA.data, true)).toEqual(
      {
        type: "SORT_BY_DATE",
        payload: DATA.data,
        sortBy: true
      });
  });

  it('action SORT_BY_DATE desc', () => {
    expect(sortByDate(DATA.data, false)).toEqual(
      {
        type: "SORT_BY_DATE",
        payload: DATA.data,
        sortBy: false
      });
  });

  it('action SORT_BY_RATING asc', () => {
    expect(sortByRating(DATA.data, true)).toEqual(
      {
        type: "SORT_BY_RATING",
        payload: DATA.data,
        sortBy: true
      });
  });

  it('action SORT_BY_RATING desc', () => {
    expect(sortByRating(DATA.data, false)).toEqual(
      {
        type: "SORT_BY_RATING",
        payload: DATA.data,
        sortBy: false
      });
  });
});
