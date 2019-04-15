import PropTypes from "prop-types";
import React from 'react';

import SortResults from '../sortResults/SortResults';
import FilmsGallery from '../filmsGallery/FilmsGallery';
import FilmDescription from '../filmDescription/FilmDescription';

const Main = () => (
  <>
    <FilmDescription />
    <SortResults />
    <FilmsGallery />
  </>
);



Main.defaultProps = {
  requestedFilms: null,
};

Main.propTypes = {
  requestedFilms: PropTypes.instanceOf(Object),
};


export default Main;
