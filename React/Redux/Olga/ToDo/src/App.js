import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './redux/actions/todoActions'


let newTaskName = '';

function App() {
  const dispatch = useDispatch();
  console.log(dispatch)

  const tasks = useSelector(state => state.todoReducer.todo);
  console.log(tasks)


  function handleAddTask() {
    if (newTaskName.length > 1) {
      dispatch(addTodo(newTaskName));
      newTaskName = '';
    }
  }

  function handleNewTask(e) {
    newTaskName = e.target.value;

  }
 function handleDeleteTask(e) {
  
dispatch(deleteTodo(e.target.id))
 }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleAddTask}>ADD TASK</button>
        <input type='text' placeholder='new task' onKeyUp={handleNewTask} />
        
        {tasks.map((task)=><p key={task.id}>{task.taskName}<button id={task.id} onClick={handleDeleteTask}>delete</button></p>)}
      </header>
    </div>
  );
}

export default App;
