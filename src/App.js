// @flow
import React from 'react';
import { hot } from 'react-hot-loader';
import 'isomorphic-fetch';

import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import './styles/reset.css';
import './styles/styles.scss';

type AppProps = {
  children: Object;
}

const App = (props: AppProps) => {
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
