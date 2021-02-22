import React from 'react';
import EnterName from './view/components/enterName/enterName'
import './view/dist/index.css'
import imgClock from './view/img/clock.png'


function App() {
  return (
    <div className="App container-xl">
      <img className='clockImg' src={imgClock} />
      <img className='dontForgetImg' src='https://img2.pngio.com/free-png-meeting-reminder-transparent-meeting-reminderpng-images-reminders-png-820_694.jpg' />
      <EnterName />
    </div>
  );
}

export default App;
