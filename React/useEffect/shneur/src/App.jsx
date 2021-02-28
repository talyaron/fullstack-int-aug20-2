import "./App.css";
import React from "react";
import CooseDate from "./components/chooseDate";
import PopulationInfo from "./components/populationInfo";

fetch("http://example.com/movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

const App = () => {
  return (
    <>
      <CooseDate />
      <PopulationInfo />
    </>
  );
};

export default App;
