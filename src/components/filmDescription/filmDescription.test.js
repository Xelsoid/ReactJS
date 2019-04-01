import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilmDescription from './FilmDescription';

enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
    const component = shallow (
      <FilmDescription />
    );
    expect(component).toMatchSnapshot();
});

