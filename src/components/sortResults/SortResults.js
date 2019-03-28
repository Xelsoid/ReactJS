import React from 'react';

import Button from '../button/Button';
import './sortResults.scss';

const releaseDateBtn = {
  id: 'btnreleaseDate',
  title: 'Release Date',
  disabled: false,
  className: 'btn btn--primary',
};
const ratingBtn = {
  id: 'btnRating',
  title: 'Rating',
  disabled: false,
  className: 'btn btn--primary',
};

const SortResults = ({ amountOfResults }) => (
  <div className="main-sorting">
    <div className="main-sorting__column">
      <span>
        {amountOfResults}
        {' '}
movies found
      </span>
    </div>
    <div className="main-sorting__column">
      <span>Sort by:</span>
      <Button btnProps={releaseDateBtn} />
      <Button btnProps={ratingBtn} />
    </div>
  </div>
);

export default SortResults;
