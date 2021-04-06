import React, { useState, useEffect } from 'react';
import Login from './view/components/login/login'
import Reminders from './view/components/reminders/reminders';
import LiveTime from './view/components/time/time'
import './view/dist/index.css'
import imgClock from './view/img/clock.png'


// const getJoke = (setJoke) => {
//   fetch('https://api.chucknorris.io/jokes/random')
//     .then(r => r.json())
//     .then(joke => {
//       setJoke(joke.value)
//     })
// }

function App() {
  const [showRemindersPage, setReminderPage] = useState(false)
  const [userName, setName] = useState('')

  // const [joke, setJoke] = useState('')
  // const [counter, setCounter] = useState(0)


  // useEffect(() => {
  //   getJoke(setJoke);
  // }, [counter])


  // const handleCounter = () => {
  //   setCounter(counter + 1)
  // }

  return (
    <div className="App container-xl">

      {/* <button onClick={handleCounter}>Add to Count</button>
      <span>{counter}</span>
      <span>{joke}</span> */}

      <img className='clockImg' src={imgClock} />
      <img className='dontForgetImg' src='https://img2.pngio.com/free-png-meeting-reminder-transparent-meeting-reminderpng-images-reminders-png-820_694.jpg' />
      <div className='mainContainer'>
        {
          showRemindersPage ?
            <div className='reminderContainer'>
              <h1 className='title'>Hey {userName}, Your Reminders.</h1>
              <LiveTime />
              <Reminders />
            </div>
            :
            <Login setReminderPage={setReminderPage} setName={setName} />
        }
      </div>
    </div>
  );
}

export default App;
