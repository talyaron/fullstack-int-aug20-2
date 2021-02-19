import logo from './logo.svg';
import './App.css';
import ToDoItem from './ToDoItem/ToDoItem';
import todosData from './todosData';
import InputItems from './ToDoItem/InputItems';

function App() {
  const getChange = id => {
    console.log('the value has changed', id)
  }

  
  const todoItems = todosData.map(item => {
    return (
      <ToDoItem 
      key={item.id}
      description={item.description}
      time={item.time}
      completed = {item.completed}
      handleChange ={()=> {getChange(item.id)}}/>
      
    )
  })
  return (
    <div className="App">
      <InputItems />
      {todoItems}
       
    </div>
  );
}

export default App;
