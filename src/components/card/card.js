import React, { Component } from 'react';
import Congratulations from './congratulations';
import Category from './category';

class Card extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className='card'>
                <Congratulations />
                <h3 className='card__header'>Here's what issuers are looking for:</h3>
                <Category className='card__score' header="Personal Credit Score" value='706'/>
                <Category className='card__age' header="Personal Credit Age" value='16yr'/>
                <Category className='card__inquiries' header="Personal Inquiries" value='2'/>
                <Category className='card__bankruptcies' header="Personal Bankruptcies" value='0'/>
                <Category className='card__utilization' header="Personal Credit Utilization" value='32%'/>
                <Category className='card__limit' header="Personal Credit Limit" value='49,300'/>
      
            </div>
        )
    }
}

export default Card;