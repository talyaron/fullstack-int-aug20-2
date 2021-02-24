import './Icon.scss';
import React from 'react';

function Icon(props) {
  return (
      <div className='icon' onMouseOver={props.onMouseEnter}>{props.icon}</div>
  )
}
  
export default Icon;
