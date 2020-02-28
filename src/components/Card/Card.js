import React from 'react';
import uuid from 'react-uuid';

const Card = ({name, age}) => <li key={uuid()}> {name} {age} </li>

export { Card };