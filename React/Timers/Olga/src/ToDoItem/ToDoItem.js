import React, {useEffect, useState } from 'react'
import './ToDoItem.css';

function ToDoItem({id, completed, description, time}){
   
    const [currentStatus, setCurrentStatus] = useState(false)
    console.log(Date.parse(time)-Date.now())
    console.log(currentStatus)
    useEffect(()=>{
        setTimeout(()=>{setCurrentStatus(true)}, Date.parse(time)-Date.now())       
    },[])
  
   
    
    return (

        <div >
     <div className='description__wrapper'>
         <span className={currentStatus ? 'todo_item' : 'todo_item comleted'}>{description}</span> <span className='choosenTime'>{time}</span>
     </div>

        </div>
    )
}

export default ToDoItem;