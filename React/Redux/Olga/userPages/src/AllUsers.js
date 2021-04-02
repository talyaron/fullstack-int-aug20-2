import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './redux/actions/allUsersAction';



const AllUsers = () => {

    const dispatch = useDispatch();
    
  // const tasks = useSelector(state => state.todoReducer.todo);

const handleAddUser = (e) =>{
    const name = e.target
    console.log(name)
}
    return(
       <div>
        <form onSubmit={handleAddUser}>
       <input type='text' placeholder='enter your name' name='name'></input>
       <input type='url' placeholder='image URL'></input>
       <button type='submit'>ADD</button>
     </form>
       </div> 
    )
}

export default AllUsers