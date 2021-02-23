import Task from './Task'

const Tasks = ({ tasks,setTasks, onDelete, onToggle,onTimesUP }) => {

    return (
        <>
       
            {tasks.map((task) => (
                
                <Task 
                key={task.id} 
                task={task} 
                setTasks={setTasks}
                onDelete={onDelete} 
                onToggle={onToggle} 
                onTimesUP={onTimesUP}
                
                />
            ))}
        </>
    )
}

export default Tasks
