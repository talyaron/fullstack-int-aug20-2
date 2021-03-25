import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { addImg } from './Redux/action/Images'


const UserPics = () => {
    const dispath = useDispatch()

    const Users = useSelector(state => state.Users.Users)
    const Images = useSelector(state => state.Images.Images)

    const { id } = useParams()
    console.log(id)

    const foundUser = Users.find(user => user.id == id)
    const foundUserImages = Images.filter(image => image.userId == id)


    const handleAddUserImg = (e) => {
        e.preventDefault()
        const img = e.target.children.imgUrl.value
        console.log(img)
        dispath(addImg(img, id))
    }
    return (
        <div>
            <h3>Hello {foundUser.name}!</h3>

            <form onSubmit={handleAddUserImg}>
                <input name='imgUrl' type='url' required />
                <button>Add image</button>
            </form>

            {/* {foundUserImages.map(image => {

                return (
                    <Link to='/test'>
                        <img src={image.url} />
                    </Link>
                )
            })} */}
        </div>
    )
}
export default UserPics