import React from 'react'

const ToDoItem = props => {
    console.log(props)
    return (

        <div className='todo__item'>
     <div className='description__wrapper'>
         <span >{props.description}</span> <span>{props.time}</span>
     </div>
     <div className='input__wrapper'>
         {/* <input type='checkbox' defaultCompleted={props.completed} onChange={props.handleChange}></input> */}
     </div>
        </div>
    )
}

export default ToDoItem;