import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Clock from './components/Clock';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask,setSowAddTask] = useState(false)
  // const [crTime,setcrTime] = useState('2021-02-20T12:23')
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'רופא ילדים',
      time: '2021-02-20T12:23',
      remainder: true,
      timesUp: false,
    },
    {
      id: 2,
      text: 'פגישה עם המנהלת',
      time: '2021-02-20T14:23',
      remainder: true,
      timesUp: false,
    },
    {
      id: 3,
      text: 'קניות',
      time: '2021-02-21T11:23',
      remainder: false,
      timesUp: false,
    },
  ]);
//Add Task

const addTask = (task) => {
  const id = Math.floor(Math.random() *100000)+1;
  const newTask ={id,...task}
  setTasks([...tasks, newTask])
  }

  //Delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle remainder
  const toggleRemainder = (id) => {
    console.log('Toggle Remainder', id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, remainder: !task.remainder } : task
      )
    );
  };
  return (
    <div className="container">
      <Clock tasks={tasks}/>
      <Header onAdd={()=>setSowAddTask(!showAddTask)} showAdd={showAddTask} />
     {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onLoad={Clock}
          onDelete={deleteTask}
          onToggle={toggleRemainder}
        />
      ) : (
        'אין משימות להצגה'
      )}
    </div>
  )
 
}

export default App;
