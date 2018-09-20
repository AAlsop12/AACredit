import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';





class Account extends Component {

    componentDidMount() {
        


        const navbarLinks = [
            {
                _id: 0,
                title: 'Credit Card',
                active: false,
                path: '/card'
            },
            {
                _id: 1,
                title: 'Term Loan',
                active: false,
                path: './loan'
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