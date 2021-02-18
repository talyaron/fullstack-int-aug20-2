// xjfhxckv

import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {
  const [tasks,setTasks] = useState(
    [
         {
             id: 1,
             text: 'Doctor Appoinment',
             day: 'feb 5th at 2:30pm',
             remainder: true,
         },
         {
             id: 2,
             text: 'Meeting at School',
             day: 'feb 6th at 2:30pm',
             remainder: true,
         },
         {
             id: 3,
             text: 'Food Shopping',
             day: 'feb 7th at 2:30pm',
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

//Toggle Remainder
const toggleRemainder = (id)=>{
console.log('Toggle Remainder')
setTasks(
  tasks.map((task)=>task.id !== id ?{...task,remainder:!task.remainder}:task)
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
