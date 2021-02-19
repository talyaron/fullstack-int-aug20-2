import React, { useState } from 'react';

import SingleReminder from './SingleReminder';



function Reminder() {
    console.log('in reminder function')
    const [reminders, setReminders] = useState([]);
    const [showAddReminder, setShowAddReminder] = useState(false)
    const [buttonText, setButtonText] = useState('Add Reminder')

    const showAddReminderButton = () => {
        setShowAddReminder(!showAddReminder)
        console.log(showAddReminder)

        if (!showAddReminder) {
            setButtonText('Hide')
        } else {
            setButtonText('Add Reminder')
        }
    }

    reminders.sort((a, b) => a.reminderTime.localeCompare(b.reminderTime));

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
            <button className='showReminderButton' onClick={showAddReminderButton}>{buttonText}</button>
            {showAddReminder ?
                < form onSubmit={handleNewReminder} >
                    <input type='text' required name='reminder' />
                    <input type='time' required name='time' />
                    <button className='addReminder'>Add</button>
                </form >
                : null
            }

        </div>
    )
}

export default Reminder;
