import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import 'isomorphic-fetch';

import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import './styles/reset.css';
import './styles/styles.scss';

const App = ({ Router, location, context, store }) => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router location={location} context={context}>
          <Header />
          <Main />
          <Footer />
        </Router>
      </ErrorBoundary>
    </Provider>
  )
};

export default hot(module)(App);

App.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  store: PropTypes.instanceOf(Object),
};
App.defaultProps = {
  location: null,
  context: null,
  store: {}
};
