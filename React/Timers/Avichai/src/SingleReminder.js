import './index.css';

function SingleReminder(props) {

    const {reminderText,reminderTime} = props.info

    return(
        <div className='singleReminder' >
            <span>{reminderText}</span>
            <span>{reminderTime}</span>
        </div>
    )
}

export default SingleReminder;
