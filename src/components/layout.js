import React, { Component } from 'react';

import Navbar from './headernavbar/navbar';
import Account from './account/account';

class Layout extends Component {
  

  
  render() {
    return (
      <div className='layout'>
        <Navbar />
        <Account />
        {this.props.children}
      </div>
    );
  }
}


export default Layout;
