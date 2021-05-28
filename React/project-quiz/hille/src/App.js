import "./App.css";
import EnterBox from "./view/components/EnterBox/EnterBox";
import QuizBox from "./view/components/QuizBox/QuizBox";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/quiz">quiz</Link>
            </li>
          
          </ul>
        </nav> */}

        <Switch>
          <Route path="/quiz">
            <QuizBox />
          </Route>

          <Route exact path="/">
            <EnterBox />
          </Route>

          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Page404() {
  return <h2> Page404</h2>;
}
