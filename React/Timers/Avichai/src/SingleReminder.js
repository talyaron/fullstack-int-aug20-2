import React, { useState } from 'react';
import './index.css';

function SingleReminder(props) {

    const { reminderText, reminderTime } = props.info
    const [bgColor, setBgColor] = useState('#333333')
    const [fontColor, setFontColor] = useState('white')

    // setInterval(() => {
    //     var date = new Date()
    //     const dateString = date.toString();
    //     const dateStringTime = dateString.split('2021')[1];
    //     const dateStringMMHHSS = dateStringTime.split('GMT')[0].trim()

    //     if (dateStringMMHHSS >= reminderTime) {
    //         setBgColor('red')
    //         setFontColor('white')
    //     }
    // }, 5000);


    return (
        <div className='singleReminder' style={{ background: bgColor }}>
            <span className='singleReminderText'style={{ color: fontColor }}>{reminderText}</span>
            <span style={{ color: fontColor }}>{reminderTime}</span>
        </div>
    )
}

export default SingleReminder;
