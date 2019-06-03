// @flow

import React from 'react';

import './button.scss';
import injectSheet from "react-jss";

type ButtonProps = {
  disabled: boolean;
  id: string;
  title: string;
  callback: Function;
  classes: Object
}

const styles = {
  btn: {
  padding: '10px 20px',
  margin: '5px',
  borderRadius: '16px',
  boxShadow: '4px 4px 14px grey',
  border: 'solid black 2px',
  backgroundColor: 'white',
    '&:hover': {
      boxShadow: '0 0 20px grey inset'
    },
    '&:disabled': {
      backgroundColor: 'lightgray',
      '&:hover': {
        boxShadow: '4px 4px 14px grey'
      }
    }
  },
};

const Button = (props: ButtonProps) => {
  const {disabled, id, title, callback, classes} = props;
  return (
    <button
      className={classes.btn}
      id={id}
      disabled={disabled}
      onClick={callback}
      type="button"
    >
      {title}
    </button>
  );
};

export default injectSheet(styles)(Button);
