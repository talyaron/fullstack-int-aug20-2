import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
const moment = require('moment'); // require
moment().format();


function SingleReminder(props) {

    const { reminderText, reminderTime, id } = props.info
    const { place } = props

    const [bgColor, setBgColor] = useState('')
    const [isExpired, setExpiredLine] = useState(false)

    const dateString = reminderTime;
    const dateObj = new Date(dateString);
    const momentObj = moment(dateObj);
    const momentString = momentObj.format('DD/MM/YYYY - HH:mm');

    const checkIfExpired = () => {
        const date = new Date()
        const dateMili = date.getTime()

        if (dateMili >= reminderTime.getTime()) {
            setBgColor('rgb(235, 124, 124)')
            setExpiredLine(true)
        }
    }
    setInterval(() => {
        checkIfExpired()
    }, 3000);


    return (
        <div>
            {isExpired ?
                < del className="card singleReminder" style={{ width: '18rem', background: bgColor }}>
                    <div className="card-body">
                        <div className='cardTitleDelete'>
                            <h5 className="card-title">Reminder #{place}</h5>
                            <DeleteIcon className='deleteReminder' onClick={() => props.onDelete(id)} />
                        </div>
                        <h6 className="card-subtitle mb-2 text-muted">Due Date-{momentString}</h6>
                        <p className="card-text">{reminderText}</p>
                    </div>
                </ del >
                :
                <div className="card singleReminder" style={{ width: '18rem', background: bgColor }}>
                    <div className="card-body">
                        <div className='cardTitleDelete'>
                            <h5 className="card-title">Reminder #{place}</h5>
                            <DeleteIcon className='deleteReminder' onClick={() => props.onDelete(id)} />
                        </div>
                        <h6 className="card-subtitle mb-2 text-muted">Due Date-{momentString}</h6>
                        <p className="card-text">{reminderText}</p>
                    </div>
                </div >}
        </div>
    )
}

export default SingleReminder;
