import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/rootReducers";

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

export default (storeInitialState) => {
  const store = createStore(allReducers, storeInitialState, enhancer);
  store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  });
  return store;
};
