import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addSymbol } from './redux/actions/windowActon'
import Numbers from './Numbers';
import Operators from './Operators';
import InputForm from './InputForm';


function App() {

  let symbols = useSelector(state => state.windowReducer.symbol)
  let state = useSelector(state => console.log(state))
  const dispatch = useDispatch();
console.log(symbols)
  const handleOnClickNum =(e) => {
     e.preventDefault()

    let symbol = e.target.name
    console.log((symbols !='0') || ((symbol == '.' )&&(symbols.indexOf('.') ==-1)))
    console.log(symbols.indexOf('.'))

    if((symbols !='0') && ((symbol == '.' )&&(symbols.indexOf('.') ==-1))){
      symbols += symbol
      
    }else if((symbols !='0') && ((symbol != '.' ))){
      symbols += symbol
      
    }
      else if(
      
        (symbol == '.') && (symbols.indexOf('.') !=-1)){
           symbols += ''
     
        }
    
     else {
      symbols = symbol
    }
    // console.log(symbols[0].symbol)
    // if(symbols.length == 1 && symbols[0].symbol == '0'){
      
    // }
    
    
     dispatch(addSymbol(symbols));

  }


  // const stringSymbols = symbols.map(sym => sym.symbol).join('')
  // console.log(stringSymbols)

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


     {/* <InputForm stringSymbols={stringSymbols}/> */}
     <Numbers  onClick={(e) => handleOnClickNum(e)}/>
     <Operators onClick={(e) => handleOnClickNum(e)}/>
     <button name='clean'>C</button>
     <button name='delete'>del</button>
   </div>
  )
}
export default App;
