import React from 'react';

import { storiesOf } from '@storybook/react';

import NotFound from '../src/components/notFound/NotFound';

storiesOf('Not Found', module)
  .add('Not Found', () => <NotFound />);
