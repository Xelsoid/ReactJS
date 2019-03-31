import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

export default class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      clickedBefore: 'notclicked',
    };
  }

  changeState = () => {
    this.setState({ clickedBefore: 'clicked' });
  };

  render() {
    const { btnClass, disabled, title } = this.props;
    let { clickedBefore } = this.state;
    return (
      <button
        className={`btn ${btnClass}`}
        disabled={disabled}
        onClick={this.changeState}
        type="button"
      >
        {title}
        {" "}
        {clickedBefore}
      </button>
    );
  }
}

Button.defaultProps = {
  btnClass: 'btn--primary',
  disabled: true,
  title: 'disabled'
};

Button.propTypes = {
  btnClass: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
};
