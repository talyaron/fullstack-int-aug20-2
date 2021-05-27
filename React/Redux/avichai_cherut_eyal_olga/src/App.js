import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from './Users'
import UserPics from './UserPics'
import Comments from './Comments'

function App() {
  return (
    <Router>
      <div>
      <Link to="/">Back</Link>
        <Switch>
          <Route exact path="/">
            <Users />
          </Route>
          <Route exact path="/:id">
            <UserPics />
          </Route>
          <Route exact path="/:id/:picID">
            <Comments />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
