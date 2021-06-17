import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';

interface MyProps{
  hi:string | number,
  bye:string
}

const Box:FC<MyProps> = (props)=>{
  return (
    <p>{props.hi}</p>
  )
}

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Box hi='goooo' bye='dooooooo'/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;




