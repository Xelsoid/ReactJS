// @flow

import React from 'react';

type ErrorBoundaryProps = {
  children: Object;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Object, errorInfo: Object) {
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
