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

      }))
      
        console.log(todosData)
        let currentTime = Date.now()
        console.log(currentTime);
        let times = Date.parse(time)
        console.log(times)
        console.log(times - currentTime)
        
        // e.target.reset();
    
    }
   
return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type='text' name='newItem'></input>
          <input type='datetime-local' name='time'></input>
          <button>add</button>
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
      // handleChange ={()=> {getChange(item.id)}}/>
      
    )
  })
  console.log(<ToDoItem/>)
  return (
    <div className="App">
      <InputItems />
      {todoItems}
       
    </div>
  );
}

export default App;
