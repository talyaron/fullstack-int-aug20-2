import React, { useState } from "react";
import "../App.css";

const CooseDate = ({}) => {
  const [userDate, setUserDate] = useState("");
  const checkForUserDate = (e) => {
    e.preventDefault();
    const date = e.target.children.date.value;
    setUserDate(date);
  };

  return (
    <>
      <form onSubmit={checkForUserDate}>
        <h1>Enter your Birthday</h1>
        <input type="date" name="date" placeholder="date" />
        <button type="submit">אישור</button>
        <h3>your Birthday is {userDate}</h3>
      </form>
    </>
  );
};

export default CooseDate;
