import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './redux/actions/allUsersAction';
import RenderAllUsers from './RenderAllUsers';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useHistory
  } from "react-router-dom";


const AllUsers = () => {

    const dispatch = useDispatch();
    

const handleAddUser = (e) =>{
    e.preventDefault()
    const userName = e.target.children.name.value
   
    const urlImage = e.target.children.url.value
    dispatch(addUser(userName, urlImage))
}
    return(
       <div>
        <form onSubmit={handleAddUser}>
       <input type='text' placeholder='enter your name' name='name'></input>
       <input type='url' placeholder='image URL' name='url'></input>
       <button>ADD</button>
     </form>
     
     <RenderAllUsers/>
       </div> 
    )
}

export default AllUsers