import React, { useState } from 'react';
import Reminder from './reminders';
import Time from './time'


function App() {

  console.log('app started')
  return (
    <div className="App">
      <h1>Your Reminders</h1>
      <Time />
      <Reminder />
    </div>
  );
}

export default App;
