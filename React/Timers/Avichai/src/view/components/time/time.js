import React, { useState } from 'react';


const Time = () => {

    const date = new Date()
    const dateString = date.toString();
    const goodDate = dateString.split('GMT')[0].trim()
    const [time, setTime] = useState(goodDate)

    setInterval(() => {
        const date = new Date()
        const dateString = date.toString();
        const goodDate = dateString.split('GMT')[0].trim()
        setTime(goodDate)
    }, 1000);
    return (<h2 className="time">{time}</h2>)
}

export default Time