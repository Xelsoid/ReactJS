import React from 'react';

import './search.scss';

export default class Search extends React.Component {
  findFilm = () => {
    console.log('find film');
  };

  render() {
    return(
      <div className="search-box__wrapper">
        <label className="search-box__search-label" htmlFor="search">
          <i className="search-box__search-icon fa fa-search" aria-hidden="true"/>
        </label>
        <input
            className="search-box__search-input"
            id="search"
            type="search"
            placeholder="search"
            onClick={this.findFilm}
        />
      </div>
    )
  }
}