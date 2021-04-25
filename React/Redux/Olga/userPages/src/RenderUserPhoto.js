import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './RenderUserPhoto.css'

const RenderUserPhoto = () =>{
    const usersPhoto = useSelector(state => state.allUserPhotoReducer.allPhoto);
  console.log(usersPhoto)
    return (
        <div>

          {usersPhoto.map(photo =>
          <p key={photo.photoId}>
              <img className='userPhoto' src={photo.urlPhoto}></img>
          </p>)
          
          /* {users.map(user => 
          
           <Link to={`/user/${user.id}`}>
          <p key={user.id}>
              <h3>{user.userName}</h3>
              <img src={user.urlImage}/>
          </p>
          </Link>)
          } */}
   

        </div>
    )
}

export default RenderUserPhoto