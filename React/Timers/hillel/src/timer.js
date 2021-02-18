import React , {useState} from 'react';
import './App.css';

const timers = [
    {
        text: "hillel",
        time: "20:31:55"
    }, {
        text: "gfhf",
        time: "20:31:55"
    }]


function App() {
    const [timer, setThhimer] = useState(timers)

    function settimer() {
        const text = document.querySelector("#text").value
        const time = document.querySelector("#time").value

        timers.push({ text: text, time: time })
        setThhimer(timers)
    }

    return (
        <>
            <input type="text" id='text' />
            <input type="time" id='time' step='1' />
            <button onClick={settimer}>הוספה</button>
            <div>
                {timer.map((elm,index) => 
                    <p key={index}>{elm.text}</p>
                )}
            </div>
        </>
    );
}

export default App;
