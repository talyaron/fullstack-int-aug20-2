import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addSymbol } from './redux/actions/windowActon'
import Numbers from './Numbers';
import Operators from './Operators';
import InputForm from './InputForm';


function App() {


  const dispatch = useDispatch();

  const handleOnClickNum =(e) => {
     e.preventDefault()

    const symbol = e.target.name
     dispatch(addSymbol(symbol));

  }

  const symbols = useSelector(state => state.windowReducer.window)
  console.log(symbols)
  const stringSymbols = symbols.map(sym => sym.symbol).join('')
  console.log(stringSymbols)

//   const dispatch = useDispatch();
//   console.log(dispatch)

//   const tasks = useSelector(state => state.todoReducer.todo);
//   console.log(tasks)


//   function handleAddTask() {
//     if (newTaskName.length > 1) {
//       dispatch(addTodo(newTaskName));
//       newTaskName = '';
//     }
//   }

//   function handleNewTask(e) {
//     newTaskName = e.target.value;

//   }
//  function handleDeleteTask(e) {
  
// // dispatch(deleteTodo(e.target.id))
//  }

  return (
   <div>


     <InputForm stringSymbols={stringSymbols}/>
     <Numbers  onClick={(e) => handleOnClickNum(e)}/>
     <Operators onClick={(e) => handleOnClickNum(e)}/>
     <button name='clean'>C</button>
     <button name='delete'>del</button>
   </div>
  )
}
export default App;
