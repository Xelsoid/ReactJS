import React from 'react';

import Button from '../button/Button.js';
import './sortingoptions.scss';

const sortByBtn = {
  id: 'btnSortBy',
  title: 'Sort by',
  disabled: false,
  className: 'btn btn--primary'
};
const releaseDateBtn = {
  id: 'btnreleaseDate',
  title: 'Release Date',
  disabled: false,
  className: 'btn btn--primary'
};
const ratingBtn = {
  id: 'btnRating',
  title: 'Rating',
  disabled: false,
  className: 'btn btn--primary'
};

const SortingOptions = () => (
    <div className='main-sorting'>
      <div className='main-sorting__column'>
        <span>7 movies found</span>
      </div>
      <div className='main-sorting__column'>
        <Button btnProps={sortByBtn}/>
        <Button btnProps={releaseDateBtn}/>
        <Button btnProps={ratingBtn}/>
      </div>
    </div>
);

export default SortingOptions;