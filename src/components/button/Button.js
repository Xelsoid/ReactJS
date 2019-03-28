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
    return (
      <button
        className={this.props.btnProps.className}
        disabled={this.props.btnProps.disabled}
        onClick={this.changeState}
        type="button"
      >
        {this.props.btnProps.title}
      </button>
    );
  }
}
