import React, { Component } from 'react';

class Congratulations extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className='card__congratulations'>
                <h3> Congratulations!   You qualify for a credit card!</h3>
                <h4>A credit card is a great option for you right now.</h4>
                <p>Here's what issuers are looking for:</p>
      
            </div>
        )
    }
}

export default Congratulations;