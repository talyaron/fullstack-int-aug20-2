import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { AddContact } from "./AddContact";
import { EditContect } from "./EditContect";

export const Routers = () => {
  return (
    <div>
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
