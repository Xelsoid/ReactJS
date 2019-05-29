import React from 'react';

import { storiesOf } from '@storybook/react';
import createStore from '../src/store';

import FilmDescription  from '../src/components/filmDescription/FilmDescription';
import DATA from "../src/mockedData/MOCKED_DATA";
import {Provider} from "react-redux";

let store = createStore({selectedFilm: DATA.data[0]});

storiesOf('Film description', module)
  .add('Film description', () => (
    <Provider store={store}>
      <FilmDescription />
    </Provider>
));
