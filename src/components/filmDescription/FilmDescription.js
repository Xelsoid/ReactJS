import React from 'react';
import PropTypes from "prop-types";

import './filmDescription.scss';

const FilmDescription = ({ film }) => {
    const {poster_path, title, tagline, release_date, runtime, overview} = film;
    return(
      <div className="film-description clearfix">
        <div className="film-description__image-wrapper">
          <img alt={title} className="film-description__image" src={poster_path} />
        </div>
        <div className="film-description__info-wrapper">
          <h2 className="film-description__header">{title}</h2>
          <strong className="film-description__useful-info display-block">{tagline}</strong>
          <span>
            Year:
            {' '}
            {new Date(release_date).getFullYear()}
            {' '}
          </span>
          <span>
            {runtime}
            {' '}
            min
          </span>
          <p className="film-description__narration">
            {overview}
          </p>
        </div>
      </div>
);};

FilmDescription.defaultProps = {
    film:  {},
};

FilmDescription.propTypes = {
    film:  PropTypes.instanceOf(Object),
};

export default FilmDescription;
