import React from 'react';
import PropTypes from "prop-types";

import './filmsGalleryCard.scss';

const FilmsGalleryCard = ({film}) => {
  const {title, poster_path, release_date, genres} = film;

  return (
    <div className="film-gallery-card">
      <img alt={title} className="film-gallery-card__image" src={poster_path} />
      <div className="clearfix">
        <span className="film-gallery-card__name">{title}</span>
        <span className="film-gallery-card__year">{release_date}</span>
      </div>
      <small className="film-gallery-card__genre">{genres.map(genre => `${genre} `)}</small>
    </div>
  )
};

FilmsGalleryCard.defaultProps = {
  film: null
};

FilmsGalleryCard.propTypes = {
  film: PropTypes.instanceOf(Object),
};

export default FilmsGalleryCard;
