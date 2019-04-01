import React from 'react';
import SortResults from './SortResults';

describe('SortResults', () => {
  it('renders correctly', () => {
    const component = shallow(
      <SortResults />
    );
    expect(component).toMatchSnapshot();
  });
});
