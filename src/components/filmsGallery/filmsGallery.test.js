import React from 'react';
import { FilmsGallery } from './FilmsGallery';
import requestedFilms from '../../mockedData/MOCKED_DATA';


describe('FilmsGallery', () => {
  it('renders correctly', () => {
    const component = shallow(
      <FilmsGallery movies={requestedFilms.data} chooseFilm={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });
});
