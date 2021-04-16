import { useDispatch, useSelector } from 'react-redux';
import { apiData, deleteFromData, getData, pokemonsDat, getId, addToTarget } from './redux/actions/getData';
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
    
    let idToTarget = useSelector(state => state.getDataReducer.id)
    console.log(idToTarget)

    let targetData = useSelector(state => state.getDataReducer.target)
    console.log(targetData)

    const handleGetData =(e) => {

      e.preventDefault()
      console.log(e)
      dispatch(getData())
    }

    const dragOverHandler =(e,  names) => {
        e.preventDefault()
        console.log(e.target)
        e.target.style.background = 'green'

    }
    const dragLeaveHandler =(e) => {
console.log(e)
e.target.style.background = 'white'
    }
    const dragStartHandler =(e) => {
        console.log(e)
        e.target.style.background = 'red'
        const id = e.target.id
        dispatch(getId(id))
     
    }
    const dragEndHandler =(e) => {
        console.log(e)
    }
    const dropHandler =(e,  box, names) => {
        e.preventDefault()
        console.log(e)
            let objToTarget = newData.find(obj => obj.id == idToTarget)
    console.log(objToTarget)
    dispatch(addToTarget(objToTarget))
        dispatch(deleteFromData(true))
        
    }
    


      return (
      


        <div className="App">
           <button onClick={handleGetData}>hellow</button>
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
 onDrop={(e) => dropHandler(e, names)}>{names.name}</div>)}
  
 </div>
 
<div className='box' onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragOverHandler(e)}><div className='names_wrap'>
    {targetData.map(names => <div className='names'>{names.name}</div>)}
    </div>
</div>

        </div>
       
      );
    }

    export default FirstPage
