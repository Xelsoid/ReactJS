import React from 'react';

import './filmsgallery.scss';
import FilmCard from './FilmsGalleryCard';

const FilmsGallery = () => (
    <div className='film-gallery'>
      <div className='film-gallery--column'>
        <FilmCard/>
      </div>
      <div className='film-gallery--column'>
        <FilmCard/>
      </div>
      <div className='film-gallery--column'>
        <FilmCard/>
      </div>
      <div className='film-gallery--column'>
        <FilmCard/>
      </div>
      <div className='film-gallery--column'>
        <FilmCard/>
      </div>
      <div className='film-gallery--column'>
        <FilmCard/>
      </div>
    </div>
);

export default FilmsGallery;