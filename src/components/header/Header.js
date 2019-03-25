import React from 'react';

import './header.scss';
import Logo from '../logo/Logo.js';
import Search from '../search/Search.js';
import Button from "../button/Button.js";

const searchProps = {
  placeHolder: 'Search films',
};
const titleBtn = {
  id: 'btnTitle',
  title: 'Title',
  disabled: false,
  className: 'btn btn--primary'
};
const genreBtn = {
  id: 'btnGenre',
  title: 'Genre',
  disabled: false,
  className: 'btn btn--primary'
};
const searchBtn = {
  id: 'btnSearch',
  title: 'Search',
  disabled: false,
  className: 'btn btn--primary'
};

const Header = () => (
  <header className="header">
    <Logo/>
    <Search searchProps={searchProps}/>
    <Button btnProps={searchBtn}/>
    <div>
      <span>Searched by:</span>
      <Button btnProps={titleBtn}/>
      <Button btnProps={genreBtn}/>
    </div>
  </header>
);

export default Header;
