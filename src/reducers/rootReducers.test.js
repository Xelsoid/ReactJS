import reducer from './rootReducers';
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
      type: "FILM_SELECTED",
      payload: DATA.data[0]
    };
    expect(reducer(initialState, action)).toEqual({...initialState, selectedFilm: action.payload});
  });

  it('should handle SORT_BY_RATING asc', () => {
    const action = {
      type: "SORT_BY_RATING",
      payload: DATA.data,
      sortBy: true,
    };
    expect(reducer(initialState, action)).toEqual({...initialState, films: [].concat(action.payload.sort((a,b) => (a.vote_average - b.vote_average)))});
  });

  it('should handle SORT_BY_RATING desc', () => {
    const action = {
      type: "SORT_BY_RATING",
      payload: DATA.data,
      sortBy: false,
    };
    expect(reducer(initialState, action)).toEqual({...initialState, films: [].concat(action.payload.sort((a,b) => (b.vote_average - a.vote_average)))});
  });

  it('should handle SORT_BY_DATE asc', () => {
    const action = {
      type: "SORT_BY_DATE",
      payload: DATA.data,
      sortBy: true,
    };
    expect(reducer(initialState, action)).toEqual({...initialState, films: [].concat(action.payload.sort((a,b) => (new Date(a.release_date) - new Date(b.release_date))))});
  });

  it('should handle SORT_BY_DATE desc', () => {
    const action = {
      type: "SORT_BY_DATE",
      payload: DATA.data,
      sortBy: false,
    };
    expect(reducer(initialState, action)).toEqual({...initialState, films: [].concat(action.payload.sort((a,b) => (new Date(b.release_date) - new Date(a.release_date))))});
  });

  it('should handle CLOSE_DESCRIPTION desc', () => {
    const action = {
      type: "CLOSE_DESCRIPTION",
    };
    expect(reducer(initialState, action)).toEqual({...initialState, selectedFilm: null});
  });
});
