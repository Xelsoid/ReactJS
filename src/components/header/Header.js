import PropTypes from "prop-types";
import React from 'react';

import './header.scss';
import Logo from '../logo/Logo';
import Search from '../search/Search';
import Button from '../button/Button';

const Header = ({callback}) => (
  <header className="header">
    <Logo />
    <Search />
    <Button
      id='btnSearch'
      title='Search'
      disabled={false}
      btnClass='btn--primary'
      callback={callback}
    />
    <div>
      <span>Searched by:</span>
      <Button
        id='btnTitle'
        title='Title'
        disabled={false}
        btnClass='btn--primary'
        callback={null}
      />
      <Button
        id='btnGenre'
        title='Genre'
        disabled={false}
        btnClass='btn--primary'
        callback={null}
      />
    </div>
  </header>
);

Header.defaultProps = {
  callback: null,
};

Header.propTypes = {
  callback: PropTypes.func
};


export default Header;
