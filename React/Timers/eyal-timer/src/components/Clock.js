import React, { useState, useEffect } from "react";

const Clock = ({ tasks, onTimesUP }) => {
  const [timeClock, setTimeClock] = useState(" ");
  const [task, setTask] = useState("");
  const timer = () => setTimeClock(new Date().toLocaleTimeString("he"));
  // Date(task.time).toLocaleDateString('he')

  const timer1 = () => {
    timer();


    /* tasks.forEach((task) => {
      if (
        new Date().toLocaleTimeString("he") ===
        new Date(task.time).toLocaleTimeString("he")
      ) {
        console.log("333");
        //setTasks(!timesUp);
       // onTimesUP(task.id);
       task.timesUp = true;
      }
    }); */

    
  };

  useEffect(() => {
    setInterval(timer1, 1000);
  });

  return <h2>{timeClock}</h2>;
};

export default Clock;

// task.timesUp ? 'timesUp' :''
