import React, { useState } from 'react';


const Time = () => {

    var date = new Date()
    const dateString = date.toString();
    const dateStringTime = dateString.split('2021')[1];
    const dateStringMMHHSS = dateStringTime.split('GMT')[0].trim()
    const [time, setTime] = useState(dateStringMMHHSS)

    setInterval(() => {
        var date = new Date()
        const dateString = date.toString();
        const dateStringTime = dateString.split('2021')[1];
        const dateStringMMHHSS = dateStringTime.split('GMT')[0].trim()
        setTime(dateStringMMHHSS)
    }, 1000);
    return (<h2 className="time">Current Time - {time}</h2>)
}

export default Time