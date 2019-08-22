import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../src/components/button/Button';

storiesOf('Button', module)
  .add('Button', () => (
    <Button
      id='btnGenre'
      title='Genre'
      disabled={false}
      btnClass='btn--primary'
      callback={() => {console.log('clicked')}}
    />
  ))
  .add('Button disabled', () => (
    <Button
      id='btnTitle'
      title='Title'
      disabled
      btnClass='btn--primary'
      callback={() => {console.log('clicked')}}
    />
  ));
