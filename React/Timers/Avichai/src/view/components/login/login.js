import React from 'react';


const Login = (props) => {

    const handleEnterName = (e) => {
        e.preventDefault()
        const name = e.target.children.name.value
        props.setName(name)
        props.setReminderPage(true)
    }

    return (

        <div className='enterNameContainer'>
            <h1 className='title'>All your Reminders in one spot!</h1>
            <h3 className='sTitle'>Enter name to begin!</h3>
            <form className="form-floating mb-3 firstName d-flex flex-column" onSubmit={handleEnterName}>
                <input maxLength='20' name='name' required type="text" className="form-control inputName" id="floatingInput" />
                <label className='labelName'>First Name</label>
                <button className="btn btn-primary submitNameButton">Login</button>
            </form>
        </div>
    )
}

export default Login;