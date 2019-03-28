import React from 'react';

import './filmDescription.scss';

const FilmDescription = ({ film }) => (
  <div className = "film-description clearfix">
    <div className = "film-description__image-wrapper">
      <img alt = {film.title} className = "film-description__image" src = {film.poster_path} />
    </div>
    <div className = "film-description__info-wrapper">
      <h2 className = "film-description__header">{film.title}</h2>
      <strong className = "film-description__useful-info display-block">{film.tagline}</strong>
      <span>
Year
        {new Date(film.release_date).getFullYear()}
        {' '}
        {' '}
      </span>
      <span>
        {film.runtime}
        {' '}
min
      </span>
      <p className = "film-description__narration">
        {film.overview}
      </p>
    </div>
  </div>
);

export default FilmDescription;
