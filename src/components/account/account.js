import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';





class Account extends Component {

    componentDidMount() {
        


        const navbarLinks = [
            {
                _id: 0,
                title: 'Credit Card',
                active: true,
                path: '/card',
                icon: <i className="fas fa-credit-card"></i>
            },
            {
                _id: 1,
                title: 'Term Loan',
                active: false,
                path: './loan',
                icon: <i className="fas fa-dollar-sign"></i>
            },

   



            

        ]

        this.props.setNavbarLinks(navbarLinks);
    }


    render() {
        return (
            <div className='allTabs'>
               
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { navbarLinks } = state.headerNavbar;
    return { navbarLinks }
}

Account = connect(mapStateToProps, actions)(Account);

export default Account;