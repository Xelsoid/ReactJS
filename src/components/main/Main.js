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

export default Main;
