import { useDispatch, useSelector } from 'react-redux';
import { addNumber, addOperator } from './redux/actions/displayActon';


const ClearBtn = () =>{
    const dispatch = useDispatch();
    const handleClear = () => {
        
        dispatch(addNumber('0'));
        dispatch(addOperator(null));
    }
   

    return (
        <div>
              <button name='clear' onClick={handleClear}>C</button>
        </div>
    )
}

export default ClearBtn