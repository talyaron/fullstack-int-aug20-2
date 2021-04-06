import React, {useEffect, useState} from 'react'
import './RandomUser.css';

function RandomUser(props){
    console.log(props)
    return (

        <div className='container'>
           <img id='img' src={props.img}/>
        <div className="box">
            
            <p>Name: <span id="username">{props.name}</span></p>
            <p>Last Name: <span id="lastname">{props.lastName}</span></p>
            <p>Location: <span id="locationuser">{props.locationUser}</span></p>
            <p>Phone: <span id="phone">{props.phone}</span></p>
            <p>Email: <span id="email">{props.email}</span></p>
        </div>
        <div id="button-background">
            <button onClick={props.onClick}>Generator Person</button>
        </div>
       
        </div>
    ) 
}

export default RandomUser