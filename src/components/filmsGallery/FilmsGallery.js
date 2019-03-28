import React from 'react';

import './filmsGallery.scss';
import FilmsGalleryCard from './FilmsGalleryCard';

const FilmsGallery = ({ requestedFilms }) => (
  <div className="film-gallery">
    {requestedFilms.data.map(film => (
      <div key={film.id} className="film-gallery--column">
        <FilmsGalleryCard film={film} />
      </div>
    ))
  }
  </div>
);

export default FilmsGallery;
