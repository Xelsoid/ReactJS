import React from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import './styles/reset.css';
import './styles/styles.scss';

import DATA from './mockedData/MOCKED_DATA';

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Header />
        <Main requestedFilms = {DATA} />
        <Footer />
      </ErrorBoundary>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('rootContainer'));
