import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [time, setTime] = useState('');
  const [remainder, setRemainder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('please add a task');
      return;
    }

    onAdd({ text, time, remainder });
    setText('');
    setTime('');
    setRemainder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>משימה</label>
        <input
          type="text"
          placeholder="הוסף משימה"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>יום ושעה</label>
        <input
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label>הפעל תזכורת</label>
        <input
          type="checkbox"
          checked={remainder}
          value={remainder}
          onChange={(e) => setRemainder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="שמור" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
