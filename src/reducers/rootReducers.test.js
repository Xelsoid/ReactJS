import reducer from './rootReducers';
import ACTIONS from '../helpers/constants';
import DATA from '../mockedData/MOCKED_DATA'

describe('rootReducers', () => {
  const initialState = {
    films: null,
    selectedFilm: null
  };

  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('should handle FILM_SELECTED', () => {
    const action = {
      type: ACTIONS.FILM_SELECTED,
      payload: DATA.data[0]
    };
    expect(reducer(initialState, action)).toEqual({...initialState, selectedFilm: action.payload});
  });

  it('should handle SORT_BY_RATING asc', () => {
    const action = {
      type: ACTIONS.SORT_BY_RATING,
      payload: {films: DATA.data, isSortedASC: true}
    };
    expect(reducer(initialState, action)).toEqual({...initialState, films: [].concat(action.payload.films.sort((a,b) => (a.vote_average - b.vote_average)))});
  });

  it('should handle SORT_BY_RATING desc', () => {
    const action = {
      type: ACTIONS.SORT_BY_RATING,
      payload: {films: DATA.data, isSortedASC: false}
    };
    expect(reducer(initialState, action)).toEqual({...initialState, films: [].concat(action.payload.films.sort((a,b) => (b.vote_average - a.vote_average)))});
  });

  it('should handle SORT_BY_DATE asc', () => {
    const action = {
      type: ACTIONS.SORT_BY_DATE,
      payload: {films: DATA.data, isSortedASC: true}
    };
    expect(reducer(initialState, action)).toEqual({...initialState, films: [].concat(action.payload.films.sort((a,b) => (new Date(a.release_date) - new Date(b.release_date))))});
  });

  it('should handle SORT_BY_DATE desc', () => {
    const action = {
      type: ACTIONS.SORT_BY_DATE,
      payload: {films: DATA.data, isSortedASC: false}
    };
    expect(reducer(initialState, action)).toEqual({...initialState, films: [].concat(action.payload.films.sort((a,b) => (new Date(b.release_date) - new Date(a.release_date))))});
  });

  it('should handle CLOSE_DESCRIPTION desc', () => {
    const action = {
      type: ACTIONS.CLOSE_DESCRIPTION,
    };
    expect(reducer(initialState, action)).toEqual({...initialState, selectedFilm: null});
  });
});
