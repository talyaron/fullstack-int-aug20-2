import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from './redux/actions/todoActions'
import { addThunk, deleteThunk } from './redux/actions/thunkActions'

function App() {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.todoReducer.todo)

  const thunk = useSelector(state => state.testingThunk.thunk)
  console.log(thunk)


  const handleAddThunk = async () => {
    dispatch(addThunk('BLABLA'))
  }
  const handleDeleteThunk = (id) => {
    dispatch(deleteThunk(id))
  }
  const handleAddTask = (e) => {
    e.preventDefault()
    const todoMsg = e.target.children.todo.value
    dispatch(addTodo(todoMsg))
  }
  const handleDeleteTask = (id) => {
    console.log(id)
    dispatch(deleteTodo(id))
  }
  return (
    <div className="App">
      <h1>hello</h1>
      <form onSubmit={handleAddTask}>
        <input type='text' name='todo' />
        <button>Add task</button>
      </form>

      <button onClick={handleAddThunk}>Add thunk</button>
      <div>
        <h2>Thunk Testing</h2>
        {thunk.map(thunk => {
          return (<p key={thunk.id} >ID: {thunk.id}{thunk.msg}
            <button onClick={() => handleDeleteThunk(thunk.id)}>Delete Thunk</button>
          </p>)
        })}
      </div>
      <div>
        <h2>Tasks</h2>
        {
          tasks.map(task => {
            return (
              <p key={task.id}>ID:{task.id}, MSG:{task.todoMsg}
                <button key={task.id} onClick={() => handleDeleteTask(task.id)}>Delete this task</button>
              </p>
            )
          })
        }
      </div>

    </div >
  );
}

export default App;
