import { useDispatch, useSelector } from 'react-redux';
import { getData, pokemonsData } from './redux/actions/getData';
import './FirstPage.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory
} from "react-router-dom";
import pokemonNames from './pokemonNames';
import RenderImages from './RenderImages';

const FirstPage = () => {
    const dispatch = useDispatch();

    let data = useSelector(state => state.getDataReducer)
    
    console.log(data)
    
    let newData = data.data
    console.log(newData)
    
    const handleGetData =(e) => {

      e.preventDefault()
  
      dispatch(getData())
    }

    const dragOverHandler =(e,  names) => {
        e.preventDefault()
    }
    const dragLeaveHandler =(e) => {

    }
    const dragStartHandler =(e) => {

    }
    const dragEndHandler =(e) => {

    }
    const dropHandler =(e,  names) => {
        e.preventDefault()
    }
    
     if(data.length == 0) {
         return (
             <div>
            <button onClick={handleGetData}>hellow</button>
           

            </div>
         )
     } 

      return (
      


        <div className="App">
            <button onClick={handleGetData}>HI</button>
            <div className='names_wrap'>
         
 {newData.map(names =><div 
 key={names.id} 
 id={names.id} 
 className='names'
 draggable={true}
 onDragOver={(e) => dragOverHandler(e, names)}
 onDragLeave={(e) => dragLeaveHandler(e)}
 onDragStart={(e) => dragStartHandler(e)}
 onDragEnd={(e) => dragEndHandler(e)}
 onDrop={(e) => dropHandler(e)}>{names.name}</div>)}
  
 </div>
        </div>
       
      );
    }

    export default FirstPage
