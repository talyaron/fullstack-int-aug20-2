import { useDispatch, useSelector } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const AllUsers = () => {

    const Users = useSelector(state => state.Users.Users)
    console.log(Users)
    return (
        <div>
            {
                Users.map(user => {
                    const userId = `/${user.id}`
                    return (
                        <Link to={userId} key={user.id}>
                            <div>
                                <h3>{user.name}</h3>
                                <img src={user.url} />
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}
export default AllUsers