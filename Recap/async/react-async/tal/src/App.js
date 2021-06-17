import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { chackNorrisJoke } from './model/promises';

function App() {
  const [joke, setJoke] = useState('');
  const [lines, setLines] = useState([]);

  useEffect(() => {
    handleGetJoke();
  }, [])

  function handleGetJoke(){
    chackNorrisJoke().then(data => setJoke(data.value))
  }

  function handleText(e){
    const text = e.target.value;
    setLines(text.split('\n'))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
          <h3>{joke}</h3>
          <button onClick={handleGetJoke}>Give Me a New Joke</button>
          <textarea onKeyUp={handleText}></textarea>
          {lines.map((ln, i)=>{
            return <p key={i}>{ln}</p>
          })}
      </header>
    </div>
  );
}

export default App;
