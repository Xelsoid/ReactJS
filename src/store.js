import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware, { END } from 'redux-saga';
import allReducers from "./reducers/rootReducers";

import { fetchFilmsAsync, filmsSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export default (storeInitialState) => {
  const store = createStore(allReducers, storeInitialState, enhancer);

  sagaMiddleware.run(filmsSaga);
  store.runSaga = url => sagaMiddleware.run(fetchFilmsAsync, null, url);
  store.close = () => store.dispatch(END);

  return store;
};
