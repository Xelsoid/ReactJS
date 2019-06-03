// @flow
import React from 'react';

import injectSheet from "react-jss";

type SearchProps = {
  callback: Function;
  value: string;
  classes: Object;
};

const styles = {
  searchBoxWrapper: {
    display: 'inline-block',
    backgroundColor: 'white',
    boxShadow: '4px 4px 14px grey',
    borderRadius: '16px',
    border: 'solid black 2px',
    '&:hover, &:focus': {
      boxShadow: '0 0 20px grey inset'
    }
  },
  searchBoxSearchLabel: {
    display: 'inline-block',
    padding: '10px',
  },
  searchBoxSearchIcon: {
    '&:hover, &:focus': {
      transform: 'scale(1.1)',
    }
  },
  searchBoxSearchInput: {
    padding: '10px',
    border: 'none',
    backgroundColor: 'transparent',
  }
};

const Search = (props: SearchProps) => {
  const {callback, value, classes} = props;
  return (
    <div className={classes.searchBoxWrapper}>
      <label className={classes.searchBoxSearchLabel} htmlFor="searchFilm">
        <i aria-hidden="true" className={`${classes.searchBoxSearchIcon} fa fa-search`} />
      </label>
      <input
        className={classes.searchBoxSearchInput}
        id="searchFilm"
        placeholder="search"
        type="search"
        value={value}
        onChange={callback}
      />
    </div>
  );
};

export default injectSheet(styles)(Search);
