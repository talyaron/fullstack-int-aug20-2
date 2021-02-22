import React, { useState } from 'react';
import Login from './view/components/login/login'
import Reminders from './view/components/reminders/reminders';
import LiveTime from './view/components/time/time'
import './view/dist/index.css'
import imgClock from './view/img/clock.png'


function App() {
  const [showRemindersPage, setReminderPage] = useState(false)
  const [userName, setName] = useState('')

  return (
    <div className="App container-xl">
      <img className='clockImg' src={imgClock} />
      <img className='dontForgetImg' src='https://img2.pngio.com/free-png-meeting-reminder-transparent-meeting-reminderpng-images-reminders-png-820_694.jpg' />
      <div className='mainContainer'>
        {
          showRemindersPage ?
            <div className='reminderContainer'>
              <h1 className='title'>Hey {userName}, Your Reminders.</h1>
              <LiveTime/>
              <Reminders/>
            </div>
            :
            <Login setReminderPage={setReminderPage} setName={setName} />
        }
      </div>
    </div>
  );
}

export default App;
