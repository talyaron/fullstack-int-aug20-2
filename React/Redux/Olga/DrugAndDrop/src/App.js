import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsData, pokemonsData } from './redux/actions/getPokemonsData';
import pokemonNames from './pokemonNames';




// let newTaskName = '';

function App() {
  const dispatch = useDispatch();

let pokemons = useSelector(state => state.getPokemons.data)

console.log(pokemons)



const getPokemons =(e) => {
  e.preventDefault()
  dispatch(getPokemonsData())
}



//   function readCookie() {
//     fetch('/read-cookie')
//         .then(r => r.json())
//         .then(data => {
//             if (data.cookie) {
                
//                 document.getElementById('root').innerHTML = `You have clicked: ${data.IFollowYou}`
//             } else {
//                 console.log('no cookie found for this user')
//             }
//         })
// }

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
  
// dispatch(deleteTodo(e.target.id))
//  }

  return (
    <div className="App">
     <button onClick={getPokemons}>get</button>





    </div>
  );
}



export default App;
