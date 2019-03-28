import React from 'react';

import './search.scss';

export default class Search extends React.Component {
  findFilm = () => {
    console.log('find film');
  };

  render() {
    return (
      <div className="search-box__wrapper">
        <label className="search-box__search-label" htmlFor="search">
          <i aria-hidden="true" className="search-box__search-icon fa fa-search" />
        </label>
        <input
          className="search-box__search-input"
          id="search"
          onClick={this.findFilm}
          placeholder="search"
          type="search"
        />
      </div>
    );
  }
}
