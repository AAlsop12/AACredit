import React from 'react'
import Loan from './loan'
import {shallow} from 'enzyme'


it('renders without crashing', () => {
  shallow(<Loan />);
});
