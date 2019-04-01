import React from 'react';
import Logo from './Logo';

it('renders correctly', () => {
  const component = shallow(
    <Logo />
  );
  expect(component).toMatchSnapshot();
});

