import { useSelector, useDispatch } from "react-redux";
import { fetchWords } from "./redux/Actions/index";
import "./App.css";
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  const { words, loading,error } = useSelector((state) => ({ ...state.data }));

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(fetchWords())}>Add Words</button>
      {console.log(words)}
      {!loading ? words.map((word) => <h3>{word}</h3>) : <h3>Loading...</h3>}

    </div>
  );
}

export default App;
