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
import UserPage from './UserPage';
// import { addTodo, deleteTodo } from './redux/actions/todoActions'



function App() {
  const dispatch = useDispatch();
  

  // const tasks = useSelector(state => state.todoReducer.todo);
 
  return (
    <Router>
    <div className="App">
      <Route exact path='/'>
     <AllUsers/>
     </Route>
     <Route path='/user/:id'>
       <UserPage/>
     </Route>
    </div>
    </Router>
  );
}

export default App;
