import React, { useState } from 'react';
const moment = require('moment'); // require
moment().format();

function SingleReminder(props, onDelete) {

    const { reminderText, reminderTime } = props.info
    const { place } = props

    const [bgColor, setBgColor] = useState('#333333')
    const [fontColor, setFontColor] = useState('white')

    const checkIfExpired = () => {
        const date = new Date()
        const dateMili = date.getTime()

        if (dateMili >= reminderTime.getTime()) {
            setBgColor('red')
        }
    }

    setInterval(() => {
        checkIfExpired()
    }, 3000);

    var dateString = reminderTime;
    var dateObj = new Date(dateString);
    var momentObj = moment(dateObj);
    var momentString = momentObj.format('DD/MM/YYYY - HH:mm');

    return (
        <div className='singleReminder' style={{ background: bgColor }}>
            <span className='singleReminderText' style={{ color: fontColor }}>{place} - {reminderText}</span>
            <span style={{ color: fontColor }}>{momentString}</span>
            <span onClick={() => onDelete(place-1)}>X</span>
        </div>

    )
}

export default SingleReminder;
