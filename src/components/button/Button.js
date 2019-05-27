// @flow

import React from 'react';

import './button.scss';

type ButtonProps = {
  btnClass: string;
  disabled: boolean;
  id: string;
  title: string;
  callback: Function;
}

const Button = (props: ButtonProps) => {
  const {btnClass, disabled, id, title, callback} = props;
  return (
    <button
      className={`btn ${btnClass}`}
      id={id}
      disabled={disabled}
      onClick={callback}
      type="button"
    >
      {title}
    </button>
  );
};

export default Button;
