import React from 'react'
import "./keybord.css";
window.addEventListener("keypress", event => {
  console.log(event)
  // do something
});
const KeyBord = () => {
  
  const handelClick = (e) =>{
    const key = e.target;
    console.log(key)
  }

    return (
        <span >
        <ul className="piano" >
          <li className="b">
            <div>c</div>
          </li>
          <li className="b">
            <div>d</div>
          </li>
          <li>
            <div>e</div>
          </li>
          <li className="b">
            <div>f</div>
          </li>
          <li className="b">
            <div>g</div>
          </li>
          <li className="b">
            <div>a</div>
          </li>
          <li>
            <div>b</div>
          </li>
          <li className="b">
            <div>c'</div>
          </li>
          <li className="b">
            <div>d'</div>
          </li>
          <li>
            <div>e'</div>
          </li>
          <li className="b">
            <div>f'</div>
          </li>
          <li className="b">
            <div>g'</div>
          </li>
          <li className="b">
            <div>a'</div>
          </li>
          <li>
            <div>b'</div>
          </li>
          <li className="b">
            <div>c''</div>
          </li>
        
          
        </ul>
      </span>
    )
}

export default KeyBord
