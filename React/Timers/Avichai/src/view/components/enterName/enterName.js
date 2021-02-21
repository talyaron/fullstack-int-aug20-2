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
        <div>
            { showReminder ? <div>
                <h1>Hey {userName}, Your Reminders.</h1>
                <Time />
                <Reminder />
            </div> :
                <div>
                    <h1>All your Reminders in one spot!</h1>
                    <h3>Enter name to begin!</h3>
                    <form className='nameForm' onSubmit={handleEnterName}>
                        <input maxLength='20' required className='enterName' name='name' type='text' />
                        <button className='enterNameSubmit'>Submit</button>
                    </form>
                </div>}
        </div>
    )
}

export default EnterName;