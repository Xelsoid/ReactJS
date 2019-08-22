import React from 'react';

import { storiesOf } from '@storybook/react';

import Logo from '../src/components/logo/Logo';

storiesOf('Logo', module)
  .add('Logo', () => (
    <Logo />
  ));
