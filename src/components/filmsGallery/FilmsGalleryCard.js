import React from 'react';

import './filmsgallerycard.scss';

const FilmsGalleryCard = () => (
    <div className='film-gallery-card'>
      <img className='film-gallery-card__image' src='https://via.placeholder.com/150x210'/>
      <div className='clearfix'>
        <span className='film-gallery-card__name'>Film name</span>
        <span className='film-gallery-card__year'>Year</span>
      </div>
      <small className='film-gallery-card__genre'>Genre</small>
    </div>
);

export default FilmsGalleryCard;