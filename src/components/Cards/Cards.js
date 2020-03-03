import React, {Fragment} from 'react';
import './Cards.scss';
import uuid from 'react-uuid';

import { Card } from '../Card/Card';


const Cards = props => {

const renderCards = () => (<ul className="second-list">
    {props.data.map( card => <Card key={uuid()} name={card.name} age={card.age} />)}
 </ul>)


return (
            
    <Fragment>
        {renderCards()}
      
        </Fragment>
    
        ) 



};

export { Cards };