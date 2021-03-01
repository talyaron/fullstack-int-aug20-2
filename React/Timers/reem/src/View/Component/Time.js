import { createRef } from "react";
import React,{useState} from 'react'

function Time(props) {
  
    const [passed, setPassed] = useState(false)
   
    function checkIfPassed(newTime,reminderTime){
         
       
       if(newTime>reminderTime ){setPassed('red')};
        // (corentTime > reminderTime )?setPassed(true):setPassed(false);
        
      }
      setInterval(() => {
        let corentTime=new Date();
        let newTime = corentTime.getTime()
        
      
    checkIfPassed(newTime,props.info.timeInMili)

    },5000);
    return (
        <>
        
           <h1 style={{backgroundColor:passed}}>{props.info.Reminder} at {props.info.Time}
               </h1> 
        </>
    )
}

export default Time
