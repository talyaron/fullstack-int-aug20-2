import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import ToDoItem from './ToDoItem/ToDoItem';
import todosData from './todosData';
// import InputItems from './ToDoItem/InputItems';

function App() {
  const [todos, setTodosData] = useState(<todosData/>)
  

  const InputItems = () => {
    
    function handleSubmit(e) {
        e.preventDefault();
    
        const newItem = e.target.children.newItem.value;
        const time = e.target.children.time.value;
    
        

        setTodosData(todosData.push({
          id: todosData.length !==0 ? todosData.length: 0,
          description: newItem,
          time: time,
          completed: false

      })
      
      )
      
     
     

        console.log(todosData)
        let currentTime = Date.now()
        console.log(currentTime);
        let times = Date.parse(time)
        console.log(times)
        console.log(times - currentTime)
        
        
    
    }
   
    

return (
    <div>
      <h3>Task manager</h3>
        <form onSubmit={handleSubmit}>
          <input className='newItem' type='text' name='newItem' placeholder='New task'></input>
          <input className='time' type='datetime-local' name='time'></input>
          <button className='addBtn'>add task</button>
        </form>
        
    </div>
)
}


  const todoItems = todosData.map(item => {
    return (
      <ToDoItem 
      key={item.id}
      id={item.id}
      description={item.description}
      time={item.time}
      completed = {item.completed}/>
   
      
    )
  })
  console.log(<ToDoItem/>)
  return (
    <div className="App">
      <div className='appWrapper'>
      <InputItems />
      {todoItems}
      </div>
    </div>
  );
}

export default App;
