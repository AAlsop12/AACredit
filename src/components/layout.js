import React, { Component } from 'react';

import Navbar from './headernavbar/navbar';
import Account from './account/account';



let list = ["first quote", "second quote", "third quote"]

class Layout extends Component {
  

  
  render() {
    return (
      <div className='layout'>
        <Navbar />
        <Account />
        {this.props.children}
        {/* {Quotes(list)} */}
      </div>
    );
  }
}


export default Layout;
