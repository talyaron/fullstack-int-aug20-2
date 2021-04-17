import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.scss";

//components`
import Employees from "./view/pages/Employees/Employees";
import EmployeeData from "./view/pages/Employees/EmployeeData";



export default function App() {
  return (
    <Router>
      <div>
      <Link to="/">
        <input type="button" value="<--" to="/" style={{backgroundColor:"black", color:"white"}}/>
        </Link>
        <h1>Calc Salary</h1>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
<<<<<<< HEAD
          <Route path="/calc/:employeeName">
            <Calc />
=======
          <Route exact path="/">
           
           
              <Employees />
          
>>>>>>> eyal
          </Route>
          <Route path="/EmployeeData">
            <EmployeeData />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
