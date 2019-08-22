import React from 'react';

import { storiesOf } from '@storybook/react';

import Search from '../src/components/search/Search';

storiesOf('Search', module)
  .add('Search', () => (
    <Search />
  ));
