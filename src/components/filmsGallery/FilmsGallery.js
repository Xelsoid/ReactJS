import React from 'react';

import './filmsGallery.scss';
import FilmsGalleryCard from './FilmsGalleryCard';

const FilmsGallery = ({requestedFilms}) => <div className="film-gallery">
  {requestedFilms.data.map((film) => (
      <div className="film-gallery--column" key={film.id}>
        <FilmsGalleryCard film={film}/>
      </div>
    ))
  }
</div>;

export default FilmsGallery;