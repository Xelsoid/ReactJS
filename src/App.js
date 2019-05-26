import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import 'isomorphic-fetch';

import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import './styles/reset.css';
import './styles/styles.scss';

const App = (props) => {
  const {children} = props;
  return (
    <ErrorBoundary>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </ErrorBoundary>
  )
};

export default hot(module)(App);

App.propTypes = {
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  children: PropTypes.instanceOf(Object),
};
App.defaultProps = {
  context: null,
  children: null
};
