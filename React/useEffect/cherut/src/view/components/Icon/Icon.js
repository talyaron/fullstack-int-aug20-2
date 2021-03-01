import './Icon.scss';
import React from 'react';

function Icon({onMouseEnter,icon}) {
  return (
      <div className='icon' onMouseEnter={onMouseEnter} >{icon}</div>
  )
}
  
export default Icon;
