// @flow
import React from 'react';

import './search.scss';

type SearchProps = {
  callback: Function;
  value: string;
};

const Search = (props: SearchProps) => {
  const {callback, value} = props;
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

export default Search;
