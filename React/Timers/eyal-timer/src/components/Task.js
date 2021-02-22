import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete,onToggle,onTimesUP}) => {
  return (
    <div 
    className={`task 
                ${task.remainder ? 'remainder' : ''} 
                ${task.timesUp ? 'timesUp' :''}`}

                 onDoubleClick={()=>onToggle(task.id)} 
                 onClick={()=>onTimesUP(task.id)}
                 >

                  
      <h3>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor:
          'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>בתאריך: { new Date(task.time).toLocaleDateString('he') } שעה: { new Date(task.time).toLocaleTimeString('he') }</p>
      
    </div>
  );
};

export default Task;
