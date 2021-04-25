import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const RenderAllUsers = () =>{
    const users = useSelector(state => state.allUsersReducer.allUsers);
    console.log(users)

    return (
        <div>

          {users.map(user => 
          
           <Link to={`/user/${user.id}`}>
          <p key={user.id}>
              <h3>{user.userName}</h3>
              <img src={user.urlImage}/>
          </p>
          </Link>)
          }
   

        </div>
    )
}

export default RenderAllUsers