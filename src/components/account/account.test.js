import React from 'react'
import Account from './account'
import {shallow} from 'enzyme'


it('renders without crashing', () => {
  shallow(<Account />);
});
