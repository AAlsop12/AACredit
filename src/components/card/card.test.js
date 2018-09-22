import React from 'react'
import Card from './card'
import {shallow} from 'enzyme'


it('renders without crashing', () => {
  shallow(<Card />);
});
