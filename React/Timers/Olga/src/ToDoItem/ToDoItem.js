import React from 'react'
import './ToDoItem.css';

const ToDoItem = props => {
    console.log(props.completed)
    return (

        <div >
     <div className='description__wrapper'>
         <span className={props.completed ? 'todo_item' : 'todo_item comleted'}>{props.description}</span> <span>{props.time}</span>
     </div>
     <div className='input__wrapper'>
       
     </div>
        </div>
    )
}

export default ToDoItem;