import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({btnClass, disabled, id, title, callback}) => {
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

Button.defaultProps = {
  btnClass: 'btn--primary',
  disabled: true,
  title: 'disabled',
  callback: null,
  id: '',
};

Button.propTypes = {
  btnClass: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  callback: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Button;
