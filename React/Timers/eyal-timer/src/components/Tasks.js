import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle,Clock }) => {

    return (
        <>
            {tasks.map((task) => (
                <Task 
                key={task.id} 
                task={task} 
                onDelete={onDelete} 
                onToggle={onToggle} 
                Clock={Clock}
                />
            ))}
        </>
    )
}

export default Tasks
