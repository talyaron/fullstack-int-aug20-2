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
import pokemonNames from './pokemonNames';
import FirstPage from './FirstPage';
import RenderImages from './RenderImages';




// let newTaskName = '';

function App() {


  return (
    
    <div className="App">

  <FirstPage/>



    </div>
  );
}



export default App;

// <Router>
// <div className="App">
//   <Route exact path='/'>
//  <AllUsers/>
//  </Route>
//  <Route path='/user/:id'>
//    <UserPage/>
//  </Route>
// </div>
// </Router>