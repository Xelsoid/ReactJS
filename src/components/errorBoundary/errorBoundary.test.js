import React from 'react';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders correctly', () => {
    const component = shallow(
      <ErrorBoundary />
    );
    expect(component.state('hasError')).toEqual(false);
    expect(component).toMatchSnapshot();
  });

  it('renders correctly (Error)', () => {
    const component = shallow(
      <ErrorBoundary />
    );
    component.setState({hasError: true});
    expect(component.state('hasError')).toEqual(true);
    expect(component).toMatchSnapshot();
  });
});
