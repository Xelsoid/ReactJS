import React from 'react';
import Footer from './Footer';

it('renders correctly', () => {
    const component = shallow (
      <Footer />
    );
    expect(component).toMatchSnapshot();
});

