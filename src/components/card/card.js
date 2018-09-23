import React, { Component } from 'react';
import Congratulations from './congratulations/congratulations';
import Category from './category/category';

class Card extends Component {

    render() {

        var responseArray = {
            creditscore: 706,
            creditAge: "16yr" ,
            inquiries: 2,
            bankruptcies: 0,
            creditUtilization: "32%",
            creditLimit: "49,300",

    };



         return(
            <div className='card'>
            <Congratulations />
            <Category className='card__score' header="Personal Credit Score" value={responseArray.creditscore}/>
            <Category className='card__age' header="Personal Credit Age" value={responseArray.creditAge}/>
            <Category className='card__inquiries' header="Personal Inquiries" value={responseArray.inquiries}/>
            <Category className='card__bankruptcies' header="Personal Bankruptcies" value={responseArray.bankruptcies}/>
            <Category className='card__utilization' header="Personal Credit Utilization" value={responseArray.creditUtilization}/>
            <Category className='card__limit' header="Personal Credit Limit" value={responseArray.creditLimit}/>
  
            </div>
        )
    }
}
export default Card;


