import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
} from "react-router-dom";

const Cars = () => {
  return (
    <div>
      <h2>Cars</h2>
      <img src="https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364" alt="" />
    </div>
  );
}

const Fllower = () => {
  return (
    <div>
      <h2>Fllower</h2>
      <img src="" alt="" />
    </div>
  );
}

const Cat  = () => {
  return (
    <div>
      <h2>Cat</h2>
      <img src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2" alt="" />
    </div>
  );
}

/* const User (props) => {
  let { id } = useParams();
  return <h2>User:{id}</h2>;
} */

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Cars</Link>
            </li>
            <li>
              <Link to="/Fllower">Fllower</Link>
            </li>
            <li>
              <Link to="/Cat">Cat</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Fllower">
            <Fllower />
          </Route>
          <Route path="/Cat">
            <Cat />
          </Route> 
          <Route path="/">
            <Cars />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
