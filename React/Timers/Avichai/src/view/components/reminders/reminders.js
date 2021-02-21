import React, { useState } from 'react';
import SingleReminder from '../singleReminder/SingleReminder';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Reminder() {
    const [reminders, setReminders] = useState([]);
    const [showAddReminder, setShowAddReminder] = useState(false)
    const [buttonText, setButtonText] = useState('Add Reminder')
    const [startDate, setStartDate] = useState(new Date());

    const showAddReminderButton = () => {
        setShowAddReminder(!showAddReminder)

        if (!showAddReminder) {
            setButtonText('Hide')
        } else {
            setButtonText('Add Reminder')
        }
    }


    const handleNewReminder = (e) => {
        e.preventDefault()
        const reminderText = e.target.children.reminder.value
        const reminderTime = startDate
        const reminderInfo = { reminderText, reminderTime }
        setReminders([...reminders, reminderInfo])
        e.target.reset()
        setButtonText('Add Reminder')
        setShowAddReminder(!showAddReminder)


    }
    const changeDate = (date) => {
        setStartDate(date)
    }
    const sortedReminders = reminders.sort((a, b) => a.reminderTime - b.reminderTime)

    const deleteReminder = () =>{
        console.log('deleteReminder')
    }
    return (
        <div className='reminderBox'>
            <button className='showReminderButton' onClick={showAddReminderButton}>{buttonText}</button>

            {showAddReminder ?

                < form className='form' onSubmit={handleNewReminder} >
                    <input maxLength="50" className='reminderText' type='text' required name='reminder' />
                    <DatePicker className='timeDate' showTimeSelect timeIntervals={5} timeFormat="HH:mm" dateFormat="dd/MM/YYY HH:mm" selected={startDate} onChange={changeDate} />
                    <button className='addReminder'>Add</button>
                </form >

                : null
            }
            {sortedReminders.map((reminder, index) => {
                return (<SingleReminder onDelete={deleteReminder} key={reminder.reminderTime} info={reminder} place={index + 1} />)
            })}
        </div>
    )
}

export default Reminder;
