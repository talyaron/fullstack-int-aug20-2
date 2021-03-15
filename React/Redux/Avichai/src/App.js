import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './redux/actions/todoActions'

function App() {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.todoReducer.todo)


  const handleAddTask = (e) => {
    e.preventDefault()
    const todoMsg = e.target.children.todo.value
    dispatch(addTodo(todoMsg))
  }

  return (
    <div className="App">
      <h1>hello</h1>
      <form onSubmit={handleAddTask}>
        <input type='text' name='todo' />
        <button>Add task</button>
      </form>
      {tasks.map(task => {
        return (<p key={task.id}>ID:{task.id}, MSG:{task.todoMsg}</p>)
      })}
    </div >
  );
}

export default App;
