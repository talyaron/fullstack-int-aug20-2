import React, { useState, useEffect } from 'react';

const Clock = ({tasks}) => {
  const [timeClock, setTimeClock] = useState(' ');
  const timer = () => setTimeClock(new Date().toLocaleString());
  
  const timer1 = () => {
    timer();
    tasks.forEach((task) =>{
      console.log(timer,task.time);
      if (timer === task.time)  {
        console.log('333');
      }
    })

  };

  useEffect(() => {
    setInterval(
      timer1
      , 1000);
  });

  

  return (    
      <h2>{timeClock}</h2>   
  );

  
  return({timeClock}) 
};

export default Clock;

// task.timesUp ? 'timesUp' :''