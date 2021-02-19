import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Clock from './components/Clock';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      time: '12:45',
      remainder: true,
      timesUp: false,
    },
    {
      id: 2,
      text: 'Meeting at School',
      time: '10:20',
      remainder: true,
      timesUp: false,
    },
    {
      id: 3,
      text: 'Food Shopping',
      time: '7:39',
      remainder: false,
      timesUp: false,
    },
  ]);
//Add Task
const addTask = (task) => {
console.log(task)
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
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onLoad={Clock}
          onDelete={deleteTask}
          onToggle={toggleRemainder}
        />
      ) : (
        'No tasks to Show'
      )}
    </div>
  );
}

export default App;
