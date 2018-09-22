import React from 'react'
import Business from './business'
import {shallow} from 'enzyme'


it('renders without crashing', () => {
  shallow(<Business />);
});

it('should have props for className, header, and value', function () {
    const wrapper = shallow(<Category/>);
    expect(wrapper.props().className).to.be.defined;
  });