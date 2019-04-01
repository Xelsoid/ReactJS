import React from 'react';
import SortResults from './SortResults';

it('renders correctly', () => {
    const component = shallow (
      <SortResults />
    );

    expect(component).toMatchSnapshot();
});

