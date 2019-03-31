import PropTypes from "prop-types";
import React from 'react';

import Button from '../button/Button';
import './sortResults.scss';

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
      <Button
        id='btnreleaseDate'
        title='Release Date'
        disabled={false}
        btnClass='btn--primary'
      />
      <Button
        id='btnRating'
        title='Rating'
        disabled={false}
        btnClass='btn--primary'
      />
    </div>
  </div>
);

SortResults.defaultProps = {
    amountOfResults: 0
};

SortResults.propTypes = {
    amountOfResults: PropTypes.number,
};

export default SortResults;
