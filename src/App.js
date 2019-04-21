import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import store from './store'

import './styles/reset.css';
import './styles/styles.scss';

const App = () => {
  return (
    <ErrorBoundary>
      <Header />
      <Main />
      <Footer />
    </ErrorBoundary>
  )
};

ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('rootContainer'));
