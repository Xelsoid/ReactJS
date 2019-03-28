import React from 'react';

import SortResults from '../sortResults/SortResults';
import FilmsGallery from '../filmsGallery/FilmsGallery';
import FilmDescription from '../filmDescription/FilmDescription';

const isDisplayFilmDescription = true;

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <>
        {
          isDisplayFilmDescription
            ? <FilmDescription film = {this.props.requestedFilms.data[1]} />
            : null
        }
        <SortResults amountOfResults = {this.props.requestedFilms.data.length} />
        <FilmsGallery requestedFilms = {this.props.requestedFilms} />
      </>
    );
  }
}
