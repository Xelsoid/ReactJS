// @flow
import React from 'react';
import injectSheet from 'react-jss';

type LogoProps = {
  classes: {
    logo: {},
    logo__link: {}
  };
}

const styles = {
  logo: {
    fontSize: '32px',
  },
  logo__link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
      color: 'white'
    }
  }
};

const Logo = (props: LogoProps) => {
  const {classes} = props;
  return (
    <h1 className={classes.logo}>
      <a className={classes.logo__link} href="http:/google.com">Movie Finder</a>
    </h1>
)};

export default injectSheet(styles)(Logo);
