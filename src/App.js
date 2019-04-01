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
    constructor() {
        super();
        this.state = {
            isDisplayFilmDescription: false,
        };
        this.changeState.bind(this);
    }

    changeState = () => {
        let { isDisplayFilmDescription } = this.state;
        this.setState({'isDisplayFilmDescription': !isDisplayFilmDescription})
    };

    render () {
        let { isDisplayFilmDescription } = this.state;
        return(
          <ErrorBoundary>
            <Header callback={this.changeState} />
            <Main requestedFilms={DATA} isDisplayFilmDescription={isDisplayFilmDescription} />
            <Footer />
          </ErrorBoundary>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('rootContainer'));
