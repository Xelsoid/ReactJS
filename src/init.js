import React from 'react';
import ReactDOM from 'react-dom';

import ErrorBoundary from './components/errorBoundary/ErrorBoundary.js';
import Header from './components/header/Header.js';
import Main from './components/main/Main.js';
import Footer from './components/footer/Footer.js';

import './styles/reset.css';
import './styles/styles.scss';

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Header/>
        <Main/>
        <Footer/>
      </ErrorBoundary>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("rootContainer"));