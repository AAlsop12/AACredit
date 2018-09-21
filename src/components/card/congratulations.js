import React, { Component } from 'react';

class Congratulations extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className='card__congratulations'>
                <h2 className='card__congratulations-interjection'> Congratulations! <br></br>  You qualify for a credit card!</h2>
                <h3 className='card__congratulations-explanation'>A credit card is a great option for you right now.</h3>
      
            </div>
        )
    }
}

export default Congratulations;