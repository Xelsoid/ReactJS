import React from 'react';
import FilmsGalleryCard from './FilmsGalleryCard';
import DATA from "../../mockedData/MOCKED_DATA";

const film = DATA.data[1];

describe('FilmsGalleryCard', () => {
  it('renders correctly', () => {
    const component = shallow(
      <FilmsGalleryCard film={film} />
    );
    expect(component).toMatchSnapshot();
  });
});
