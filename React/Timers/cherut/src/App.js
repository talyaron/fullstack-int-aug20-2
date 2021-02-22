import React, {useState} from 'react';
import './App.scss';

// components
import Reminder from './view/components/Reminder/Reminder'

function App() {

  const [reminders, setReminders] = useState([]);
  // const [timePassed, settimePassed] = useState(false)
  const [currentTime, setcurrentTime] = useState({})

  // let reminderTime,reminderName;

  function handleSetReminder(e){
    e.preventDefault();
    let reminderTime = e.target.children.reminderTime.value;
    let reminderName = e.target.children.reminderName.value;
    if(!reminderTime || !reminderName) return;
    let newReminders = [...reminders,{reminderTime,reminderName}];
    setReminders(newReminders);
    e.target.reset();
    (()=> {getTime()})();
  }

  function getTime(){
    let currentTime = new Date()
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    setcurrentTime({currentHour,currentMinutes})
  }

  setInterval(getTime, 5000);

  return (
    <div className="App">
      <h1>you can set reminders and when their time will come (in minutes) the reminder will colored in red</h1>
      <form onSubmit={handleSetReminder}>
        <input type='text' name='reminderName' placeholder='Enter reminder'/>
        <input type='time' name='reminderTime' />
        <input type='submit' value='SET'/>
      </form>
      <div className='reminders'>
        {
         reminders  ? 
          reminders.map((reminder,index) => {
            return (
              <div className='reminder' key={index}   style={{backgroundColor:reminder.reminderTime.split(':')[1] <= currentTime.currentMinutes && reminder.reminderTime.split(':')[0] <= currentTime.currentHour ? 'rgba(255, 0, 0, 0.247)':null}}>
                <Reminder info={{reminderTime:reminder.reminderTime,reminderName:reminder.reminderName,index}} />
              </div>
            )
          })
           : null
        }
      </div>
     



    </div>
  );
}

export default App;

