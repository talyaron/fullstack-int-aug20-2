import React from 'react';
import './Card.css'

import {Button} from '@material-ui/core';



const Card = ({title, children}) => {
    return (
        <div className='card'>
            <h1>{title}</h1>
            {children}
            <Button color="primary">Hello World</Button>
        </div>
    )
}

export default Card
