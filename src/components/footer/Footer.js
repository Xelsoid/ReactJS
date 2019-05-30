// @flow
import React from 'react';
import injectSheet from 'react-jss';

type FooterProps = {
  classes: {
    footer: {}
  };
}

const styles = {
  footer: {
    backgroundColor: 'black',
    padding: '20px 10px',
    color: 'white',
    textAlign: 'center',
  }
};

const Footer = (props: FooterProps) => {
  const {classes} = props;
  return (
    <footer className={classes.footer}>
      <span>&copy; All rights reserved</span>
    </footer>
  )
};

export default injectSheet(styles)(Footer);
