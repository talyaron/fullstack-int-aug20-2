import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.scss";

//components`
import Employees from "./view/pages/Employees/Employees";
import EmployeeData from "./view/pages/Employees/EmployeeData";
import InputName from "./view/pages/Employees/InputName/InputName";

export default function App() {
  return (
    <Router>
      <div>
        <h1>Calc Salary</h1>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <InputName />
            <ul>
              <Employees />
            </ul>
          </Route>
          <Route path="/EmployeeData">
            <EmployeeData />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
