import React from 'react';
import FilmsGallery from './FilmsGallery';
import DATA from "../../mockedData/MOCKED_DATA";

const requestedFilms = DATA;

describe('FilmsGallery', () => {
  it('renders correctly', () => {
    const component = shallow(
      <FilmsGallery requestedFilms={requestedFilms} />
    );
    expect(component).toMatchSnapshot();
  });
});
