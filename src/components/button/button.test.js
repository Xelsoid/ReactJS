import React from 'react';
import Button from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    const component = shallow(
      <Button
        id='default'
        title='Default'
        disabled={false}
        btnClass='btn--primary'
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('clicked', () => {
    const component = shallow(
      <Button
        id='default'
        title='Default'
        disabled={false}
        btnClass='btn--primary'
      />
    );
    component.simulate('click');
    expect(component.text()).toMatch('Default clicked')
  });
});
