import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentCount, setCount] = useState(' ');
 // const timer = () => setCount(new Date().toLocaleString());

  useEffect(() => {
    setInterval(setCount(new Date().toLocaleString()), 1000);
  });

  return (    
      <h2>{currentCount}</h2>   
  );
  return({currentCount}) 
};

export default Clock;

// task.timesUp ? 'timesUp' :''