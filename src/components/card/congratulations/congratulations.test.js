import React from 'react'
import Congratulations from './congratulations'
import {shallow} from 'enzyme'


it('renders without crashing', () => {
  shallow(<Congratulations />);
});
