import React, { useState } from 'react';
import './App.css';


const timers = [
    {
        text: "בוקר",
        time: "07:30:00"
    }, {
        text: "נסיעה",
        time: "20:31:55"
    }
]


function App() {
    const [timer, setThhimer] = useState(timers)

    function settimer(e) {
        e.preventDefault();

        const text = e.target.children[0].value;
        const time = e.target.children[1].value;

        timers.push({ text: text, time: time })
        setThhimer(timers)
        // e.target.reset();
    }

    return (
        <>
            <form onSubmit={settimer}>
                <input type="text" id='text' />
                <input type="time" id='time' step='1' />
                <button type='submit'>הוסף תזכורת</button>
            </form>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>הערת תזכורת</th>
                            <th>שעה</th>
                        </tr>
                    </thead>
                    <tbody>
                        {timer.map((elm, index) =>
                            <tr key={index}>
                                {console.log('c')}
                                <td>{elm.text}</td>
                                <td>{elm.time}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default App;

// {timer.map((elm, index) =>
//     <p key={index}>{elm.text}</p>