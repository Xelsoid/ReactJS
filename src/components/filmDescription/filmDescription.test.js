import React from 'react';
import FilmDescription from './FilmDescription';

describe('FilmDescription', () => {
  it('renders correctly', () => {
    const component = shallow(
      <FilmDescription />
    );
    expect(component).toMatchSnapshot();
  });
});
