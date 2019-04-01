import PropTypes from "prop-types";
import React from 'react';

import SortResults from '../sortResults/SortResults';
import FilmsGallery from '../filmsGallery/FilmsGallery';
import FilmDescription from '../filmDescription/FilmDescription';

const Main = ({ requestedFilms, isDisplayFilmDescription }) => (
  <>
    {isDisplayFilmDescription ? <FilmDescription film={requestedFilms.data[1]} /> : null}
    <SortResults amountOfResults={requestedFilms.data.length} />
    <FilmsGallery requestedFilms={requestedFilms} />
  </>
);

Main.defaultProps = {
    requestedFilms: null,
    isDisplayFilmDescription: true
};

Main.propTypes = {
    requestedFilms: PropTypes.instanceOf(Object),
    isDisplayFilmDescription: PropTypes.bool
};


export default Main;
