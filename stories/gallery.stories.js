import React from 'react';

import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import createStore from '../src/store';

import FilmsGallery  from '../src/components/filmsGallery/FilmsGallery';
import DATA from "../src/mockedData/MOCKED_DATA";

let store = createStore({films: DATA.data});

storiesOf('Gallery', module)
  .add('Gallery with films', () => (
    <Provider store={store}>
      <FilmsGallery />
    </Provider>
  ));
