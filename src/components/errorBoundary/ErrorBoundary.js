import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(`${error} : ${errorInfo}`); // eslint-disable-line no-console
    this.setState({hasError: true});
  }

  render() {
    const {children} = this.props;
    const {hasError} = this.state;
    if (hasError) {
      return (
        <div>Все поломалось! Но мы починим! Но это не точно!</div>
      );
    }
    return children;
  }
}
ErrorBoundary.defaultProps = {
  children: null
};

ErrorBoundary.propTypes = {
  children: PropTypes.instanceOf(Object),
};
