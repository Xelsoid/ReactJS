import React from 'react';

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
