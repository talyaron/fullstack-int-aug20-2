import React, {useState, useEffect} from 'react';


import './App.css';

let x = 6;

function newJoke (setJoke){
  console.log('new joke')
  fetch('https://api.chucknorris.io/jokes/random')
  .then(r=>r.json())
  .then(joke=>{setJoke(joke.value)})
}


function App() {


  const [counter, setCounter] = useState(0);
  const [joke, setJoke] = useState('')
  
  useEffect(()=>{

    // newJoke(setJoke);

  },[]);


  useEffect(()=>{
    if(counter !== 0){
      console.log('aaaaaaa')
      newJoke(setJoke);
    }
    
  },[counter])

  




  
 
  console.log('run');
  
  
  function handleCounter(){
    setCounter(counter+1)
  
  }


  return (
    <div className="App">
      <header className="App-header">
      
        <button onClick={handleCounter}>add</button>
        <p>Counter: {counter}</p>

        <h1>{joke}</h1>
      </header>
    </div>
  );
}

export default App;
