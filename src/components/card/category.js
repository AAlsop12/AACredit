import React, { Component } from 'react';

class Category extends Component {
    render() {
        const { className, header, value } = this.props;
        return (
            <div className='category'>
                <h4 className='category__header'>{header}</h4>
                <h4 className='category__value'>{value}</h4>
      
            </div>
        )
    }
}

export default Category;