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
        const id = Math.floor(Math.random() * 100000) + 1;
        console.log(id)
        const reminderInfo = { reminderText, reminderTime, id }
        setReminders([...reminders, reminderInfo])
        e.target.reset()
        setButtonText('Add Reminder')
        setShowAddReminder(!showAddReminder)


    }
    const changeDate = (date) => {
        setStartDate(date)
    }
    const sortedReminders = reminders.sort((a, b) => a.reminderTime - b.reminderTime)

    const deleteReminder = (id) => {
        console.log(id)
        setReminders(reminders.filter((reminder) => reminder.id !== id));

    }
    return (
        <div className='reminderBox'>
            <button className='btn btn-primary showReminderButton' onClick={showAddReminderButton}>{buttonText}</button>

            {showAddReminder ?
                <div className='addReminderBox'>
                    <form className="mb-3 addReminderBoxForm" onSubmit={handleNewReminder}>
                        <textarea className="form-control reminderText" placeholder='Reminder Text' id="exampleFormControlTextarea1" name='reminder' rows="3"></textarea>
                        <DatePicker className='timeDate' showTimeSelect timeIntervals={5} timeFormat="HH:mm" dateFormat="dd/MM/YYY HH:mm" selected={startDate} onChange={changeDate} />
                        <button type="submit" class="btn btn-outline-primary submitNewReminder">Add</button>
                    </form>
                </div>
                :
                null
            }
            <div className='allReminders'>
            {sortedReminders.map((reminder, index) => {
                return (<SingleReminder onDelete={deleteReminder} key={reminder.id} info={reminder} place={index + 1} />)
            })}
            </div>
        </div>
    )
}

export default Reminder;
