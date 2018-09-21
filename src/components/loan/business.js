import React, { Component } from 'react';

// onClick = ' '

class Business extends Component {
    render() {
        return (
            <div className='loan-wrapper'>
                <p className='loan-wrapper__business'>Add Your Business</p>
                <div className='loan-wrapper__icon'>
                    <i class="far fa-building"></i>  
                </div>
                <h2 className='loan-wrapper__options'>For term loan options, add your business</h2>
                <a className='loan-wrapper__plus' onClick=" "><i class="fas fa-plus-circle"></i></a>
                <h2 className='loan-wrapper__small'>Add</h2>

            </div>

        )
    }
}

export default Business;