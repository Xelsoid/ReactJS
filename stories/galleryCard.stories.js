import React from 'react';

import { storiesOf } from '@storybook/react';

import FilmsGalleryCard  from '../src/components/filmsGallery/FilmsGalleryCard';
import DATA from "../src/mockedData/MOCKED_DATA";

let film = DATA.data[0];

storiesOf('Gallery card', module)
  .add('Gallery card', () => (
    <FilmsGalleryCard film={film} />
  ));
