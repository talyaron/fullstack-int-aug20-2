import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { userPage } from './redux/actions/userPageAction';
import RenderUserPhoto from './RenderUserPhoto';


const UserPage = () => {
const {id} = useParams()
console.log(id)
const users = useSelector(state => state.allUsersReducer.allUsers)
const user = users.filter(user => user.id == id)
console.log(user)

const dispatch = useDispatch();


const handleAddPhoto = (e) => {
    const userId = id
    const userName = user.userName
  
    const urlImage = user.urlImage
    const urlPhoto = e.target.children.url.value
console.log(urlPhoto)

dispatch(userPage(userId, userName, urlImage, urlPhoto))
debugger
}

// userId, userName, urlImage, urlPhoto

    return (
        <div>
          {user.map(user => (
              <p key={user.id}><h3>Hi,{user.userName}!</h3>
              <form onSubmit={handleAddPhoto}>
                  <input type='url' name='url' placeholder='image URL'></input>
                  <button>Add photo</button>
              </form>
              <img src={user.urlImage}/>
            
              <RenderUserPhoto/>
              </p>
          ))}
        </div>
    )
}

export default UserPage