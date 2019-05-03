import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import configureStore from './store';

import App from './App';

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

ReactDOM.hydrate(<App Router={BrowserRouter} store={configureStore(persistedState)} />, document.getElementById('rootContainer'));
