import { useState } from "react";
import "./App.css";


const Form = ({}) => {
  return (
    <>
      <form onSubmit={Submit}>
        <input type="text" name="text" placeholder="כתוב תזכורת" />
        <input type="time" step="1" name="time" />
        <button type="submit">אישור</button>
      </form>
      <div className="timersList"> {timer}</div>
    </>
  );
};

const Submit = (e) => {
  e.preventDefault();
  const [timersArea, setTimerArea] = useState([]);

  const time = e.target.children.time.value;
  const text = e.target.children.text.value;

  setTimerArea(() => {
    timersArea.push({ time: time, text: text });
  });
};

const timer = ({}) => {
  return (
    <div className="timerBox">
      <div className="timerTime">{}</div>
      <div className="timerText">{}</div>
    </div>
  );
};
export {timer};
export default Form;
