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

            { showReminder ?
                <div className='reminderContainer'>
                    <h1 className='title'>Hey {userName}, Your Reminders.</h1>
                    <Time />
                    <Reminder />
                </div>
                :
                <div className='enterNameContainer'>
                    <h1 className='title'>All your Reminders in one spot!</h1>
                    <h3 className='sTitle'>Enter name to begin!</h3>
                    <form className="form-floating mb-3 firstName d-flex flex-column" onSubmit={handleEnterName}>
                        <input maxLength='20' name='name' required type="text" className="form-control inputName" id="floatingInput" />
                        <label className='labelName' for="floatingInput">First Name</label>
                        <button class="btn btn-primary submitNameButton">Login</button>
                    </form>
                </div>
            }

        </div>
    )
}

export default EnterName;