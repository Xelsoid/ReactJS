import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

export default class Button extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {btnClass, disabled, title, callback} = this.props;
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
  }
}

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
