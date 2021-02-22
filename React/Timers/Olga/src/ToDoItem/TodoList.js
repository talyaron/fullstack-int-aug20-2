import React from 'react'
import ToDoItem from './ToDoItem'

function TodoList({todos}) {
    console.log(todos)
    return (
       <ul> {todos.map(item => 
      <ToDoItem/>)}
      
      </ul>
       
        
  )
  }

  export default TodoList