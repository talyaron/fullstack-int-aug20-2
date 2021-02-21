import React, { useState } from 'react';
import Reminder from '../reminders/reminders';
import Time from '../time/time'
// import ''
// import '.../index.css';

const EnterName = () => {
    const [showReminder, setReminderPage] = useState(false)
    const [userName, setName] = useState('')

    const handleEnterName = (e) => {
        e.preventDefault()
        const name = e.target.children.name.value
        setName(name)
        setReminderPage(true)
    }

    return (
        <div className='mainContainer'>
            { showReminder ? <div>
                <h1>Hey {userName}, Your Reminders.</h1>
                <Time />
                <Reminder />
            </div> :
                <div>
                    <h1 className='title'>All your Reminders in one spot!</h1>
                    <h3>Enter name to begin!</h3>
                    <form className="form-floating mb-3 firstName d-flex flex-column" onSubmit={handleEnterName}>
                        <input maxLength='20' name='name' required type="text" className="form-control inputName" id="floatingInput" />
                        <label className='labelName' for="floatingInput">First Name</label>
                        <a href="#" class="btn btn-primary submitNameButton" role="button" data-bs-toggle="button">Login</a>
                    </form>
                </div>
            }
        </div>
    )
}

export default EnterName;