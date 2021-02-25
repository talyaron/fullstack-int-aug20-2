import React, {useState, useEffect} from 'react';
import './App.scss';
import icons from './icons/icons'

// components
import Icon from './view/components/Icon/Icon'

function App() {

  const [user, setuser] = useState()
  const [userImg, setuserImg] = useState();
  const [infoTitle, setinfoTitle] = useState('hjhc')
  const [infoDetails, setinfoDetails] = useState('jhcj')

  useEffect(()  => {
    fetchMyAPI()
  }, [])
  
  function handleGetUser(){
    fetchMyAPI()
  }

  async function fetchMyAPI() {
    let response = await fetch('https://randomuser.me/api/')
    response = await response.json()
    setuser(response)
  }

  useEffect(()  => {
    if(user){
      setuserImg(user.results[0].picture.large)
    }
    // user?  setuserImg(user.results[0].picture.large): null;
  }, [user])

  function hadleChangeDetails(e){
    let infoCategory = e.target.id;
    console.log({infoCategory})
    let userFirstName = (user.results[0].name.first)
    let userLastName = (user.results[0].name.last)
    let userEmail = (user.results[0].email)
    let userAge = (user.results[0].registered.age)
    let userCountry = (user.results[0].location.country)
    let userCity = (user.results[0].location.city)
    let userPhone = (user.results[0].phone)
    
    switch(infoCategory) {
      case 'name':
       setinfoTitle(`My name is`)
       setinfoDetails(`${userFirstName} ${userLastName}`)
        break;
      case 'email':
        setinfoTitle(`My email is`)
        setinfoDetails(userEmail)
        break;
      case 'age':
        setinfoTitle(`My age is`)
        setinfoDetails(userAge)
        break;
      case 'address':
        setinfoTitle(`My address is`)
        setinfoDetails(`${userCity}, ${userCountry}`)
        break;
      case 'phone':
        setinfoTitle(`My phone number is`)
        setinfoDetails(userPhone)
        break;
      default:
        console.log('default')
    }

   
  }
  return (
    <div className="App">
      <div className='background'></div>
      <div className='card'>
        <div className='card__header'>
          <img src={userImg} alt='user img'></img>
        </div>
        <div className='card__info'>
          <h3 className='card__infoTitle'>{infoTitle}</h3>
          <h1 className='card__infoDetails'>{infoDetails}</h1>
        </div>
        <div className='card__actions'>
          <div className='card__actionsIcons'>
            {
              icons.map((icon,index)=>{
                return(
                  <div key={index}>
                        <Icon icon={icon} onMouseEnter={hadleChangeDetails}></Icon>
                  </div>
              
                )
              })
            
            }
          </div>
          <button className='card__actionsButton' onClick={handleGetUser}>new random user</button>
        </div>
      </div>
    </div>
  );
}

export default App;

