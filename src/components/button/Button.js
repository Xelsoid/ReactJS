import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({btnClass, disabled, title, callback}) => {
  return (
    <button
      className={`btn ${btnClass}`}
      id={title}
      disabled={disabled}
      onClick={callback}
      type="button"
    >
      {title}
    </button>
  );
};

Button.defaultProps = {
  btnClass: 'btn--primary',
  disabled: true,
  title: 'disabled',
  callback: null
};

Button.propTypes = {
  btnClass: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  callback: PropTypes.func
};

export default Button;
