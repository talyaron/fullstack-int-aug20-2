import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {
  const [tasks,setTasks] = useState(
    [
         {
             id: 1,
             text: 'Doctor Appointment',
             time: '12:45',
             remainder: true,
         },
         {
             id: 2,
             text: 'Meeting at School',
             time: '10:20',
             remainder: true,
         },
         {
             id: 3,
             text: 'Food Shopping',
             time: '7:39',
             remainder: false,
         }
     ]
 )
//Delete tasks
const deleteTask = (id) => {
  setTasks(
    tasks.filter((task)=>task.id !== id)
  )
}

//Toggle remainder
const toggleRemainder = (id)=>{
console.log('Toggle Remainder',id)
setTasks(
  tasks.map((task)=>task.id === id ?{...task,remainder:!task.remainder}:task)
)
}

  return (
    <div className='container'>
     <Header />
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/> : 'No tasks to Show'}
    </div>
  )
}

export default App;
