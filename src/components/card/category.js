import React, { Component } from 'react';

class Category extends Component {
    render() {
        const { className, header, value } = this.props;
        return (
            <div className='category'>
                <h3>{header} {value}</h3>
      
            </div>
        )
    }
}

export default Category;