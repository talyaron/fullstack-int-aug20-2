import './Reminder.scss';
import React from 'react';

function Reminder(props) {
  return (
      <>
        <p key={props.info.key}>{props.info.reminderName} at {props.info.reminderTime}
        {/* <input id='isComplited' type='checkbox' value='check'/><label for="isComplited">check</label> */}
        </p>
      </>
  )
}

export default Reminder;
