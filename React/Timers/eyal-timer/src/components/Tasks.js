import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle,onTimesUP }) => {

    return (
        <>
       
            {tasks.map((task) => (
                
                <Task 
                key={task.id} 
                task={task} 
                onDelete={onDelete} 
                onToggle={onToggle} 
                onTimesUP={onTimesUP}
                
                />
            ))}
        </>
    )
}

export default Tasks
