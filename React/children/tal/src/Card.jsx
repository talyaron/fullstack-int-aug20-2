import React from 'react'
import './Card.css';

const Card = props => {
    return (
        <div className='card'>
            <h2>This is a Card</h2>
            {props.children}
        </div>
    )
}

export default Card
