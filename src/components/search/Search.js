import React from 'react';

import './search.scss';

export default class Search extends React.Component {
  findFilm = () => {
    console.log('find film'); // eslint-disable-line no-console
  };

  render() {
    return (
      <div className="search-box__wrapper">
        <label className="search-box__search-label" htmlFor="searchFilm">
          <i aria-hidden="true" className="search-box__search-icon fa fa-search" />
        </label>
        <input
          className="search-box__search-input"
          id="searchFilm"
          onClick={this.findFilm}
          placeholder="search"
          type="search"
        />
      </div>
    );
  }
}
