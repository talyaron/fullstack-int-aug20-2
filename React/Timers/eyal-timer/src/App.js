import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Clock from "./components/Clock";
import AddTask from "./components/AddTask";


function App() {
 
  const [showAddTask, setSowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  
  //Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle remainder
  const toggleRemainder = (id) => {
    console.log("Toggle Remainder", id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, remainder: !task.remainder } : task
      )
    );
  };

  //Toggle time UP
  

  return (
    <div className="container">
      {/* <Moment format="DD/MM/YYYY HH:MM:SS" >{now}</Moment> */}
      <Clock />
      <Header onAdd={() => setSowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          setTasks={setTasks}
          onDelete={deleteTask}
          onToggle={toggleRemainder}
         
        />
      ) : (
        "אין משימות להצגה"
      )}
    </div>
  );

  function timerTest(NowTime, NowDate) {
    console.log(NowTime, '----', new Date(tasks[0].time).toLocaleTimeString("heb"));
    if (NowTime >= new Date(tasks[0].time).toLocaleTimeString("heb")) {
      console.log("OK");
    }
    console.log(NowDate, '----', new Date(tasks[0].time).toLocaleDateString("heb"));
    if (NowDate === new Date(tasks[0].time).toLocaleDateString("heb")) {
      console.log("OK1");
    }
  }
}

export default App;
