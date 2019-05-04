import { takeLatest, call, put, all } from 'redux-saga/effects';
import { fetchedDataSuccess } from "./actions/actions";
import { ACTIONS } from './helpers/constants';

export function* fetchFilmsAsync() {
  const response = yield call(fetch, `https://reactjs-cdp.herokuapp.com/movies?search=&searchBy=`);
  const films = yield response.json();

  yield put(fetchedDataSuccess(films));
}

export function* watchFetchFilms() {
  yield takeLatest(ACTIONS.FETCH_DATA, fetchFilmsAsync);
}

export function* filmsSaga() {
  yield all([
    fetchFilmsAsync(),
    watchFetchFilms(),
  ]);
}