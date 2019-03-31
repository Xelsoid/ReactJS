import React from 'react';

import './header.scss';
import Logo from '../logo/Logo';
import Search from '../search/Search';
import Button from '../button/Button';

const Header = () => (
  <header className="header">
    <Logo />
    <Search />
    <Button
      id='btnSearch'
      title='Search'
      disabled={false}
      btnClass='btn--primary'
    />
    <div>
      <span>Searched by:</span>
      <Button
        id='btnTitle'
        title='Title'
        disabled={false}
        btnClass='btn--primary'
      />
      <Button
        id='btnGenre'
        title='Genre'
        disabled={false}
        btnClass='btn--primary'
      />
    </div>
  </header>
);

export default Header;
