import { useState } from "react";
import Moment from 'react-moment';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Clock from "./components/Clock";
import AddTask from "./components/AddTask";
const now = new Date();

function App() {
 
  const [showAddTask, setSowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "רופא ילדים",
      time: "2021-02-22T12:21",
      remainder: true,
      timesUp: false,
    },
    {
      id: 2,
      text: "פגישה עם המנהלת",
      time: "2021-02-20T14:23",
      remainder: true,
      timesUp: false,
    },
    {
      id: 3,
      text: "קניות",
      time: "2021-02-21T11:23",
      remainder: false,
      timesUp: false,
    },
  ]);
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
  const ToggleTimesUP = (id) => {
    // const NowDate = date.get
    setInterval(() => {
      const DT =new Date();
      const NowDate = DT.toLocaleDateString("he");
      const NowTime = DT.toLocaleTimeString("en");
      setTasks(
        tasks.map((task) =>
        // task.id === id &&
          NowTime >= new Date(task.time).toLocaleTimeString("heb") &&
          NowDate >= new Date(task.time).toLocaleDateString("heb") &&
          task.remainder === true &&
          task.timesUp === false
            ? { ...task, timesUp: true }
            : task
        )
      );
      //  ---Tests Proses---
      //   console.log(NowTime,'----',new Date(tasks[0].time).toLocaleTimeString("heb"))
      // if (NowTime >= new Date(tasks[0].time).toLocaleTimeString("heb")) {
      //   console.log("OK");
      // }
      // console.log(NowDate,'----',new Date(tasks[0].time).toLocaleDateString("heb"))
      // if (NowDate === new Date(tasks[0].time).toLocaleDateString("heb")) {
      //   console.log("OK1");
      // }
    }, 1000);
  };

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
          onTimesUP={ToggleTimesUP}
        />
      ) : (
        "אין משימות להצגה"
      )}
    </div>
  );
}

export default App;
