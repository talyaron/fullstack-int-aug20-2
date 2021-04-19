import './App.scss';
import { useDispatch , useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getJoke } from './Redux/actions/btns'

function App() {

  const dispatch = useDispatch();
  
  const joke = useSelector(state => state.btns.joke) || []
  
  useEffect(() => {
     dispatch(getJoke())
  },[] )

  // setTimeout(() => {
  //   console.log(joke);
  // }, 5000);

     console.log(joke);
  return (
    <div className="App">
        {
       
            joke.map(j=>(
              <button>{j}</button>
            ))
       
        }
    </div>
  );
}

export default App;
