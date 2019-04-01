import React from 'react';
import Search from './Search';

it('renders correctly', () => {
    const component = shallow (
      <Search />
    );

    expect(component).toMatchSnapshot();
});

