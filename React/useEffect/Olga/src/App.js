import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import RandomUser from './components/RandomUser';





function App() {

  const [randomUser, setRandomUser] = useState('')


  useEffect(()=>{
   
    getUser();
    
    
  },[])

  function getUser (){
   
    fetch('https://randomuser.me/api/')
    .then(r=>r.json())
    .then(user=>{
      console.log(user.results)
      const newRandomUser = user.results.map(newUser =>{
        return (
          <RandomUser 
          key={newUser.id}
          img={newUser.picture.thumbnail}
          name={newUser.name.first}
          lastName={newUser.name.last}
          locationUser={newUser.location.street.number + ' ' + newUser.location.street.name}
          phone = {newUser.phone}
          email = {newUser.email}
          onClick={() => getUser()}/>
       
          
        )
        
      })
      setRandomUser(newRandomUser)
     })
    
  }


  
  return (
    <div className="App">
    
        <div>
          {randomUser}
          
        
        </div>
     
    </div>
  );

}

export default App;
