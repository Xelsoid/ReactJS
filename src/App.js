import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import allReducers from './reducers';

import './styles/reset.css';
import './styles/styles.scss';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ErrorBoundary>
        <Header />
        <Main />
        <Footer />
      </ErrorBoundary>
    )
  }
}

const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('rootContainer'));
