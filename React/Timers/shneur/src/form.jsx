import { useState } from "react";
import "./App.css";

const Form = ({}) => {
  const [timersArea, setTimerArea] = useState([]);
  const submit = (e) => {
    e.preventDefault();
    const time = e.target.children.time.value;
    const text = e.target.children.text.value;
    let theTimer = { time: time, text: text };

    setTimerArea(timersArea.push({ theTimer }));
    console.log(timersArea);
  };
  return (
    <>
      <form onSubmit={submit}>
        <input type="text" name="text" placeholder="כתוב תזכורת" />
        <input type="time" step="1" name="time" />
        <button type="submit">אישור</button>
      </form>
      <div className="timersList"> {timer}</div>
    </>
  );
};

const timer = ({}) => {
  return (
    <div className="timerBox">
      <div className="timerTime">{}</div>
      <div className="timerText">{}</div>
    </div>
  );
};
export default Form;
