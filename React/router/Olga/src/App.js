import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/pic1">pic1</Link>
            </li>
            <li>
              <Link to="/pic2">pic2</Link>
            </li>
            <li>
              <Link to="/pic3">pic3</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        
          <Route path="/pic1">
            <Pic1 />
          </Route>

          <Route path="/pic2">
            <Pic2 />
          </Route>
         
          <Route path="/pic3">
            <Pic3 />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

function Pic1() {
  return <img src='https://cdn.pixabay.com/photo/2015/10/30/20/13/boat-1014711_960_720.jpg'/>
}

function Pic2() {
  return <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'/>
}

function Pic3() {
  return <img src='https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg'/>
}



