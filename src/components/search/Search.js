import React from 'react';

import './search.scss';
import PropTypes from "prop-types";

const Search = ({callback, value}) => {
  return (
    <div className="search-box__wrapper">
      <label className="search-box__search-label" htmlFor="searchFilm">
        <i aria-hidden="true" className="search-box__search-icon fa fa-search" />
      </label>
      <input
        className="search-box__search-input"
        id="searchFilm"
        placeholder="search"
        type="search"
        value={value}
        onChange={callback}
      />
    </div>
  );
};

Search.defaultProps = {
  callback: null,
  value: ''
};

Search.propTypes = {
  callback: PropTypes.func,
  value: PropTypes.string
};

export default Search;
