import React from "react";
import "../App.css";

const PopulationInfo = ({}) => {
  fetch(
    "https://world-population.p.rapidapi.com/population?country_name=Israel",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "e846b0c7f4msha2c3878c64cee80p17095djsn12b3512845a6",
        "x-rapidapi-host": "world-population.p.rapidapi.com",
      },
    }
  )
    .then((data) => {
      console.log({...data});
    })
    .catch((err) => {
      console.error(err);
    });
  return (
    <>
      <h1>On this day...</h1>
      <div className="PopulationInfo">
        <div className="PeolpleBorn"></div>
        <div className="PeolpleDied"></div>
      </div>
    </>
  );
};

export default PopulationInfo;
