import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './redux/actions/allUsersAction';



const AllUsers = () => {

    const dispatch = useDispatch();
    
  // const tasks = useSelector(state => state.todoReducer.todo);

//   e.preventDefault()
//   const name = e.target.children.name.value
//   const imgUrl = e.target.children.url.value
//   console.log(name, imgUrl)
//   dispatch(addUser(name, imgUrl))

const handleAddUser = (e) =>{
    e.preventDefault()
    const name = e.target.name.value
    const urlImage = e.target.url.children
    console.log(urlImage)
}
    return(
       <div>
        <form onSubmit={handleAddUser}>
       <input type='text' placeholder='enter your name' name='name'></input>
       <input type='url' placeholder='image URL' name='url'></input>
       <button>ADD</button>
     </form>
       </div> 
    )
}

export default AllUsers