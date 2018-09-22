import React from 'react'
import Layout from './layout'
import {shallow} from 'enzyme'


it('renders without crashing', () => {
  shallow(<Layout />);
});
