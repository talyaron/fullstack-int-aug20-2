import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

//redux
import { fetchWords, addWord, removeWord } from "./redux/Actions/wordActions";


//components
import Spinner from './view/components/Spinner/Spinner'


function App() {
  const { words, loading, error, listWords } = useSelector(state => state.wordsReducer);
  { console.log(words) }
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWords());

  }, [])

  function handleDrop(e) {
    console.log(e)
  }

  function handleAddWord(word) {
    console.log(word)
    dispatch(addWord(word))
  }

  function handleRemoveWord(word){
    dispatch(removeWord(word))
  }

  return (
    <div className='app'>
      <button onClick={() => { dispatch(fetchWords()) }}>Add Words</button>

      {!loading ? words.map((word, i) => <h3 key={i} onClick={() => handleAddWord(word)} >{word}</h3>) : <Spinner />}
      <div className='target'
      >
        {listWords.map((word, i) => <div key={i} onClick={()=>handleRemoveWord(word)}>{word} </div>)}
      </div>
    </div>
  );
}

export default App;
