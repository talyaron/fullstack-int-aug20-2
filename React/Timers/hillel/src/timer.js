import React, { useState } from 'react';
import './App.css';
import Table from './Table'


const inishlTimers = [
    {
        text: "בוקר",
        time: "07:30:00",
        color: 'gray'
    }, {
        text: "נסיעה",
        time: "20:31:55",
        color: 'gray'
    }
]


let date = new Date().toLocaleTimeString()
function App() {
    const [timer, setThhimer] = useState(inishlTimers)
    const [divler, settimet] = useState(date)

    function settimer(e) {
        e.preventDefault();

        const text = e.target.children.text.value;
        const time = e.target.children.timerstext.value;
        const color = 'gray'

        setThhimer([...timer,{ text, time, color }])
        e.target.reset();
    }


    // setInterval(function () {
    //     date = new Date().toLocaleTimeString()
    //     settimet(date)
    // }, 500);


    return (
        <>
            <div className='divler'>
    
            </div>
            <form onSubmit={settimer}>
                <input type="text" id='text' name='text' />
                <input type="time" id='time' step='1' name='timerstext' />
                <button type='submit'>הוסף תזכורת</button>
            </form>
            <div>
                <Table array={timer} />
            </div>
        </>
    );
}

export default App;
