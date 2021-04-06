import Task from "./Task";
import  { useEffect } from "react";

const Tasks = ({ tasks, setTasks, onDelete, onToggle }) => {

    useEffect(() => {
        onTimesUP();
      }, []);
    
  const onTimesUP = () => {
   
    setInterval(() => {
      const { NowTime, NowDate } = getDateTime();

      SetTaskOnInterval(tasks,setTasks, NowTime, NowDate);}, 4000)
  };

  
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          setTasks={setTasks}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;

function SetTaskOnInterval(tasks,setTasks, NowTime, NowDate) {
    setTasks(
        tasks.map((task) =>            
        task.timesUp === false
                ? { ...task, timesUp: true }
                : task
        )
    );
}

function IfItISTheTimeDateTimesUpAndRemainder(NowTime, task, NowDate) {
    return NowTime >= new Date(task.time).toLocaleTimeString("heb") &&
        NowDate >= new Date(task.time).toLocaleDateString("heb") &&
        task.remainder === true &&
        task.timesUp === false;
}

function getDateTime() {
    const DT = new Date();
    const NowDate = DT.toLocaleDateString("heb");
    const NowTime = DT.toLocaleTimeString("heb");
    return { NowTime, NowDate };
}

