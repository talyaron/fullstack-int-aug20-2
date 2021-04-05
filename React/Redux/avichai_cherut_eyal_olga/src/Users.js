import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './Redux/action/Users'
import AllUsers from './AllUsers'
const Users = () => {
    const dispatch = useDispatch()

    const handleAddUser = (e) => {
        e.preventDefault()
        const name = e.target.children.name.value
        const imgUrl = e.target.children.url.value
        console.log(name, imgUrl)
        dispatch(addUser(name, imgUrl))

    }
    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type='text' name='name' placeholder='Name' />
                <input type='url' name='url' placeholder='ImgURL' />
                <button>Add user</button>
            </form>

            <AllUsers />
        </div>
    )
}
export default Users