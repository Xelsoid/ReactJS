import { takeLatest, call, put, all } from 'redux-saga/effects';
import { fetchedDataSuccess } from "./actions/actions";
import { ACTIONS } from './helpers/constants';

export function* fetchFilmsAsync(action) {
  const baseUrl = 'https://reactjs-cdp.herokuapp.com/movies';
  let url;

  if(action.payload.search) {
    url = baseUrl + action.payload.search;
  } else {
    url = baseUrl;
  }

  const response = yield call(fetch, url);
  const films = yield response.json();

  yield put(fetchedDataSuccess(films));
}

export function* watchFetchFilms() {
  yield takeLatest(ACTIONS.FETCH_DATA_REQUEST, fetchFilmsAsync);
}

export function* filmsSaga() {
  yield all([
    watchFetchFilms()
  ]);
}
