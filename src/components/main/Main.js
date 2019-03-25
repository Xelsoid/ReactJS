import React from 'react';

import SortingOptions from '../sortingOptions/sortingOptions.js';
import FilmsGallery from '../filmsGallery/FilmsGallery.js';
import FilmDescription from "../filmDescription/filmDescription.js";

let displayFilmDescription = true;

export default class Main extends React.Component {
  render() {
    return(
      <>
        {displayFilmDescription ?
          <FilmDescription/> :
          <></>
        }
        <SortingOptions/>
        <FilmsGallery/>
      </>
    )
  }
}
