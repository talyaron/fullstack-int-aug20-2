import React from "react";
import { ToastContainer } from "react-toastify";
import { Navbar } from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AddContact } from "./components/AddContact";
import EditContect from "./components/EditContect";

const App = () => {
  return (
    <div className="App">
      {/* אנימציה יפה כאשר יש שגיאה או הצלחה */}
      <ToastContainer />
      <Navbar />
      {/* ראוטרים */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/add">
          <AddContact />
        </Route>

        <Route path="/edit/:id">
          <EditContect />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
