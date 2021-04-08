import { useDispatch, useSelector } from 'react-redux';
import { addNumber, addOperator } from './redux/actions/displayActon';


const DeleteBtn = () =>{
    const dispatch = useDispatch();
const display = useSelector(state => state.windowReducer.number)

    const handleDelete = () => {
    console.log(display)
    let delLastSymbol = display.slice(0,-1)
    console.log(delLastSymbol)

       dispatch(addNumber(delLastSymbol));
      
    }
   

    return (
        <div>
              <button name='delete' onClick={handleDelete}>del</button>
        </div>
    )
}

export default DeleteBtn