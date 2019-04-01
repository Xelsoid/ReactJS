import React from 'react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const component = shallow(
      <Footer />
    );
    expect(component).toMatchSnapshot();
  });
});
