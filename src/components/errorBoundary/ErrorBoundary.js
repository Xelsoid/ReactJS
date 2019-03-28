import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(`${error} : ${errorInfo}`);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>Все поломалось! Но мы починим! Но это не точно!</div>
      );
    }
    return this.props.children;
  }
}
