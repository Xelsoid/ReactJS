import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './App';
import configureStore from './store';

ReactDOM.hydrate(
  <App
    Router={BrowserRouter}
    store={configureStore(window.PRELOADED_STATE)}
  />,
  document.getElementById('rootContainer')
);
