import Time from './View/Component/Time.js';
import './App.css';

function App() {
  function setReminder(e){
    e.preventDefault()
    let Reminder =e.target.children.Reminder.value
    let Time =e.target.children.time.value
    console.log(Time,Reminder )
  }
  return (
    <div className="App">
    <form onSubmit={setReminder}>
      <input type='text' name='Reminder' placeholder='Reminder'>
      </input>
      <input type='time' name='time' >
      </input>
      <button type='submit'>
        set

      </button>
    </form>
    <Time reminder={Reminder}></Time>
    </div>
  );
}

export default App;
