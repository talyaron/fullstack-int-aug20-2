import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from './Users'
import UserPics from './UserPics'

function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route exact path="/">
            <Users />
          </Route>
          <Route path="/:id">
            <UserPics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
