import React, { useState } from 'react'


function Table(props) {
    let { array } = props

        const date = new Date().toLocaleTimeString()
        array.forEach(element => {
            if (element.time <= date) {
                element.color = '#9b4c44'
            }
        });

    if (array.length == 0) {
        return (
            <div className='length0'>אין לך תזכורות</div>
        )
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>הערת תזכורת</th>
                    <th>שעה</th>
                </tr>
            </thead>
            <tbody>
                {array.map((elm, index) =>
                    <tr key={index} style={{ background: elm.color }}>
                        <td style={{ borderRight: 2 }}>{elm.text}</td>
                        <td>{elm.time}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )

}

export default Table
