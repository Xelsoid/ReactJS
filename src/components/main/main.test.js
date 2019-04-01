import React from 'react';
import Main from './Main';
import DATA from "../../mockedData/MOCKED_DATA";

const requestedFilms = DATA;

it('renders correctly without film description', () => {
  const isDisplayFilmDescription = false;
  const component = shallow(
    <Main requestedFilms={requestedFilms} isDisplayFilmDescription={isDisplayFilmDescription} />
  );

  expect(component).toMatchSnapshot();
});

it('renders correctly with film description', () => {
  const isDisplayFilmDescription = true;
  const component = shallow(
    <Main requestedFilms={requestedFilms} isDisplayFilmDescription={isDisplayFilmDescription} />
  );

  expect(component).toMatchSnapshot();
});

