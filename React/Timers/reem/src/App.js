import Time from './View/Component/Time.js';
import './App.css';
import React,{useState} from 'react'
function App() {
  const [reminders, setReminders] = useState([])
 

  function setReminder(e){
    e.preventDefault()
    let Reminder =e.target.children.Reminder.value
    let Time =e.target.children.time.value
    let miliSeconde=new Date(Time)
    let timeInMili= miliSeconde.getTime()
    console.log(timeInMili)
    setReminders([...reminders,{Reminder,timeInMili,Time}]);
    // checkIfPassed(corentTime,Time);
 
    }

   
    // function getTime(){
    //   let corentTime=new Date()
    //   console.log(corentTime)
    // }
    // getTime()
    // function setInterval(() => {
    //   let corentTime=new Date()
      
    // },5000);
  return (
    <div className="App">
    <form onSubmit={setReminder}>
      <input type='text' name='Reminder' placeholder='Reminder'>
      </input>
      <input type='datetime-local' name='time' >
      </input>
      <button type='submit'>
        set

      </button>
    </form>
    {reminders.map((reminder,index)=>{ 
      return(
        <div key={index} >
    <Time info={{Reminder:reminder.Reminder,timeInMili:reminder.timeInMili,Time:reminder.Time}}/>
    </div>
      )
  })}
   
    </div>
  );
}

export default App;
