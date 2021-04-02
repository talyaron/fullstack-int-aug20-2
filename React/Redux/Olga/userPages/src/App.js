import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory
} from "react-router-dom";
import AllUsers from './AllUsers';
// import { addTodo, deleteTodo } from './redux/actions/todoActions'



function App() {
  const dispatch = useDispatch();
  

  // const tasks = useSelector(state => state.todoReducer.todo);
 
  return (
    <Router>
    <div className="App">
     <AllUsers/>
    </div>
    </Router>
  );
}

export default App;
