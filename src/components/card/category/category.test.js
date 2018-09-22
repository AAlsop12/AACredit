import React from 'react'
import Category from './category'
import {shallow} from 'enzyme'


it('renders without crashing', () => {
  shallow(<Category />);
});

it('should have props for className, header, and value', function () {
    const wrapper = shallow(<Category/>);
    expect(wrapper.props().className).to.be.defined;
    expect(wrapper.props().header).to.be.defined;
    expect(wrapper.props().value).to.be.defined;
  });
