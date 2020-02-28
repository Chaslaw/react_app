import React, {Fragment} from 'react';
import './Cards.scss';

import { Card } from '../Card/Card';


const Cards = props => {

const renderCards = () => (<ul className="second-list">
    {props.data.map( card => <Card name={card.name} age={card.age} />)}
 </ul>)



    


return (
            
    <Fragment>
        {renderCards()}
      
        </Fragment>
    
        ) 



};

export { Cards };