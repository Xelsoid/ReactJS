import React from 'react';

import './header.scss';
import Logo from '../logo/Logo';
import Search from '../search/Search';
import Button from '../button/Button';

const titleBtn = {
  id: 'btnTitle',
  title: 'Title',
  disabled: false,
  className: 'btn btn--primary',
};
const genreBtn = {
  id: 'btnGenre',
  title: 'Genre',
  disabled: false,
  className: 'btn btn--primary',
};
const searchBtn = {
  id: 'btnSearch',
  title: 'Search',
  disabled: false,
  className: 'btn btn--primary',
};

const Header = () => (
  <header className = "header">
    <Logo />
    <Search />
    <Button btnProps = {searchBtn} />
    <div>
      <span>Searched by:</span>
      <Button btnProps = {titleBtn} />
      <Button btnProps = {genreBtn} />
    </div>
  </header>
);

export default Header;
