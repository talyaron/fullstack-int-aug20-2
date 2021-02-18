import React, { useState } from 'react';

import SingleReminder from './SingleReminder';

const checkIfExpired = (props) => {
    console.log('here')
}
function Reminder() {
    console.log('on')
    const [reminders, setReminders] = useState([]);


    const handleNewReminder = (e) => {
        e.preventDefault()
        const reminderText = e.target.children.reminder.value
        const reminderTime = e.target.children.time.value
        const reminderInfo = { reminderText, reminderTime }
        setReminders([...reminders, reminderInfo])
        e.target.reset()
    }
    return (
        <div className='reminderBox'>
            {reminders.map(reminder => {
                return (<SingleReminder key={reminder.reminderTime} info={reminder} />)
            })}
            < form onSubmit={handleNewReminder} >
                <input type='text' required name='reminder' />
                <input type='time' required name='time' />
                <button>Set</button>
            </form >
        </div>
    )
}

export default Reminder;
