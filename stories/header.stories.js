import React from 'react';

import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import createStore from '../src/store';

import Header from '../src/components/header/Header';

import DATA from "../src/mockedData/MOCKED_DATA";

let store = createStore({films: DATA.data});

storiesOf('Header', module)
  .add('Header with search and buttons', () => (
    <Provider store={store}>
      <Header />
    </Provider>
  ));
