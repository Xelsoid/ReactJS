import PropTypes from "prop-types";
import React from 'react';

import './filmsGallery.scss';
import FilmsGalleryCard from './FilmsGalleryCard';

const FilmsGallery = ({ requestedFilms }) => {
    const {data} = requestedFilms;
    return (
      <div className="film-gallery">
        {data.map(film => (
          <div key={film.id} className="film-gallery--column">
            <FilmsGalleryCard film={film} />
          </div>
        ))}
      </div>
    )
};

FilmsGallery.defaultProps = {
    requestedFilms: null
};

FilmsGallery.propTypes = {
    requestedFilms: PropTypes.instanceOf(Object),
};

export default FilmsGallery;
