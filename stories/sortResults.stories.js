import React from 'react';

import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import createStore from '../src/store';

import SortResults from '../src/components/sortResults/SortResults';
import FilmsGallery  from '../src/components/filmsGallery/FilmsGallery';
import DATA from "../src/mockedData/MOCKED_DATA";

let store = createStore({films: DATA.data});

storiesOf('Sort Results', module)
  .add('Sort Results', () => (
    <Provider store={store}>
      <SortResults />
    </Provider>
  ))
  .add('Sort Results + Gallery', () => (
    <Provider store={store}>
      <SortResults />
      <FilmsGallery />
    </Provider>
  ));
