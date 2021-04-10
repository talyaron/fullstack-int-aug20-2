
import './App.css';
import {useEffect} from 'react'

function App() {
  const axios = require('axios');
useEffect(() => {
  return(dispatch) => {

 
  axios.get('https://api.chucknorris.io/jokes/random')
    .then(function (response) {

      console.log(response);
    })
    .catch(function (error) {
      
      console.log(error);
    })
    .then(function () {
    
    });
  }
}, )
  return (
    <div className="App">
     hcfgvvv
    </div>
  );
}

export default App;
