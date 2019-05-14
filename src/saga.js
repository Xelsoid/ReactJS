import { takeLatest, call, put, all } from 'redux-saga/effects';
import { fetchedDataSuccess } from "./actions/actions";
import { ACTIONS } from './helpers/constants';

export function* fetchFilmsAsync(action, context) {
  const baseUrl = 'https://reactjs-cdp.herokuapp.com';
  let url;

  if (action && action.payload.search) {
    url = `${baseUrl}/movies${action.payload.search}`;
  } else if (context) {
    url = `${baseUrl}${context}`;
  } else {
    url = `${baseUrl}/movies`;
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
