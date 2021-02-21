import React, { useState, useEffect } from 'react';

const Clock = ({task}) => {
  const [currentCount, setCount] = useState(' ');
  const timer = () => setCount(new Date().toLocaleString());

  useEffect(() => {
    setInterval(
      timer
      , 1000);
  });

  return (    
      <h2>{currentCount}</h2>   
  );

  const test =()=>{
    if (timer === task)  {
      console.log('');
    }
  }

  return({currentCount}) 
};

export default Clock;

// task.timesUp ? 'timesUp' :''