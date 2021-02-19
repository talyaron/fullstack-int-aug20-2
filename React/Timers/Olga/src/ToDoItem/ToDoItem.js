import React from 'react'

const ToDoItem = props => {
    return (

        <div className='todo__item'>
     <div className='description__wrapper'>
         <p>{props.description}</p>
     </div>
     <div className='input__wrapper'>
         {/* <input type='checkbox' defaultCompleted={props.completed} onChange={props.handleChange}></input> */}
     </div>
        </div>
    )
}

export default ToDoItem;