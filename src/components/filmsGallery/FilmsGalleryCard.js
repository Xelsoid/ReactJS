import React from 'react';

import './filmsGalleryCard.scss';

const FilmsGalleryCard = ({ film }) => (
  <div className = "film-gallery-card">
    <img alt = {film.title} className = "film-gallery-card__image" src = {film.poster_path} />
    <div className = "clearfix">
      <span className = "film-gallery-card__name">{film.title}</span>
      <span className = "film-gallery-card__year">{film.release_date}</span>
    </div>
    <small className = "film-gallery-card__genre">{film.genres.map(genre => `${genre} `)}</small>
  </div>
);

export default FilmsGalleryCard;
