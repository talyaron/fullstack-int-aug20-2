import './Reminder.scss';
import React from 'react';

function Reminder(props) {
  return (
      <>
        <p key={props.info.key}>{props.info.reminderTime}</p>
        <p key={props.info.key}>{props.info.reminderName}</p>
      </>
  )
}

export default Reminder;
